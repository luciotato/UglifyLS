
Litescript translation of: UglifyJS's ast.js
(c) Lucio Tato - 2014

/***********************************************************************
  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/


### public class Token 

       constructor(props)
          if props
              for each property name,value in props
                   this.setProperty name,value

       properties
            file  
            comments_before : array
            nlb  
            endpos  
            pos  
            col  
            line  
            value
            type  :string 


### public class Node 

Base class of all AST nodes

       constructor(props)
           for each property name,value in props
               this.setProperty name,value


       properties
            endpos 	 // [AST_Token] The last token of this node
            start  // [AST_Token] The first token of this node

       method clone () 
            return new this.constructor(this);
        
           
       /*method _walk (visitor) 
            return visitor._visit(this);
           
       method walk (visitor) 
            return this._walk(visitor); // not sure the indirection will be any help
      */
        
           
    append to namespace Node
       properties
            documentation = "Base class of all AST nodes"
            propdoc = 
						  "start": "[AST_Token] The first token of this node",
						  "endpos": "[AST_Token] The last token of this node"
						


### public class Statement extends Node

Base class of all statements
      
      do nothing


    append to namespace Statement
       properties
            documentation = "Base class of all statements"


### public class Debugger extends Statement

Represents a debugger statement

      do nothing


    append to namespace Debugger
       properties
            documentation = "Represents a debugger statement"


### public class Directive extends Statement

Represents a directive, like "use strict";

       properties
            scope 	// [AST_Scope/S] The scope that this directive affects
            value 	// [string] The value of this directive as a plain string (it's not an AST_String!)


    append to namespace Directive
       properties
            documentation = "Represents a directive, like \"use strict\";"
            propdoc = 
						  "value": "[string] The value of this directive as a plain string (it's not an AST_String!)",
						  "scope": "[AST_Scope/S] The scope that this directive affects"
						


### public class SimpleStatement extends Statement

A statement consisting of an expression, i.e. a = 1 + 2

       properties
            body:Token 	// [AST_Node] an expression node (should not be instanceof AST_Statement)

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.body._walk(visitor);
        );
      */
    
    append to namespace SimpleStatement
       properties
            documentation = "A statement consisting of an expression, i.e. a = 1 + 2"
            propdoc = 
						  "body": "[AST_Node] an expression node (should not be instanceof AST_Statement)"


### public class Block extends Statement

A body of statements (usually bracketed)

       properties
            body:array of Statement 	// [AST_Statement*] an array of statements

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            walk_body(this, visitor);
        );
      */
    
           
    append to namespace Block
       properties
            documentation = "A body of statements (usually bracketed)"
            propdoc = 
						  "body": "[AST_Statement*] an array of statements"
						


### public class BlockStatement extends Block

A block statement

      do nothing


    append to namespace BlockStatement
       properties
            documentation = "A block statement"


### public class EmptyStatement extends Statement

The empty statement (empty block or simply a semicolon)

      do nothing


/*       method _walk (visitor) 
        return visitor._visit(this);
      */
    
    append to namespace EmptyStatement
       properties
            documentation = "The empty statement (empty block or simply a semicolon)"


### public class StatementWithBody extends Statement

Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`

       properties
            body 	// [AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.body._walk(visitor);
        );
    */
    
    append to namespace StatementWithBody
       properties
            documentation = "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`"
            propdoc = 
						  "body": "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
						
### public class LabeledStatement extends StatementWithBody

Statement with a label

       properties
            label 	// [AST_Label] a label definition

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.label._walk(visitor);
            this.body._walk(visitor);
        );*/
    
    append to namespace LabeledStatement
       properties
            documentation = "Statement with a label"
            propdoc = 
						  "label": "[AST_Label] a label definition"
						

### public class IterationStatement extends StatementWithBody

Internal class.  All loops inherit from it.

      do nothing


    append to namespace IterationStatement
       properties
            documentation = "Internal class.  All loops inherit from it."


### public class DWLoop extends IterationStatement

