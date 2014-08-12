
    //print """
    console.log("-------------------------------------\nLiteScript-translated Uglify version\n-------------------------------------\njs code generated from UglifyLS LiteScript sources\ncwd: " + (process.cwd()) + "\n" + process.argv);
        //-------------------------------------
        //LiteScript-translated Uglify version
        //-------------------------------------
        //js code generated from UglifyLS LiteScript sources
        //cwd: #{process.cwd()}
        //#{process.argv}
    //"""

    //import fs, TestOut
    var fs = require('fs');
    var TestOut = require('./TestOut.js');

    //import Parser
    var Parser = require('./Parser.js');

    //var file = process.argv[2] or "jquery-underscore-angular.js"
    var file = process.argv[2] || "jquery-underscore-angular.js";

    //var outPath = "out/lite"
    var outPath = "out/lite";

    //console.time('all')
    console.time('all');

    //var toplevel = null;
    var toplevel = null;
    //var code:string = fs.readFileSync(file, "utf8")
    var code = fs.readFileSync(file, "utf8");

    //console.log("parse " + code.length+ " chars js source");
    console.log("parse " + code.length + " chars js source");

    //console.time 'parse'
    console.time('parse');

    //toplevel = Parser.PRS.parse(code, {
                                //filename: file
    toplevel = Parser.PRS.parse(code, {filename: file});
                                //});

    //console.timeEnd 'parse'
    console.timeEnd('parse');

    //process.exit 0
    process.exit(0);


    //var result:string = JSON.stringify(toplevel,null,2)

    //var sortedResult = TestOut.mkSorted("toplevel", toplevel)
    var sortedResult = TestOut.mkSorted("toplevel", toplevel);

    //print sortedResult.length
    console.log(sortedResult.length);

    //TestOut.saveFiles outPath, sortedResult
    TestOut.saveFiles(outPath, sortedResult);

    //console.timeEnd 'all'
    console.timeEnd('all');
