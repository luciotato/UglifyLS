
    print """
        -------------------------------------
        LiteScript-translated Uglify version
        -------------------------------------
        c-code (standalone exe) generated from UglifyLS LiteScript sources
        __DATE__ __TIME__
        cwd: #{process.cwd()}
    """
    #define USE_MAPS

    import fs, TestOut

    import ParserWithIterable
    var parseFn=ParserWithIterable.PRS.parse

    var file = process.argv.tryGet(1) or "jquery-underscore-angular.js"

    var outPath = "out/lite3"

    console.time('all')
    
    var toplevel = null;
    var code:string = fs.readFileSync(file, "utf8")

    //code = code.repeat(5)

    print code.length,"chars"
    
    console.time 'parse'


    toplevel = parseFn.call(undefined, code, {
                             filename: file
                             });

    console.timeEnd('parse');

    process.exit 0 

    var sortedResult = TestOut.mkSorted("toplevel", toplevel)

    print sortedResult.length

    TestOut.saveFiles outPath, sortedResult

    console.timeEnd 'all'