Base class for do/while statements

       properties
            condition 	// [AST_Node] the loop condition.  Should not be instanceof AST_Statement

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.condition._walk(visitor);
            this.body._walk(visitor);
        );*/
    
           
    append to namespace DWLoop
       properties
            documentation = "Base class for do/while statements"
            propdoc = 
						  "condition": "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
						


### public class DoStatement extends DWLoop

A `do` statement

      do nothing


    append to namespace DoStatement
       properties
            documentation = "A `do` statement"


### public class WhileStatement extends DWLoop

A `while` statement

      do nothing


    append to namespace WhileStatement
       properties
            documentation = "A `while` statement"


### public class ForStatement extends IterationStatement

A `for` statement

       properties
            step 	      // [AST_Node?] the `for` update clause, or null if empty
            condition 	// [AST_Node?] the `for` termination clause, or null if empty
            init 	      // [AST_Node?] the `for` initialization code, or null if empty

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            if (this.init) this.init._walk(visitor);
            if (this.condition) this.condition._walk(visitor);
            if (this.step) this.step._walk(visitor);
            this.body._walk(visitor);
        );
      */
           
    append to namespace ForStatement
       properties
            documentation = "A `for` statement"
            propdoc = 
						  "init": "[AST_Node?] the `for` initialization code, or null if empty",
						  "condition": "[AST_Node?] the `for` termination clause, or null if empty",
						  "step": "[AST_Node?] the `for` update clause, or null if empty"
						


### public class ForIn extends IterationStatement

A `for ... in` statement

       properties
            object 	// [AST_Node] the object that we're looping through
            name 	// [AST_SymbolRef?] the loop variable, only if `init` is AST_Var
            init 	// [AST_Node] the `for/in` initialization code

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.init._walk(visitor);
            this.object._walk(visitor);
            this.body._walk(visitor);
        );*/
    
           

    append to namespace ForIn
       properties
            documentation = "A `for ... in` statement"
            propdoc = 
						  "init": "[AST_Node] the `for/in` initialization code",
						  "name": "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",
						  "object": "[AST_Node] the object that we're looping through"
						


### public class WithStatement extends StatementWithBody

A `with` statement

       properties
            expression 	// [AST_Node] the `with` expression

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
            this.body._walk(visitor);
        );*/
    
           

    append to namespace WithStatement
       properties
            documentation = "A `with` statement"
            propdoc = 
						  "expression": "[AST_Node] the `with` expression"
						


### public class Scope extends Block

Base class for all statements introducing a lexical scope

       properties
            cname 	// [integer/S] current index for mangling variables (used internally by the mangler)
            enclosed 	// [SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes
            parent_scope 	// [AST_Scope?/S] link to the parent scope
            uses_eval 	// [boolean/S] tells whether this scope contains a direct call to the global `eval`
            uses_with 	// [boolean/S] tells whether this scope uses the `with` statement
            functions 	// [Object/S] like `variables`, but only lists function declarations
            variables 	// [Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope
            directives 	// [string*/S] an array of directives declared in this scope


    append to namespace Scope
       properties
            documentation = "Base class for all statements introducing a lexical scope"
            propdoc = 
						  "directives": "[string*/S] an array of directives declared in this scope",
						  "variables": "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
						  "functions": "[Object/S] like `variables`, but only lists function declarations",
						  "uses_with": "[boolean/S] tells whether this scope uses the `with` statement",
						  "uses_eval": "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
						  "parent_scope": "[AST_Scope?/S] link to the parent scope",
						  "enclosed": "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
						  "cname": "[integer/S] current index for mangling variables (used internally by the mangler)"
						


### public class Toplevel extends Scope

