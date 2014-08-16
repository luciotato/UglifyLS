#ifndef _DISPATCHER_C__H
#define _DISPATCHER_C__H
#include "LiteC-core.h"
// core support and defined classes init
extern void __declareClasses();
// methods
enum _VERBS { //a symbol for each distinct method name
    isDirectory_ = -_CORE_METHODS_MAX-14,
    isFile_,
    clone_,
    to_array_,
    add_,
    initialize_,
    getValue_,
    _visit_,
    parent_,
    self_,
    find_parent_,
    has_directive_,
    in_boolean_context_,
    loopcontrol_target_,
_LAST_VERB};
// property names
enum _THINGS { //a symbol for each distinct property name
    mtime_= _CORE_PROPS_LENGTH,
    mode_,
    line_,
    col_,
    pos_,
    strict_,
    filename_,
    toplevel_,
    expression_,
    html5_comments_,
    file_,
    comments_before_,
    nlb_,
    endpos_,
    type_,
    start_,
    scope_,
    body_,
    label_,
    condition_,
    step_,
    init_,
    object_,
    cname_,
    enclosed_,
    parent_scope_,
    uses_eval_,
    uses_with_,
    functions_,
    variables_,
    directives_,
    globals_,
    uses_arguments_,
    argnames_,
    alternative_,
    bfinally_,
    bcatch_,
    argname_,
    definitions_,
    args_,
    cdr_,
    car_,
    prop_,
    operator_,
    right_,
    left_,
    consequent_,
    elements_,
    props_,
    thedef_,
    references_,
    visit_,
_LAST_THING};

            // a MACRO for each property name, to circumvent C-preprocessor problem with commas
            // and to be able to include foo__(this) as a parameter in a ITEM(arr,index) MACRO
    #define mtime__(this) PROP(mtime_,this)
    #define mode__(this) PROP(mode_,this)
    #define line__(this) PROP(line_,this)
    #define col__(this) PROP(col_,this)
    #define pos__(this) PROP(pos_,this)
    #define strict__(this) PROP(strict_,this)
    #define filename__(this) PROP(filename_,this)
    #define toplevel__(this) PROP(toplevel_,this)
    #define expression__(this) PROP(expression_,this)
    #define html5_comments__(this) PROP(html5_comments_,this)
    #define file__(this) PROP(file_,this)
    #define comments_before__(this) PROP(comments_before_,this)
    #define nlb__(this) PROP(nlb_,this)
    #define endpos__(this) PROP(endpos_,this)
    #define type__(this) PROP(type_,this)
    #define start__(this) PROP(start_,this)
    #define scope__(this) PROP(scope_,this)
    #define body__(this) PROP(body_,this)
    #define label__(this) PROP(label_,this)
    #define condition__(this) PROP(condition_,this)
    #define step__(this) PROP(step_,this)
    #define init__(this) PROP(init_,this)
    #define object__(this) PROP(object_,this)
    #define cname__(this) PROP(cname_,this)
    #define enclosed__(this) PROP(enclosed_,this)
    #define parent_scope__(this) PROP(parent_scope_,this)
    #define uses_eval__(this) PROP(uses_eval_,this)
    #define uses_with__(this) PROP(uses_with_,this)
    #define functions__(this) PROP(functions_,this)
    #define variables__(this) PROP(variables_,this)
    #define directives__(this) PROP(directives_,this)
    #define globals__(this) PROP(globals_,this)
    #define uses_arguments__(this) PROP(uses_arguments_,this)
    #define argnames__(this) PROP(argnames_,this)
    #define alternative__(this) PROP(alternative_,this)
    #define bfinally__(this) PROP(bfinally_,this)
    #define bcatch__(this) PROP(bcatch_,this)
    #define argname__(this) PROP(argname_,this)
    #define definitions__(this) PROP(definitions_,this)
    #define args__(this) PROP(args_,this)
    #define cdr__(this) PROP(cdr_,this)
    #define car__(this) PROP(car_,this)
    #define prop__(this) PROP(prop_,this)
    #define operator__(this) PROP(operator_,this)
    #define right__(this) PROP(right_,this)
    #define left__(this) PROP(left_,this)
    #define consequent__(this) PROP(consequent_,this)
    #define elements__(this) PROP(elements_,this)
    #define props__(this) PROP(props_,this)
    #define thedef__(this) PROP(thedef_,this)
    #define references__(this) PROP(references_,this)
    #define visit__(this) PROP(visit_,this)
#include "Test3.h"
#include "interfaces/C_standalone/fs.h"
#include "lib/TestOut.h"
#include "lib/mkPath.h"
#include "interfaces/C_standalone/path.h"
#include "lib/ParserWithIterable.h"
#include "lib/Utils.h"
#include "lib/AST.h"
#endif
