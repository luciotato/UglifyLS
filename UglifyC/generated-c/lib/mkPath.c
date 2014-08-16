#include "mkPath.h"
//-------------------------
//Module mkPath
//-------------------------
//-------------------------
//NAMESPACE mkPath
//-------------------------
any mkPath_toFile(DEFAULT_ARGUMENTS); //forward declare
any mkPath_create(DEFAULT_ARGUMENTS); //forward declare
any mkPath_dirExists(DEFAULT_ARGUMENTS); //forward declare
//=============

    //import fs, path
    

    //    export function toFile(filename, mode)
    any mkPath_toFile(DEFAULT_ARGUMENTS){
        // define named params
        var filename = argc>0? arguments[0] : undefined;
        var mode = argc>1? arguments[1] : undefined;
        //---------
//Create a path to a file

        //create path.dirname(filename), mode
        mkPath_create(undefined,2,(any_arr){path_dirname(undefined,1,(any_arr){filename}),mode});
        
    return undefined;
    }


    //    export function create (dirPath, mode)
    any mkPath_create(DEFAULT_ARGUMENTS){
        // define named params
        var dirPath = argc>0? arguments[0] : undefined;
        var mode = argc>1? arguments[1] : undefined;
        //---------
//Make sure a path exists - Recursive

        //if dirExists(dirPath), return; //ok! dir exists
        if (_anyToBool(mkPath_dirExists(undefined,1,(any_arr){dirPath}))) {return undefined;};

//else... recursive:
//try a folder up, until a dir is found (or an error thrown)

        //create path.dirname(dirPath), mode
        mkPath_create(undefined,2,(any_arr){path_dirname(undefined,1,(any_arr){dirPath}),mode});

//ok, found parent dir! - make the children dir

        //fs.mkdirSync dirPath, mode
        fs_mkdirSync(undefined,2,(any_arr){dirPath,mode});

//return into recursion, creating children subdirs in reverse order (of recursion)

        //return
        return undefined;
        
    return undefined;
    }


    //    helper function dirExists(dirPath)
    any mkPath_dirExists(DEFAULT_ARGUMENTS){
        // define named params
        var dirPath = argc>0? arguments[0] : undefined;
        //---------
         try{

        //if fs.statSync(dirPath).isDirectory()
        if (_anyToBool(__call(isDirectory_,fs_statSync(undefined,1,(any_arr){dirPath}),0,NULL)))  {
        
            //return true //ok! exists and is a directory
            {e4c_exitTry(1);return true;};
            
        }
        //else
        //else
        
        else {
            //throw new Error('#{dirPath} exists but IT IS NOT a directory')
            throw(new(Error,1,(any_arr){_concatAny(2,dirPath,any_LTR(" exists but IT IS NOT a directory"))}));
            
        };

        //exception err
        
        }catch(err){

            //if dir does not exists, return false
            //if err.code is 'ENOENT', return false
            if (__is(code__(err),any_LTR("ENOENT"))) {{e4c_exitTry(1);return false;};};
            //throw err //another error
            throw(err);
            
        };
        
    return undefined;
    }
//------------------
void mkPath__namespaceInit(void){
};


//-------------------------
void mkPath__moduleInit(void){
    mkPath__namespaceInit();
};