The toplevel scope

       properties
            globals 	// [Object/S] a map of name -> SymbolDef for all undeclared names

       /*
       method wrap_enclose (arg_parameter_pairs) 
        var self = this;
        var args = [];
        var parameters = [];

        arg_parameter_pairs.forEach(function(pair) 
            var splitAt = pair.lastIndexOf(":");

            args.push(pair.substr(0, splitAt));
            parameters.push(pair.substr(splitAt + 1));
        );

        var wrapped_tl = "(function(" + parameters.join(",") + ") '$ORIG'; )(" + args.join(",") + ")";
        wrapped_tl = parse(wrapped_tl);
        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node)
            if (node instanceof AST_Directive and node.value is "$ORIG") 
                return MAP.splice(self.body);
            
        ));
        return wrapped_tl;
        
           
       method wrap_commonjs (name, export_all) 
        var self = this;
        var to_export = [];
        
        if export_all

            self.figure_out_scope();

            self.walk(new TreeWalker(function(node)

                if (node instanceof AST_SymbolDeclaration and node.definition().global) 

                    var found
                    for each n in to_export
                        if n.name is node.name
                            found = n
                            break

                    if not found 
                        to_export.push(node);
                
            ));
        
        var wrapped_tl = "(function(exports, global) global['" + name + "'] = exports; '$ORIG'; '$EXPORTS'; (, (function()return this())))";
        wrapped_tl = parse(wrapped_tl);
        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node)
            if (node instanceof AST_SimpleStatement) 
                node = node.body;
                if (node instanceof AST_String) switch (node.getValue()) 
                  case "$ORIG":
                    return MAP.splice(self.body);
                  case "$EXPORTS":
                    var body = [];
                    to_export.forEach(function(sym)
                        body.push(new AST_SimpleStatement(
                            body: new AST_Assign(
                                left: new AST_Sub(
                                    expression: new AST_SymbolRef( name: "exports" ),
                                    property: new AST_String( value: sym.name ),
                                ),
                                operator: "=",
                                right: new AST_SymbolRef(sym),
                            ),
                        ));
                    );
                    return MAP.splice(body);
                
            
        ));
        return wrapped_tl;
        */
           

    append to namespace Toplevel
       properties
            documentation = "The toplevel scope"
            propdoc = 
						  "globals": "[Object/S] a map of name -> SymbolDef for all undeclared names"
						


### public class Lambda extends Scope

Base class for functions

       properties
            uses_arguments 	// [boolean/S] tells whether this function accesses the arguments array
            argnames 	// [AST_SymbolFunarg*] array of function arguments
            name 	// [AST_SymbolDeclaration?] the name of this function

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            if (this.name) this.name._walk(visitor);
            this.argnames.forEach(function(arg)
                arg._walk(visitor);
            );
            walk_body(this, visitor);
        );
       */
           

    append to namespace Lambda
       properties
            documentation = "Base class for functions"
            propdoc = 
						  "name": "[AST_SymbolDeclaration?] the name of this function",
						  "argnames": "[AST_SymbolFunarg*] array of function arguments",
						  "uses_arguments": "[boolean/S] tells whether this function accesses the arguments array"
						


### public class Accessor extends Lambda

A setter/getter function.  The `name` property is always null.
  
      do nothing


    append to namespace Accessor
       properties
            documentation = "A setter/getter function.  The `name` property is always null."


### public class FunctionExpression extends Lambda

A function expression

      do nothing


    append to namespace FunctionExpression
       properties
            documentation = "A function expression"


### public class Defun extends Lambda

A function definition

      do nothing


    append to namespace Defun
       properties
            documentation = "A function definition"


### public class Jump extends Statement

Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)

      do nothing


    append to namespace Jump
       properties
            documentation = "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"


### public class ExitStatement extends Jump

Base class for “exits” (`return` and `throw`)

       properties
            value 	// [AST_Node?] the value returned or thrown by this statement; could be null for AST_Return

       /*method _walk (visitor) 
        return visitor._visit(this, this.value and function()
            this.value._walk(visitor);
        );*/
    
           
    append to namespace ExitStatement
       properties
            documentation = "Base class for “exits” (`return` and `throw`)"
            propdoc = 
						  "value": "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
						


### public class ReturnStatement extends ExitStatement

A `return` statement

      do nothing


    append to namespace ReturnStatement
       properties
            documentation = "A `return` statement"


### public class ThrowStatement extends ExitStatement

