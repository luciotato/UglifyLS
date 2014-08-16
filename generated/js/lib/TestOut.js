    //import fs, mkPath
    var fs = require('fs');
    var mkPath = require('./mkPath.js');

    //    public function mkSorted(name:string, obj) returns array of string
    function mkSorted(name, obj){

        //var result:array=[]
        var result = [];
        //recursive_mkSorted(name,obj,result)
        recursive_mkSorted(name, obj, result);
        //return result
        return result;
    }
    // export
    module.exports.mkSorted = mkSorted;


    //var typeName = [
            //"keyword"
            //"operator"
            //"punc"
            //"eof"
            //"comment2"
            //"5","6","7" //Not used
            //"atom"  // from here down: ATOMIC_START_TOKEN: |atom|name|num|string|regexp|
            //"name"
            //"num"
            //"string"
            //"regexp"
            //]
    var typeName = ["keyword", "operator", "punc", "eof", "comment2", "5", "6", "7", "atom", "name", "num", "string", "regexp"];

    //    public function saveFiles(outPath, result:array)
    function saveFiles(outPath, result){

        //mkPath.create outPath
        mkPath.create(outPath);

        //var maxFiles = 10
        var maxFiles = 10;

        //var startFile=0
        var startFile = 0;
        //var sli=10000
        var sli = 10000;
        //slice to be able to use Kompare
        //while startFile<maxFiles and startFile*sli<result.length
        while(startFile < maxFiles && startFile * sli < result.length){
            //fs.writeFileSync("#{outPath}/#{startFile}", result.slice(startFile*sli,startFile*sli+sli).join("\n"))
            fs.writeFileSync('' + outPath + "/" + startFile, result.slice(startFile * sli, startFile * sli + sli).join("\n"));
            //startFile++
            startFile++;
        };// end loop

        //print "output at", outPath
        console.log("output at", outPath);
    }
    // export
    module.exports.saveFiles = saveFiles;


//private module vars

    //var indent=""
    var indent = "";

    //    helper function recursive_mkSorted(name:string, value, result:array)
    function recursive_mkSorted(name, value, result){

//hacks, skip undefined and property "file"

        //if value is undefined or value is null, return
        if (value === undefined || value === null) {return};
        //if name.slice(-4) is "file", return
        //if name is "file", return
        if (name === "file") {return};

        //indent &= "  "
        indent += "  ";

        //var title = name
        var title = name;
        //if title.slice(-3) is "end", title &= "pos"

//hack: names changed because LS reserved words: end, property & properties
//hack: LS-compile-to-c use codes instead of strings for token types

        //case title
        
            //when "end"  : title = "endpos"
        if (
           (title=="end")
        ){title = "endpos"
        }
            //when "prop" : title = "property"
        else if (
           (title=="prop")
        ){title = "property"
        }
            //when "props": title = "properties"
        else if (
           (title=="props")
        ){title = "properties"
        }
            //when "type" :
        else if (
           (title=="type")
        ){
                //if value instance of Number
                if (value instanceof Number) {
                
                    //value = typeName.tryGet(value)
                    value = typeName.tryGet(value);
                };
        
        };

        //var resultLine = indent & title & ":"
        var resultLine = indent + title + ":";

        //if Array.isArray(value)
        if (Array.isArray(value)) {
        

            //declare value:Array
            

            //resultLine &= "["
            resultLine += "[";

            //if value.length is 0
            if (value.length === 0) {
            
                //resultLine &= "]"
                resultLine += "]";
                //result.push resultLine
                result.push(resultLine);
            }
            //if value.length is 0
            
            else {
                //result.push resultLine
                result.push(resultLine);
                //declare value:array
                
                //for each inx,item in value
                for( var inx=0,item ; inx<value.length ; inx++){item=value[inx];
                
                    //outSorted "#{title}[#{inx}]", item, result
                    //recursive_mkSorted inx, item, result
                    recursive_mkSorted(inx, item, result);
                };// end for each in value

                //result.push "#{indent}]//#{title}"
                result.push('' + indent + "]//" + title);
            };
        }
        //if Array.isArray(value)
        
        else if (value && value.constructor.name === "RegExp") {
        
            //ifdef TARGET_C
            //resultLine &= " " & JSON.stringify(value.tryGetProperty("source"))
            //else
            //resultLine &= " " & JSON.stringify(value["source"])
            resultLine += " " + JSON.stringify(value["source"]);
            //endif
            //result.push resultLine
            result.push(resultLine);
        }
        //else if value and value.constructor.name is "RegExp"
        
        else if (typeof value === 'object') {
        

            //if value and value.constructor, resultLine &= ":#{value.constructor.name}={"

            //result.push resultLine
            result.push(resultLine);

            //var arr= [] //Object.keys(value)
            var arr = [];
            //for each own property propName,propValue in value
            var propValue=undefined;
            for ( var propName in value)if (value.hasOwnProperty(propName)){propValue=value[propName];
                {
                //arr.push propName
                arr.push(propName);
                }
                
                }// end for each property

            //arr.sort
            arr.sort();

            //for each propName in arr
            for( var propName__inx=0,propName ; propName__inx<arr.length ; propName__inx++){propName=arr[propName__inx];
            
                //outSorted "#{title}.#{propName}", value[propName], result
                //ifdef TARGET_C
                //recursive_mkSorted propName, value.tryGetProperty(propName), result
                //else
                //recursive_mkSorted propName, value[propName], result
                recursive_mkSorted(propName, value[propName], result);
            };// end for each in arr
                //endif

            //result.push "#{indent}}//#{title}"
            result.push('' + indent + "}//" + title);
        }
        //else if typeof value is 'object'
        
        else {

            //resultLine &= " " & JSON.stringify(value)
            resultLine += " " + JSON.stringify(value);
            //result.push resultLine
            result.push(resultLine);
        };


        //indent=indent.slice(0,-2)
        indent = indent.slice(0, -2);
    };
