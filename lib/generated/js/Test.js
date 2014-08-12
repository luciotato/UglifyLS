
    //print "LiteScript-translated Uglify version"
    console.log("LiteScript-translated Uglify version");

    //ifdef TARGET_C
    //print "standalone native exe"
    //else
    //print "generated-js code"
    console.log("generated-js code");
    //endif

    //print "cwd:", process.cwd()
    console.log("cwd:", process.cwd());

    //import fs 
    var fs = require('fs');

    //import Parser
    var Parser = require('./Parser.js');

    //var indent=""
    var indent = "";

    //var file = "jquery-1.11.1.js"
    var file = "jquery-1.11.1.js";

    //var outFile = "out/lite"
    var outFile = "out/lite";

    //console.time('all')
    console.time('all');

    //var toplevel = null;
    var toplevel = null;
    //var code = fs.readFileSync(file, "utf8")
    var code = fs.readFileSync(file, "utf8");

    //console.time 'parse'
    console.time('parse');

    //toplevel = Parser.PRS.parse(code, {
                                //filename: file
    toplevel = Parser.PRS.parse(code, {filename: file});
                                //});

    //console.timeEnd('parse');
    console.timeEnd('parse');

    //var result:string = JSON.stringify(toplevel,null,2)

    //var sortedResult:array=[] 
    var sortedResult = [];
    //outSorted "toplevel", toplevel, sortedResult
    outSorted("toplevel", toplevel, sortedResult);

    //print sortedResult.length
    console.log(sortedResult.length);

    //var startFile=0
    var startFile = 0;
    //var sli=10000
    var sli = 10000;
    //slice to be able to use Kompare
    //while startFile*sli<sortedResult.length
    while(startFile * sli < sortedResult.length){
    //while startFile<2
        //fs.writeFileSync("#{outFile}/#{startFile}", sortedResult.slice(startFile*sli,startFile*sli+sli).join("\n"))
        fs.writeFileSync('' + outFile + "/" + startFile, sortedResult.slice(startFile * sli, startFile * sli + sli).join("\n"));
        //startFile++
        startFile++;
    };// end loop

    //console.timeEnd 'all'
    console.timeEnd('all');

//--------------------------


    //function outSorted(name:string, value, result:array)
    function outSorted(name, value, result){

//hacks

        //if value is undefined, return
        if (value === undefined) {return};
        //if name.slice(-4) is "file", return
        //if name is "file", return
        if (name === "file") {return};

        //indent &= "  "
        indent += "  ";

        //var title = name
        var title = name;
        //if title.slice(-3) is "end", title &= "pos"
        //if title is "end", title &= "pos"
        if (title === "end") {title += "pos"};

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
            else {

            //else
                //result.push resultLine
                result.push(resultLine);
                //declare value:array
                
                //for each inx,item in value
                for( var inx=0,item ; inx<value.length ; inx++){item=value[inx];
                
                    //outSorted "#{title}[#{inx}]", item, result
                    //outSorted inx, item, result
                    outSorted(inx, item, result);
                };// end for each in value

                //result.push "#{indent}]//#{title}"
                result.push('' + indent + "]//" + title);
            };
        }
        else if (typeof value === 'object') {

        //else if typeof value is 'object'

            //if value and value.constructor, resultLine &= ":#{value.constructor.name}={"

            //result.push resultLine
            result.push(resultLine);

            //var arr=[]
            var arr = [];
            //for each property propName,propValue in value 
            var propValue=undefined;
            for ( var propName in value){propValue=value[propName];
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
                //outSorted propName, value[propName], result
                outSorted(propName, value[propName], result);
            };// end for each in arr

            //result.push "#{indent}}//#{title}"
            result.push('' + indent + "}//" + title);
        }
        else {

        //else

            //resultLine &= " " & JSON.stringify(value)
            resultLine += " " + JSON.stringify(value);
            //result.push resultLine
            result.push(resultLine);
        };


        //indent=indent.slice(0,-2)
        indent = indent.slice(0, -2);
    };



