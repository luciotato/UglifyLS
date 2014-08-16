//Litescript translation of: UglifyJS's ast.js
//(c) Lucio Tato - 2014

//**********************************************************************
//  A JavaScript tokenizer / parser / beautifier / compressor.
//  https://github.com/mishoo/UglifyJS2
//
//  -------------------------------- (C) ---------------------------------
//
//                           Author: Mihai Bazon
//                         <mihai.bazon@gmail.com>
//                       http://mihai.bazon.net/blog
//
//  Distributed under the BSD license:
//
//    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>
//
//    Redistribution and use in source and binary forms, with or without
//    modification, are permitted provided that the following conditions
//    are met:
//
//        * Redistributions of source code must retain the above
//          copyright notice, this list of conditions and the following
//          disclaimer.
//
//        * Redistributions in binary form must reproduce the above
//          copyright notice, this list of conditions and the following
//          disclaimer in the documentation and/or other materials
//          provided with the distribution.
//
//    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
//    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
//    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
//    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
//    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
//    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
//    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
//    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
//    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
//    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
//    SUCH DAMAGE.
//
// **********************************************************************


    //    public class Token
    // constructor
    function Token(props){
       //properties
            //file
            //comments_before : array
            //nlb
            //endpos
            //pos
            //col
            //line
            //value
            //type  :string
          //if props
          if (props) {
          
              //for each property name,value in props
              var value=undefined;
              for ( var name in props){value=props[name];
                   {
                   //this.setProperty name,value
                   this.setProperty(name, value);
                   }
                   
                   }// end for each property
              
          };
       };
    
    // export
    module.exports.Token = Token;
    
    // end class Token


    //    public class Node
    // constructor
    function Node(props){
       //properties
            //endpos      // [AST_Token] The last token of this node
            //start  // [AST_Token] The first token of this node
           //for each property name,value in props
           var value=undefined;
           for ( var name in props){value=props[name];
               {
               //this.setProperty name,value
               this.setProperty(name, value);
               }
               
               }// end for each property
           
       };

       //method clone ()
       Node.prototype.clone = function(){
            //return new this.constructor(this);
            return new this.constructor(this);
       };
    // export
    module.exports.Node = Node;
    
    // end class Node


//method _walk (visitor)
//            return visitor._visit(this);
//
//       method walk (visitor)
//            return this._walk(visitor); // not sure the indirection will be any help
//      


    //append to namespace Node
    
       //properties
            //documentation = "Base class of all AST nodes"
            //propdoc =
                          //"start": "[AST_Token] The first token of this node",
                          //"endpos": "[AST_Token] The last token of this node"



    //    public class Statement extends Node
       
       //properties
            //documentation = "Base class of all AST nodes"
            //propdoc =
           Node.documentation="Base class of all AST nodes";
           Node.propdoc={
          "start": "[AST_Token] The first token of this node"
          , "endpos": "[AST_Token] The last token of this node"
                          };
       



    //    public class Statement extends Node
    // constructor
    function Statement(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
    };
    // Statement (extends|proto is) Node
    Statement.prototype.__proto__ = Node.prototype;

//Base class of all statements

      //do nothing
      null;
    // export
    module.exports.Statement = Statement;
    
    // end class Statement


    //append to namespace Statement
    
       //properties
            //documentation = "Base class of all statements"


    //    public class Debugger extends Statement
       
       //properties
            //documentation = "Base class of all statements"
           Statement.documentation="Base class of all statements";
       


    //    public class Debugger extends Statement
    // constructor
    function Debugger(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
    };
    // Debugger (extends|proto is) Statement
    Debugger.prototype.__proto__ = Statement.prototype;

//Represents a debugger statement

      //do nothing
      null;
    // export
    module.exports.Debugger = Debugger;
    
    // end class Debugger


    //append to namespace Debugger
    
       //properties
            //documentation = "Represents a debugger statement"


    //    public class Directive extends Statement
       
       //properties
            //documentation = "Represents a debugger statement"
           Debugger.documentation="Represents a debugger statement";
       


    //    public class Directive extends Statement
    // constructor
    function Directive(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
       //properties
            //scope     // [AST_Scope/S] The scope that this directive affects
            //value     // [string] The value of this directive as a plain string (it's not an AST_String!)
    };
    // Directive (extends|proto is) Statement
    Directive.prototype.__proto__ = Statement.prototype;
    
    // export
    module.exports.Directive = Directive;
    
    // end class Directive


    //append to namespace Directive
    
       //properties
            //documentation = "Represents a directive, like \"use strict\";"
            //propdoc =
                          //"value": "[string] The value of this directive as a plain string (it's not an AST_String!)",
                          //"scope": "[AST_Scope/S] The scope that this directive affects"



    //    public class SimpleStatement extends Statement
       
       //properties
            //documentation = "Represents a directive, like \"use strict\";"
            //propdoc =
           Directive.documentation="Represents a directive, like \"use strict\";";
           Directive.propdoc={
          "value": "[string] The value of this directive as a plain string (it's not an AST_String!)"
          , "scope": "[AST_Scope/S] The scope that this directive affects"
                          };
       



    //    public class SimpleStatement extends Statement
    // constructor
    function SimpleStatement(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
       //properties
            //body:Token     // [AST_Node] an expression node (should not be instanceof AST_Statement)
    };
    // SimpleStatement (extends|proto is) Statement
    SimpleStatement.prototype.__proto__ = Statement.prototype;
    
    // export
    module.exports.SimpleStatement = SimpleStatement;
    
    // end class SimpleStatement

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.body._walk(visitor);
//        );
//      

    //append to namespace SimpleStatement
    
       //properties
            //documentation = "A statement consisting of an expression, i.e. a = 1 + 2"
            //propdoc =
                          //"body": "[AST_Node] an expression node (should not be instanceof AST_Statement)"


    //    public class Block extends Statement
       
       //properties
            //documentation = "A statement consisting of an expression, i.e. a = 1 + 2"
            //propdoc =
           SimpleStatement.documentation="A statement consisting of an expression, i.e. a = 1 + 2";
           SimpleStatement.propdoc={
          "body": "[AST_Node] an expression node (should not be instanceof AST_Statement)"
                          };
       


    //    public class Block extends Statement
    // constructor
    function Block(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
       //properties
            //body:array of Statement     // [AST_Statement*] an array of statements
    };
    // Block (extends|proto is) Statement
    Block.prototype.__proto__ = Statement.prototype;
    
    // export
    module.exports.Block = Block;
    
    // end class Block

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            walk_body(this, visitor);
//        );
//      


    //append to namespace Block
    
       //properties
            //documentation = "A body of statements (usually bracketed)"
            //propdoc =
                          //"body": "[AST_Statement*] an array of statements"



    //    public class BlockStatement extends Block
       
       //properties
            //documentation = "A body of statements (usually bracketed)"
            //propdoc =
           Block.documentation="A body of statements (usually bracketed)";
           Block.propdoc={
          "body": "[AST_Statement*] an array of statements"
                          };
       



    //    public class BlockStatement extends Block
    // constructor
    function BlockStatement(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
    };
    // BlockStatement (extends|proto is) Block
    BlockStatement.prototype.__proto__ = Block.prototype;

//A block statement

      //do nothing
      null;
    // export
    module.exports.BlockStatement = BlockStatement;
    
    // end class BlockStatement


    //append to namespace BlockStatement
    
       //properties
            //documentation = "A block statement"


    //    public class EmptyStatement extends Statement
       
       //properties
            //documentation = "A block statement"
           BlockStatement.documentation="A block statement";
       


    //    public class EmptyStatement extends Statement
    // constructor
    function EmptyStatement(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
    };
    // EmptyStatement (extends|proto is) Statement
    EmptyStatement.prototype.__proto__ = Statement.prototype;

//The empty statement (empty block or simply a semicolon)

      //do nothing
      null;
    // export
    module.exports.EmptyStatement = EmptyStatement;
    
    // end class EmptyStatement


//method _walk (visitor)
//        return visitor._visit(this);
//      

    //append to namespace EmptyStatement
    
       //properties
            //documentation = "The empty statement (empty block or simply a semicolon)"


    //    public class StatementWithBody extends Statement
       
       //properties
            //documentation = "The empty statement (empty block or simply a semicolon)"
           EmptyStatement.documentation="The empty statement (empty block or simply a semicolon)";
       


    //    public class StatementWithBody extends Statement
    // constructor
    function StatementWithBody(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
       //properties
            //body     // [AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement
    };
    // StatementWithBody (extends|proto is) Statement
    StatementWithBody.prototype.__proto__ = Statement.prototype;
    
    // export
    module.exports.StatementWithBody = StatementWithBody;
    
    // end class StatementWithBody

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.body._walk(visitor);
//        );
//    

    //append to namespace StatementWithBody
    
       //properties
            //documentation = "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`"
            //propdoc =
                          //"body": "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"

    //    public class LabeledStatement extends StatementWithBody
       
       //properties
            //documentation = "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`"
            //propdoc =
           StatementWithBody.documentation="Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`";
           StatementWithBody.propdoc={
          "body": "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
                          };
       

    //    public class LabeledStatement extends StatementWithBody
    // constructor
    function LabeledStatement(){ // default constructor
    // default constructor: call super.constructor
        StatementWithBody.prototype.constructor.apply(this,arguments)
       //properties
            //label     // [AST_Label] a label definition
    };
    // LabeledStatement (extends|proto is) StatementWithBody
    LabeledStatement.prototype.__proto__ = StatementWithBody.prototype;
    
    // export
    module.exports.LabeledStatement = LabeledStatement;
    
    // end class LabeledStatement

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.label._walk(visitor);
//            this.body._walk(visitor);
//        );

    //append to namespace LabeledStatement
    
       //properties
            //documentation = "Statement with a label"
            //propdoc =
                          //"label": "[AST_Label] a label definition"


    //    public class IterationStatement extends StatementWithBody
       
       //properties
            //documentation = "Statement with a label"
            //propdoc =
           LabeledStatement.documentation="Statement with a label";
           LabeledStatement.propdoc={
          "label": "[AST_Label] a label definition"
                          };
       


    //    public class IterationStatement extends StatementWithBody
    // constructor
    function IterationStatement(){ // default constructor
    // default constructor: call super.constructor
        StatementWithBody.prototype.constructor.apply(this,arguments)
    };
    // IterationStatement (extends|proto is) StatementWithBody
    IterationStatement.prototype.__proto__ = StatementWithBody.prototype;