A `throw` statement

      do nothing


    append to namespace ThrowStatement
       properties
            documentation = "A `throw` statement"


### public class LoopControl extends Jump

Base class for loop control statements (`break` and `continue`)

       properties
            label 	// [AST_LabelRef?] the label, or null if none

       /*
       method _walk (visitor) 
        return visitor._visit(this, this.label and function()
            this.label._walk(visitor);
        );
      */
           
    append to namespace LoopControl
       properties
            documentation = "Base class for loop control statements (`break` and `continue`)"
            propdoc = 
						  "label": "[AST_LabelRef?] the label, or null if none"
						


### public class BreakStatement extends LoopControl

A `break` statement

      do nothing


    append to namespace BreakStatement
       properties
            documentation = "A `break` statement"


### public class ContinueStatement extends LoopControl

A `continue` statement

      do nothing


    append to namespace ContinueStatement
       properties
            documentation = "A `continue` statement"


### public class IfStatement extends StatementWithBody

A `if` statement

       properties
            alternative 	// [AST_Statement?] the `else` part, or null if not present
            condition 	// [AST_Node] the `if` condition

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.condition._walk(visitor);
            this.body._walk(visitor);
            if (this.alternative) this.alternative._walk(visitor);
        );
        */
           

    append to namespace IfStatement
       properties
            documentation = "A `if` statement"
            propdoc = 
						  "condition": "[AST_Node] the `if` condition",
						  "alternative": "[AST_Statement?] the `else` part, or null if not present"
						

### public class Switch extends Block

A `switch` statement

       properties
            expression 	// [AST_Node] the `switch` “discriminant”

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
            walk_body(this, visitor);
        );
       */
           
    append to namespace Switch
       properties
            documentation = "A `switch` statement"
            propdoc = 
						  "expression": "[AST_Node] the `switch` “discriminant”"
						


### public class SwitchBranch extends Block

Base class for `switch` branches

      do nothing


    append to namespace SwitchBranch
       properties
            documentation = "Base class for `switch` branches"


### public class Default extends SwitchBranch

A `default` switch branch

      do nothing


    append to namespace Default
       properties
            documentation = "A `default` switch branch"


### public class Case extends SwitchBranch

A `case` switch branch

       properties
            expression 	// [AST_Node] the `case` expression

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
            walk_body(this, visitor);
        );*/
    
           

    append to namespace Case
       properties
            documentation = "A `case` switch branch"
            propdoc = 
						  "expression": "[AST_Node] the `case` expression"
						


### public class Try extends Block

A `try` statement

       properties
            bfinally 	// [AST_Finally?] the finally block, or null if not present
            bcatch 	// [AST_Catch?] the catch block, or null if not present

      /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            walk_body(this, visitor);
            if (this.bcatch) this.bcatch._walk(visitor);
            if (this.bfinally) this.bfinally._walk(visitor);
        );
      */
           

    append to namespace Try
       properties
            documentation = "A `try` statement"
            propdoc = 
						  "bcatch": "[AST_Catch?] the catch block, or null if not present",
						  "bfinally": "[AST_Finally?] the finally block, or null if not present"
						


### public class Catch extends Block

A `catch` node; only makes sense as part of a `try` statement

       properties
            argname 	// [AST_SymbolCatch] symbol for the exception

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.argname._walk(visitor);
            walk_body(this, visitor);
        );*/
    
           

    append to namespace Catch
       properties
            documentation = "A `catch` node; only makes sense as part of a `try` statement"
            propdoc = 
						  "argname": "[AST_SymbolCatch] symbol for the exception"
						


### public class Finally extends Block

A `finally` node; only makes sense as part of a `try` statement

      do nothing


    append to namespace Finally
       properties
            documentation = "A `finally` node; only makes sense as part of a `try` statement"


### public class Definitions extends Statement

