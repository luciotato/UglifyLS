#include "_dispatcher.h"
// methods
static str _ADD_VERBS[] = { //string name for each distinct method name
    "isDirectory"
,     "isFile"
,     "clone"
,     "to_array"
,     "add"
,     "initialize"
,     "getValue"
,     "_visit"
,     "parent"
,     "self"
,     "find_parent"
,     "has_directive"
,     "in_boolean_context"
,     "loopcontrol_target"
};
// propery names
static str _ADD_THINGS[] = { //string name for each distinct property name
    "mtime"
,     "mode"
,     "line"
,     "col"
,     "pos"
,     "strict"
,     "filename"
,     "toplevel"
,     "expression"
,     "html5_comments"
,     "file"
,     "comments_before"
,     "nlb"
,     "endpos"
,     "type"
,     "start"
,     "scope"
,     "body"
,     "label"
,     "condition"
,     "step"
,     "init"
,     "object"
,     "cname"
,     "enclosed"
,     "parent_scope"
,     "uses_eval"
,     "uses_with"
,     "functions"
,     "variables"
,     "directives"
,     "globals"
,     "uses_arguments"
,     "argnames"
,     "alternative"
,     "bfinally"
,     "bcatch"
,     "argname"
,     "definitions"
,     "args"
,     "cdr"
,     "car"
,     "prop"
,     "operator"
,     "right"
,     "left"
,     "consequent"
,     "elements"
,     "props"
,     "thedef"
,     "references"
,     "visit"
};



//-------------------------------
int main(int argc, char** argv) {
    LiteC_init( 91, argc,argv);
    LiteC_addMethodSymbols( 14, _ADD_VERBS);
    LiteC_addPropSymbols( 52, _ADD_THINGS);
    fs__moduleInit(); // level:4.2 order: 2
    path__moduleInit(); // level:4. order: 5
    mkPath__moduleInit(); // level:3. order: 4
    Utils__moduleInit(); // level:3. order: 7
    AST__moduleInit(); // level:3. order: 8
    TestOut__moduleInit(); // level:2. order: 3
    ParserWithIterable__moduleInit(); // level:2. order: 6


    Test3__moduleInit();


    LiteC_finish();
} //end main