//Internal class.  All loops inherit from it.

      //do nothing
      null;
    // export
    module.exports.IterationStatement = IterationStatement;
    
    // end class IterationStatement


    //append to namespace IterationStatement
    
       //properties
            //documentation = "Internal class.  All loops inherit from it."


    //    public class DWLoop extends IterationStatement
       
       //properties
            //documentation = "Internal class.  All loops inherit from it."
           IterationStatement.documentation="Internal class.  All loops inherit from it.";
       


    //    public class DWLoop extends IterationStatement
    // constructor
    function DWLoop(){ // default constructor
    // default constructor: call super.constructor
        IterationStatement.prototype.constructor.apply(this,arguments)
       //properties
            //condition     // [AST_Node] the loop condition.  Should not be instanceof AST_Statement
    };
    // DWLoop (extends|proto is) IterationStatement
    DWLoop.prototype.__proto__ = IterationStatement.prototype;
    
    // export
    module.exports.DWLoop = DWLoop;
    
    // end class DWLoop

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.condition._walk(visitor);
//            this.body._walk(visitor);
//        );


    //append to namespace DWLoop
    
       //properties
            //documentation = "Base class for do/while statements"
            //propdoc =
                          //"condition": "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"



    //    public class DoStatement extends DWLoop
       
       //properties
            //documentation = "Base class for do/while statements"
            //propdoc =
           DWLoop.documentation="Base class for do/while statements";
           DWLoop.propdoc={
          "condition": "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
                          };
       



    //    public class DoStatement extends DWLoop
    // constructor
    function DoStatement(){ // default constructor
    // default constructor: call super.constructor
        DWLoop.prototype.constructor.apply(this,arguments)
    };
    // DoStatement (extends|proto is) DWLoop
    DoStatement.prototype.__proto__ = DWLoop.prototype;

//A `do` statement

      //do nothing
      null;
    // export
    module.exports.DoStatement = DoStatement;
    
    // end class DoStatement


    //append to namespace DoStatement
    
       //properties
            //documentation = "A `do` statement"


    //    public class WhileStatement extends DWLoop
       
       //properties
            //documentation = "A `do` statement"
           DoStatement.documentation="A `do` statement";
       


    //    public class WhileStatement extends DWLoop
    // constructor
    function WhileStatement(){ // default constructor
    // default constructor: call super.constructor
        DWLoop.prototype.constructor.apply(this,arguments)
    };
    // WhileStatement (extends|proto is) DWLoop
    WhileStatement.prototype.__proto__ = DWLoop.prototype;

//A `while` statement

      //do nothing
      null;
    // export
    module.exports.WhileStatement = WhileStatement;
    
    // end class WhileStatement


    //append to namespace WhileStatement
    
       //properties
            //documentation = "A `while` statement"


    //    public class ForStatement extends IterationStatement
       
       //properties
            //documentation = "A `while` statement"
           WhileStatement.documentation="A `while` statement";
       


    //    public class ForStatement extends IterationStatement
    // constructor
    function ForStatement(){ // default constructor
    // default constructor: call super.constructor
        IterationStatement.prototype.constructor.apply(this,arguments)
       //properties
            //step           // [AST_Node?] the `for` update clause, or null if empty
            //condition     // [AST_Node?] the `for` termination clause, or null if empty
            //init           // [AST_Node?] the `for` initialization code, or null if empty
    };
    // ForStatement (extends|proto is) IterationStatement
    ForStatement.prototype.__proto__ = IterationStatement.prototype;
    
    // export
    module.exports.ForStatement = ForStatement;
    
    // end class ForStatement

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            if (this.init) this.init._walk(visitor);
//            if (this.condition) this.condition._walk(visitor);
//            if (this.step) this.step._walk(visitor);
//            this.body._walk(visitor);
//        );
//      

    //append to namespace ForStatement
    
       //properties
            //documentation = "A `for` statement"
            //propdoc =
                          //"init": "[AST_Node?] the `for` initialization code, or null if empty",
                          //"condition": "[AST_Node?] the `for` termination clause, or null if empty",
                          //"step": "[AST_Node?] the `for` update clause, or null if empty"



    //    public class ForIn extends IterationStatement
       
       //properties
            //documentation = "A `for` statement"
            //propdoc =
           ForStatement.documentation="A `for` statement";
           ForStatement.propdoc={
          "init": "[AST_Node?] the `for` initialization code, or null if empty"
          , "condition": "[AST_Node?] the `for` termination clause, or null if empty"
          , "step": "[AST_Node?] the `for` update clause, or null if empty"
                          };
       



    //    public class ForIn extends IterationStatement
    // constructor
    function ForIn(){ // default constructor
    // default constructor: call super.constructor
        IterationStatement.prototype.constructor.apply(this,arguments)
       //properties
            //object     // [AST_Node] the object that we're looping through
            //name     // [AST_SymbolRef?] the loop variable, only if `init` is AST_Var
            //init     // [AST_Node] the `for/in` initialization code
    };
    // ForIn (extends|proto is) IterationStatement
    ForIn.prototype.__proto__ = IterationStatement.prototype;
    
    // export
    module.exports.ForIn = ForIn;
    
    // end class ForIn

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.init._walk(visitor);
//            this.object._walk(visitor);
//            this.body._walk(visitor);
//        );



    //append to namespace ForIn
    
       //properties
            //documentation = "A `for ... in` statement"
            //propdoc =
                          //"init": "[AST_Node] the `for/in` initialization code",
                          //"name": "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",
                          //"object": "[AST_Node] the object that we're looping through"



    //    public class WithStatement extends StatementWithBody
       
       //properties
            //documentation = "A `for ... in` statement"
            //propdoc =
           ForIn.documentation="A `for ... in` statement";
           ForIn.propdoc={
          "init": "[AST_Node] the `for/in` initialization code"
          , "name": "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var"
          , "object": "[AST_Node] the object that we're looping through"
                          };
       



    //    public class WithStatement extends StatementWithBody
    // constructor
    function WithStatement(){ // default constructor
    // default constructor: call super.constructor
        StatementWithBody.prototype.constructor.apply(this,arguments)
       //properties
            //expression     // [AST_Node] the `with` expression
    };
    // WithStatement (extends|proto is) StatementWithBody
    WithStatement.prototype.__proto__ = StatementWithBody.prototype;
    
    // export
    module.exports.WithStatement = WithStatement;
    
    // end class WithStatement

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//            this.body._walk(visitor);
//        );



    //append to namespace WithStatement
    
       //properties
            //documentation = "A `with` statement"
            //propdoc =
                          //"expression": "[AST_Node] the `with` expression"



    //    public class Scope extends Block
       
       //properties
            //documentation = "A `with` statement"
            //propdoc =
           WithStatement.documentation="A `with` statement";
           WithStatement.propdoc={
          "expression": "[AST_Node] the `with` expression"
                          };
       



    //    public class Scope extends Block
    // constructor
    function Scope(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
       //properties
            //cname     // [integer/S] current index for mangling variables (used internally by the mangler)
            //enclosed     // [SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes
            //parent_scope     // [AST_Scope?/S] link to the parent scope
            //uses_eval     // [boolean/S] tells whether this scope contains a direct call to the global `eval`
            //uses_with     // [boolean/S] tells whether this scope uses the `with` statement
            //functions     // [Object/S] like `variables`, but only lists function declarations
            //variables     // [Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope
            //directives     // [string*/S] an array of directives declared in this scope
    };
    // Scope (extends|proto is) Block
    Scope.prototype.__proto__ = Block.prototype;
    
    // export
    module.exports.Scope = Scope;
    
    // end class Scope


    //append to namespace Scope
    
       //properties
            //documentation = "Base class for all statements introducing a lexical scope"
            //propdoc =
                          //"directives": "[string*/S] an array of directives declared in this scope",
                          //"variables": "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
                          //"functions": "[Object/S] like `variables`, but only lists function declarations",
                          //"uses_with": "[boolean/S] tells whether this scope uses the `with` statement",
                          //"uses_eval": "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
                          //"parent_scope": "[AST_Scope?/S] link to the parent scope",
                          //"enclosed": "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
                          //"cname": "[integer/S] current index for mangling variables (used internally by the mangler)"



    //    public class Toplevel extends Scope
       
       //properties
            //documentation = "Base class for all statements introducing a lexical scope"
            //propdoc =
           Scope.documentation="Base class for all statements introducing a lexical scope";
           Scope.propdoc={
          "directives": "[string*/S] an array of directives declared in this scope"
          , "variables": "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope"
          , "functions": "[Object/S] like `variables`, but only lists function declarations"
          , "uses_with": "[boolean/S] tells whether this scope uses the `with` statement"
          , "uses_eval": "[boolean/S] tells whether this scope contains a direct call to the global `eval`"
          , "parent_scope": "[AST_Scope?/S] link to the parent scope"
          , "enclosed": "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes"
          , "cname": "[integer/S] current index for mangling variables (used internally by the mangler)"
                          };
       



    //    public class Toplevel extends Scope
    // constructor
    function Toplevel(){ // default constructor
    // default constructor: call super.constructor
        Scope.prototype.constructor.apply(this,arguments)
       //properties
            //globals     // [Object/S] a map of name -> SymbolDef for all undeclared names
    };
    // Toplevel (extends|proto is) Scope
    Toplevel.prototype.__proto__ = Scope.prototype;
    
    // export
    module.exports.Toplevel = Toplevel;
    
    // end class Toplevel