Base class for `var` or `const` nodes (variable declarations/initializations)

       properties
            definitions: array of VarDef	// [AST_VarDef*] array of variable definitions

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.definitions.forEach(function(def)
                def._walk(visitor);
            );
        );*/
    
           

    append to namespace Definitions
       properties
            documentation = "Base class for `var` or `const` nodes (variable declarations/initializations)"
            propdoc = 
						  "definitions": "[AST_VarDef*] array of variable definitions"
						


### public class Var extends Definitions

A `var` statement

      do nothing


    append to namespace Var
       properties
            documentation = "A `var` statement"


### public class Const extends Definitions

A `const` statement

      do nothing


    append to namespace Const
       properties
            documentation = "A `const` statement"


### public class VarDef extends Node

A variable declaration; only appears in a AST_Definitions node

       properties
            value 	// [AST_Node?] initializer, or null of there's no initializer
            name 	// [AST_SymbolVar|AST_SymbolConst] name of the variable

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.name._walk(visitor);
            if (this.value) this.value._walk(visitor);
        );
        */
           

    append to namespace VarDef
       properties
            documentation = "A variable declaration; only appears in a AST_Definitions node"
            propdoc = 
						  "name": "[AST_SymbolVar|AST_SymbolConst] name of the variable",
						  "value": "[AST_Node?] initializer, or null of there's no initializer"
						


### public class CallStatement extends Node

A function call expression

       properties
            args 	// [AST_Node*] array of arguments
            expression 	// [AST_Node] expression to invoke as function

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
            this.args.forEach(function(arg)
                arg._walk(visitor);
            );
        );
        */
           

    append to namespace CallStatement
       properties
            documentation = "A function call expression"
            propdoc = 
						  "expression": "[AST_Node] expression to invoke as function",
						  "args": "[AST_Node*] array of arguments"
						


### public class New extends CallStatement

An object instantiation.  Derives from a function call since it has exactly the same properties

      do nothing


    append to namespace New
       properties
            documentation = "An object instantiation.  Derives from a function call since it has exactly the same properties"


### public class Seq extends Node

A sequence expression (two comma-separated expressions)

       properties
            cdr 	// [AST_Node] second element in sequence
            car 	// [AST_Node] first element in sequence

       method to_array () 
        var p = this, a = [];
        while (p) 
            a.push(p.car);
            if p.cdr and p.cdr isnt instance of Seq
                a.push(p.cdr);
                break;
            
            p = p.cdr;
        
        return a;
    
           
       method add (node) 
        var p = this;
        while (p) 
            if p.cdr isnt instanceof Seq 
                var cell = Seq.cons(p.cdr, node);
                return cell into p.cdr;
            
            p = p.cdr;
        
      /*        
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.car._walk(visitor);
            if (this.cdr) this.cdr._walk(visitor);
        );
      */
           

    append to namespace Seq

      properties
            documentation = "A sequence expression (two comma-separated expressions)"
            propdoc = 
						  "car": "[AST_Node] first element in sequence",
						  "cdr": "[AST_Node] second element in sequence"
						
      method cons(x, y) returns Seq
          var seq = new Seq(x);
          seq.car = x;
          seq.cdr = y;
          return seq;
        
      method from_array(array) 
          if (array.length is 0), return null;
          if (array.length is 1), return array[0].clone();
          var list = null;
          for  i = array.length down to 0
              list = Seq.cons(array[i], list);
          
          var p:Seq = list;
          while p 
              if (p.cdr and not p.cdr.cdr) 
                  p.cdr = p.cdr.car
                  break
              
              p = p.cdr
          
          return list
    


### public class PropAccess extends Node

Base class for property access expressions, i.e. `a.foo` or `a["foo"]`

       properties
            prop       	// [AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node
            expression 	// [AST_Node] the “container” expression


    append to namespace PropAccess
       properties
            documentation = "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`"
            propdoc = 
						  "expression": "[AST_Node] the “container” expression",
						  "property": "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
						


### public class Dot extends PropAccess

A dotted property access expression

      do nothing


        /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
        );
      */
           

    append to namespace Dot
       properties
            documentation = "A dotted property access expression"


### public class Sub extends PropAccess

