
    print """
        -------------------------------------
        LiteScript-translated Uglify version
        -------------------------------------
        js code generated from UglifyLS LiteScript sources
        cwd: #{process.cwd()}
        #{process.argv}
    """

    import fs, TestOut

    import Parser

    var file = process.argv[2] or "jquery-underscore-angular.js"

    var outPath = "out/lite"

    console.time('all')
    
    var toplevel = null;
    var code:string = fs.readFileSync(file, "utf8")

    console.log("parse " + code.length+ " chars js source");

    console.time 'parse'
    
    toplevel = Parser.PRS.parse(code, {
                                filename: file
                                });

    console.timeEnd 'parse'

    process.exit 0


    //var result:string = JSON.stringify(toplevel,null,2)

    var sortedResult = TestOut.mkSorted("toplevel", toplevel)

    print sortedResult.length

    TestOut.saveFiles outPath, sortedResult

    console.timeEnd 'all'