//
//       method wrap_enclose (arg_parameter_pairs)
//        var self = this;
//        var args = [];
//        var parameters = [];
//
//        arg_parameter_pairs.forEach(function(pair)
//            var splitAt = pair.lastIndexOf(":");
//
//            args.push(pair.substr(0, splitAt));
//            parameters.push(pair.substr(splitAt + 1));
//        );
//
//        var wrapped_tl = "(function(" + parameters.join(",") + ") '$ORIG'; )(" + args.join(",") + ")";
//        wrapped_tl = parse(wrapped_tl);
//        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node)
//            if (node instanceof AST_Directive and node.value is "$ORIG")
//                return MAP.splice(self.body);
//
//        ));
//        return wrapped_tl;
//
//
//       method wrap_commonjs (name, export_all)
//        var self = this;
//        var to_export = [];
//
//        if export_all
//
//            self.figure_out_scope();
//
//            self.walk(new TreeWalker(function(node)
//
//                if (node instanceof AST_SymbolDeclaration and node.definition().global)
//
//                    var found
//                    for each n in to_export
//                        if n.name is node.name
//                            found = n
//                            break
//
//                    if not found
//                        to_export.push(node);
//
//            ));
//
//        var wrapped_tl = "(function(exports, global) global['" + name + "'] = exports; '$ORIG'; '$EXPORTS'; (, (function()return this())))";
//        wrapped_tl = parse(wrapped_tl);
//        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function before(node)
//            if (node instanceof AST_SimpleStatement)
//                node = node.body;
//                if (node instanceof AST_String) switch (node.getValue())
//                  case "$ORIG":
//                    return MAP.splice(self.body);
//                  case "$EXPORTS":
//                    var body = [];
//                    to_export.forEach(function(sym)
//                        body.push(new AST_SimpleStatement(
//                            body: new AST_Assign(
//                                left: new AST_Sub(
//                                    expression: new AST_SymbolRef( name: "exports" ),
//                                    property: new AST_String( value: sym.name ),
//                                ),
//                                operator: "=",
//                                right: new AST_SymbolRef(sym),
//                            ),
//                        ));
//                    );
//                    return MAP.splice(body);
//
//
//        ));
//        return wrapped_tl;
//        


    //append to namespace Toplevel
    
       //properties
            //documentation = "The toplevel scope"
            //propdoc =
                          //"globals": "[Object/S] a map of name -> SymbolDef for all undeclared names"



    //    public class Lambda extends Scope
       
       //properties
            //documentation = "The toplevel scope"
            //propdoc =
           Toplevel.documentation="The toplevel scope";
           Toplevel.propdoc={
          "globals": "[Object/S] a map of name -> SymbolDef for all undeclared names"
                          };
       



    //    public class Lambda extends Scope
    // constructor
    function Lambda(){ // default constructor
    // default constructor: call super.constructor
        Scope.prototype.constructor.apply(this,arguments)
       //properties
            //uses_arguments     // [boolean/S] tells whether this function accesses the arguments array
            //argnames     // [AST_SymbolFunarg*] array of function arguments
            //name     // [AST_SymbolDeclaration?] the name of this function
    };
    // Lambda (extends|proto is) Scope
    Lambda.prototype.__proto__ = Scope.prototype;
    
    // export
    module.exports.Lambda = Lambda;
    
    // end class Lambda

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            if (this.name) this.name._walk(visitor);
//            this.argnames.forEach(function(arg)
//                arg._walk(visitor);
//            );
//            walk_body(this, visitor);
//        );
//       


    //append to namespace Lambda
    
       //properties
            //documentation = "Base class for functions"
            //propdoc =
                          //"name": "[AST_SymbolDeclaration?] the name of this function",
                          //"argnames": "[AST_SymbolFunarg*] array of function arguments",
                          //"uses_arguments": "[boolean/S] tells whether this function accesses the arguments array"



    //    public class Accessor extends Lambda
       
       //properties
            //documentation = "Base class for functions"
            //propdoc =
           Lambda.documentation="Base class for functions";
           Lambda.propdoc={
          "name": "[AST_SymbolDeclaration?] the name of this function"
          , "argnames": "[AST_SymbolFunarg*] array of function arguments"
          , "uses_arguments": "[boolean/S] tells whether this function accesses the arguments array"
                          };
       



    //    public class Accessor extends Lambda
    // constructor
    function Accessor(){ // default constructor
    // default constructor: call super.constructor
        Lambda.prototype.constructor.apply(this,arguments)
    };
    // Accessor (extends|proto is) Lambda
    Accessor.prototype.__proto__ = Lambda.prototype;

//A setter/getter function.  The `name` property is always null.

      //do nothing
      null;
    // export
    module.exports.Accessor = Accessor;
    
    // end class Accessor


    //append to namespace Accessor
    
       //properties
            //documentation = "A setter/getter function.  The `name` property is always null."


    //    public class FunctionExpression extends Lambda
       
       //properties
            //documentation = "A setter/getter function.  The `name` property is always null."
           Accessor.documentation="A setter/getter function.  The `name` property is always null.";
       


    //    public class FunctionExpression extends Lambda
    // constructor
    function FunctionExpression(){ // default constructor
    // default constructor: call super.constructor
        Lambda.prototype.constructor.apply(this,arguments)
    };
    // FunctionExpression (extends|proto is) Lambda
    FunctionExpression.prototype.__proto__ = Lambda.prototype;

//A function expression

      //do nothing
      null;
    // export
    module.exports.FunctionExpression = FunctionExpression;
    
    // end class FunctionExpression


    //append to namespace FunctionExpression
    
       //properties
            //documentation = "A function expression"


    //    public class Defun extends Lambda
       
       //properties
            //documentation = "A function expression"
           FunctionExpression.documentation="A function expression";
       


    //    public class Defun extends Lambda
    // constructor
    function Defun(){ // default constructor
    // default constructor: call super.constructor
        Lambda.prototype.constructor.apply(this,arguments)
    };
    // Defun (extends|proto is) Lambda
    Defun.prototype.__proto__ = Lambda.prototype;

//A function definition

      //do nothing
      null;
    // export
    module.exports.Defun = Defun;
    
    // end class Defun


    //append to namespace Defun
    
       //properties
            //documentation = "A function definition"


    //    public class Jump extends Statement
       
       //properties
            //documentation = "A function definition"
           Defun.documentation="A function definition";
       


    //    public class Jump extends Statement
    // constructor
    function Jump(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
    };
    // Jump (extends|proto is) Statement
    Jump.prototype.__proto__ = Statement.prototype;

//Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)

      //do nothing
      null;
    // export
    module.exports.Jump = Jump;
    
    // end class Jump


    //append to namespace Jump
    
       //properties
            //documentation = "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"


    //    public class ExitStatement extends Jump
       
       //properties
            //documentation = "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"
           Jump.documentation="Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)";
       


    //    public class ExitStatement extends Jump
    // constructor
    function ExitStatement(){ // default constructor
    // default constructor: call super.constructor
        Jump.prototype.constructor.apply(this,arguments)
       //properties
            //value     // [AST_Node?] the value returned or thrown by this statement; could be null for AST_Return
    };
    // ExitStatement (extends|proto is) Jump
    ExitStatement.prototype.__proto__ = Jump.prototype;
    
    // export
    module.exports.ExitStatement = ExitStatement;
    
    // end class ExitStatement

//method _walk (visitor)
//        return visitor._visit(this, this.value and function()
//            this.value._walk(visitor);
//        );


    //append to namespace ExitStatement
    
       //properties
            //documentation = "Base class for “exits” (`return` and `throw`)"
            //propdoc =
                          //"value": "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"



    //    public class ReturnStatement extends ExitStatement
       
       //properties
            //documentation = "Base class for “exits” (`return` and `throw`)"
            //propdoc =
           ExitStatement.documentation="Base class for “exits” (`return` and `throw`)";
           ExitStatement.propdoc={
          "value": "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
                          };
       



    //    public class ReturnStatement extends ExitStatement
    // constructor
    function ReturnStatement(){ // default constructor
    // default constructor: call super.constructor
        ExitStatement.prototype.constructor.apply(this,arguments)
    };
    // ReturnStatement (extends|proto is) ExitStatement
    ReturnStatement.prototype.__proto__ = ExitStatement.prototype;

//A `return` statement

      //do nothing
      null;
    // export
    module.exports.ReturnStatement = ReturnStatement;
    
    // end class ReturnStatement


    //append to namespace ReturnStatement
    
       //properties
            //documentation = "A `return` statement"


    //    public class ThrowStatement extends ExitStatement
       
       //properties
            //documentation = "A `return` statement"
           ReturnStatement.documentation="A `return` statement";
       


    //    public class ThrowStatement extends ExitStatement
    // constructor
    function ThrowStatement(){ // default constructor
    // default constructor: call super.constructor
        ExitStatement.prototype.constructor.apply(this,arguments)
    };
    // ThrowStatement (extends|proto is) ExitStatement
    ThrowStatement.prototype.__proto__ = ExitStatement.prototype;

//A `throw` statement

      //do nothing
      null;
    // export
    module.exports.ThrowStatement = ThrowStatement;
    
    // end class ThrowStatement


    //append to namespace ThrowStatement
    
       //properties
            //documentation = "A `throw` statement"


    //    public class LoopControl extends Jump
       
       //properties
            //documentation = "A `throw` statement"
           ThrowStatement.documentation="A `throw` statement";
       


    //    public class LoopControl extends Jump
    // constructor
    function LoopControl(){ // default constructor
    // default constructor: call super.constructor
        Jump.prototype.constructor.apply(this,arguments)
       //properties
            //label     // [AST_LabelRef?] the label, or null if none
    };
    // LoopControl (extends|proto is) Jump
    LoopControl.prototype.__proto__ = Jump.prototype;
    
    // export
    module.exports.LoopControl = LoopControl;
    
    // end class LoopControl

//
//       method _walk (visitor)
//        return visitor._visit(this, this.label and function()
//            this.label._walk(visitor);
//        );
//      

    //append to namespace LoopControl
    
       //properties
            //documentation = "Base class for loop control statements (`break` and `continue`)"
            //propdoc =
                          //"label": "[AST_LabelRef?] the label, or null if none"



    //    public class BreakStatement extends LoopControl
       
       //properties
            //documentation = "Base class for loop control statements (`break` and `continue`)"
            //propdoc =
           LoopControl.documentation="Base class for loop control statements (`break` and `continue`)";
           LoopControl.propdoc={
          "label": "[AST_LabelRef?] the label, or null if none"
                          };
       



    //    public class BreakStatement extends LoopControl
    // constructor
    function BreakStatement(){ // default constructor
    // default constructor: call super.constructor
        LoopControl.prototype.constructor.apply(this,arguments)
    };
    // BreakStatement (extends|proto is) LoopControl
    BreakStatement.prototype.__proto__ = LoopControl.prototype;

//A `break` statement

      //do nothing
      null;
    // export
    module.exports.BreakStatement = BreakStatement;
    
    // end class BreakStatement


    //append to namespace BreakStatement
    
       //properties
            //documentation = "A `break` statement"


    //    public class ContinueStatement extends LoopControl
       
       //properties
            //documentation = "A `break` statement"
           BreakStatement.documentation="A `break` statement";
       


    //    public class ContinueStatement extends LoopControl
    // constructor
    function ContinueStatement(){ // default constructor
    // default constructor: call super.constructor
        LoopControl.prototype.constructor.apply(this,arguments)
    };
    // ContinueStatement (extends|proto is) LoopControl
    ContinueStatement.prototype.__proto__ = LoopControl.prototype;