Index-style property access, i.e. `a["foo"]`

      do nothing


      /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
            this.property._walk(visitor);
        );
      */
           
    append to namespace Sub
       properties
            documentation = "Index-style property access, i.e. `a[\"foo\"]`"


### public class Unary extends Node

Base class for unary expressions

       properties
            expression 	// [AST_Node] expression that this unary operator applies to
            operator 	// [string] the operator

       /*method _walk (visitor) 
        return visitor._visit(this, function()
            this.expression._walk(visitor);
        );*/
    
           

    append to namespace Unary
       properties
            documentation = "Base class for unary expressions"
            propdoc = 
						  "operator": "[string] the operator",
						  "expression": "[AST_Node] expression that this unary operator applies to"
						


### public class UnaryPrefix extends Unary

Unary prefix expression, i.e. `typeof i` or `++i`

      do nothing


    append to namespace UnaryPrefix
       properties
            documentation = "Unary prefix expression, i.e. `typeof i` or `++i`"


### public class UnaryPostfix extends Unary

Unary postfix expression, i.e. `i++`

      do nothing


    append to namespace UnaryPostfix
       properties
            documentation = "Unary postfix expression, i.e. `i++`"


### public class Binary extends Node

Binary expression, i.e. `a + b`

       properties
            right 	// [AST_Node] right-hand side expression
            operator 	// [string] the operator
            left 	// [AST_Node] left-hand side expression

      /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.left._walk(visitor);
            this.right._walk(visitor);
        );
      */
           

    append to namespace Binary
       properties
            documentation = "Binary expression, i.e. `a + b`"
            propdoc = 
						  "left": "[AST_Node] left-hand side expression",
						  "operator": "[string] the operator",
						  "right": "[AST_Node] right-hand side expression"
						


### public class Conditional extends Node

Conditional expression using the ternary operator, i.e. `a ? b : c`

       properties
            alternative 	// [AST_Node]
            consequent 	// [AST_Node]
            condition 	// [AST_Node]

      /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.condition._walk(visitor);
            this.consequent._walk(visitor);
            this.alternative._walk(visitor);
        );
      */
           

    append to namespace Conditional
       properties
            documentation = "Conditional expression using the ternary operator, i.e. `a ? b : c`"
            propdoc = 
						  "condition": "[AST_Node]",
						  "consequent": "[AST_Node]",
						  "alternative": "[AST_Node]"
						


### public class Assign extends Binary

An assignment expression — `a = b + 5`

      do nothing


    append to namespace Assign
       properties
            documentation = "An assignment expression — `a = b + 5`"


### public class ArrayLiteral extends Node

An array literal

       properties
            elements 	// [AST_Node*] array of elements

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.elements.forEach(function(el)
                el._walk(visitor);
            );
        );
        */
           
    append to namespace ArrayLiteral
       properties
            documentation = "An array literal"
            propdoc = 
						  "elements": "[AST_Node*] array of elements"
						


### public class ObjectLiteral extends Node

An object literal

       properties
            props 	// [AST_ObjectProperty*] array of properties

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.properties.forEach(function(prop)
                prop._walk(visitor);
            );
        );
        */
           

    append to namespace ObjectLiteral
       properties
            documentation = "An object literal"
            propdoc = 
						  "properties": "[AST_ObjectProperty*] array of properties"
						


### public class ObjectProperty extends Node

Base class for literal object properties

       properties
            value 	// [AST_Node] property value.  For setters and getters this is an AST_Function.
            key 	// [string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.

       /*
       method _walk (visitor) 
        return visitor._visit(this, function()
            this.value._walk(visitor);
        );
      */
           

    append to namespace ObjectProperty
       properties
            documentation = "Base class for literal object properties"
            propdoc = 
						  "key": "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",
						  "value": "[AST_Node] property value.  For setters and getters this is an AST_Function."
						


### public class ObjectKeyVal extends ObjectProperty

A key:value object property

      do nothing


    append to namespace ObjectKeyVal
       properties
            documentation = "A key: value object property"


