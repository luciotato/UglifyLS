
    //print "LiteScript-translated Uglify version - with Iterable - compiled:__DATE__ __TIME__"
    console.log("LiteScript-translated Uglify version - with Iterable - compiled:Sun Aug 10 2014 00:40:53 GMT-0300 (ART)");

    //#define USE_MAPS


    //ifdef TARGET_C
    //print "standalone native exe"
    //else
    //print "generated-js code"
    console.log("generated-js code");
    //endif

    //print "cwd:", process.cwd()
    console.log("cwd:", process.cwd());

    //import fs, TestOut
    var fs = require('fs');
    var TestOut = require('./TestOut.js');

    //import ParserWithIterable
    var ParserWithIterable = require('./ParserWithIterable.js');
    //var parseFn=ParserWithIterable.PRS.parse
    var parseFn = ParserWithIterable.PRS.parse;

    //var file = "jquery-1.11.1.js"
    var file = "jquery-1.11.1.js";

    //var outPath = "out/lite3"
    var outPath = "out/lite3";

    //console.time('all')
    console.time('all');

    //var toplevel = null;
    var toplevel = null;
    //var code = fs.readFileSync(file, "utf8")
    var code = fs.readFileSync(file, "utf8");

    //console.time 'parse'
    console.time('parse');


    //toplevel = parseFn.call(undefined, code, {
                             //filename: file
    toplevel = parseFn.call(undefined, code, {filename: file});
                             //});

    //console.timeEnd('parse');
    console.timeEnd('parse');

    //var result:string = JSON.stringify(toplevel,null,2)

    //var sortedResult = TestOut.mkSorted("toplevel", toplevel)
    var sortedResult = TestOut.mkSorted("toplevel", toplevel);

    //print sortedResult.length
    console.log(sortedResult.length);

    //TestOut.saveFiles outPath, sortedResult
    TestOut.saveFiles(outPath, sortedResult);

    //console.timeEnd 'all'
    console.timeEnd('all');