//A `continue` statement

      //do nothing
      null;
    // export
    module.exports.ContinueStatement = ContinueStatement;
    
    // end class ContinueStatement


    //append to namespace ContinueStatement
    
       //properties
            //documentation = "A `continue` statement"


    //    public class IfStatement extends StatementWithBody
       
       //properties
            //documentation = "A `continue` statement"
           ContinueStatement.documentation="A `continue` statement";
       


    //    public class IfStatement extends StatementWithBody
    // constructor
    function IfStatement(){ // default constructor
    // default constructor: call super.constructor
        StatementWithBody.prototype.constructor.apply(this,arguments)
       //properties
            //alternative     // [AST_Statement?] the `else` part, or null if not present
            //condition     // [AST_Node] the `if` condition
    };
    // IfStatement (extends|proto is) StatementWithBody
    IfStatement.prototype.__proto__ = StatementWithBody.prototype;
    
    // export
    module.exports.IfStatement = IfStatement;
    
    // end class IfStatement

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.condition._walk(visitor);
//            this.body._walk(visitor);
//            if (this.alternative) this.alternative._walk(visitor);
//        );
//        


    //append to namespace IfStatement
    
       //properties
            //documentation = "A `if` statement"
            //propdoc =
                          //"condition": "[AST_Node] the `if` condition",
                          //"alternative": "[AST_Statement?] the `else` part, or null if not present"


    //    public class Switch extends Block
       
       //properties
            //documentation = "A `if` statement"
            //propdoc =
           IfStatement.documentation="A `if` statement";
           IfStatement.propdoc={
          "condition": "[AST_Node] the `if` condition"
          , "alternative": "[AST_Statement?] the `else` part, or null if not present"
                          };
       


    //    public class Switch extends Block
    // constructor
    function Switch(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
       //properties
            //expression     // [AST_Node] the `switch` “discriminant”
    };
    // Switch (extends|proto is) Block
    Switch.prototype.__proto__ = Block.prototype;
    
    // export
    module.exports.Switch = Switch;
    
    // end class Switch

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//            walk_body(this, visitor);
//        );
//       

    //append to namespace Switch
    
       //properties
            //documentation = "A `switch` statement"
            //propdoc =
                          //"expression": "[AST_Node] the `switch` “discriminant”"



    //    public class SwitchBranch extends Block
       
       //properties
            //documentation = "A `switch` statement"
            //propdoc =
           Switch.documentation="A `switch` statement";
           Switch.propdoc={
          "expression": "[AST_Node] the `switch` “discriminant”"
                          };
       



    //    public class SwitchBranch extends Block
    // constructor
    function SwitchBranch(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
    };
    // SwitchBranch (extends|proto is) Block
    SwitchBranch.prototype.__proto__ = Block.prototype;

//Base class for `switch` branches

      //do nothing
      null;
    // export
    module.exports.SwitchBranch = SwitchBranch;
    
    // end class SwitchBranch


    //append to namespace SwitchBranch
    
       //properties
            //documentation = "Base class for `switch` branches"


    //    public class Default extends SwitchBranch
       
       //properties
            //documentation = "Base class for `switch` branches"
           SwitchBranch.documentation="Base class for `switch` branches";
       


    //    public class Default extends SwitchBranch
    // constructor
    function Default(){ // default constructor
    // default constructor: call super.constructor
        SwitchBranch.prototype.constructor.apply(this,arguments)
    };
    // Default (extends|proto is) SwitchBranch
    Default.prototype.__proto__ = SwitchBranch.prototype;

//A `default` switch branch

      //do nothing
      null;
    // export
    module.exports.Default = Default;
    
    // end class Default


    //append to namespace Default
    
       //properties
            //documentation = "A `default` switch branch"


    //    public class Case extends SwitchBranch
       
       //properties
            //documentation = "A `default` switch branch"
           Default.documentation="A `default` switch branch";
       


    //    public class Case extends SwitchBranch
    // constructor
    function Case(){ // default constructor
    // default constructor: call super.constructor
        SwitchBranch.prototype.constructor.apply(this,arguments)
       //properties
            //expression     // [AST_Node] the `case` expression
    };
    // Case (extends|proto is) SwitchBranch
    Case.prototype.__proto__ = SwitchBranch.prototype;
    
    // export
    module.exports.Case = Case;
    
    // end class Case

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//            walk_body(this, visitor);
//        );



    //append to namespace Case
    
       //properties
            //documentation = "A `case` switch branch"
            //propdoc =
                          //"expression": "[AST_Node] the `case` expression"



    //    public class Try extends Block
       
       //properties
            //documentation = "A `case` switch branch"
            //propdoc =
           Case.documentation="A `case` switch branch";
           Case.propdoc={
          "expression": "[AST_Node] the `case` expression"
                          };
       



    //    public class Try extends Block
    // constructor
    function Try(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
       //properties
            //bfinally     // [AST_Finally?] the finally block, or null if not present
            //bcatch     // [AST_Catch?] the catch block, or null if not present
    };
    // Try (extends|proto is) Block
    Try.prototype.__proto__ = Block.prototype;
    
    // export
    module.exports.Try = Try;
    
    // end class Try

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            walk_body(this, visitor);
//            if (this.bcatch) this.bcatch._walk(visitor);
//            if (this.bfinally) this.bfinally._walk(visitor);
//        );
//      


    //append to namespace Try
    
       //properties
            //documentation = "A `try` statement"
            //propdoc =
                          //"bcatch": "[AST_Catch?] the catch block, or null if not present",
                          //"bfinally": "[AST_Finally?] the finally block, or null if not present"



    //    public class Catch extends Block
       
       //properties
            //documentation = "A `try` statement"
            //propdoc =
           Try.documentation="A `try` statement";
           Try.propdoc={
          "bcatch": "[AST_Catch?] the catch block, or null if not present"
          , "bfinally": "[AST_Finally?] the finally block, or null if not present"
                          };
       



    //    public class Catch extends Block
    // constructor
    function Catch(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
       //properties
            //argname     // [AST_SymbolCatch] symbol for the exception
    };
    // Catch (extends|proto is) Block
    Catch.prototype.__proto__ = Block.prototype;
    
    // export
    module.exports.Catch = Catch;
    
    // end class Catch

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.argname._walk(visitor);
//            walk_body(this, visitor);
//        );



    //append to namespace Catch
    
       //properties
            //documentation = "A `catch` node; only makes sense as part of a `try` statement"
            //propdoc =
                          //"argname": "[AST_SymbolCatch] symbol for the exception"



    //    public class Finally extends Block
       
       //properties
            //documentation = "A `catch` node; only makes sense as part of a `try` statement"
            //propdoc =
           Catch.documentation="A `catch` node; only makes sense as part of a `try` statement";
           Catch.propdoc={
          "argname": "[AST_SymbolCatch] symbol for the exception"
                          };
       



    //    public class Finally extends Block
    // constructor
    function Finally(){ // default constructor
    // default constructor: call super.constructor
        Block.prototype.constructor.apply(this,arguments)
    };
    // Finally (extends|proto is) Block
    Finally.prototype.__proto__ = Block.prototype;

