
    import fs, mkPath

### public function mkSorted(name:string, obj) returns array of string

        var result:array=[] 
        recursive_mkSorted(name,obj,result)
        return result


    var typeName = [
            "keyword"
            "operator"
            "punc"
            "eof"
            "comment2"
            "5","6","7" //Not used
            "atom"  // from here down: ATOMIC_START_TOKEN: |atom|name|num|string|regexp|
            "name"
            "num"
            "string"
            "regexp"
            ]

### public function saveFiles(outPath, result:array)

        mkPath.create outPath

        var maxFiles = 10

        var startFile=0
        var sli=10000
        //slice to be able to use Kompare
        while startFile<maxFiles and startFile*sli<result.length
            fs.writeFileSync("#{outPath}/#{startFile}", result.slice(startFile*sli,startFile*sli+sli).join("\n"))
            startFile++
    
        print "output at", outPath


private module vars

    var indent=""

### helper function recursive_mkSorted(name:string, value, result:array)

hacks, skip undefined and property "file"

        if value is undefined or value is null, return
        //if name.slice(-4) is "file", return
        if name is "file", return

        indent &= "  "

        var title = name
        //if title.slice(-3) is "end", title &= "pos"

hack: names changed because LS reserved words: end, property & properties
hack: LS-compile-to-c use codes instead of strings for token types

        case title 
            when "end"  : title = "endpos"
            when "prop" : title = "property"
            when "props": title = "properties"
            when "type" : 
                if value instance of Number
                    value = typeName.tryGet(value)

        var resultLine = indent & title & ":"

        if Array.isArray(value)

            declare value:Array

            resultLine &= "["

            if value.length is 0
                resultLine &= "]"
                result.push resultLine

            else
                result.push resultLine
                declare value:array
                for each inx,item in value
                    //outSorted "#{title}[#{inx}]", item, result
                    recursive_mkSorted inx, item, result

                result.push "#{indent}]//#{title}"

        else if value and value.constructor.name is "RegExp"
            #ifdef TARGET_C
            resultLine &= " " & JSON.stringify(value.tryGetProperty("source"))
            #else
            resultLine &= " " & JSON.stringify(value["source"])
            #endif
            result.push resultLine

        else if typeof value is 'object'

            //if value and value.constructor, resultLine &= ":#{value.constructor.name}={"

            result.push resultLine

            var arr= [] //Object.keys(value)
            for each own property propName,propValue in value 
                arr.push propName

            arr.sort

            for each propName in arr
                //outSorted "#{title}.#{propName}", value[propName], result
                #ifdef TARGET_C
                recursive_mkSorted propName, value.tryGetProperty(propName), result
                #else
                recursive_mkSorted propName, value[propName], result
                #endif

            result.push "#{indent}}//#{title}"

        else

            resultLine &= " " & JSON.stringify(value)
            result.push resultLine
    

        indent=indent.slice(0,-2)