### public class ObjectSetter extends ObjectProperty

An object setter property

      do nothing



    append to namespace ObjectSetter
       properties
            documentation = "An object setter property"


### public class ObjectGetter extends ObjectProperty

An object getter property

      do nothing


    append to namespace ObjectGetter
       properties
            documentation = "An object getter property"


### public class Symbol extends Node

Base class for all symbols

       properties
            thedef 	// [SymbolDef/S] the definition of this symbol
            name 	// [string] name of this symbol
            scope 	// [AST_Scope/S] the current scope (not necessarily the definition scope)


    append to namespace Symbol
       properties
            propdoc = 
						  "name": "[string] name of this symbol",
						  "scope": "[AST_Scope/S] the current scope (not necessarily the definition scope)",
						  "thedef": "[SymbolDef/S] the definition of this symbol"
						
            documentation = "Base class for all symbols"


### public class SymbolAccessor extends Symbol

The name of a property accessor (setter/getter function)

      do nothing


    append to namespace SymbolAccessor
       properties
            documentation = "The name of a property accessor (setter/getter function)"


### public class SymbolDeclaration extends Symbol

A declaration symbol (symbol in var/const, function name or argument, symbol in catch)

       properties
            init 	// [AST_Node*/S] array of initializers for this declaration.


    append to namespace SymbolDeclaration
       properties
            documentation = "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"
            propdoc = 
						  "init": "[AST_Node*/S] array of initializers for this declaration."
						


### public class SymbolVar extends SymbolDeclaration

Symbol defining a variable

      do nothing


    append to namespace SymbolVar
       properties
            documentation = "Symbol defining a variable"


### public class SymbolConst extends SymbolDeclaration

A constant declaration

      do nothing


    append to namespace SymbolConst
       properties
            documentation = "A constant declaration"


### public class SymbolFunarg extends SymbolVar

Symbol naming a function argument

      do nothing


    append to namespace SymbolFunarg
       properties
            documentation = "Symbol naming a function argument"


### public class SymbolDefun extends SymbolDeclaration

Symbol defining a function

      do nothing


    append to namespace SymbolDefun
       properties
            documentation = "Symbol defining a function"


### public class SymbolLambda extends SymbolDeclaration

Symbol naming a function expression

      do nothing


    append to namespace SymbolLambda
       properties
            documentation = "Symbol naming a function expression"


### public class SymbolCatch extends SymbolDeclaration

Symbol naming the exception in catch

      do nothing


    append to namespace SymbolCatch
       properties
            documentation = "Symbol naming the exception in catch"


### public class Label extends Symbol

Symbol naming a label (declaration)

       properties
            references 	// [AST_LoopControl*] a list of nodes referring to this label

       method initialize () 
        this.references = [];
        this.thedef = this;
    
           

    append to namespace Label
       properties
            documentation = "Symbol naming a label (declaration)"
            propdoc = 
						  "references": "[AST_LoopControl*] a list of nodes referring to this label"
						


### public class SymbolRef extends Symbol

Reference to some symbol (not definition/declaration)

      do nothing


    append to namespace SymbolRef
       properties
            documentation = "Reference to some symbol (not definition/declaration)"


### public class LabelRef extends Symbol

Reference to a label symbol

      do nothing


    append to namespace LabelRef
       properties
            documentation = "Reference to a label symbol"


### public class This extends Symbol

The `this` symbol

      do nothing


    append to namespace This
       properties
            documentation = "The `this` symbol"


### public class Constant extends Node

Base class for all constants

      properties value

      method getValue () 
        return this.value;

    append to namespace Constant
       properties
            documentation = "Base class for all constants"


### public class StringLiteral extends Constant

A string literal

      do nothing


    append to namespace StringLiteral
       properties
            documentation = "A string literal"
            propdoc = 
						  "value": "[string] the contents of this string"
						


### public class NumberLiteral extends Constant

A number literal

      do nothing


       //properties
       //     value 	// [number] the numeric value


    append to namespace NumberLiteral
       properties
            documentation = "A number literal"
            propdoc = 
						  "value": "[number] the numeric value"
						


