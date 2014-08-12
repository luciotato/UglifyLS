
    console.log("---------------------");
    console.log("--UglifyJS ORIGINAL--");
    console.log("---------------------");

    var UglifyJS = require("./tools/node");

    var fs = require('fs');

    var file = process.argv[2] || "jquery-underscore-angular.js";
    var outPath = "out/orig";

    var indent = "";

    console.time('all')
    
    var toplevel = null;
    var code = fs.readFileSync(file, "utf8");

    //code = code+code+code+code+code;

    console.log("parse " + code.length+ " chars js source");
    
    console.time('UglifyJS.parse')
    
    toplevel = UglifyJS.parse(code, {
        filename: file
    });

    console.timeEnd('UglifyJS.parse');

    process.exit(0);

    var TestOut = require('./lib/generated/js/TestOut.js');
    var sortedResult = TestOut.mkSorted("toplevel", toplevel);

    console.log(sortedResult.length);

    TestOut.saveFiles(outPath, sortedResult);

    console.timeEnd('all')