//A `finally` node; only makes sense as part of a `try` statement

      //do nothing
      null;
    // export
    module.exports.Finally = Finally;
    
    // end class Finally


    //append to namespace Finally
    
       //properties
            //documentation = "A `finally` node; only makes sense as part of a `try` statement"


    //    public class Definitions extends Statement
       
       //properties
            //documentation = "A `finally` node; only makes sense as part of a `try` statement"
           Finally.documentation="A `finally` node; only makes sense as part of a `try` statement";
       


    //    public class Definitions extends Statement
    // constructor
    function Definitions(){ // default constructor
    // default constructor: call super.constructor
        Statement.prototype.constructor.apply(this,arguments)
       //properties
            //definitions: array of VarDef    // [AST_VarDef*] array of variable definitions
    };
    // Definitions (extends|proto is) Statement
    Definitions.prototype.__proto__ = Statement.prototype;
    
    // export
    module.exports.Definitions = Definitions;
    
    // end class Definitions

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.definitions.forEach(function(def)
//                def._walk(visitor);
//            );
//        );



    //append to namespace Definitions
    
       //properties
            //documentation = "Base class for `var` or `const` nodes (variable declarations/initializations)"
            //propdoc =
                          //"definitions": "[AST_VarDef*] array of variable definitions"



    //    public class Var extends Definitions
       
       //properties
            //documentation = "Base class for `var` or `const` nodes (variable declarations/initializations)"
            //propdoc =
           Definitions.documentation="Base class for `var` or `const` nodes (variable declarations/initializations)";
           Definitions.propdoc={
          "definitions": "[AST_VarDef*] array of variable definitions"
                          };
       



    //    public class Var extends Definitions
    // constructor
    function Var(){ // default constructor
    // default constructor: call super.constructor
        Definitions.prototype.constructor.apply(this,arguments)
    };
    // Var (extends|proto is) Definitions
    Var.prototype.__proto__ = Definitions.prototype;

//A `var` statement

      //do nothing
      null;
    // export
    module.exports.Var = Var;
    
    // end class Var


    //append to namespace Var
    
       //properties
            //documentation = "A `var` statement"


    //    public class Const extends Definitions
       
       //properties
            //documentation = "A `var` statement"
           Var.documentation="A `var` statement";
       


    //    public class Const extends Definitions
    // constructor
    function Const(){ // default constructor
    // default constructor: call super.constructor
        Definitions.prototype.constructor.apply(this,arguments)
    };
    // Const (extends|proto is) Definitions
    Const.prototype.__proto__ = Definitions.prototype;

//A `const` statement

      //do nothing
      null;
    // export
    module.exports.Const = Const;
    
    // end class Const


    //append to namespace Const
    
       //properties
            //documentation = "A `const` statement"


    //    public class VarDef extends Node
       
       //properties
            //documentation = "A `const` statement"
           Const.documentation="A `const` statement";
       


    //    public class VarDef extends Node
    // constructor
    function VarDef(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //value     // [AST_Node?] initializer, or null of there's no initializer
            //name     // [AST_SymbolVar|AST_SymbolConst] name of the variable
    };
    // VarDef (extends|proto is) Node
    VarDef.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.VarDef = VarDef;
    
    // end class VarDef

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.name._walk(visitor);
//            if (this.value) this.value._walk(visitor);
//        );
//        


    //append to namespace VarDef
    
       //properties
            //documentation = "A variable declaration; only appears in a AST_Definitions node"
            //propdoc =
                          //"name": "[AST_SymbolVar|AST_SymbolConst] name of the variable",
                          //"value": "[AST_Node?] initializer, or null of there's no initializer"



    //    public class CallStatement extends Node
       
       //properties
            //documentation = "A variable declaration; only appears in a AST_Definitions node"
            //propdoc =
           VarDef.documentation="A variable declaration; only appears in a AST_Definitions node";
           VarDef.propdoc={
          "name": "[AST_SymbolVar|AST_SymbolConst] name of the variable"
          , "value": "[AST_Node?] initializer, or null of there's no initializer"
                          };
       



    //    public class CallStatement extends Node
    // constructor
    function CallStatement(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //args     // [AST_Node*] array of arguments
            //expression     // [AST_Node] expression to invoke as function
    };
    // CallStatement (extends|proto is) Node
    CallStatement.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.CallStatement = CallStatement;
    
    // end class CallStatement

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//            this.args.forEach(function(arg)
//                arg._walk(visitor);
//            );
//        );
//        


    //append to namespace CallStatement
    
       //properties
            //documentation = "A function call expression"
            //propdoc =
                          //"expression": "[AST_Node] expression to invoke as function",
                          //"args": "[AST_Node*] array of arguments"



    //    public class New extends CallStatement
       
       //properties
            //documentation = "A function call expression"
            //propdoc =
           CallStatement.documentation="A function call expression";
           CallStatement.propdoc={
          "expression": "[AST_Node] expression to invoke as function"
          , "args": "[AST_Node*] array of arguments"
                          };
       



    //    public class New extends CallStatement
    // constructor
    function New(){ // default constructor
    // default constructor: call super.constructor
        CallStatement.prototype.constructor.apply(this,arguments)
    };
    // New (extends|proto is) CallStatement
    New.prototype.__proto__ = CallStatement.prototype;

//An object instantiation.  Derives from a function call since it has exactly the same properties

      //do nothing
      null;
    // export
    module.exports.New = New;
    
    // end class New


    //append to namespace New
    
       //properties
            //documentation = "An object instantiation.  Derives from a function call since it has exactly the same properties"


    //    public class Seq extends Node
       
       //properties
            //documentation = "An object instantiation.  Derives from a function call since it has exactly the same properties"
           New.documentation="An object instantiation.  Derives from a function call since it has exactly the same properties";
       


    //    public class Seq extends Node
    // constructor
    function Seq(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //cdr     // [AST_Node] second element in sequence
            //car     // [AST_Node] first element in sequence
    };
    // Seq (extends|proto is) Node
    Seq.prototype.__proto__ = Node.prototype;

       //method to_array ()
       Seq.prototype.to_array = function(){
        //var p = this, a = [];
        var p = this, a = [];
        //while (p)
        while((p)){
            //a.push(p.car);
            a.push(p.car);
            //if p.cdr and p.cdr isnt instance of Seq
            if (p.cdr && !(p.cdr instanceof Seq)) {
            
                //a.push(p.cdr);
                a.push(p.cdr);
                //break;
                break;
            };

            //p = p.cdr;
            p = p.cdr;
        };// end loop

        //return a;
        return a;
       };


       //method add (node)
       Seq.prototype.add = function(node){
        //var p = this;
        var p = this;
        //while (p)
        while((p)){
            //if p.cdr isnt instanceof Seq
            if (!(p.cdr instanceof Seq)) {
            
                //var cell = Seq.cons(p.cdr, node);
                var cell = Seq.cons(p.cdr, node);
                //return cell into p.cdr;
                return (p.cdr=cell);
            };

            //p = p.cdr;
            p = p.cdr;
        };// end loop
        
       };
    // export
    module.exports.Seq = Seq;
    
    // end class Seq

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.car._walk(visitor);
//            if (this.cdr) this.cdr._walk(visitor);
//        );
//      


    //append to namespace Seq
    

      //properties
            //documentation = "A sequence expression (two comma-separated expressions)"
            //propdoc =
                          //"car": "[AST_Node] first element in sequence",
                          //"cdr": "[AST_Node] second element in sequence"

      //method cons(x, y) returns Seq
      
      //properties
            //documentation = "A sequence expression (two comma-separated expressions)"
            //propdoc =
          Seq.documentation="A sequence expression (two comma-separated expressions)";
          Seq.propdoc={
         "car": "[AST_Node] first element in sequence"
         , "cdr": "[AST_Node] second element in sequence"
                          };

      //method cons(x, y) returns Seq
      Seq.cons = function(x, y){
          //var seq = new Seq(x);
          var seq = new Seq(x);
          //seq.car = x;
          seq.car = x;
          //seq.cdr = y;
          seq.cdr = y;
          //return seq;
          return seq;
      };

      //method from_array(array)
      Seq.from_array = function(array){
          //if (array.length is 0), return null;
          if ((array.length === 0)) {return null};
          //if (array.length is 1), return array[0].clone();
          if ((array.length === 1)) {return array[0].clone()};
          //var list = null;
          var list = null;
          //for  i = array.length down to 0
          var _end1=0;
          for( var i=array.length; i>=_end1; i--) {
              //list = Seq.cons(array[i], list);
              list = Seq.cons(array[i], list);
          };// end for i

          //var p:Seq = list;
          var p = list;
          //while p
          while(p){
              //if (p.cdr and not p.cdr.cdr)
              if ((p.cdr && !(p.cdr.cdr))) {
              
                  //p.cdr = p.cdr.car
                  p.cdr = p.cdr.car;
                  //break
                  break;
              };

              //p = p.cdr
              p = p.cdr;
          };// end loop

          //return list
          return list;
      };



    //    public class PropAccess extends Node
    // constructor
    function PropAccess(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //prop           // [AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node
            //expression     // [AST_Node] the “container” expression
    };
    // PropAccess (extends|proto is) Node
    PropAccess.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.PropAccess = PropAccess;
    
    // end class PropAccess


    //append to namespace PropAccess
    
       //properties
            //documentation = "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`"
            //propdoc =
                          //"expression": "[AST_Node] the “container” expression",
                          //"property": "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"



    //    public class Dot extends PropAccess
       
       //properties
            //documentation = "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`"
            //propdoc =
           PropAccess.documentation="Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`";
           PropAccess.propdoc={
          "expression": "[AST_Node] the “container” expression"
          , "property": "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
                          };
       



    //    public class Dot extends PropAccess
    // constructor
    function Dot(){ // default constructor
    // default constructor: call super.constructor
        PropAccess.prototype.constructor.apply(this,arguments)
    };
    // Dot (extends|proto is) PropAccess
    Dot.prototype.__proto__ = PropAccess.prototype;

//A dotted property access expression

      //do nothing
      null;
    // export
    module.exports.Dot = Dot;
    
    // end class Dot


//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//        );
//      


    //append to namespace Dot
    
       //properties
            //documentation = "A dotted property access expression"


    //    public class Sub extends PropAccess
       
       //properties
            //documentation = "A dotted property access expression"
           Dot.documentation="A dotted property access expression";
       


    //    public class Sub extends PropAccess
    // constructor
    function Sub(){ // default constructor
    // default constructor: call super.constructor
        PropAccess.prototype.constructor.apply(this,arguments)
    };
    // Sub (extends|proto is) PropAccess
    Sub.prototype.__proto__ = PropAccess.prototype;

//Index-style property access, i.e. `a["foo"]`

      //do nothing
      null;
    // export
    module.exports.Sub = Sub;
    
    // end class Sub


//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//            this.property._walk(visitor);
//        );
//      

    //append to namespace Sub
    
       //properties
            //documentation = "Index-style property access, i.e. `a[\"foo\"]`"


    //    public class Unary extends Node
       
       //properties
            //documentation = "Index-style property access, i.e. `a[\"foo\"]`"
           Sub.documentation="Index-style property access, i.e. `a[\"foo\"]`";
       


    //    public class Unary extends Node
    // constructor
    function Unary(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //expression     // [AST_Node] expression that this unary operator applies to
            //operator     // [string] the operator
    };
    // Unary (extends|proto is) Node
    Unary.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.Unary = Unary;
    
    // end class Unary

//method _walk (visitor)
//        return visitor._visit(this, function()
//            this.expression._walk(visitor);
//        );



    //append to namespace Unary
    
       //properties
            //documentation = "Base class for unary expressions"
            //propdoc =
                          //"operator": "[string] the operator",
                          //"expression": "[AST_Node] expression that this unary operator applies to"



    //    public class UnaryPrefix extends Unary
       
       //properties
            //documentation = "Base class for unary expressions"
            //propdoc =
           Unary.documentation="Base class for unary expressions";
           Unary.propdoc={
          "operator": "[string] the operator"
          , "expression": "[AST_Node] expression that this unary operator applies to"
                          };
       



    //    public class UnaryPrefix extends Unary
    // constructor
    function UnaryPrefix(){ // default constructor
    // default constructor: call super.constructor
        Unary.prototype.constructor.apply(this,arguments)
    };
    // UnaryPrefix (extends|proto is) Unary
    UnaryPrefix.prototype.__proto__ = Unary.prototype;

//Unary prefix expression, i.e. `typeof i` or `++i`

      //do nothing
      null;
    // export
    module.exports.UnaryPrefix = UnaryPrefix;
    
    // end class UnaryPrefix


    //append to namespace UnaryPrefix
    
       //properties
            //documentation = "Unary prefix expression, i.e. `typeof i` or `++i`"


    //    public class UnaryPostfix extends Unary
       
       //properties
            //documentation = "Unary prefix expression, i.e. `typeof i` or `++i`"
           UnaryPrefix.documentation="Unary prefix expression, i.e. `typeof i` or `++i`";
       


    //    public class UnaryPostfix extends Unary
    // constructor
    function UnaryPostfix(){ // default constructor
    // default constructor: call super.constructor
        Unary.prototype.constructor.apply(this,arguments)
    };
    // UnaryPostfix (extends|proto is) Unary
    UnaryPostfix.prototype.__proto__ = Unary.prototype;

//Unary postfix expression, i.e. `i++`

      //do nothing
      null;
    // export
    module.exports.UnaryPostfix = UnaryPostfix;
    
    // end class UnaryPostfix


    //append to namespace UnaryPostfix
    
       //properties
            //documentation = "Unary postfix expression, i.e. `i++`"


    //    public class Binary extends Node
       
       //properties
            //documentation = "Unary postfix expression, i.e. `i++`"
           UnaryPostfix.documentation="Unary postfix expression, i.e. `i++`";
       


    //    public class Binary extends Node
    // constructor
    function Binary(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //right     // [AST_Node] right-hand side expression
            //operator     // [string] the operator
            //left     // [AST_Node] left-hand side expression
    };
    // Binary (extends|proto is) Node
    Binary.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.Binary = Binary;
    
    // end class Binary

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.left._walk(visitor);
//            this.right._walk(visitor);
//        );
//      


    //append to namespace Binary
    
       //properties
            //documentation = "Binary expression, i.e. `a + b`"
            //propdoc =
                          //"left": "[AST_Node] left-hand side expression",
                          //"operator": "[string] the operator",
                          //"right": "[AST_Node] right-hand side expression"



    //    public class Conditional extends Node
       
       //properties
            //documentation = "Binary expression, i.e. `a + b`"
            //propdoc =
           Binary.documentation="Binary expression, i.e. `a + b`";
           Binary.propdoc={
          "left": "[AST_Node] left-hand side expression"
          , "operator": "[string] the operator"
          , "right": "[AST_Node] right-hand side expression"
                          };
       



    //    public class Conditional extends Node
    // constructor
    function Conditional(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //alternative     // [AST_Node]
            //consequent     // [AST_Node]
            //condition     // [AST_Node]
    };
    // Conditional (extends|proto is) Node
    Conditional.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.Conditional = Conditional;
    
    // end class Conditional

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.condition._walk(visitor);
//            this.consequent._walk(visitor);
//            this.alternative._walk(visitor);
//        );
//      


    //append to namespace Conditional
    
       //properties
            //documentation = "Conditional expression using the ternary operator, i.e. `a ? b : c`"
            //propdoc =
                          //"condition": "[AST_Node]",
                          //"consequent": "[AST_Node]",
                          //"alternative": "[AST_Node]"



    //    public class Assign extends Binary
       
       //properties
            //documentation = "Conditional expression using the ternary operator, i.e. `a ? b : c`"
            //propdoc =
           Conditional.documentation="Conditional expression using the ternary operator, i.e. `a ? b : c`";
           Conditional.propdoc={
          "condition": "[AST_Node]"
          , "consequent": "[AST_Node]"
          , "alternative": "[AST_Node]"
                          };
       



    //    public class Assign extends Binary
    // constructor
    function Assign(){ // default constructor
    // default constructor: call super.constructor
        Binary.prototype.constructor.apply(this,arguments)
    };
    // Assign (extends|proto is) Binary
    Assign.prototype.__proto__ = Binary.prototype;

//An assignment expression — `a = b + 5`

      //do nothing
      null;
    // export
    module.exports.Assign = Assign;
    
    // end class Assign


    //append to namespace Assign
    
       //properties
            //documentation = "An assignment expression — `a = b + 5`"


    //    public class ArrayLiteral extends Node
       
       //properties
            //documentation = "An assignment expression — `a = b + 5`"
           Assign.documentation="An assignment expression — `a = b + 5`";
       


    //    public class ArrayLiteral extends Node
    // constructor
    function ArrayLiteral(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //elements     // [AST_Node*] array of elements
    };
    // ArrayLiteral (extends|proto is) Node
    ArrayLiteral.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.ArrayLiteral = ArrayLiteral;
    
    // end class ArrayLiteral

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.elements.forEach(function(el)
//                el._walk(visitor);
//            );
//        );
//        

    //append to namespace ArrayLiteral
    
       //properties
            //documentation = "An array literal"
            //propdoc =
                          //"elements": "[AST_Node*] array of elements"



    //    public class ObjectLiteral extends Node
       
       //properties
            //documentation = "An array literal"
            //propdoc =
           ArrayLiteral.documentation="An array literal";
           ArrayLiteral.propdoc={
          "elements": "[AST_Node*] array of elements"
                          };
       



    //    public class ObjectLiteral extends Node
    // constructor
    function ObjectLiteral(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //props     // [AST_ObjectProperty*] array of properties
    };
    // ObjectLiteral (extends|proto is) Node
    ObjectLiteral.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.ObjectLiteral = ObjectLiteral;
    
    // end class ObjectLiteral

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.properties.forEach(function(prop)
//                prop._walk(visitor);
//            );
//        );
//        


    //append to namespace ObjectLiteral
    
       //properties
            //documentation = "An object literal"
            //propdoc =
                          //"properties": "[AST_ObjectProperty*] array of properties"



    //    public class ObjectProperty extends Node
       
       //properties
            //documentation = "An object literal"
            //propdoc =
           ObjectLiteral.documentation="An object literal";
           ObjectLiteral.propdoc={
          "properties": "[AST_ObjectProperty*] array of properties"
                          };
       



    //    public class ObjectProperty extends Node
    // constructor
    function ObjectProperty(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //value     // [AST_Node] property value.  For setters and getters this is an AST_Function.
            //key     // [string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.
    };
    // ObjectProperty (extends|proto is) Node
    ObjectProperty.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.ObjectProperty = ObjectProperty;
    
    // end class ObjectProperty

//
//       method _walk (visitor)
//        return visitor._visit(this, function()
//            this.value._walk(visitor);
//        );
//      


    //append to namespace ObjectProperty
    
       //properties
            //documentation = "Base class for literal object properties"
            //propdoc =
                          //"key": "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",
                          //"value": "[AST_Node] property value.  For setters and getters this is an AST_Function."



    //    public class ObjectKeyVal extends ObjectProperty
       
       //properties
            //documentation = "Base class for literal object properties"
            //propdoc =
           ObjectProperty.documentation="Base class for literal object properties";
           ObjectProperty.propdoc={
          "key": "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node."
          , "value": "[AST_Node] property value.  For setters and getters this is an AST_Function."
                          };
       



    //    public class ObjectKeyVal extends ObjectProperty
    // constructor
    function ObjectKeyVal(){ // default constructor
    // default constructor: call super.constructor
        ObjectProperty.prototype.constructor.apply(this,arguments)
    };
    // ObjectKeyVal (extends|proto is) ObjectProperty
    ObjectKeyVal.prototype.__proto__ = ObjectProperty.prototype;

//A key:value object property

      //do nothing
      null;
    // export
    module.exports.ObjectKeyVal = ObjectKeyVal;
    
    // end class ObjectKeyVal


    //append to namespace ObjectKeyVal
    
       //properties
            //documentation = "A key: value object property"


    //    public class ObjectSetter extends ObjectProperty
       
       //properties
            //documentation = "A key: value object property"
           ObjectKeyVal.documentation="A key: value object property";
       


    //    public class ObjectSetter extends ObjectProperty
    // constructor
    function ObjectSetter(){ // default constructor
    // default constructor: call super.constructor
        ObjectProperty.prototype.constructor.apply(this,arguments)
    };
    // ObjectSetter (extends|proto is) ObjectProperty
    ObjectSetter.prototype.__proto__ = ObjectProperty.prototype;

//An object setter property

      //do nothing
      null;
    // export
    module.exports.ObjectSetter = ObjectSetter;
    
    // end class ObjectSetter



    //append to namespace ObjectSetter
    
       //properties
            //documentation = "An object setter property"


    //    public class ObjectGetter extends ObjectProperty
       
       //properties
            //documentation = "An object setter property"
           ObjectSetter.documentation="An object setter property";
       


    //    public class ObjectGetter extends ObjectProperty
    // constructor
    function ObjectGetter(){ // default constructor
    // default constructor: call super.constructor
        ObjectProperty.prototype.constructor.apply(this,arguments)
    };
    // ObjectGetter (extends|proto is) ObjectProperty
    ObjectGetter.prototype.__proto__ = ObjectProperty.prototype;

//An object getter property

      //do nothing
      null;
    // export
    module.exports.ObjectGetter = ObjectGetter;
    
    // end class ObjectGetter


    //append to namespace ObjectGetter
    
       //properties
            //documentation = "An object getter property"


    //    public class Symbol extends Node
       
       //properties
            //documentation = "An object getter property"
           ObjectGetter.documentation="An object getter property";
       


    //    public class Symbol extends Node
    // constructor
    function Symbol(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
       //properties
            //thedef     // [SymbolDef/S] the definition of this symbol
            //name     // [string] name of this symbol
            //scope     // [AST_Scope/S] the current scope (not necessarily the definition scope)
    };
    // Symbol (extends|proto is) Node
    Symbol.prototype.__proto__ = Node.prototype;
    
    // export
    module.exports.Symbol = Symbol;
    
    // end class Symbol


    //append to namespace Symbol
    
       //properties
            //propdoc =
                          //"name": "[string] name of this symbol",
                          //"scope": "[AST_Scope/S] the current scope (not necessarily the definition scope)",
                          //"thedef": "[SymbolDef/S] the definition of this symbol"

            //documentation = "Base class for all symbols"


    //    public class SymbolAccessor extends Symbol
       
       //properties
            //propdoc =
                          //"name": "[string] name of this symbol",
                          //"scope": "[AST_Scope/S] the current scope (not necessarily the definition scope)",
                          //"thedef": "[SymbolDef/S] the definition of this symbol"

            //documentation = "Base class for all symbols"
           Symbol.propdoc={
          "name": "[string] name of this symbol"
          , "scope": "[AST_Scope/S] the current scope (not necessarily the definition scope)"
          , "thedef": "[SymbolDef/S] the definition of this symbol"
                          };
           Symbol.documentation="Base class for all symbols";
       


    //    public class SymbolAccessor extends Symbol
    // constructor
    function SymbolAccessor(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
    };
    // SymbolAccessor (extends|proto is) Symbol
    SymbolAccessor.prototype.__proto__ = Symbol.prototype;

//The name of a property accessor (setter/getter function)

      //do nothing
      null;
    // export
    module.exports.SymbolAccessor = SymbolAccessor;
    
    // end class SymbolAccessor


    //append to namespace SymbolAccessor
    
       //properties
            //documentation = "The name of a property accessor (setter/getter function)"


    //    public class SymbolDeclaration extends Symbol
       
       //properties
            //documentation = "The name of a property accessor (setter/getter function)"
           SymbolAccessor.documentation="The name of a property accessor (setter/getter function)";
       


    //    public class SymbolDeclaration extends Symbol
    // constructor
    function SymbolDeclaration(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
       //properties
            //init     // [AST_Node*/S] array of initializers for this declaration.
    };
    // SymbolDeclaration (extends|proto is) Symbol
    SymbolDeclaration.prototype.__proto__ = Symbol.prototype;
    
    // export
    module.exports.SymbolDeclaration = SymbolDeclaration;
    
    // end class SymbolDeclaration


    //append to namespace SymbolDeclaration
    
       //properties
            //documentation = "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"
            //propdoc =
                          //"init": "[AST_Node*/S] array of initializers for this declaration."



    //    public class SymbolVar extends SymbolDeclaration
       
       //properties
            //documentation = "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"
            //propdoc =
           SymbolDeclaration.documentation="A declaration symbol (symbol in var/const, function name or argument, symbol in catch)";
           SymbolDeclaration.propdoc={
          "init": "[AST_Node*/S] array of initializers for this declaration."
                          };
       



    //    public class SymbolVar extends SymbolDeclaration
    // constructor
    function SymbolVar(){ // default constructor
    // default constructor: call super.constructor
        SymbolDeclaration.prototype.constructor.apply(this,arguments)
    };
    // SymbolVar (extends|proto is) SymbolDeclaration
    SymbolVar.prototype.__proto__ = SymbolDeclaration.prototype;

//Symbol defining a variable

      //do nothing
      null;
    // export
    module.exports.SymbolVar = SymbolVar;
    
    // end class SymbolVar


    //append to namespace SymbolVar
    
       //properties
            //documentation = "Symbol defining a variable"


    //    public class SymbolConst extends SymbolDeclaration
       
       //properties
            //documentation = "Symbol defining a variable"
           SymbolVar.documentation="Symbol defining a variable";
       


    //    public class SymbolConst extends SymbolDeclaration
    // constructor
    function SymbolConst(){ // default constructor
    // default constructor: call super.constructor
        SymbolDeclaration.prototype.constructor.apply(this,arguments)
    };
    // SymbolConst (extends|proto is) SymbolDeclaration
    SymbolConst.prototype.__proto__ = SymbolDeclaration.prototype;

//A constant declaration

      //do nothing
      null;
    // export
    module.exports.SymbolConst = SymbolConst;
    
    // end class SymbolConst


    //append to namespace SymbolConst
    
       //properties
            //documentation = "A constant declaration"


    //    public class SymbolFunarg extends SymbolVar
       
       //properties
            //documentation = "A constant declaration"
           SymbolConst.documentation="A constant declaration";
       


    //    public class SymbolFunarg extends SymbolVar
    // constructor
    function SymbolFunarg(){ // default constructor
    // default constructor: call super.constructor
        SymbolVar.prototype.constructor.apply(this,arguments)
    };
    // SymbolFunarg (extends|proto is) SymbolVar
    SymbolFunarg.prototype.__proto__ = SymbolVar.prototype;

//Symbol naming a function argument

      //do nothing
      null;
    // export
    module.exports.SymbolFunarg = SymbolFunarg;
    
    // end class SymbolFunarg


    //append to namespace SymbolFunarg
    
       //properties
            //documentation = "Symbol naming a function argument"


    //    public class SymbolDefun extends SymbolDeclaration
       
       //properties
            //documentation = "Symbol naming a function argument"
           SymbolFunarg.documentation="Symbol naming a function argument";
       


    //    public class SymbolDefun extends SymbolDeclaration
    // constructor
    function SymbolDefun(){ // default constructor
    // default constructor: call super.constructor
        SymbolDeclaration.prototype.constructor.apply(this,arguments)
    };
    // SymbolDefun (extends|proto is) SymbolDeclaration
    SymbolDefun.prototype.__proto__ = SymbolDeclaration.prototype;

//Symbol defining a function

      //do nothing
      null;
    // export
    module.exports.SymbolDefun = SymbolDefun;
    
    // end class SymbolDefun


    //append to namespace SymbolDefun
    
       //properties
            //documentation = "Symbol defining a function"


    //    public class SymbolLambda extends SymbolDeclaration
       
       //properties
            //documentation = "Symbol defining a function"
           SymbolDefun.documentation="Symbol defining a function";
       


    //    public class SymbolLambda extends SymbolDeclaration
    // constructor
    function SymbolLambda(){ // default constructor
    // default constructor: call super.constructor
        SymbolDeclaration.prototype.constructor.apply(this,arguments)
    };
    // SymbolLambda (extends|proto is) SymbolDeclaration
    SymbolLambda.prototype.__proto__ = SymbolDeclaration.prototype;

//Symbol naming a function expression

      //do nothing
      null;
    // export
    module.exports.SymbolLambda = SymbolLambda;
    
    // end class SymbolLambda


    //append to namespace SymbolLambda
    
       //properties
            //documentation = "Symbol naming a function expression"


    //    public class SymbolCatch extends SymbolDeclaration
       
       //properties
            //documentation = "Symbol naming a function expression"
           SymbolLambda.documentation="Symbol naming a function expression";
       


    //    public class SymbolCatch extends SymbolDeclaration
    // constructor
    function SymbolCatch(){ // default constructor
    // default constructor: call super.constructor
        SymbolDeclaration.prototype.constructor.apply(this,arguments)
    };
    // SymbolCatch (extends|proto is) SymbolDeclaration
    SymbolCatch.prototype.__proto__ = SymbolDeclaration.prototype;

//Symbol naming the exception in catch

      //do nothing
      null;
    // export
    module.exports.SymbolCatch = SymbolCatch;
    
    // end class SymbolCatch


    //append to namespace SymbolCatch
    
       //properties
            //documentation = "Symbol naming the exception in catch"


    //    public class Label extends Symbol
       
       //properties
            //documentation = "Symbol naming the exception in catch"
           SymbolCatch.documentation="Symbol naming the exception in catch";
       


    //    public class Label extends Symbol
    // constructor
    function Label(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
       //properties
            //references     // [AST_LoopControl*] a list of nodes referring to this label
    };
    // Label (extends|proto is) Symbol
    Label.prototype.__proto__ = Symbol.prototype;

       //method initialize ()
       Label.prototype.initialize = function(){
        //this.references = [];
        this.references = [];
        //this.thedef = this;
        this.thedef = this;
       };
    // export
    module.exports.Label = Label;
    
    // end class Label



    //append to namespace Label
    
       //properties
            //documentation = "Symbol naming a label (declaration)"
            //propdoc =
                          //"references": "[AST_LoopControl*] a list of nodes referring to this label"



    //    public class SymbolRef extends Symbol
       
       //properties
            //documentation = "Symbol naming a label (declaration)"
            //propdoc =
           Label.documentation="Symbol naming a label (declaration)";
           Label.propdoc={
          "references": "[AST_LoopControl*] a list of nodes referring to this label"
                          };
       



    //    public class SymbolRef extends Symbol
    // constructor
    function SymbolRef(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
    };
    // SymbolRef (extends|proto is) Symbol
    SymbolRef.prototype.__proto__ = Symbol.prototype;

//Reference to some symbol (not definition/declaration)

      //do nothing
      null;
    // export
    module.exports.SymbolRef = SymbolRef;
    
    // end class SymbolRef


    //append to namespace SymbolRef
    
       //properties
            //documentation = "Reference to some symbol (not definition/declaration)"


    //    public class LabelRef extends Symbol
       
       //properties
            //documentation = "Reference to some symbol (not definition/declaration)"
           SymbolRef.documentation="Reference to some symbol (not definition/declaration)";
       


    //    public class LabelRef extends Symbol
    // constructor
    function LabelRef(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
    };
    // LabelRef (extends|proto is) Symbol
    LabelRef.prototype.__proto__ = Symbol.prototype;

//Reference to a label symbol

      //do nothing
      null;
    // export
    module.exports.LabelRef = LabelRef;
    
    // end class LabelRef


    //append to namespace LabelRef
    
       //properties
            //documentation = "Reference to a label symbol"


    //    public class This extends Symbol
       
       //properties
            //documentation = "Reference to a label symbol"
           LabelRef.documentation="Reference to a label symbol";
       


    //    public class This extends Symbol
    // constructor
    function This(){ // default constructor
    // default constructor: call super.constructor
        Symbol.prototype.constructor.apply(this,arguments)
    };
    // This (extends|proto is) Symbol
    This.prototype.__proto__ = Symbol.prototype;

//The `this` symbol

      //do nothing
      null;
    // export
    module.exports.This = This;
    
    // end class This


    //append to namespace This
    
       //properties
            //documentation = "The `this` symbol"


    //    public class Constant extends Node
       
       //properties
            //documentation = "The `this` symbol"
           This.documentation="The `this` symbol";
       


    //    public class Constant extends Node
    // constructor
    function Constant(){ // default constructor
    // default constructor: call super.constructor
        Node.prototype.constructor.apply(this,arguments)
      //properties value
    };
    // Constant (extends|proto is) Node
    Constant.prototype.__proto__ = Node.prototype;

      //method getValue ()
      Constant.prototype.getValue = function(){
        //return this.value;
        return this.value;
      };
    // export
    module.exports.Constant = Constant;
    
    // end class Constant

    //append to namespace Constant
    
       //properties
            //documentation = "Base class for all constants"


    //    public class StringLiteral extends Constant
       
       //properties
            //documentation = "Base class for all constants"
           Constant.documentation="Base class for all constants";
       


    //    public class StringLiteral extends Constant
    // constructor
    function StringLiteral(){ // default constructor
    // default constructor: call super.constructor
        Constant.prototype.constructor.apply(this,arguments)
    };
    // StringLiteral (extends|proto is) Constant
    StringLiteral.prototype.__proto__ = Constant.prototype;

//A string literal

      //do nothing
      null;
    // export
    module.exports.StringLiteral = StringLiteral;
    
    // end class StringLiteral


    //append to namespace StringLiteral
    
       //properties
            //documentation = "A string literal"
            //propdoc =
                          //"value": "[string] the contents of this string"



    //    public class NumberLiteral extends Constant
       
       //properties
            //documentation = "A string literal"
            //propdoc =
           StringLiteral.documentation="A string literal";
           StringLiteral.propdoc={
          "value": "[string] the contents of this string"
                          };
       



    //    public class NumberLiteral extends Constant
    // constructor
    function NumberLiteral(){ // default constructor
    // default constructor: call super.constructor
        Constant.prototype.constructor.apply(this,arguments)
    };
    // NumberLiteral (extends|proto is) Constant
    NumberLiteral.prototype.__proto__ = Constant.prototype;

//A number literal

      //do nothing
      null;
    // export
    module.exports.NumberLiteral = NumberLiteral;
    
    // end class NumberLiteral


       //properties
       //     value     // [number] the numeric value


    //append to namespace NumberLiteral
    
       //properties
            //documentation = "A number literal"
            //propdoc =
                          //"value": "[number] the numeric value"



    //    public class RegExpLiteral extends Constant
       
       //properties
            //documentation = "A number literal"
            //propdoc =
           NumberLiteral.documentation="A number literal";
           NumberLiteral.propdoc={
          "value": "[number] the numeric value"
                          };
       



    //    public class RegExpLiteral extends Constant
    // constructor
    function RegExpLiteral(){ // default constructor
    // default constructor: call super.constructor
        Constant.prototype.constructor.apply(this,arguments)
    };
    // RegExpLiteral (extends|proto is) Constant
    RegExpLiteral.prototype.__proto__ = Constant.prototype;

//A regexp literal

      //do nothing
      null;
    // export
    module.exports.RegExpLiteral = RegExpLiteral;
    
    // end class RegExpLiteral


    //append to namespace RegExpLiteral
    
       //properties
            //documentation = "A regexp literal"
            //propdoc =
                          //"value": "[RegExp] the actual regexp"



    //    public class Atom extends Constant
       
       //properties
            //documentation = "A regexp literal"
            //propdoc =
           RegExpLiteral.documentation="A regexp literal";
           RegExpLiteral.propdoc={
          "value": "[RegExp] the actual regexp"
                          };
       



    //    public class Atom extends Constant
    // constructor
    function Atom(){ // default constructor
    // default constructor: call super.constructor
        Constant.prototype.constructor.apply(this,arguments)
    };
    // Atom (extends|proto is) Constant
    Atom.prototype.__proto__ = Constant.prototype;

//Base class for atoms

      //do nothing
      null;
    // export
    module.exports.Atom = Atom;
    
    // end class Atom


    //append to namespace Atom
    
       //properties
            //documentation = "Base class for atoms"


    //    public class NullAtom extends Atom
       
       //properties
            //documentation = "Base class for atoms"
           Atom.documentation="Base class for atoms";
       


    //    public class NullAtom extends Atom
    // constructor
    function NullAtom(){ // default constructor
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
    };
    // NullAtom (extends|proto is) Atom
    NullAtom.prototype.__proto__ = Atom.prototype;

//The `null` atom

      //do nothing
      null;
    // export
    module.exports.NullAtom = NullAtom;
    
    // end class NullAtom


       //properties value = null

    //append to namespace NullAtom
    
       //properties
            //documentation = "The `null` atom"


    //    public class NaNAtom extends Atom
       
       //properties
            //documentation = "The `null` atom"
           NullAtom.documentation="The `null` atom";
       


    //    public class NaNAtom extends Atom
    // constructor
    function NaNAtom(){
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
          //.value = NaN
          this.value = NaN;
       };
    // NaNAtom (extends|proto is) Atom
    NaNAtom.prototype.__proto__ = Atom.prototype;
    
    // export
    module.exports.NaNAtom = NaNAtom;
    
    // end class NaNAtom

    //append to namespace NaNAtom
    
       //properties
            //documentation = "The impossible value"


    //    public class UndefinedAtom extends Atom
       
       //properties
            //documentation = "The impossible value"
           NaNAtom.documentation="The impossible value";
       


    //    public class UndefinedAtom extends Atom
    // constructor
    function UndefinedAtom(){ // default constructor
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
    };
    // UndefinedAtom (extends|proto is) Atom
    UndefinedAtom.prototype.__proto__ = Atom.prototype;
//The `undefined` value

        //do nothing
        null;
    // export
    module.exports.UndefinedAtom = UndefinedAtom;
    
    // end class UndefinedAtom

    //append to namespace UndefinedAtom
    
       //properties
            //documentation = "The `undefined` value"


    //    public class Hole extends Atom
       
       //properties
            //documentation = "The `undefined` value"
           UndefinedAtom.documentation="The `undefined` value";
       


    //    public class Hole extends Atom
    // constructor
    function Hole(){ // default constructor
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
    };
    // Hole (extends|proto is) Atom
    Hole.prototype.__proto__ = Atom.prototype;
//A hole in an array

        //do nothing
        null;
    // export
    module.exports.Hole = Hole;
    
    // end class Hole

    //append to namespace Hole
    
       //properties
            //documentation = "A hole in an array"


    //    public class InfinityAtom extends Atom
       
       //properties
            //documentation = "A hole in an array"
           Hole.documentation="A hole in an array";
       


    //    public class InfinityAtom extends Atom
    // constructor
    function InfinityAtom(){
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
          //.value = Infinity
          this.value = Infinity;
       };
    // InfinityAtom (extends|proto is) Atom
    InfinityAtom.prototype.__proto__ = Atom.prototype;
    
    // export
    module.exports.InfinityAtom = InfinityAtom;
    
    // end class InfinityAtom

    //append to namespace InfinityAtom
    
       //properties
            //documentation = "The `Infinity` value"


    //    public class BooleanAtom extends Atom
       
       //properties
            //documentation = "The `Infinity` value"
           InfinityAtom.documentation="The `Infinity` value";
       


    //    public class BooleanAtom extends Atom
    // constructor
    function BooleanAtom(){ // default constructor
    // default constructor: call super.constructor
        Atom.prototype.constructor.apply(this,arguments)
    };
    // BooleanAtom (extends|proto is) Atom
    BooleanAtom.prototype.__proto__ = Atom.prototype;

//Base class for booleans

      //do nothing
      null;
    // export
    module.exports.BooleanAtom = BooleanAtom;
    
    // end class BooleanAtom


    //append to namespace Boolean
    
       //properties
            //documentation = "Base class for booleans"


    //    public class FalseAtom extends BooleanAtom
       
       //properties
            //documentation = "Base class for booleans"
           Boolean.documentation="Base class for booleans";
       


    //    public class FalseAtom extends BooleanAtom
    // constructor
    function FalseAtom(){
    // default constructor: call super.constructor
        BooleanAtom.prototype.constructor.apply(this,arguments)
          //.value = undefined // (sic) ported from UglifyJS code as 2014-8-3
          this.value = undefined;
        };
    // FalseAtom (extends|proto is) BooleanAtom
    FalseAtom.prototype.__proto__ = BooleanAtom.prototype;
    
    // export
    module.exports.FalseAtom = FalseAtom;
    
    // end class FalseAtom

    //append to namespace FalseAtom
    
       //properties
            //documentation = "The `false` atom"


    //    public class TrueAtom extends BooleanAtom
       
       //properties
            //documentation = "The `false` atom"
           FalseAtom.documentation="The `false` atom";
       


    //    public class TrueAtom extends BooleanAtom
    // constructor
    function TrueAtom(){
    // default constructor: call super.constructor
        BooleanAtom.prototype.constructor.apply(this,arguments)
          //.value = undefined // (sic) ported from UglifyJS code as 2014-8-3
          this.value = undefined;
       };
    // TrueAtom (extends|proto is) BooleanAtom
    TrueAtom.prototype.__proto__ = BooleanAtom.prototype;
    
    // export
    module.exports.TrueAtom = TrueAtom;
    
    // end class TrueAtom

    //append to namespace TrueAtom
    
       //properties
            //documentation = "The `true` atom"


//## -----[ TreeWalker ]-----

    //class TreeWalker
       
       //properties
            //documentation = "The `true` atom"
           TrueAtom.documentation="The `true` atom";
       


//## -----[ TreeWalker ]-----

    //class TreeWalker
    // constructor
    function TreeWalker(callback){
      //properties
        //visit: Function
        //stack: array
        //this.visit = callback;
        this.visit = callback;
        //this.stack = [];
        this.stack = [];
      };

      //method _visit(node) //, descend:function)
      TreeWalker.prototype._visit = function(node){
            //this.stack.push(node)
            this.stack.push(node);
//, descend ? function(){
            var ret = this.visit.call(node);
//, descend ? function(){
//                descend.call(node);
//            } : noop);
//            if (!ret and descend) {
//                descend.call(node);
//            }
//            
            //this.stack.pop();
            this.stack.pop();
            //return ret;
            return ret;
      };

      //method parent(n)
      TreeWalker.prototype.parent = function(n){
            //return this.stack[this.stack.length - 2 - (n or 0)];
            return this.stack[this.stack.length - 2 - (n || 0)];
      };

      //method push(node)
      TreeWalker.prototype.push = function(node){
            //this.stack.push(node)
            this.stack.push(node);
      };

      //method pop()
      TreeWalker.prototype.pop = function(){
            //return this.stack.pop();
            return this.stack.pop();
      };

      //method self
      TreeWalker.prototype.self = function(){
            //return this.stack[this.stack.length - 1];
            return this.stack[this.stack.length - 1];
      };

      //method find_parent(type)
      TreeWalker.prototype.find_parent = function(type){
            //var stack = this.stack
            var stack = this.stack;
            //for i = stack.length-1 while i>=0, i--
            for( var i=stack.length - 1; i >= 0; i--) {
                //var x = stack[i]
                var x = stack[i];
                //if x instanceof type, return x
                if (x instanceof type) {return x};
            };// end for i
            
      };


      //method has_directive(type)
      TreeWalker.prototype.has_directive = function(type){
            //return this.find_parent(Scope).has_directive(type);
            return this.find_parent(Scope).has_directive(type);
      };

      //method in_boolean_context
      TreeWalker.prototype.in_boolean_context = function(){
            //var stack = this.stack;
            var stack = this.stack;
            //var i = stack.length, self = stack[--i];
            var i = stack.length, self = stack[--i];
            //while i > 0
            while(i > 0){

                //var p = stack[--i];
                var p = stack[--i];

                //declare valid p.expression
                
                //declare valid p.operator
                
                //declare valid p.condition
                

                //if ((p instanceof IfStatement   and p.condition is self) or
                if (((p instanceof IfStatement && p.condition === self) || (p instanceof Conditional && p.condition === self) || (p instanceof DWLoop && p.condition === self) || (p instanceof ForStatement && p.condition === self) || (p instanceof UnaryPrefix && p.operator === "!" && p.expression === self))) {
                

                      //return true;
                      return true;
                };

                //if ( not (p instanceof Binary and (p.operator is "and" or p.operator is "||")))
                if ((!((p instanceof Binary && (p.operator === "and" || p.operator === "||"))))) {
                
                    //return false;
                    return false;
                };

                //self = p;
                self = p;
            };// end loop
            
      };


      //method loopcontrol_target(label)
      TreeWalker.prototype.loopcontrol_target = function(label){
            //var stack = this.stack;
            var stack = this.stack;

            //if label
            if (label) {
            
              //for i = stack.length-1 down to 0
              var _end2=0;
              for( var i=stack.length - 1; i>=_end2; i--) {
                //var x:LabeledStatement = stack[i];
                var x = stack[i];
                //if x instanceof LabeledStatement and x.label.name is label.name
                if (x instanceof LabeledStatement && x.label.name === label.name) {
                
                    //return x.body;
                    return x.body;
                };
              };// end for i
              
            }
            //if label
            
            else {
              //for i = stack.length-1 down to 0
              var _end3=0;
              for( var i=stack.length - 1; i>=_end3; i--) {
                //var x:Switch = stack[i];
                var x = stack[i];
                //if x instanceof Switch or x instanceof IterationStatement
                if (x instanceof Switch || x instanceof IterationStatement) {
                
                    //return x
                    return x;
                };
              };// end for i
              
            };
      };
    // end class TreeWalker