### public class RegExpLiteral extends Constant

A regexp literal

      do nothing


    append to namespace RegExpLiteral
       properties
            documentation = "A regexp literal"
            propdoc = 
						  "value": "[RegExp] the actual regexp"
						


### public class Atom extends Constant

Base class for atoms

      do nothing


    append to namespace Atom
       properties
            documentation = "Base class for atoms"


### public class NullAtom extends Atom

The `null` atom
      
      do nothing


       //properties value = null

    append to namespace NullAtom
       properties
            documentation = "The `null` atom"


### public class NaNAtom extends Atom

The Not-a-Number value

       constructor()
          .value = NaN

    append to namespace NaNAtom
       properties
            documentation = "The impossible value"


### public class UndefinedAtom extends Atom
The `undefined` value

        do nothing

    append to namespace UndefinedAtom
       properties
            documentation = "The `undefined` value"


### public class Hole extends Atom
A hole in an array

        do nothing

    append to namespace Hole
       properties
            documentation = "A hole in an array"


### public class InfinityAtom extends Atom

The `Infinity` value

       constructor()
          .value = Infinity

    append to namespace InfinityAtom
       properties
            documentation = "The `Infinity` value"


### public class BooleanAtom extends Atom

Base class for booleans

      do nothing


    append to namespace Boolean
       properties
            documentation = "Base class for booleans"


### public class FalseAtom extends BooleanAtom

The `false` atom

        constructor()
          .value = undefined // (sic) ported from UglifyJS code as 2014-8-3

    append to namespace FalseAtom
       properties
            documentation = "The `false` atom"


### public class TrueAtom extends BooleanAtom

The `true` atom

       constructor()
          .value = undefined // (sic) ported from UglifyJS code as 2014-8-3

    append to namespace TrueAtom
       properties
            documentation = "The `true` atom"


## -----[ TreeWalker ]-----

    class TreeWalker

      properties
        visit: Function
        stack: array

      constructor(callback) 
        this.visit = callback;
        this.stack = [];

      method _visit(node) //, descend:function) 
            this.stack.push(node)
            var ret = this.visit.call(node) /*, descend ? function(){
                descend.call(node);
            } : noop);
            if (!ret and descend) {
                descend.call(node);
            }
            */
            this.stack.pop();
            return ret;

      method parent(n) 
            return this.stack[this.stack.length - 2 - (n or 0)];
        
      method push(node) 
            this.stack.push(node)
        
      method pop()
            return this.stack.pop();
        
      method self
            return this.stack[this.stack.length - 1];
        
      method find_parent(type) 
            var stack = this.stack
            for i = stack.length-1 while i>=0, i--
                var x = stack[i]
                if x instanceof type, return x
            
        
      method has_directive(type) 
            return this.find_parent(Scope).has_directive(type);
        
      method in_boolean_context
            var stack = this.stack;
            var i = stack.length, self = stack[--i];
            while i > 0

                var p = stack[--i];

                declare valid p.expression
                declare valid p.operator 
                declare valid p.condition

                if ((p instanceof IfStatement   and p.condition is self) or
                    (p instanceof Conditional   and p.condition is self) or
                    (p instanceof DWLoop        and p.condition is self) or
                    (p instanceof ForStatement  and p.condition is self) or
                    (p instanceof UnaryPrefix   and p.operator is "!" and p.expression is self))
                
                      return true;
                
                if ( not (p instanceof Binary and (p.operator is "and" or p.operator is "||")))
                    return false;
                
                self = p;
            
        
      method loopcontrol_target(label) 
            var stack = this.stack;

            if label 
              for i = stack.length-1 down to 0
                var x:LabeledStatement = stack[i];
                if x instanceof LabeledStatement and x.label.name is label.name
                    return x.body;
                
            else 
              for i = stack.length-1 down to 0
                var x:Switch = stack[i];
                if x instanceof Switch or x instanceof IterationStatement
                    return x
            
        
    
