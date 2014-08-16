#include "Test3.h"
//-------------------------
//Module Test3
//-------------------------
//-------------------------
//NAMESPACE Test3
//-------------------------
var Test3_parseFn;
var Test3_file;
var Test3_outPath;
var Test3_toplevel;
var Test3_code;
var Test3_sortedResult;
    //#define USE_MAPS

    //import fs, TestOut
    

    //import ParserWithIterable
    
//------------------
void Test3__namespaceInit(void){
    //print _concatAny("-------------------------------------\nLiteScript-translated Uglify version\n-------------------------------------\nc-code (standalone exe) generated from UglifyLS LiteScript sources\nFri Aug 15 2014 23:55:29 GMT-0300 (ART)\ncwd: ",(process.cwd()))
    print(1,(any_arr){_concatAny(2,any_LTR("-------------------------------------\nLiteScript-translated Uglify version\n-------------------------------------\nc-code (standalone exe) generated from UglifyLS LiteScript sources\nFri Aug 15 2014 23:55:29 GMT-0300 (ART)\ncwd: "),(process_cwd(undefined,0,NULL)))});
    Test3_parseFn = any_func(ParserWithIterable_PRS_parse);
    var ___or1=undefined;
    Test3_file = (_anyToBool(___or1=__call(tryGet_,process_argv,1,(any_arr){any_number(1)}))? ___or1 : any_LTR("jquery-underscore-angular.js"));
    Test3_outPath = any_LTR("out/lite3");

    //console.time('all')
    console_time(undefined,1,(any_arr){any_LTR("all")});
    Test3_toplevel = null;
    Test3_code = fs_readFileSync(undefined,2,(any_arr){Test3_file,any_LTR("utf8")});

    //code = code.repeat(5)

    //print code.length,"chars"
    print(2,(any_arr){any_number(_length(Test3_code)), any_LTR("chars")});

    //console.time 'parse'
    console_time(undefined,1,(any_arr){any_LTR("parse")});


    //toplevel = parseFn.call(undefined, code, {
                             //filename: file
                             //});
    Test3_toplevel = __apply(Test3_parseFn,3,(any_arr){undefined,Test3_code,new(Map,1,(any_arr){
                             _newPair("filename",Test3_file)
    })
    });

    //console.timeEnd('parse');
    console_timeEnd(undefined,1,(any_arr){any_LTR("parse")});

    //process.exit 0
    process_exit(undefined,1,(any_arr){any_number(0)});
    Test3_sortedResult = TestOut_mkSorted(undefined,2,(any_arr){any_LTR("toplevel"),Test3_toplevel});

    //print sortedResult.length
    print(1,(any_arr){any_number(_length(Test3_sortedResult))});

    //TestOut.saveFiles outPath, sortedResult
    TestOut_saveFiles(undefined,2,(any_arr){Test3_outPath,Test3_sortedResult});

    //console.timeEnd 'all'
    console_timeEnd(undefined,1,(any_arr){any_LTR("all")});
};


//-------------------------
void Test3__moduleInit(void){
    Test3__namespaceInit();
};
