#include "ParserWithIterable.h"
//-------------------------
//Module ParserWithIterable
//-------------------------
//-------------------------
//NAMESPACE ParserWithIterable
//-------------------------
var ParserWithIterable_KEYWORDS_s;
var ParserWithIterable_KEYWORDS_ATOM_s;
var ParserWithIterable_RESERVED_WORDS_s;
var ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION_s;
var ParserWithIterable_KEYWORDS;
var ParserWithIterable_RESERVED_WORDS;
var ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION;
var ParserWithIterable_KEYWORDS_ATOM;
var ParserWithIterable_OPERATOR_CHARS;
var ParserWithIterable_OPERATORS;
var ParserWithIterable_WHITESPACE_CHARS;
var ParserWithIterable_PUNC_BEFORE_EXPRESSION;
var ParserWithIterable_PUNC_CHARS;
var ParserWithIterable_REGEXP_MODIFIERS;
var ParserWithIterable_FOUR_ZEROES;
any ParserWithIterable_is_letter(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_digit(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_alphanumeric_char(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_unicode_combining_mark(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_unicode_connector_punctuation(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_identifier(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_identifier_start(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_identifier_char(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_identifier_string(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_parse_js_number(DEFAULT_ARGUMENTS); //forward declare
    //-----------------------
    // Class ParserWithIterable_JS_Parse_Error: static list of METHODS(verbs) and PROPS(things)
    //-----------------------
    
    static _methodInfoArr ParserWithIterable_JS_Parse_Error_METHODS = {
      { toString_, ParserWithIterable_JS_Parse_Error_toString },
    
    {0,0}}; //method jmp table initializer end mark
    
    static propIndex_t ParserWithIterable_JS_Parse_Error_PROPS[] = {
    line_
    , col_
    , pos_
    };
    
any ParserWithIterable_js_error(DEFAULT_ARGUMENTS); //forward declare
any ParserWithIterable_is_token(DEFAULT_ARGUMENTS); //forward declare
var ParserWithIterable_EX_EOF;
var ParserWithIterable_UNARY_PREFIX;
var ParserWithIterable_UNARY_POSTFIX;
var ParserWithIterable_ASSIGNMENT;
var ParserWithIterable_PRECEDENCE;
    //-----------------------
    // Class ParserWithIterable_PRSOptions: static list of METHODS(verbs) and PROPS(things)
    //-----------------------
    
    static _methodInfoArr ParserWithIterable_PRSOptions_METHODS = {
    
    {0,0}}; //method jmp table initializer end mark
    
    static propIndex_t ParserWithIterable_PRSOptions_PROPS[] = {
    strict_
    , filename_
    , toplevel_
    , expression_
    , html5_comments_
    };
    
        //-------------------------
        //NAMESPACE ParserWithIterable_TYPE
        //-------------------------
        var ParserWithIterable_TYPE_keyword, ParserWithIterable_TYPE_operator, ParserWithIterable_TYPE_punc, ParserWithIterable_TYPE_eof, ParserWithIterable_TYPE_comment2, ParserWithIterable_TYPE_atom, ParserWithIterable_TYPE_name, ParserWithIterable_TYPE_num, ParserWithIterable_TYPE_string, ParserWithIterable_TYPE_regexp;
        
        
        //------------------
        void ParserWithIterable_TYPE__namespaceInit(void){
            ParserWithIterable_TYPE_keyword = any_number(0);
            ParserWithIterable_TYPE_operator = any_number(1);
            ParserWithIterable_TYPE_punc = any_number(2);
            ParserWithIterable_TYPE_eof = any_number(3);
            ParserWithIterable_TYPE_comment2 = any_number(4);
            ParserWithIterable_TYPE_atom = any_number(8);
            ParserWithIterable_TYPE_name = any_number(9);
            ParserWithIterable_TYPE_num = any_number(10);
            ParserWithIterable_TYPE_string = any_number(11);
            ParserWithIterable_TYPE_regexp = any_number(12);
        };
        //-------------------------
        //NAMESPACE ParserWithIterable_UNICODE
        //-------------------------
        var ParserWithIterable_UNICODE_letter, ParserWithIterable_UNICODE_non_spacing_mark, ParserWithIterable_UNICODE_space_combining_mark, ParserWithIterable_UNICODE_connector_punctuation;
        
        
        //------------------
        void ParserWithIterable_UNICODE__namespaceInit(void){
            ParserWithIterable_UNICODE_letter = any_LTR("A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u097B-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400\u4DB5\u4E00\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA90A-\uA925\uA930-\uA946\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAC00\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC");
            ParserWithIterable_UNICODE_non_spacing_mark = any_LTR("\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0900-\u0902\u093C\u0941-\u0948\u094D\u0951-\u0955\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1DC0-\u1DE6\u1DFD-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26");
            ParserWithIterable_UNICODE_space_combining_mark = any_LTR("\u0903\u093E-\u0940\u0949-\u094C\u094E\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u19B0-\u19C0\u19C8\u19C9\u1A19-\u1A1B\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC");
            ParserWithIterable_UNICODE_connector_punctuation = any_LTR("_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F");
        };
    

//--------------
    // ParserWithIterable_JS_Parse_Error
    any ParserWithIterable_JS_Parse_Error; //Class ParserWithIterable_JS_Parse_Error extends Error
    
    
    //auto ParserWithIterable_JS_Parse_Error_newFromObject
    inline any ParserWithIterable_JS_Parse_Error_newFromObject(DEFAULT_ARGUMENTS){
        return _newFromObject(ParserWithIterable_JS_Parse_Error,argc,arguments);
    }

        //properties
            //line,col,pos

        //constructor new JS_Parse_Error(message, line, col, pos)
        ;

        //constructor new JS_Parse_Error(message, line, col, pos)
        void ParserWithIterable_JS_Parse_Error__init(DEFAULT_ARGUMENTS){
          // auto call super class __init
          Error__init(this,argc,arguments);
            
            // define named params
            var message = argc>0? arguments[0] : undefined;
            var line = argc>1? arguments[1] : undefined;
            var col = argc>2? arguments[2] : undefined;
            var pos = argc>3? arguments[3] : undefined;
            //---------
            //this.message = message;
            message__(this) = message;
            //this.line = line;
            line__(this) = line;
            //this.col = col;
            col__(this) = col;
            //this.pos = pos;
            pos__(this) = pos;
            
        }
            //this.stack = new Error().stack;


        //        method toString
        any ParserWithIterable_JS_Parse_Error_toString(DEFAULT_ARGUMENTS){
            assert(_instanceof(this,ParserWithIterable_JS_Parse_Error));
            //---------
            //return "#{this.message}  (line: #{this.line}, col: #{this.col}, pos: #{this.pos})" //\n\n" + this.stack;
            return _concatAny(8,message__(this),any_LTR("  (line: "),line__(this),any_LTR(", col: "),col__(this),any_LTR(", pos: "),pos__(this),any_LTR(")"));
            
        return undefined;
        }
        //-------------------------
        //NAMESPACE ParserWithIterable_TKZ
        //-------------------------
        var ParserWithIterable_TKZ_text, ParserWithIterable_TKZ_filename, ParserWithIterable_TKZ_textLen, ParserWithIterable_TKZ_iterPos, ParserWithIterable_TKZ_tokpos, ParserWithIterable_TKZ_line, ParserWithIterable_TKZ_tokline, ParserWithIterable_TKZ_col, ParserWithIterable_TKZ_tokcol, ParserWithIterable_TKZ_newline_before, ParserWithIterable_TKZ_regex_allowed, ParserWithIterable_TKZ_comments_before, ParserWithIterable_TKZ_html5_comments, ParserWithIterable_TKZ_prev_was_dot, ParserWithIterable_TKZ_moreChars;
        


        //        method  tokenize($TEXT:string, filename, html5_comments) returns function
        any ParserWithIterable_TKZ_tokenize(DEFAULT_ARGUMENTS){
            
            // define named params
            var $TEXT = argc>0? arguments[0] : undefined;
            var filename = argc>1? arguments[1] : undefined;
            var html5_comments = argc>2? arguments[2] : undefined;
            //---------

//tokenize returns a function next_token(forceRegexp:booleean)
//returning the next token in the stream

            //TKZ.text = $TEXT.replaceAll("\r\n", "\n").replaceAll("\uFEFF", '')
            ParserWithIterable_TKZ_text = __call(replaceAll_,METHOD(replaceAll_,$TEXT)($TEXT,2,(any_arr){any_LTR("\r\n"),any_LTR("\n")}),2,(any_arr){any_LTR("\uFEFF"),any_EMPTY_STR});

//create an Iterable.Position, a "cursor" to consume each unicode-point from loaded file

            //TKZ.iterPos = new Iterable.Position(TKZ.text)
            ParserWithIterable_TKZ_iterPos = new(Iterable_Position,1,(any_arr){ParserWithIterable_TKZ_text});

//move to first char in the stream

            //TKZ.moreChars = TKZ.iterPos.next()
            ParserWithIterable_TKZ_moreChars = __call(next_,ParserWithIterable_TKZ_iterPos,0,NULL);

            //TKZ.textLen = TKZ.text.length
            //TKZ.filename = filename
            ParserWithIterable_TKZ_filename = filename;
            //TKZ.html5_comments = html5_comments
            ParserWithIterable_TKZ_html5_comments = html5_comments;

            //return TKZ.next_token // function next_token(forceRegexp:booleean)
            return any_func(ParserWithIterable_TKZ_next_token);
            
        return undefined;
        }


        //        method  next(signal_eof, in_string)
        any ParserWithIterable_TKZ_next(DEFAULT_ARGUMENTS){
            
            // define named params
            var signal_eof = argc>0? arguments[0] : undefined;
            var in_string = argc>1? arguments[1] : undefined;
            //---------

            //if no TKZ.moreChars
            if (!_anyToBool(ParserWithIterable_TKZ_moreChars))  {
            
                //if signal_eof
                if (_anyToBool(signal_eof))  {
                
                    //throw EX_EOF
                    throw(ParserWithIterable_EX_EOF);
                    
                }
                //else
                //else
                
                else {
                    //TKZ.iterPos.value = null
                    value__(ParserWithIterable_TKZ_iterPos) = null;
                    //return null
                    return null;
                    
                };
                
            };

            //var ch = TKZ.iterPos.value
            var 
               ch = value__(ParserWithIterable_TKZ_iterPos)
            ;

            //if ch is "\n"
            if (__is(ch,any_LTR("\n")))  {
            
                //TKZ.newline_before = TKZ.newline_before or not in_string
                var ___or14=undefined;
                ParserWithIterable_TKZ_newline_before = (_anyToBool(___or14=ParserWithIterable_TKZ_newline_before)? ___or14 : any_bool(!(_anyToBool(in_string))));
                //++TKZ.line
                ++ParserWithIterable_TKZ_line.value.number;
                //TKZ.col = 0
                ParserWithIterable_TKZ_col = any_number(0);
                
            }
            //else
            //else
            
            else {
                //++TKZ.col
                ++ParserWithIterable_TKZ_col.value.number;
                
            };

            //advance one - "peek" next char into TKZ.iterPos.value
            //if no TKZ.iterPos.next()
            if (!_anyToBool(__call(next_,ParserWithIterable_TKZ_iterPos,0,NULL)))  {
            
                //TKZ.moreChars = false
                ParserWithIterable_TKZ_moreChars = false;
                //TKZ.iterPos.value = null
                value__(ParserWithIterable_TKZ_iterPos) = null;
                
            };

            //return ch
            return ch;
            
        return undefined;
        }

        //        method  peek()
        any ParserWithIterable_TKZ_peek(DEFAULT_ARGUMENTS){
            //return TKZ.iterPos.value
            return value__(ParserWithIterable_TKZ_iterPos);
            
        return undefined;
        }

        //        method forward(i)
        any ParserWithIterable_TKZ_forward(DEFAULT_ARGUMENTS){
            
            // define named params
            var i = argc>0? arguments[0] : undefined;
            //---------
            //while i-- > 0
            while(i.value.number-- > 0){
                //TKZ.next()
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                
            };// end loop
            
        return undefined;
        }

        //        method looking_at(str:string)
        any ParserWithIterable_TKZ_looking_at(DEFAULT_ARGUMENTS){
            
            // define named params
            var str = argc>0? arguments[0] : undefined;
            //---------
            //return TKZ.text.byteSubstr(TKZ.iterPos.index, str.length) is str
            return any_number(__is(__call(byteSubstr_,ParserWithIterable_TKZ_text,2,(any_arr){index__(ParserWithIterable_TKZ_iterPos),any_number(_length(str))}),str));
            
        return undefined;
        }

        //        method findByteIndex(what, signal_eof)
        any ParserWithIterable_TKZ_findByteIndex(DEFAULT_ARGUMENTS){
            
            // define named params
            var what = argc>0? arguments[0] : undefined;
            var signal_eof = argc>1? arguments[1] : undefined;
            //---------
            //var pos = TKZ.text.byteIndexOf(what, TKZ.iterPos.index)
            var 
               pos = __call(byteIndexOf_,ParserWithIterable_TKZ_text,2,(any_arr){what,index__(ParserWithIterable_TKZ_iterPos)})
            ;
            //if (signal_eof and pos is -1), throw EX_EOF
            if ((_anyToBool(signal_eof) && __is(pos,any_number(-1)))) {throw(ParserWithIterable_EX_EOF);};
            //return pos
            return pos;
            
        return undefined;
        }


        //        method start_token()
        any ParserWithIterable_TKZ_start_token(DEFAULT_ARGUMENTS){
            //TKZ.tokline = TKZ.line;
            ParserWithIterable_TKZ_tokline = ParserWithIterable_TKZ_line;
            //TKZ.tokcol = TKZ.col;
            ParserWithIterable_TKZ_tokcol = ParserWithIterable_TKZ_col;
            //TKZ.tokpos = TKZ.iterPos.key-1; //"key" holds -codepoint- index of current position
            ParserWithIterable_TKZ_tokpos = any_number(_anyToNumber(key__(ParserWithIterable_TKZ_iterPos)) - 1);
            
        return undefined;
        }


        //        method token(type, value, is_comment)
        any ParserWithIterable_TKZ_token(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            var value = argc>1? arguments[1] : undefined;
            var is_comment = argc>2? arguments[2] : undefined;
            //---------

//TKZ.regex_allowed is a semiglobal flag, to mark how to treat the *next* token if it is a /.
//if as a regexpLiteral or division oper

            //TKZ.regex_allowed = (type is TYPE.operator and not Utils.isPredicate(UNARY_POSTFIX,value))
                                //or (type is TYPE.keyword and Utils.isPredicate(KEYWORDS_BEFORE_EXPRESSION,value))
                                //or (type is TYPE.punc and value in PUNC_BEFORE_EXPRESSION)
                                var ___or16=undefined;
                                var ___or15=undefined;
            ParserWithIterable_TKZ_regex_allowed = (_anyToBool(___or16=(_anyToBool(___or15=(any_number(__is(type,ParserWithIterable_TYPE_operator) && !(_anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_UNARY_POSTFIX,value}))))))? ___or15 : (any_number(__is(type,ParserWithIterable_TYPE_keyword) && _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION,value}))))))? ___or16 : (any_number(__is(type,ParserWithIterable_TYPE_punc) && __byteIndex(value,ParserWithIterable_PUNC_BEFORE_EXPRESSION)>=0)));

            //TKZ.prev_was_dot = (type is TYPE.punc and value is ".")
            ParserWithIterable_TKZ_prev_was_dot = (any_number(__is(type,ParserWithIterable_TYPE_punc) && __is(value,any_LTR("."))));

            //var ret = new AST.Token()
            var 
               ret = new(AST_Token,0,NULL)
            ;
            //with ret
            var _with1=ret;
                //.type   = type
                type__(_with1) = type;
                //.value  = value
                value__(_with1) = value;
                //.line   = TKZ.tokline
                line__(_with1) = ParserWithIterable_TKZ_tokline;
                //.col    = TKZ.tokcol
                col__(_with1) = ParserWithIterable_TKZ_tokcol;
                //.pos    = TKZ.tokpos
                pos__(_with1) = ParserWithIterable_TKZ_tokpos;
                //.endpos = TKZ.iterPos.key-1
                endpos__(_with1) = any_number(_anyToNumber(key__(ParserWithIterable_TKZ_iterPos)) - 1);
                //.nlb    = TKZ.newline_before
                nlb__(_with1) = ParserWithIterable_TKZ_newline_before;
                //.file   = TKZ.filename
                file__(_with1) = ParserWithIterable_TKZ_filename;
                //.comments_before= undefined
                comments_before__(_with1) = undefined;
                
            ;

            //if (not is_comment)
            if ((!(_anyToBool(is_comment))))  {
            

                //ret.comments_before = TKZ.comments_before
                comments_before__(ret) = ParserWithIterable_TKZ_comments_before;

                // make note of any newlines in the comments that came before
                //for each comment:AST.Token in TKZ.comments_before
                {
                var comment, iter=_newIterPos(ParserWithIterable_TKZ_comments_before);
                for(;_iterNext(iter, &comment, NULL, NULL);){
                
                    //if comment.nlb
                    if (_anyToBool(nlb__(comment)))  {
                    
                        //ret.nlb = true
                        nlb__(ret) = true;
                        //break
                        break;
                        
                    };
                    
                }};// end for each loop

                //TKZ.comments_before = [];
                ParserWithIterable_TKZ_comments_before = new(Array,0,NULL);
                
            };

            //end if

            //TKZ.newline_before = false;
            
            //end if

            //TKZ.newline_before = false;
            ParserWithIterable_TKZ_newline_before = false;

            //return ret
            return ret;
            
        return undefined;
        }


        //        method skip_whitespace()
        any ParserWithIterable_TKZ_skip_whitespace(DEFAULT_ARGUMENTS){
            //while TKZ.peek() into var ch isnt null and WHITESPACE_CHARS.has(ch)
            var ch=undefined;
            while(!__is((ch=ParserWithIterable_TKZ_peek(undefined,0,NULL)),null) && _anyToBool(METHOD(has_,ParserWithIterable_WHITESPACE_CHARS)(ParserWithIterable_WHITESPACE_CHARS,1,(any_arr){ch}))){
                //TKZ.next
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                
            };// end loop
            
        return undefined;
        }

//
//        method read_while(pred)
//            var ret = "", ch, i = 0
//            while (peek() into ch and pred(ch, i++))
//                ret &= next();
//            return ret;
//        };
//        

        //        method parse_error(err)
        any ParserWithIterable_TKZ_parse_error(DEFAULT_ARGUMENTS){
            
            // define named params
            var err = argc>0? arguments[0] : undefined;
            //---------
            //js_error(err, TKZ.filename, TKZ.tokline, TKZ.tokcol, TKZ.tokpos);
            ParserWithIterable_js_error(undefined,5,(any_arr){err,ParserWithIterable_TKZ_filename,ParserWithIterable_TKZ_tokline,ParserWithIterable_TKZ_tokcol,ParserWithIterable_TKZ_tokpos});
            
        return undefined;
        }


        //        method read_num(prefix) returns number
        any ParserWithIterable_TKZ_read_num(DEFAULT_ARGUMENTS){
            
            // define named params
            var prefix = argc>0? arguments[0] : undefined;
            //---------

            //var has_e = false, after_e = false, has_x = false, has_dot = prefix  is  ".";
            var 
               has_e = false
               , after_e = false
               , has_x = false
               , has_dot = any_number(__is(prefix,any_LTR(".")))
            ;

            //var i=-1, start=TKZ.iterPos.key;
            var 
               i = any_number(-1)
               , start = key__(ParserWithIterable_TKZ_iterPos)
            ;
            //var num = ""
            var 
               num = any_EMPTY_STR
            ;
            //do
            while(TRUE){

                //var ch:string = TKZ.peek()
                var 
                   ch = ParserWithIterable_TKZ_peek(undefined,0,NULL)
                ;
                //var code = ch.charCodeAt(0)
                var 
                   code = METHOD(charCodeAt_,ch)(ch,1,(any_arr){any_number(0)})
                ;
                //i++
                i.value.number++;

                //var valid = true //default
                var 
                   valid = true
                ;

                //case code
                var _case2=code;
                  //when 120,88: // xX
                    if (__is(_case2,any_number(120))||__is(_case2,any_number(88))){
                        
                    //valid = has_x ? false : (true into has_x);
                    valid = _anyToBool(has_x) ? false : ((has_x=true));
                    
                ;
                    }
                  //when 101,69: // eE
                    else if (__is(_case2,any_number(101))||__is(_case2,any_number(69))){
                        
                    //valid = has_x ? true : has_e ? false : (true into has_e into after_e);
                    valid = _anyToBool(has_x) ? true : _anyToBool(has_e) ? false : ((after_e=(has_e=true)));
                    
                ;
                    }
                  //when 45: // -
                    else if (__is(_case2,any_number(45))){
                        
                    //valid = after_e or (i is 0 and not prefix);
                    var ___or17=undefined;
                    valid = (_anyToBool(___or17=after_e)? ___or17 : (any_number(__is(i,any_number(0)) && !(_anyToBool(prefix)))));
                    
                ;
                    }
                  //when 43: // +
                    else if (__is(_case2,any_number(43))){
                        
                    //valid = after_e;
                    valid = after_e;
                    
                ;
                    }
                else {
                    //after_e = false
                    after_e = false;
                    //if code is 46 // .
                    if (__is(code,any_number(46)))  {
                    
                        //valid = (no has_dot and no has_x and no has_e) ? (true into has_dot) : false;
                        valid = (!_anyToBool(has_dot) && !_anyToBool(has_x) && !_anyToBool(has_e)) ? ((has_dot=true)) : false;
                        
                    }
                    //else
                    //else
                    
                    else {
                        //valid = is_alphanumeric_char(code)
                        valid = ParserWithIterable_is_alphanumeric_char(undefined,1,(any_arr){code});
                        
                    };
                    
                };

                //if not valid, break
                if (!(_anyToBool(valid))) {break;};
                //num &= ch
                num=_concatAny(2,num,ch);
                //TKZ.next //consume char
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                
            };// end loop

            //if prefix
            if (_anyToBool(prefix))  {
            
                //num = prefix & num
                num = _concatAny(2,prefix,num);
                
            };

            //var parsed = parse_js_number(num);
            var 
               parsed = ParserWithIterable_parse_js_number(undefined,1,(any_arr){num})
            ;
            //if not Number.isNaN(parsed)
            if (!(_anyToBool(Number_isNaN(undefined,1,(any_arr){parsed}))))  {
            
                //return TKZ.token(TYPE.num, parsed)
                return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_num,parsed});
                
            }
            //else
            //else
            
            else {
                //TKZ.parse_error("Invalid syntax: " & num)
                ParserWithIterable_TKZ_parse_error(undefined,1,(any_arr){_concatAny(2,any_LTR("Invalid syntax: "),num)});
                
            };
            
        return undefined;
        }


        //        method read_escaped_char(in_string:boolean)
        any ParserWithIterable_TKZ_read_escaped_char(DEFAULT_ARGUMENTS){
            
            // define named params
            var in_string = argc>0? arguments[0] : undefined;
            //---------
            //var ch:string = TKZ.next(true, in_string);
            var 
               ch = ParserWithIterable_TKZ_next(undefined,2,(any_arr){true,in_string})
            ;
            //case ch.charCodeAt(0)
            var _case3=METHOD(charCodeAt_,ch)(ch,1,(any_arr){any_number(0)});
              //when 110 : return "\n"
                if (__is(_case3,any_number(110))){
                    return any_LTR("\n");
                }
              //when 114 : return "\r"
                else if (__is(_case3,any_number(114))){
                    return any_LTR("\r");
                }
              //when 116 : return "\t"
                else if (__is(_case3,any_number(116))){
                    return any_LTR("\t");
                }
              //when 98  : return "\b"
                else if (__is(_case3,any_number(98))){
                    return any_LTR("\b");
                }
              //when 118 : return "\x0b"; // \v : vert tab
                else if (__is(_case3,any_number(118))){
                    return any_LTR("\x0b");
                }
              //when 102 : return "\f";
                else if (__is(_case3,any_number(102))){
                    return any_LTR("\f");
                }
              //when 48  : return "\0";
                else if (__is(_case3,any_number(48))){
                    return any_LTR("\0");
                }
              //when 120 : return String.fromCharCode(TKZ.hex_bytes(2)); // \x
                else if (__is(_case3,any_number(120))){
                    return String_fromCharCode(undefined,1,(any_arr){ParserWithIterable_TKZ_hex_bytes(undefined,1,(any_arr){any_number(2)})});
                }
              //when 117 : return String.fromCharCode(TKZ.hex_bytes(4)); // \u
                else if (__is(_case3,any_number(117))){
                    return String_fromCharCode(undefined,1,(any_arr){ParserWithIterable_TKZ_hex_bytes(undefined,1,(any_arr){any_number(4)})});
                }
              //when 10  : return ""; // newline
                else if (__is(_case3,any_number(10))){
                    return any_EMPTY_STR;
                }
            else {
                 //return ch;
                 return ch;
                 
            };
            
        return undefined;
        }

        //        method hex_bytes(n)
        any ParserWithIterable_TKZ_hex_bytes(DEFAULT_ARGUMENTS){
            
            // define named params
            var n = argc>0? arguments[0] : undefined;
            //---------

            //var num = 0
            var 
               num = any_number(0)
            ;

            //while n--
            while(n.value.number--){
                //var digit = parseInt(TKZ.next(true), 16)
                var 
                   digit = parseInt(undefined,2,(any_arr){ParserWithIterable_TKZ_next(undefined,1,(any_arr){true}),any_number(16)})
                ;

                //if Number.isNaN(digit)
                if (_anyToBool(Number_isNaN(undefined,1,(any_arr){digit})))  {
                
                    //TKZ.parse_error("Invalid hex-character pattern in string")
                    ParserWithIterable_TKZ_parse_error(undefined,1,(any_arr){any_LTR("Invalid hex-character pattern in string")});
                    
                };

                //num = (num << 4) bitor digit
                num = any_number((int64_t)((int64_t)_anyToNumber(num) << (int64_t)4) | (int64_t)_anyToNumber(digit));
                
            };// end loop

            //return num;
            return num;
            
        return undefined;
        }


        //var read_string = with_eof_error("Unterminated string constant", method(){

        //        method read_string
        any ParserWithIterable_TKZ_read_string(DEFAULT_ARGUMENTS){

            //var quote = TKZ.next(), ret = ""
            var 
               quote = ParserWithIterable_TKZ_next(undefined,0,NULL)
               , ret = any_EMPTY_STR
            ;

            //do
            while(TRUE){

                //var ch = TKZ.next(true)
                var 
                   ch = ParserWithIterable_TKZ_next(undefined,1,(any_arr){true})
                ;

                //if ch  is  quote, break
                if (__is(ch,quote)) {break;};

                //if ch  is  "\\"
                if (__is(ch,any_LTR("\\")))  {
                

                    // try to read OctalEscapeSequence (XXX: deprecated if "strict mode")
                    // https://github.com/mishoo/UglifyJS/issues/178
                    //var octal_len = 0, first = null, num="";
                    var 
                       octal_len = any_number(0)
                       , first = null
                       , num = any_EMPTY_STR
                    ;

                    //var i=-1, start=TKZ.iterPos.key;
                    var 
                       i = any_number(-1)
                       , start = key__(ParserWithIterable_TKZ_iterPos)
                    ;
                    //do
                    while(TRUE){
                        //ch= TKZ.peek()
                        ch = ParserWithIterable_TKZ_peek(undefined,0,NULL);
                        //i++
                        i.value.number++;
                        //var valid = true
                        var 
                           valid = true
                        ;

                        //if ch >= "0" and ch <= "7"
                        if (_anyToNumber(ch) >= '0' && _anyToNumber(ch) <= '7')  {
                        
                            //if not first
                            if (!(_anyToBool(first)))  {
                            
                                //first = ch
                                first = ch;
                                //valid = ++octal_len
                                valid = any_number(++octal_len.value.number);
                                
                            }
                            //else if first <= "3" and octal_len <= 2
                            //else if first <= "3" and octal_len <= 2
                            
                            else if (_anyToNumber(first) <= '3' && _anyToNumber(octal_len) <= 2)  {
                            
                                //valid = ++octal_len
                                valid = any_number(++octal_len.value.number);
                                
                            }
                            //else if first >= "4" and octal_len <= 1
                            //else if first >= "4" and octal_len <= 1
                            
                            else if (_anyToNumber(first) >= '4' && _anyToNumber(octal_len) <= 1)  {
                            
                                //valid = ++octal_len
                                valid = any_number(++octal_len.value.number);
                                
                            };
                            
                        }
                        //else
                        //else
                        
                        else {
                            //valid = false
                            valid = false;
                            
                        };

                        //if not valid, break
                        if (!(_anyToBool(valid))) {break;};
                        //num &= ch
                        num=_concatAny(2,num,ch);
                        //TKZ.next //consume char
                        ParserWithIterable_TKZ_next(undefined,0,NULL);
                        
                    };// end loop

                    //if (octal_len > 0)
                    if ((_anyToNumber(octal_len) > 0))  {
                    
                        //ch = String.fromCharCode(parseInt(num, 8))
                        ch = String_fromCharCode(undefined,1,(any_arr){parseInt(undefined,2,(any_arr){num,any_number(8)})});
                        
                    }
                    //else
                    //else
                    
                    else {
                        //ch = TKZ.read_escaped_char(true);
                        ch = ParserWithIterable_TKZ_read_escaped_char(undefined,1,(any_arr){true});
                        
                    };
                    
                };

                //end if "\\"

                //ret &= ch
                
                //end if "\\"

                //ret &= ch
                ret=_concatAny(2,ret,ch);
                
            };// end loop

            //return TKZ.token(TYPE.string, ret)
            return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_string,ret});
            
        return undefined;
        }


        //        method skip_line_comment(type)
        any ParserWithIterable_TKZ_skip_line_comment(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            //---------

            //need to save TKZ.regex_allowed flag because TKZ.token() resets it
            //var save_regex_allowed = TKZ.regex_allowed
            var 
               save_regex_allowed = ParserWithIterable_TKZ_regex_allowed
            ;

            //var i = TKZ.findByteIndex("\n"), ret;
            var 
               i = ParserWithIterable_TKZ_findByteIndex(undefined,1,(any_arr){any_LTR("\n")})
               , ret = undefined
            ;
            //if (i  is  -1)
            if ((__is(i,any_number(-1))))  {
            
                //ret = TKZ.text.byteSubstr(TKZ.iterPos.index);
                ret = __call(byteSubstr_,ParserWithIterable_TKZ_text,1,(any_arr){index__(ParserWithIterable_TKZ_iterPos)});
                //TKZ.iterPos.index = TKZ.iterPos.size; //move to EOF
                index__(ParserWithIterable_TKZ_iterPos) = size__(ParserWithIterable_TKZ_iterPos);
                
            }
            //else
            //else
            
            else {
                //ret = TKZ.text.byteSlice(TKZ.iterPos.index, i);
                ret = __call(byteSlice_,ParserWithIterable_TKZ_text,2,(any_arr){index__(ParserWithIterable_TKZ_iterPos),i});

                //while TKZ.iterPos.index < i
                while(_anyToNumber(index__(ParserWithIterable_TKZ_iterPos)) < _anyToNumber(i)){
                    //TKZ.iterPos.next()
                    __call(next_,ParserWithIterable_TKZ_iterPos,0,NULL);
                    
                };// end loop
                
            };

            //TKZ.comments_before.push( TKZ.token(type, ret, true) );
            __call(push_,ParserWithIterable_TKZ_comments_before,1,(any_arr){ParserWithIterable_TKZ_token(undefined,3,(any_arr){type,ret,true})});

            //restore TKZ.regex_allowed flag
            //TKZ.regex_allowed = save_regex_allowed
            ParserWithIterable_TKZ_regex_allowed = save_regex_allowed;

            //return TKZ.next_token();
            return ParserWithIterable_TKZ_next_token(undefined,0,NULL);
            
        return undefined;
        }


        //        method skip_multiline_comment //= with_eof_error("Unterminated multiline comment", method(){
        any ParserWithIterable_TKZ_skip_multiline_comment(DEFAULT_ARGUMENTS){

            //need to save TKZ.regex_allowed flag because TKZ.token() resets it
            //var save_regex_allowed = TKZ.regex_allowed
            var 
               save_regex_allowed = ParserWithIterable_TKZ_regex_allowed
            ;

            //var i = TKZ.findByteIndex("*/", true);
            var 
               i = ParserWithIterable_TKZ_findByteIndex(undefined,2,(any_arr){any_LTR("*/"),true})
            ;
            //var text:string = TKZ.text.byteSlice(TKZ.iterPos.index, i);
            var 
               text = __call(byteSlice_,ParserWithIterable_TKZ_text,2,(any_arr){index__(ParserWithIterable_TKZ_iterPos),i})
            ;
            //var a = text.split("\n"), n = a.length;
            var 
               a = METHOD(split_,text)(text,1,(any_arr){any_LTR("\n")})
               , n = any_number(_length(a))
            ;
            // update stream position
            //while TKZ.iterPos.index < i + 2
            while(_anyToNumber(index__(ParserWithIterable_TKZ_iterPos)) < _anyToNumber(i) + 2){
                //TKZ.iterPos.next()
                __call(next_,ParserWithIterable_TKZ_iterPos,0,NULL);
                
            };// end loop

            //TKZ.line += n - 1;
            ParserWithIterable_TKZ_line.value.number += _anyToNumber(n) - 1;
            //if n > 1
            if (_anyToNumber(n) > 1)  {
            
                //TKZ.col = a[n - 1].length;
                ParserWithIterable_TKZ_col = any_number(_length(ITEM(a,_anyToNumber(n) - 1)));
                
            }
            //else
            //else
            
            else {
                //TKZ.col += a[n - 1].length;
                ParserWithIterable_TKZ_col.value.number += _length(ITEM(a,_anyToNumber(n) - 1));
                
            };

            //TKZ.col += 2;
            ParserWithIterable_TKZ_col.value.number += 2;
            //TKZ.newline_before = TKZ.newline_before or text.indexOf("\n") >= 0;
            var ___or18=undefined;
            ParserWithIterable_TKZ_newline_before = (_anyToBool(___or18=ParserWithIterable_TKZ_newline_before)? ___or18 : any_bool(_anyToNumber(METHOD(indexOf_,text)(text,1,(any_arr){any_LTR("\n")})) >= 0));
            //var saveNLB = TKZ.newline_before
            var 
               saveNLB = ParserWithIterable_TKZ_newline_before
            ;

            //TKZ.comments_before.push(TKZ.token(TYPE.comment2, text, true));
            __call(push_,ParserWithIterable_TKZ_comments_before,1,(any_arr){ParserWithIterable_TKZ_token(undefined,3,(any_arr){ParserWithIterable_TYPE_comment2,text,true})});

            //restore TKZ.regex_allowed flag
            //TKZ.regex_allowed = save_regex_allowed
            ParserWithIterable_TKZ_regex_allowed = save_regex_allowed;
            //TKZ.newline_before = saveNLB
            ParserWithIterable_TKZ_newline_before = saveNLB;

            //return TKZ.next_token();
            return ParserWithIterable_TKZ_next_token(undefined,0,NULL);
            
        return undefined;
        }


//read a indentifier

        //        method read_name()
        any ParserWithIterable_TKZ_read_name(DEFAULT_ARGUMENTS){

            //var
                //backslash = false, ch:string
                //escaped = false, hex:string
                //name = new Buffer
                //name=""

            //while TKZ.peek() into ch isnt null
            var 
               backslash = false
               , ch = undefined
               , escaped = false
               , hex = undefined
               , name = any_EMPTY_STR
            ;

            //while TKZ.peek() into ch isnt null
            while(!__is((ch=ParserWithIterable_TKZ_peek(undefined,0,NULL)),null)){

                //if no backslash
                if (!_anyToBool(backslash))  {
                

                    //if ch  is  "\\"
                    if (__is(ch,any_LTR("\\")))  {
                    
                        //escaped = true
                        escaped = true;
                        //backslash = true
                        backslash = true;
                        //TKZ.next()
                        ParserWithIterable_TKZ_next(undefined,0,NULL);
                        
                    }
                    //else if is_identifier_char(ch)
                    //else if is_identifier_char(ch)
                    
                    else if (_anyToBool(ParserWithIterable_is_identifier_char(undefined,1,(any_arr){ch})))  {
                    
                        //name.append TKZ.next()
                        //name &= TKZ.next()
                        name=_concatAny(2,name,ParserWithIterable_TKZ_next(undefined,0,NULL));
                        
                    }
                    //else
                    //else
                    
                    else {
                        //break
                        break;
                        
                    };
                    
                }
                //else // a name with a unicode escape sequence
                //else // a name with a unicode escape sequence
                
                else {
                    //if ch isnt "u", TKZ.parse_error("Expecting UnicodeEscapeSequence -- uXXXX");
                    if (!__is(ch,any_LTR("u"))) {ParserWithIterable_TKZ_parse_error(undefined,1,(any_arr){any_LTR("Expecting UnicodeEscapeSequence -- uXXXX")});};
                    //ch = TKZ.read_escaped_char();
                    ch = ParserWithIterable_TKZ_read_escaped_char(undefined,0,NULL);
                    //if (not is_identifier_char(ch)), TKZ.parse_error("Unicode char: " & ch.charCodeAt(0) & " is not valid in identifier");
                    if ((!(_anyToBool(ParserWithIterable_is_identifier_char(undefined,1,(any_arr){ch}))))) {ParserWithIterable_TKZ_parse_error(undefined,1,(any_arr){_concatAny(2,_concatAny(2,any_LTR("Unicode char: "),METHOD(charCodeAt_,ch)(ch,1,(any_arr){any_number(0)})),any_LTR(" is not valid in identifier"))});};
                    //name.append ch
                    //name &= ch
                    name=_concatAny(2,name,ch);
                    //backslash = false;
                    backslash = false;
                    
                };
                
            };// end loop

            //end while

            //if escaped and Utils.isPredicate(KEYWORDS,name)
            
            //end while

            //if escaped and Utils.isPredicate(KEYWORDS,name)
            if (_anyToBool(escaped) && _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_KEYWORDS,name})))  {
            
                //fail with "commented"
                throw(new(Error,1,(any_arr){any_LTR("commented")}));;
                
            };
                //hex = name.charCodeAt(0).toString(16).toUpperCase();
                //name = "\\u" & FOUR_ZEROES.substr(hex.length) & hex & name.slice(1);

            //return name
            return name;
            
        return undefined;
        }



        //var read_regexp = with_eof_error("Unterminated regular expression", method(regexp){
        //        method read_regexp
        any ParserWithIterable_TKZ_read_regexp(DEFAULT_ARGUMENTS){

            //var prev_backslash = false, ch, in_class = false, regexp="";
            var 
               prev_backslash = false
               , ch = undefined
               , in_class = false
               , regexp = any_EMPTY_STR
            ;

            //while TKZ.next(true) into ch
            while(_anyToBool((ch=ParserWithIterable_TKZ_next(undefined,1,(any_arr){true})))){

                //if prev_backslash
                if (_anyToBool(prev_backslash))  {
                
                    //regexp &= "\\" & ch
                    regexp=_concatAny(2,regexp,_concatAny(2,any_LTR("\\"),ch));
                    //prev_backslash = false
                    prev_backslash = false;
                    
                }
                //else if ch  is  "["
                //else if ch  is  "["
                
                else if (__is(ch,any_LTR("[")))  {
                
                    //in_class = true
                    in_class = true;
                    //regexp &= ch
                    regexp=_concatAny(2,regexp,ch);
                    
                }
                //else if ch  is  "]" and in_class
                //else if ch  is  "]" and in_class
                
                else if (__is(ch,any_LTR("]")) && _anyToBool(in_class))  {
                
                    //in_class = false
                    in_class = false;
                    //regexp &= ch
                    regexp=_concatAny(2,regexp,ch);
                    
                }
                //else if ch  is  "/" and not in_class
                //else if ch  is  "/" and not in_class
                
                else if (__is(ch,any_LTR("/")) && !(_anyToBool(in_class)))  {
                
                    //break
                    break;
                    
                }
                //else if ch  is  "\\"
                //else if ch  is  "\\"
                
                else if (__is(ch,any_LTR("\\")))  {
                
                    //prev_backslash = true
                    prev_backslash = true;
                    
                }
                //else
                //else
                
                else {
                    //regexp &= ch;
                    regexp=_concatAny(2,regexp,ch);
                    
                };
                
            };// end loop

            //end while

            //var mods = TKZ.read_name();
            
            //end while

            //var mods = TKZ.read_name();
            var 
               mods = ParserWithIterable_TKZ_read_name(undefined,0,NULL)
            ;

            //NOTE: original-Uglify:
            //return token("regexp", new RegExp(regexp, mods));
            //return TKZ.token(TYPE.regexp,regexp) // {regexp:regexp, mods:mods})
            return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_regexp,regexp});
            
        return undefined;
        }


        //        method read_operator(prefix)
        any ParserWithIterable_TKZ_read_operator(DEFAULT_ARGUMENTS){
            
            // define named params
            var prefix = argc>0? arguments[0] : undefined;
            //---------

            //var operator= prefix or TKZ.next()
            var ___or19=undefined;
            var 
               operator = (_anyToBool(___or19=prefix)? ___or19 : ParserWithIterable_TKZ_next(undefined,0,NULL))
            ;

//read the bigger operator possible.

//Keep reading until it is not an operator. return last one which is

            //do while TKZ.peek() into var ch
            var ch=undefined;
            while(_anyToBool((ch=ParserWithIterable_TKZ_peek(undefined,0,NULL)))){
                //if not Utils.isPredicate(OPERATORS,operator & ch)
                if (!(_anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_OPERATORS,_concatAny(2,operator,ch)}))))  {
                
                    //break
                    break;
                    
                };
                //operator &= ch
                operator=_concatAny(2,operator,ch);
                //TKZ.next //consume char
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                
            };// end loop

            //return TKZ.token(TYPE.operator, operator)
            return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,operator});
            
        return undefined;
        }


        //        method handle_slash()
        any ParserWithIterable_TKZ_handle_slash(DEFAULT_ARGUMENTS){

            //TKZ.next();
            ParserWithIterable_TKZ_next(undefined,0,NULL);

            //case TKZ.peek()
            var _case4=ParserWithIterable_TKZ_peek(undefined,0,NULL);
              //when "/":
                if (__is(_case4,any_LTR("/"))){
                    
                //TKZ.next();
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                //return TKZ.skip_line_comment("comment1");
                return ParserWithIterable_TKZ_skip_line_comment(undefined,1,(any_arr){any_LTR("comment1")});
                
            ;
                }
              //when "*":
                else if (__is(_case4,any_LTR("*"))){
                    
                //TKZ.next();
                ParserWithIterable_TKZ_next(undefined,0,NULL);
                //return TKZ.skip_multiline_comment();
                return ParserWithIterable_TKZ_skip_multiline_comment(undefined,0,NULL);
                
            ;
                };

            //return TKZ.regex_allowed ? TKZ.read_regexp("") : TKZ.read_operator("/");
            return _anyToBool(ParserWithIterable_TKZ_regex_allowed) ? ParserWithIterable_TKZ_read_regexp(undefined,1,(any_arr){any_EMPTY_STR}) : ParserWithIterable_TKZ_read_operator(undefined,1,(any_arr){any_LTR("/")});
            
        return undefined;
        }


        //        method handle_dot()
        any ParserWithIterable_TKZ_handle_dot(DEFAULT_ARGUMENTS){

            //TKZ.next();
            ParserWithIterable_TKZ_next(undefined,0,NULL);

            //return is_digit(TKZ.peek().charCodeAt(0))
                //? TKZ.read_num(".")
                //: TKZ.token(TYPE.punc, ".")
            return _anyToBool(ParserWithIterable_is_digit(undefined,1,(any_arr){__call(charCodeAt_,ParserWithIterable_TKZ_peek(undefined,0,NULL),1,(any_arr){any_number(0)})})) ? ParserWithIterable_TKZ_read_num(undefined,1,(any_arr){any_LTR(".")}) : ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(".")});
            
        return undefined;
        }


        //        method read_word()
        any ParserWithIterable_TKZ_read_word(DEFAULT_ARGUMENTS){
            //var word = TKZ.read_name()
            var 
               word = ParserWithIterable_TKZ_read_name(undefined,0,NULL)
            ;
            //if TKZ.prev_was_dot, return TKZ.token(TYPE.name, word)
            if (_anyToBool(ParserWithIterable_TKZ_prev_was_dot)) {return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_name,word});};

            //return Utils.isPredicate(KEYWORDS_ATOM,word) ? TKZ.token(TYPE.atom, word)
                //: not Utils.isPredicate(KEYWORDS,word) ? TKZ.token(TYPE.name, word)
                //: Utils.isPredicate(OPERATORS,word) ? TKZ.token(TYPE.operator, word)
                //: TKZ.token(TYPE.keyword, word);
            return _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_KEYWORDS_ATOM,word})) ? ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_atom,word}) : !(_anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_KEYWORDS,word}))) ? ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_name,word}) : _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_OPERATORS,word})) ? ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,word}) : ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,word});
            
        return undefined;
        }


//method with_eof_error(eof_error, cont) {
//            return method(x) {
//                try {
//                    return cont(x);
//                } catch(ex) {
//                    if (ex  is = EX_EOF) parse_error(eof_error);
//                    else throw ex;
//                }
//            };
//        };
//        

        //        method next_token(force_regexp)
        any ParserWithIterable_TKZ_next_token(DEFAULT_ARGUMENTS){
            
            // define named params
            var force_regexp = argc>0? arguments[0] : undefined;
            //---------

            //if force_regexp
            if (_anyToBool(force_regexp))  {
            
                //return TKZ.read_regexp(force_regexp);
                return ParserWithIterable_TKZ_read_regexp(undefined,1,(any_arr){force_regexp});
                
            };

            //TKZ.skip_whitespace();
            ParserWithIterable_TKZ_skip_whitespace(undefined,0,NULL);
            //TKZ.start_token();
            ParserWithIterable_TKZ_start_token(undefined,0,NULL);

            //if TKZ.html5_comments
            if (_anyToBool(ParserWithIterable_TKZ_html5_comments))  {
            
                //if TKZ.looking_at("<!--")
                if (_anyToBool(ParserWithIterable_TKZ_looking_at(undefined,1,(any_arr){any_LTR("<!--")})))  {
                
                    //TKZ.forward(4);
                    ParserWithIterable_TKZ_forward(undefined,1,(any_arr){any_number(4)});
                    //return TKZ.skip_line_comment("comment3");
                    return ParserWithIterable_TKZ_skip_line_comment(undefined,1,(any_arr){any_LTR("comment3")});
                    
                };

                //if TKZ.looking_at("-->") and TKZ.newline_before
                if (_anyToBool(ParserWithIterable_TKZ_looking_at(undefined,1,(any_arr){any_LTR("-->")})) && _anyToBool(ParserWithIterable_TKZ_newline_before))  {
                
                    //TKZ.forward(3);
                    ParserWithIterable_TKZ_forward(undefined,1,(any_arr){any_number(3)});
                    //return TKZ.skip_line_comment("comment4");
                    return ParserWithIterable_TKZ_skip_line_comment(undefined,1,(any_arr){any_LTR("comment4")});
                    
                };
                
            };



            //var ch:string = TKZ.peek();
            var 
               ch = ParserWithIterable_TKZ_peek(undefined,0,NULL)
            ;
            //if ch is null, return TKZ.token(TYPE.eof);
            if (__is(ch,null)) {return ParserWithIterable_TKZ_token(undefined,1,(any_arr){ParserWithIterable_TYPE_eof});};

            //var code = ch.charCodeAt(0)
            var 
               code = METHOD(charCodeAt_,ch)(ch,1,(any_arr){any_number(0)})
            ;
            //case code
            var _case5=code;
                //when 34,39: return TKZ.read_string();
                if (__is(_case5,any_number(34))||__is(_case5,any_number(39))){
                    return ParserWithIterable_TKZ_read_string(undefined,0,NULL);
                }
                //when 46: return TKZ.handle_dot();
                else if (__is(_case5,any_number(46))){
                    return ParserWithIterable_TKZ_handle_dot(undefined,0,NULL);
                }
                //when 47: return TKZ.handle_slash();
                else if (__is(_case5,any_number(47))){
                    return ParserWithIterable_TKZ_handle_slash(undefined,0,NULL);
                };

            //if is_digit(code), return TKZ.read_num()
            if (_anyToBool(ParserWithIterable_is_digit(undefined,1,(any_arr){code}))) {return ParserWithIterable_TKZ_read_num(undefined,0,NULL);};

            //if ch in PUNC_CHARS, return TKZ.token(TYPE.punc, TKZ.next())
            if (__byteIndex(ch,ParserWithIterable_PUNC_CHARS)>=0) {return ParserWithIterable_TKZ_token(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,ParserWithIterable_TKZ_next(undefined,0,NULL)});};

            //if ch in OPERATOR_CHARS, return TKZ.read_operator()
            if (__byteIndex(ch,ParserWithIterable_OPERATOR_CHARS)>=0) {return ParserWithIterable_TKZ_read_operator(undefined,0,NULL);};

            //if code is 92 or is_identifier_start(code), return TKZ.read_word()
            var ___or20=undefined;
            if (_anyToBool((_anyToBool(___or20=any_number(__is(code,any_number(92))))? ___or20 : ParserWithIterable_is_identifier_start(undefined,1,(any_arr){code})))) {return ParserWithIterable_TKZ_read_word(undefined,0,NULL);};

            //TKZ.parse_error("Unexpected character '#{ch}'")
            ParserWithIterable_TKZ_parse_error(undefined,1,(any_arr){_concatAny(3,any_LTR("Unexpected character '"),ch,any_LTR("'"))});
            
        return undefined;
        }
        
        //------------------
        void ParserWithIterable_TKZ__namespaceInit(void){
            ParserWithIterable_TKZ_tokpos = any_number(0);
            ParserWithIterable_TKZ_line = any_number(1);
            ParserWithIterable_TKZ_tokline = any_number(0);
            ParserWithIterable_TKZ_col = any_number(0);
            ParserWithIterable_TKZ_tokcol = any_number(0);
            ParserWithIterable_TKZ_newline_before = false;
            ParserWithIterable_TKZ_regex_allowed = false;
            ParserWithIterable_TKZ_comments_before = new(Array,0,NULL);
            ParserWithIterable_TKZ_prev_was_dot = false;

        //end next_token / aka "input"

//next_token.context = method(nc) {
//            if (nc) TKZ = nc;
//            return TKZ;
//        };
//        

    //end namespace TKZ
        
        //end next_token / aka "input"
        };
    

//--------------
    // ParserWithIterable_PRSOptions
    any ParserWithIterable_PRSOptions; //Class ParserWithIterable_PRSOptions
    //auto ParserWithIterable_PRSOptions__init
    void ParserWithIterable_PRSOptions__init(any this, len_t argc, any* arguments){
        strict__(this)=false;
        filename__(this)=null;
        toplevel__(this)=null;
        expression__(this)=false;
        html5_comments__(this)=true;
    };
    
    //auto ParserWithIterable_PRSOptions_newFromObject
    inline any ParserWithIterable_PRSOptions_newFromObject(DEFAULT_ARGUMENTS){
        return _newFromObject(ParserWithIterable_PRSOptions,argc,arguments);
    }
        //properties
            //strict         = false,
            //filename:string        = null,
            //toplevel:AST.Toplevel  = null,
            //expression     = false,
            //html5_comments = true


    //    public namespace PRS
        ;
        
        //-------------------------
        //NAMESPACE ParserWithIterable_PRS
        //-------------------------
        var ParserWithIterable_PRS_input, ParserWithIterable_PRS_token, ParserWithIterable_PRS_prev, ParserWithIterable_PRS_peeked, ParserWithIterable_PRS_in_function, ParserWithIterable_PRS_in_directives, ParserWithIterable_PRS_in_loop, ParserWithIterable_PRS_labels, ParserWithIterable_PRS_options;
        

        //        method parse($TEXT, options)
        any ParserWithIterable_PRS_parse(DEFAULT_ARGUMENTS){
            
            // define named params
            var $TEXT = argc>0? arguments[0] : undefined;
            var options = argc>1? arguments[1] : undefined;
            //---------

            //PRS.options = new PRSOptions
            ParserWithIterable_PRS_options = new(ParserWithIterable_PRSOptions,0,NULL);

            //for each property name,value in options
            {len_t __propCount=_length(options); any name=undefined; any value=undefined;
            for(int __propIndex=0 ; __propIndex < __propCount ; __propIndex++ ){
                NameValuePair_s _nvp = _unifiedGetNVPAtIndex(options, __propIndex);
                value= _nvp.value;name= _nvp.name;
            
                //PRS.options.setProperty name,value
                __call(setProperty_,ParserWithIterable_PRS_options,2,(any_arr){name,value});
                
            }};// end for each property in options

            //PRS.input = ( typeof $TEXT is  "string" ?
                            //TKZ.tokenize($TEXT, PRS.options.filename, PRS.options.html5_comments)
                            //: $TEXT)
            ParserWithIterable_PRS_input = (__is(_typeof($TEXT),any_LTR("string")) ? ParserWithIterable_TKZ_tokenize(undefined,3,(any_arr){$TEXT,filename__(ParserWithIterable_PRS_options),html5_comments__(ParserWithIterable_PRS_options)}) : $TEXT);

            //PRS.token = PRS.next();
            ParserWithIterable_PRS_token = ParserWithIterable_PRS_next(undefined,0,NULL);

            //if PRS.options.expression
            if (_anyToBool(expression__(ParserWithIterable_PRS_options)))  {
            
                //return PRS.expression(true);
                return ParserWithIterable_PRS_expression(undefined,1,(any_arr){true});
                
            };

            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //var body:array = [];
            var 
               body = new(Array,0,NULL)
            ;
            //while not PRS.isToken(TYPE.eof)
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_eof})))){
                //body.push PRS.statement()
                METHOD(push_,body)(body,1,(any_arr){ParserWithIterable_PRS_statement(undefined,0,NULL)});
                
            };// end loop

            //var endpos = PRS.getPrev();
            var 
               endpos = ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ;

            //var toplevel:AST.Toplevel = PRS.options.toplevel
            var 
               toplevel = toplevel__(ParserWithIterable_PRS_options)
            ;

            //if (toplevel)
            if ((_anyToBool(toplevel)))  {
            
                //toplevel.body = toplevel.body.concat(body);
                body__(toplevel) = __call(concat_,body__(toplevel),1,(any_arr){body});
                //toplevel.endpos = endpos;
                endpos__(toplevel) = endpos;
                
            }
            //else
            //else
            
            else {
                //toplevel = new AST.Toplevel({ start: start, body: body, endpos: endpos })
                toplevel = _fastNew(AST_Toplevel,3,start_,start
                ,body_,body
                ,endpos_,endpos
                );
                
            };

            //return toplevel;
            return toplevel;
            
        return undefined;
        }


        //        method isToken(type, value)
        any ParserWithIterable_PRS_isToken(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            var value = argc>1? arguments[1] : undefined;
            //---------
            //return is_token(PRS.token, type, value)
            return ParserWithIterable_is_token(undefined,3,(any_arr){ParserWithIterable_PRS_token,type,value});
            
        return undefined;
        }

        //        method peek() returns string
        any ParserWithIterable_PRS_peek(DEFAULT_ARGUMENTS){
            //return PRS.peeked or (PRS.input.call(undefined) into PRS.peeked)
             //return PRS.peeked or (TKZ.next_token() into PRS.peeked)
             var ___or21=undefined;
             return (_anyToBool(___or21=ParserWithIterable_PRS_peeked)? ___or21 : ((ParserWithIterable_PRS_peeked=ParserWithIterable_TKZ_next_token(undefined,0,NULL))));
             
        return undefined;
        }

        //        method next()
        any ParserWithIterable_PRS_next(DEFAULT_ARGUMENTS){
            //PRS.prev = PRS.token
            ParserWithIterable_PRS_prev = ParserWithIterable_PRS_token;
            //if PRS.peeked
            if (_anyToBool(ParserWithIterable_PRS_peeked))  {
            
                //PRS.token = PRS.peeked
                ParserWithIterable_PRS_token = ParserWithIterable_PRS_peeked;
                //PRS.peeked = null
                ParserWithIterable_PRS_peeked = null;
                
            }
            //else
            //else
            
            else {
                //PRS.token = PRS.input.call(undefined)
                //PRS.token = TKZ.next_token()
                ParserWithIterable_PRS_token = ParserWithIterable_TKZ_next_token(undefined,0,NULL);
                
            };

            //PRS.in_directives = PRS.in_directives
                //and ( PRS.token.type  is  TYPE.string  or  PRS.isToken(TYPE.punc, ";") )
                var ___or22=undefined;
            ParserWithIterable_PRS_in_directives = any_number(_anyToBool(ParserWithIterable_PRS_in_directives) && (_anyToBool((_anyToBool(___or22=any_number(__is(type__(ParserWithIterable_PRS_token),ParserWithIterable_TYPE_string)))? ___or22 : ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(";")})))));

            //return PRS.token
            return ParserWithIterable_PRS_token;
            
        return undefined;
        }


        //        method getPrev()
        any ParserWithIterable_PRS_getPrev(DEFAULT_ARGUMENTS){
            //return PRS.prev
            return ParserWithIterable_PRS_prev;
            
        return undefined;
        }


        //        method croak(msg, line, col, pos)
        any ParserWithIterable_PRS_croak(DEFAULT_ARGUMENTS){
            
            // define named params
            var msg = argc>0? arguments[0] : undefined;
            var line = argc>1? arguments[1] : undefined;
            var col = argc>2? arguments[2] : undefined;
            var pos = argc>3? arguments[3] : undefined;
            //---------
            //var ctx = PRS.input.context();
            //js_error(msg,
                     //TKZ.filename,
                     //line isnt null ? line : TKZ.tokline,
                     //col isnt null ? col : TKZ.tokcol,
                     //pos isnt null ? pos : TKZ.tokpos);
            ParserWithIterable_js_error(undefined,5,(any_arr){msg,ParserWithIterable_TKZ_filename,!__is(line,null) ? line : ParserWithIterable_TKZ_tokline,!__is(col,null) ? col : ParserWithIterable_TKZ_tokcol,!__is(pos,null) ? pos : ParserWithIterable_TKZ_tokpos});
            
        return undefined;
        }


        //        method token_error(token, msg)
        any ParserWithIterable_PRS_token_error(DEFAULT_ARGUMENTS){
            
            // define named params
            var token = argc>0? arguments[0] : undefined;
            var msg = argc>1? arguments[1] : undefined;
            //---------
            //PRS.croak(msg, token.line, token.col);
            ParserWithIterable_PRS_croak(undefined,3,(any_arr){msg,line__(token),col__(token)});
            
        return undefined;
        }


        //        method unexpected(token)
        any ParserWithIterable_PRS_unexpected(DEFAULT_ARGUMENTS){
            
            // define named params
            var token = argc>0? arguments[0] : undefined;
            //---------
            //if token is undefined, token = PRS.token;
            if (__is(token,undefined)) {token = ParserWithIterable_PRS_token;};
            //PRS.token_error(token, "Unexpected token: type:#{token.type} (#{token.value})");
            ParserWithIterable_PRS_token_error(undefined,2,(any_arr){token,_concatAny(5,any_LTR("Unexpected token: type:"),type__(token),any_LTR(" ("),value__(token),any_LTR(")"))});
            
        return undefined;
        }


        //        method expect_token(type, val)
        any ParserWithIterable_PRS_expect_token(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            var val = argc>1? arguments[1] : undefined;
            //---------
            //if PRS.isToken(type, val), return PRS.next()
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){type,val}))) {return ParserWithIterable_PRS_next(undefined,0,NULL);};
            //PRS.token_error(PRS.token, "Unexpected token type:#{PRS.token.type} «#{PRS.token.value}», expected #{type} «#{val}»")
            ParserWithIterable_PRS_token_error(undefined,2,(any_arr){ParserWithIterable_PRS_token,_concatAny(9,any_LTR("Unexpected token type:"),type__(ParserWithIterable_PRS_token),any_LTR(" «"),value__(ParserWithIterable_PRS_token),any_LTR("», expected "),type,any_LTR(" «"),val,any_LTR("»"))});
            
        return undefined;
        }

        //        method expect(punc)
        any ParserWithIterable_PRS_expect(DEFAULT_ARGUMENTS){
            
            // define named params
            var punc = argc>0? arguments[0] : undefined;
            //---------
            //return PRS.expect_token(TYPE.punc, punc);
            return ParserWithIterable_PRS_expect_token(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,punc});
            
        return undefined;
        }

        //        method can_insert_semicolon()
        any ParserWithIterable_PRS_can_insert_semicolon(DEFAULT_ARGUMENTS){
            //return not PRS.options.strict
                //and (PRS.token.nlb  or PRS.isToken(TYPE.eof) or PRS.isToken(TYPE.punc, "}") )
                var ___or24=undefined;
                var ___or23=undefined;
            return any_number(!(_anyToBool(strict__(ParserWithIterable_PRS_options))) && (_anyToBool((_anyToBool(___or24=(_anyToBool(___or23=nlb__(ParserWithIterable_PRS_token))? ___or23 : ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_eof})))? ___or24 : ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("}")})))));
            
        return undefined;
        }


        //        method semicolon()
        any ParserWithIterable_PRS_semicolon(DEFAULT_ARGUMENTS){

            //if PRS.isToken(TYPE.punc, ";")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(";")})))  {
            
                //PRS.next()
                ParserWithIterable_PRS_next(undefined,0,NULL);
                
            }
            //else if not PRS.can_insert_semicolon()
            //else if not PRS.can_insert_semicolon()
            
            else if (!(_anyToBool(ParserWithIterable_PRS_can_insert_semicolon(undefined,0,NULL))))  {
            
                //PRS.unexpected();
                ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                
            };
            
        return undefined;
        }


        //        method parenthesised()
        any ParserWithIterable_PRS_parenthesised(DEFAULT_ARGUMENTS){

            //PRS.expect("(");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("(")});
            //var exp = PRS.expression(true);
            var 
               exp = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
            ;
            //PRS.expect(")");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(")")});
            //return exp;
            return exp;
            
        return undefined;
        }


        //        method handle_regexp()
        any ParserWithIterable_PRS_handle_regexp(DEFAULT_ARGUMENTS){
            //if PRS.isToken(TYPE.operator, "/")  or  PRS.isToken(TYPE.operator, "/=")
            var ___or25=undefined;
            if (_anyToBool((_anyToBool(___or25=ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("/")}))? ___or25 : ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("/=")}))))  {
            
                //PRS.peeked = null;
                ParserWithIterable_PRS_peeked = null;
                //var v:string = PRS.token.value
                var 
                   v = value__(ParserWithIterable_PRS_token)
                ;
                //PRS.token = PRS.input.call(v.substr(1)); // force regexp
                //PRS.token = TKZ.next_token(v.substr(1))
                ParserWithIterable_PRS_token = ParserWithIterable_TKZ_next_token(undefined,1,(any_arr){METHOD(substr_,v)(v,1,(any_arr){any_number(1)})});
                
            };
            
        return undefined;
        }


        //        method embed_tokens(parser_fn:function)
        any ParserWithIterable_PRS_embed_tokens(DEFAULT_ARGUMENTS){
            
            // define named params
            var parser_fn = argc>0? arguments[0] : undefined;
            //---------

//calls parser_fn, returns AST_node

            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;

            //var expr:AST.Node = parser_fn.call(undefined);
            var 
               expr = __apply(parser_fn,1,(any_arr){undefined})
            ;

            //var endpos = PRS.getPrev();
            var 
               endpos = ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ;

            //expr.start = start;
            start__(expr) = start;
            //expr.endpos = endpos;
            endpos__(expr) = endpos;

            //return expr
            return expr;
            
        return undefined;
        }


        //        method statement
        any ParserWithIterable_PRS_statement(DEFAULT_ARGUMENTS){
            //return PRS.embed_tokens(PRS.statement_parser_fn)

            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;

            //var expr:AST.Node = PRS.statement_parser_fn();
            var 
               expr = ParserWithIterable_PRS_statement_parser_fn(undefined,0,NULL)
            ;

            //var endpos = PRS.getPrev();
            var 
               endpos = ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ;

            //expr.start = start;
            start__(expr) = start;
            //expr.endpos = endpos;
            endpos__(expr) = endpos;

            //return expr
            return expr;
            
        return undefined;
        }


        //        method statement_parser_fn
        any ParserWithIterable_PRS_statement_parser_fn(DEFAULT_ARGUMENTS){

            //var tmp;
            var 
               tmp = undefined
            ;
            //PRS.handle_regexp();
            ParserWithIterable_PRS_handle_regexp(undefined,0,NULL);

            //case PRS.token.type
            var _case6=type__(ParserWithIterable_PRS_token);
              //when TYPE.string:
                if (__is(_case6,ParserWithIterable_TYPE_string)){
                    
                //var dir = PRS.in_directives, stat:AST.SimpleStatement = PRS.simple_statement();
                var 
                   dir = ParserWithIterable_PRS_in_directives
                   , stat = ParserWithIterable_PRS_simple_statement(undefined,0,NULL)
                ;
                // XXXv2: decide how to fix directives
                //if (dir and stat.body instanceof AST.StringLiteral and not PRS.isToken(TYPE.punc, ","))
                if ((_anyToBool(dir) && _instanceof(body__(stat),AST_StringLiteral) && !(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(",")})))))  {
                
                    //return new AST.Directive({ value: stat.body.value });
                    return _fastNew(AST_Directive,1,value_,value__(body__(stat))
                    );
                    
                };
                //return stat;
                return stat;
                
            ;
                }
              //when
                else if (__is(_case6,ParserWithIterable_TYPE_num)||__is(_case6,ParserWithIterable_TYPE_regexp)||__is(_case6,ParserWithIterable_TYPE_operator)||__is(_case6,ParserWithIterable_TYPE_atom)){
                    
                    //return PRS.simple_statement();
                    return ParserWithIterable_PRS_simple_statement(undefined,0,NULL);
                    
            ;
                }
              //when TYPE.name:
                else if (__is(_case6,ParserWithIterable_TYPE_name)){
                    
                //return is_token(PRS.peek(), TYPE.punc, ":")
                    //? PRS.labeled_statement()
                    //: PRS.simple_statement();
                return _anyToBool(ParserWithIterable_is_token(undefined,3,(any_arr){ParserWithIterable_PRS_peek(undefined,0,NULL),ParserWithIterable_TYPE_punc,any_LTR(":")})) ? ParserWithIterable_PRS_labeled_statement(undefined,0,NULL) : ParserWithIterable_PRS_simple_statement(undefined,0,NULL);
                
            ;
                }
              //when TYPE.punc:
                else if (__is(_case6,ParserWithIterable_TYPE_punc)){
                    
                //case PRS.token.value
                var _case7=value__(ParserWithIterable_PRS_token);
                  //when "{":
                    if (__is(_case7,any_LTR("{"))){
                        
                    //var bs = new AST.BlockStatement({
                        //start : PRS.token,
                        //body  : PRS.block_()
                        //})
                    var 
                       bs = _fastNew(AST_BlockStatement,2,start_,ParserWithIterable_PRS_token
                    ,body_,ParserWithIterable_PRS_block_(undefined,0,NULL)
                    )
                    ;

                    //bs.endpos = PRS.getPrev()
                    endpos__(bs) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                    //return bs
                    return bs;
                    
                ;
                    }
                  //when "[","(":
                    else if (__is(_case7,any_LTR("["))||__is(_case7,any_LTR("("))){
                        
                    //return PRS.simple_statement();
                    return ParserWithIterable_PRS_simple_statement(undefined,0,NULL);
                    
                ;
                    }
                  //when ";":
                    else if (__is(_case7,any_LTR(";"))){
                        
                    //PRS.next();
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //return new AST.EmptyStatement();
                    return new(AST_EmptyStatement,0,NULL);
                    
                ;
                    }
                else {
                    //PRS.unexpected();
                    ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                    
                };

                //end case punc

              //when TYPE.keyword:
                
                //end case punc
                
            ;
                }
              //when TYPE.keyword:
                else if (__is(_case6,ParserWithIterable_TYPE_keyword)){
                    
                //tmp = PRS.token.value
                tmp = value__(ParserWithIterable_PRS_token);
                //PRS.next()
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //case tmp
                var _case8=tmp;
                  //when "break":
                    if (__is(_case8,any_LTR("break"))){
                        
                    //return PRS.break_cont(AST.BreakStatement);
                    return ParserWithIterable_PRS_break_cont(undefined,1,(any_arr){AST_BreakStatement});
                    
                ;
                    }
                  //when "continue":
                    else if (__is(_case8,any_LTR("continue"))){
                        
                    //return PRS.break_cont(AST.ContinueStatement);
                    return ParserWithIterable_PRS_break_cont(undefined,1,(any_arr){AST_ContinueStatement});
                    
                ;
                    }
                  //when "debugger":
                    else if (__is(_case8,any_LTR("debugger"))){
                        
                    //PRS.semicolon();
                    ParserWithIterable_PRS_semicolon(undefined,0,NULL);
                    //return new AST.Debugger();
                    return new(AST_Debugger,0,NULL);
                    
                ;
                    }
                  //when "do":
                    else if (__is(_case8,any_LTR("do"))){
                        

                    //var theBody = PRS.in_loop_call(PRS.statement)
                    //++PRS.in_loop;
                    ++ParserWithIterable_PRS_in_loop.value.number;
                    //var theBody = PRS.statement();
                    var 
                       theBody = ParserWithIterable_PRS_statement(undefined,0,NULL)
                    ;
                    //--PRS.in_loop;
                    --ParserWithIterable_PRS_in_loop.value.number;


                    //PRS.expect_token(TYPE.keyword, "while")
                    ParserWithIterable_PRS_expect_token(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("while")});
                    //var cond = PRS.parenthesised()
                    var 
                       cond = ParserWithIterable_PRS_parenthesised(undefined,0,NULL)
                    ;
                    //PRS.semicolon()
                    ParserWithIterable_PRS_semicolon(undefined,0,NULL);

                    //return new AST.DoStatement({
                        //body      : theBody
                        //condition : cond
                    //});
                    return _fastNew(AST_DoStatement,2,body_,theBody
                    ,condition_,cond
                    );
                    
                ;
                    }
                  //when "while":
                    else if (__is(_case8,any_LTR("while"))){
                        
                    //var cond1 = PRS.parenthesised();
                    var 
                       cond1 = ParserWithIterable_PRS_parenthesised(undefined,0,NULL)
                    ;
                    //++PRS.in_loop;
                    ++ParserWithIterable_PRS_in_loop.value.number;
                    //var ret1 = PRS.statement();
                    var 
                       ret1 = ParserWithIterable_PRS_statement(undefined,0,NULL)
                    ;
                    //--PRS.in_loop;
                    --ParserWithIterable_PRS_in_loop.value.number;
                    //return new AST.WhileStatement({
                        //condition : cond1,
                        //body      : ret1
                    //});
                    return _fastNew(AST_WhileStatement,2,condition_,cond1
                    ,body_,ret1
                    );
                    
                ;
                    }
                  //when "for":
                    else if (__is(_case8,any_LTR("for"))){
                        
                    //return PRS.for_();
                    return ParserWithIterable_PRS_for_(undefined,0,NULL);
                    
                ;
                    }
                  //when "function":
                    else if (__is(_case8,any_LTR("function"))){
                        
                    //return PRS.function_(AST.Defun);
                    return ParserWithIterable_PRS_function_(undefined,1,(any_arr){AST_Defun});
                    
                ;
                    }
                  //when "if":
                    else if (__is(_case8,any_LTR("if"))){
                        
                    //return PRS.if_();
                    return ParserWithIterable_PRS_if_(undefined,0,NULL);
                    
                ;
                    }
                  //when "return":
                    else if (__is(_case8,any_LTR("return"))){
                        

                    //if PRS.in_function  is  0
                    if (__is(ParserWithIterable_PRS_in_function,any_number(0)))  {
                    
                        //PRS.croak("'return' outside of method");
                        ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("'return' outside of method")});
                        
                    };

                    //var value=null;
                    var 
                       value = null
                    ;
                    //if PRS.isToken(TYPE.punc, ";")
                    if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(";")})))  {
                    
                        //PRS.next
                        ParserWithIterable_PRS_next(undefined,0,NULL);
                        
                    }
                    //else if PRS.can_insert_semicolon()
                    //else if PRS.can_insert_semicolon()
                    
                    else if (_anyToBool(ParserWithIterable_PRS_can_insert_semicolon(undefined,0,NULL)))  {
                    
                        //do nothing
                        //do nothing
                        ;
                        
                    }
                    //else
                    //else
                    
                    else {
                        //value = PRS.expression(true)
                        value = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true});
                        //PRS.semicolon()
                        ParserWithIterable_PRS_semicolon(undefined,0,NULL);
                        
                    };

                    //return new AST.ReturnStatement({
                        //value: value
                    //});
                    return _fastNew(AST_ReturnStatement,1,value_,value
                    );
                    
                ;
                    }
                  //when "switch":
                    else if (__is(_case8,any_LTR("switch"))){
                        
                    //var expr = PRS.parenthesised();
                    var 
                       expr = ParserWithIterable_PRS_parenthesised(undefined,0,NULL)
                    ;
                    //++PRS.in_loop;
                    ++ParserWithIterable_PRS_in_loop.value.number;
                    //var ret2 = PRS.switch_body_();
                    var 
                       ret2 = ParserWithIterable_PRS_switch_body_(undefined,0,NULL)
                    ;
                    //--PRS.in_loop;
                    --ParserWithIterable_PRS_in_loop.value.number;

                    //return new AST.Switch({
                        //expression : expr,
                        //body       : ret2
                    //});
                    return _fastNew(AST_Switch,2,expression_,expr
                    ,body_,ret2
                    );
                    
                ;
                    }
                  //when "throw":
                    else if (__is(_case8,any_LTR("throw"))){
                        
                    //if (PRS.token.nlb)
                    if ((_anyToBool(nlb__(ParserWithIterable_PRS_token))))  {
                    
                        //PRS.croak("Illegal newline after 'throw'");
                        ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("Illegal newline after 'throw'")});
                        
                    };

                    //tmp = PRS.expression(true)
                    tmp = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true});
                    //PRS.semicolon()
                    ParserWithIterable_PRS_semicolon(undefined,0,NULL);

                    //return new AST.ThrowStatement({
                        //value: tmp
                    //});
                    return _fastNew(AST_ThrowStatement,1,value_,tmp
                    );
                    
                ;
                    }
                  //when "try":
                    else if (__is(_case8,any_LTR("try"))){
                        
                    //return PRS.try_();
                    return ParserWithIterable_PRS_try_(undefined,0,NULL);
                    
                ;
                    }
                  //when "var":
                    else if (__is(_case8,any_LTR("var"))){
                        
                    //tmp = PRS.var_()
                    tmp = ParserWithIterable_PRS_var_(undefined,0,NULL);
                    //PRS.semicolon()
                    ParserWithIterable_PRS_semicolon(undefined,0,NULL);
                    //return tmp
                    return tmp;
                    
                ;
                    }
                  //when "const":
                    else if (__is(_case8,any_LTR("const"))){
                        
                    //tmp = PRS.const_()
                    tmp = ParserWithIterable_PRS_const_(undefined,0,NULL);
                    //PRS.semicolon()
                    ParserWithIterable_PRS_semicolon(undefined,0,NULL);
                    //return tmp;
                    return tmp;
                    
                ;
                    }
                  //when "with":
                    else if (__is(_case8,any_LTR("with"))){
                        
                    //return new AST.WithStatement({
                        //expression : PRS.parenthesised(),
                        //body       : PRS.statement()
                    //});
                    return _fastNew(AST_WithStatement,2,expression_,ParserWithIterable_PRS_parenthesised(undefined,0,NULL)
                    ,body_,ParserWithIterable_PRS_statement(undefined,0,NULL)
                    );
                    
                ;
                    }
                else {
                    //PRS.unexpected();
                    ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                    
                };
                
            ;
                };
            
        return undefined;
        }


        //        method labeled_statement()
        any ParserWithIterable_PRS_labeled_statement(DEFAULT_ARGUMENTS){
            //var label = PRS.as_symbol(AST.Label);
            var 
               label = ParserWithIterable_PRS_as_symbol(undefined,1,(any_arr){AST_Label})
            ;

            //var found
            var 
               found = undefined
            ;
            //for each lab:AST.Label in PRS.labels
            {
            var lab, iter=_newIterPos(ParserWithIterable_PRS_labels);
            for(;_iterNext(iter, &lab, NULL, NULL);){
            
                //if lab.name is label.name
                if (__is(name__(lab),name__(label)))  {
                
                    //found = lab
                    found = lab;
                    //break
                    break;
                    
                };
                
            }};// end for each loop

            //if found
            if (_anyToBool(found))  {
            
                // ECMA-262, 12.12: An ECMAScript program is considered
                // syntactically incorrect if it contains a
                // LabelledStatement that is enclosed by a
                // LabelledStatement with the same Identifier as label.
                //PRS.croak("Label #{label.name} defined twice");
                ParserWithIterable_PRS_croak(undefined,1,(any_arr){_concatAny(3,any_LTR("Label "),name__(label),any_LTR(" defined twice"))});
                
            };


            //PRS.expect(":");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(":")});
            //PRS.labels.push(label);
            __call(push_,ParserWithIterable_PRS_labels,1,(any_arr){label});
            //var stat = PRS.statement();
            var 
               stat = ParserWithIterable_PRS_statement(undefined,0,NULL)
            ;
            //PRS.labels.pop();
            __call(pop_,ParserWithIterable_PRS_labels,0,NULL);
            //if stat isnt instanceof AST.IterationStatement
            if (!(_instanceof(stat,AST_IterationStatement)))  {
            
                // check for `continue` that refers to this label.
                // those should be reported as syntax errors.
                // https://github.com/mishoo/UglifyJS2/issues/287
                //for each contStat:AST.ContinueStatement in label.references
                {
                var contStat, iter=_newIterPos(references__(label));
                for(;_iterNext(iter, &contStat, NULL, NULL);){
                  
                    //where contStat instanceof AST.ContinueStatement
                    if(_instanceof(contStat,AST_ContinueStatement)){
                        //var tok = contStat.label.start;
                        var 
                           tok = start__(label__(contStat))
                        ;
                        //PRS.croak("Continue label `#{label.name}` refers to non-IterationStatement.",
                              //tok.line, tok.col, tok.pos);
                        ParserWithIterable_PRS_croak(undefined,4,(any_arr){_concatAny(3,any_LTR("Continue label `"),name__(label),any_LTR("` refers to non-IterationStatement.")),line__(tok),col__(tok),pos__(tok)});
                        
                }}};// end for each loop
                
            };



            //return new AST.LabeledStatement({ body: stat, label: label });
            return _fastNew(AST_LabeledStatement,2,body_,stat
            ,label_,label
            );
            
        return undefined;
        }


        //        method simple_statement(tmp)
        any ParserWithIterable_PRS_simple_statement(DEFAULT_ARGUMENTS){
            
            // define named params
            var tmp = argc>0? arguments[0] : undefined;
            //---------
            //tmp = PRS.expression(true)
            tmp = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true});
            //PRS.semicolon()
            ParserWithIterable_PRS_semicolon(undefined,0,NULL);
            //return new AST.SimpleStatement({ body: tmp });
            return _fastNew(AST_SimpleStatement,1,body_,tmp
            );
            
        return undefined;
        }


        //        method break_cont(type:Function)
        any ParserWithIterable_PRS_break_cont(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            //---------

            //var label = null, found
            var 
               label = null
               , found = undefined
            ;

            //if not PRS.can_insert_semicolon()
            if (!(_anyToBool(ParserWithIterable_PRS_can_insert_semicolon(undefined,0,NULL))))  {
            
                //label = PRS.as_symbol(AST.LabelRef, true)
                label = ParserWithIterable_PRS_as_symbol(undefined,2,(any_arr){AST_LabelRef,true});
                
            };

            //if (label isnt null)
            if ((!__is(label,null)))  {
            

                //for each lab:AST.Label in PRS.labels
                {
                var lab, iter=_newIterPos(ParserWithIterable_PRS_labels);
                for(;_iterNext(iter, &lab, NULL, NULL);){
                
                    //if lab.name is label.name
                    if (__is(name__(lab),name__(label)))  {
                    
                        //found = lab
                        found = lab;
                        //break
                        break;
                        
                    };
                    
                }};// end for each loop

                //if not found
                if (!(_anyToBool(found)))  {
                
                    //PRS.croak("Undefined label #{label.name}");
                    ParserWithIterable_PRS_croak(undefined,1,(any_arr){_concatAny(2,any_LTR("Undefined label "),name__(label))});
                    
                };

                //label.thedef = found;
                thedef__(label) = found;
                
            }
            //else if (PRS.in_loop  is  0)
            //else if (PRS.in_loop  is  0)
            
            else if ((__is(ParserWithIterable_PRS_in_loop,any_number(0))))  {
            
                //PRS.croak("#{type.name} not inside a loop or switch");
                ParserWithIterable_PRS_croak(undefined,1,(any_arr){_concatAny(2,name__(type),any_LTR(" not inside a loop or switch"))});
                
            };

            //PRS.semicolon();
            ParserWithIterable_PRS_semicolon(undefined,0,NULL);

            //var stat = new type({ label: label });
            var 
               stat = _fastNew(type,1,label_,label
            )
            ;
            //if found, found.references.push(stat);
            if (_anyToBool(found)) {__call(push_,references__(found),1,(any_arr){stat});};
            //return stat;
            return stat;
            
        return undefined;
        }


        //        method for_()
        any ParserWithIterable_PRS_for_(DEFAULT_ARGUMENTS){
            //PRS.expect("(");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("(")});
            //var init:AST.Node = null;
            var 
               init = null
            ;

            //if not PRS.isToken(TYPE.punc, ";")
            if (!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(";")}))))  {
            

                //if PRS.isToken(TYPE.keyword, "var")
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("var")})))  {
                
                    //PRS.next()
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //init = PRS.var_(true)
                    init = ParserWithIterable_PRS_var_(undefined,1,(any_arr){true});
                    
                }
                //else
                //else
                
                else {
                    //init = PRS.expression(true, true);
                    init = ParserWithIterable_PRS_expression(undefined,2,(any_arr){true,true});
                    
                };

                //if PRS.isToken(TYPE.operator, "in")
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("in")})))  {
                
                    //if init instanceof AST.Var
                    if (_instanceof(init,AST_Var))  {
                    
                        //declare init:AST.Var
                        
                        //if init.definitions.length>1
                        if (_length(definitions__(init)) > 1)  {
                        
                            //PRS.croak("Only one variable declaration allowed in for..in loop")
                            ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("Only one variable declaration allowed in for..in loop")});
                            
                        };
                        
                    };

                    //PRS.next();
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //return PRS.for_in(init);
                    return ParserWithIterable_PRS_for_in(undefined,1,(any_arr){init});
                    
                };
                
            };


            //return PRS.regular_for(init);
            return ParserWithIterable_PRS_regular_for(undefined,1,(any_arr){init});
            
        return undefined;
        }


        //        method regular_for(init)
        any ParserWithIterable_PRS_regular_for(DEFAULT_ARGUMENTS){
            
            // define named params
            var init = argc>0? arguments[0] : undefined;
            //---------
            //PRS.expect(";");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(";")});
            //var test = PRS.isToken(TYPE.punc, ";") ? null : PRS.expression(true);
            var 
               test = _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(";")})) ? null : ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
            ;
            //PRS.expect(";");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(";")});
            //var step = PRS.isToken(TYPE.punc, ")") ? null : PRS.expression(true);
            var 
               step = _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(")")})) ? null : ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
            ;
            //PRS.expect(")");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(")")});

            //++PRS.in_loop;
            ++ParserWithIterable_PRS_in_loop.value.number;
            //var ret = PRS.statement();
            var 
               ret = ParserWithIterable_PRS_statement(undefined,0,NULL)
            ;
            //--PRS.in_loop;
            --ParserWithIterable_PRS_in_loop.value.number;

            //return new AST.ForStatement({
                //init      : init,
                //condition : test,
                //step      : step,
                //body      : ret
            //});
            return _fastNew(AST_ForStatement,4,init_,init
            ,condition_,test
            ,step_,step
            ,body_,ret
            );
            
        return undefined;
        }


        //        method for_in(init:AST.Var)
        any ParserWithIterable_PRS_for_in(DEFAULT_ARGUMENTS){
            
            // define named params
            var init = argc>0? arguments[0] : undefined;
            //---------
            //var lhs = init instanceof AST.Var ? init.definitions[0].name : null;
            var 
               lhs = _instanceof(init,AST_Var) ? name__(ITEM(definitions__(init),0)) : null
            ;
            //var obj = PRS.expression(true);
            var 
               obj = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
            ;
            //PRS.expect(")");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(")")});

            //++PRS.in_loop;
            ++ParserWithIterable_PRS_in_loop.value.number;
            //var ret = PRS.statement();
            var 
               ret = ParserWithIterable_PRS_statement(undefined,0,NULL)
            ;
            //--PRS.in_loop;
            --ParserWithIterable_PRS_in_loop.value.number;

            //return new AST.ForIn({
                //init   : init,
                //name   : lhs,
                //object : obj,
                //body   : ret //PRS.in_loop_call(PRS.statement)
            //});
            return _fastNew(AST_ForIn,4,init_,init
            ,name_,lhs
            ,object_,obj
            ,body_,ret
            );
            
        return undefined;
        }


        //        method function_(ctor)
        any ParserWithIterable_PRS_function_(DEFAULT_ARGUMENTS){
            
            // define named params
            var ctor = argc>0? arguments[0] : undefined;
            //---------
            //var in_statement = ctor is AST.Defun;
            var 
               in_statement = any_number(__is(ctor,AST_Defun))
            ;
            //var name = PRS.isToken(TYPE.name) ? PRS.as_symbol(in_statement ? AST.SymbolDefun : AST.SymbolLambda) : null;
            var 
               name = _anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_name})) ? ParserWithIterable_PRS_as_symbol(undefined,1,(any_arr){_anyToBool(in_statement) ? AST_SymbolDefun : AST_SymbolLambda}) : null
            ;
            //if (in_statement and not name)
            if ((_anyToBool(in_statement) && !(_anyToBool(name))))  {
            
                //PRS.unexpected();
                ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                
            };

            //PRS.expect("(");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("(")});

//arguments

            //var a=[],first=true
            var 
               a = new(Array,0,NULL)
               , first = true
            ;
            //while not PRS.isToken(TYPE.punc, ")")
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(")")})))){
                //if first
                if (_anyToBool(first))  {
                
                    //first = false
                    first = false;
                    
                }
                //else
                //else
                
                else {
                    //PRS.expect(",")
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(",")});
                    
                };

                //a.push PRS.as_symbol(AST.SymbolFunarg)
                METHOD(push_,a)(a,1,(any_arr){ParserWithIterable_PRS_as_symbol(undefined,1,(any_arr){AST_SymbolFunarg})});
                
            };// end loop

            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);

//body

            //var
                //inLoopFlag = PRS.in_loop
                //labels = PRS.labels

            //++PRS.in_function;
            var 
               inLoopFlag = ParserWithIterable_PRS_in_loop
               , labels = ParserWithIterable_PRS_labels
            ;

            //++PRS.in_function;
            ++ParserWithIterable_PRS_in_function.value.number;
            //PRS.in_directives = true;
            ParserWithIterable_PRS_in_directives = true;
            //PRS.in_loop = 0;
            ParserWithIterable_PRS_in_loop = any_number(0);
            //PRS.labels = [];
            ParserWithIterable_PRS_labels = new(Array,0,NULL);

            //var theBody = PRS.block_();
            var 
               theBody = ParserWithIterable_PRS_block_(undefined,0,NULL)
            ;

            //--PRS.in_function;
            --ParserWithIterable_PRS_in_function.value.number;
            //PRS.in_loop = inLoopFlag;
            ParserWithIterable_PRS_in_loop = inLoopFlag;
            //PRS.labels = labels;
            ParserWithIterable_PRS_labels = labels;

            //return new ctor({
                //name: name,
                //argnames: a,
                //body: theBody
            //});
            return _fastNew(ctor,3,name_,name
            ,argnames_,a
            ,body_,theBody
            );
            
        return undefined;
        }


        //        method if_()
        any ParserWithIterable_PRS_if_(DEFAULT_ARGUMENTS){
            //var cond = PRS.parenthesised(), body = PRS.statement(), belse = null;
            var 
               cond = ParserWithIterable_PRS_parenthesised(undefined,0,NULL)
               , body = ParserWithIterable_PRS_statement(undefined,0,NULL)
               , belse = null
            ;
            //if PRS.isToken(TYPE.keyword, "else")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("else")})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //belse = PRS.statement();
                belse = ParserWithIterable_PRS_statement(undefined,0,NULL);
                
            };

            //return new AST.IfStatement({
                //condition   : cond,
                //body        : body,
                //alternative : belse
            //});
            return _fastNew(AST_IfStatement,3,condition_,cond
            ,body_,body
            ,alternative_,belse
            );
            
        return undefined;
        }


        //        method block_()
        any ParserWithIterable_PRS_block_(DEFAULT_ARGUMENTS){

            //PRS.expect("{");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("{")});
            //var a = [];
            var 
               a = new(Array,0,NULL)
            ;

            //while not PRS.isToken(TYPE.punc, "}")
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("}")})))){
                //if PRS.isToken(TYPE.eof), PRS.unexpected();
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_eof}))) {ParserWithIterable_PRS_unexpected(undefined,0,NULL);};
                //a.push PRS.statement()
                METHOD(push_,a)(a,1,(any_arr){ParserWithIterable_PRS_statement(undefined,0,NULL)});
                
            };// end loop

            //PRS.next()
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //return a
            return a;
            
        return undefined;
        }


        //        method switch_body_()
        any ParserWithIterable_PRS_switch_body_(DEFAULT_ARGUMENTS){

            //PRS.expect("{");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("{")});
            //var a = [], cur:array = null, branch:AST.Token = null, tmp;
            var 
               a = new(Array,0,NULL)
               , cur = null
               , branch = null
               , tmp = undefined
            ;

            //while not PRS.isToken(TYPE.punc, "}")
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("}")})))){

                //if PRS.isToken(TYPE.eof), PRS.unexpected();
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_eof}))) {ParserWithIterable_PRS_unexpected(undefined,0,NULL);};

                //if PRS.isToken(TYPE.keyword, "case")
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("case")})))  {
                
                    //if branch, branch.endpos = PRS.getPrev();
                    if (_anyToBool(branch)) {endpos__(branch) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);};
                    //cur = [];
                    cur = new(Array,0,NULL);
                    //tmp = PRS.token
                    tmp = ParserWithIterable_PRS_token;
                    //PRS.next()
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //branch = new AST.Case({
                        //start      : tmp,
                        //expression : PRS.expression(true),
                        //body       : cur
                    //});
                    branch = _fastNew(AST_Case,3,start_,tmp
                    ,expression_,ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
                    ,body_,cur
                    );
                    //a.push(branch);
                    METHOD(push_,a)(a,1,(any_arr){branch});
                    //PRS.expect(":");
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(":")});
                    
                }
                //else if PRS.isToken(TYPE.keyword, "default")
                //else if PRS.isToken(TYPE.keyword, "default")
                
                else if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("default")})))  {
                
                    //if branch, branch.endpos = PRS.getPrev();
                    if (_anyToBool(branch)) {endpos__(branch) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);};
                    //cur = [];
                    cur = new(Array,0,NULL);
                    //tmp = PRS.token
                    tmp = ParserWithIterable_PRS_token;
                    //PRS.next()
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //PRS.expect(":")
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(":")});
                    //branch = new AST.Default({
                        //start : tmp,
                        //body  : cur
                    //});
                    branch = _fastNew(AST_Default,2,start_,tmp
                    ,body_,cur
                    );
                    //a.push(branch);
                    METHOD(push_,a)(a,1,(any_arr){branch});
                    
                }
                //else
                //else
                
                else {
                    //if not cur, PRS.unexpected()
                    if (!(_anyToBool(cur))) {ParserWithIterable_PRS_unexpected(undefined,0,NULL);};
                    //cur.push PRS.statement()
                    METHOD(push_,cur)(cur,1,(any_arr){ParserWithIterable_PRS_statement(undefined,0,NULL)});
                    
                };
                
            };// end loop


            //if branch, branch.endpos = PRS.getPrev()
            if (_anyToBool(branch)) {endpos__(branch) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);};

            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);

            //return a;
            return a;
            
        return undefined;
        }


        //        method try_()
        any ParserWithIterable_PRS_try_(DEFAULT_ARGUMENTS){

            //var
                //body = PRS.block_()
                //bcatch
                //bfinally
                //start

            //if PRS.isToken(TYPE.keyword, "catch")
            var 
               body = ParserWithIterable_PRS_block_(undefined,0,NULL)
               , bcatch = undefined
               , bfinally = undefined
               , start = undefined
            ;

            //if PRS.isToken(TYPE.keyword, "catch")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("catch")})))  {
            
                //start = PRS.token
                start = ParserWithIterable_PRS_token;
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //PRS.expect("(");
                ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("(")});
                //var name = PRS.as_symbol(AST.SymbolCatch);
                var 
                   name = ParserWithIterable_PRS_as_symbol(undefined,1,(any_arr){AST_SymbolCatch})
                ;
                //PRS.expect(")");
                ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(")")});
                //bcatch = new AST.Catch({
                    //start   : start,
                    //argname : name,
                    //body    : PRS.block_(),
                    //})
                bcatch = _fastNew(AST_Catch,3,start_,start
                ,argname_,name
                ,body_,ParserWithIterable_PRS_block_(undefined,0,NULL)
                );
                //bcatch.endpos = PRS.getPrev()
                endpos__(bcatch) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                
            };

            //if PRS.isToken(TYPE.keyword, "finally")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("finally")})))  {
            
                //start = PRS.token
                start = ParserWithIterable_PRS_token;
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //bfinally = new AST.Finally({
                    //start : start,
                    //body  : PRS.block_(),
                    //})
                bfinally = _fastNew(AST_Finally,2,start_,start
                ,body_,ParserWithIterable_PRS_block_(undefined,0,NULL)
                );
                //bfinally.endpos = PRS.getPrev()
                endpos__(bfinally) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                
            };

            //if no bcatch and no bfinally
            if (!_anyToBool(bcatch) && !_anyToBool(bfinally))  {
            
                //PRS.croak("Missing catch/finally blocks");
                ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("Missing catch/finally blocks")});
                
            };

            //return new AST.Try({
                //body     : body,
                //bcatch   : bcatch,
                //bfinally : bfinally
            //});
            return _fastNew(AST_Try,3,body_,body
            ,bcatch_,bcatch
            ,bfinally_,bfinally
            );
            
        return undefined;
        }



        //        method vardefs(no_in, in_const)
        any ParserWithIterable_PRS_vardefs(DEFAULT_ARGUMENTS){
            
            // define named params
            var no_in = argc>0? arguments[0] : undefined;
            var in_const = argc>1? arguments[1] : undefined;
            //---------
            //var a = [];
            var 
               a = new(Array,0,NULL)
            ;
            //do
            while(TRUE){
                //var start = PRS.token;
                var 
                   start = ParserWithIterable_PRS_token
                ;

                //var name = PRS.as_symbol( in_const? AST.SymbolConst : AST.SymbolVar);
                var 
                   name = ParserWithIterable_PRS_as_symbol(undefined,1,(any_arr){_anyToBool(in_const) ? AST_SymbolConst : AST_SymbolVar})
                ;

                //var value = null
                var 
                   value = null
                ;
                //if PRS.isToken(TYPE.operator, "=")
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("=")})))  {
                
                    //PRS.next()
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //value = PRS.expression(false, no_in)
                    value = ParserWithIterable_PRS_expression(undefined,2,(any_arr){false,no_in});
                    
                };

                //var v = new AST.VarDef({
                    //start : start
                    //name  : name
                    //value : value
                    //})
                var 
                   v = _fastNew(AST_VarDef,3,start_,start
                ,name_,name
                ,value_,value
                )
                ;

                //v.endpos =  PRS.getPrev()
                endpos__(v) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //a.push v
                METHOD(push_,a)(a,1,(any_arr){v});

                //if no PRS.isToken(TYPE.punc, ","), break
                if (!_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(",")}))) {break;};
                //PRS.next()
                ParserWithIterable_PRS_next(undefined,0,NULL);
                
            };// end loop
            //return a;
            return a;
            
        return undefined;
        }


        //        method var_ (no_in)
        any ParserWithIterable_PRS_var_(DEFAULT_ARGUMENTS){
            
            // define named params
            var no_in = argc>0? arguments[0] : undefined;
            //---------
            //var v = new AST.Var({
                //start       : PRS.getPrev(),
                //definitions : PRS.vardefs(no_in, false),
                //})
            var 
               v = _fastNew(AST_Var,2,start_,ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ,definitions_,ParserWithIterable_PRS_vardefs(undefined,2,(any_arr){no_in,false})
            )
            ;
            //v.endpos = PRS.getPrev()
            endpos__(v) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
            //return v
            return v;
            
        return undefined;
        }


        //        method const_
        any ParserWithIterable_PRS_const_(DEFAULT_ARGUMENTS){
            //var c = new AST.Const({
                //start       : PRS.getPrev(),
                //definitions : PRS.vardefs(false, true),
                //})
            var 
               c = _fastNew(AST_Const,2,start_,ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ,definitions_,ParserWithIterable_PRS_vardefs(undefined,2,(any_arr){false,true})
            )
            ;
            //c.endpos = PRS.getPrev()
            endpos__(c) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
            //return c
            return c;
            
        return undefined;
        }

        //        method new_
        any ParserWithIterable_PRS_new_(DEFAULT_ARGUMENTS){
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //PRS.expect_token(TYPE.operator, "new");
            ParserWithIterable_PRS_expect_token(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("new")});
            //var newexp = PRS.expr_atom(false), args;
            var 
               newexp = ParserWithIterable_PRS_expr_atom(undefined,1,(any_arr){false})
               , args = undefined
            ;
            //if PRS.isToken(TYPE.punc, "(")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("(")})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //args = PRS.expr_list(")");
                args = ParserWithIterable_PRS_expr_list(undefined,1,(any_arr){any_LTR(")")});
                
            }
            //else
            //else
            
            else {
                //args = [];
                args = new(Array,0,NULL);
                
            };

            //return PRS.subscripts(new AST.New({
                //start      : start,
                //expression : newexp,
                //args       : args,
                //endpos     : PRS.getPrev()
            //}), true);
            return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){_fastNew(AST_New,4,start_,start
            ,expression_,newexp
            ,args_,args
            ,endpos_,ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ),true});
            
        return undefined;
        }


        //        method as_atom_node()
        any ParserWithIterable_PRS_as_atom_node(DEFAULT_ARGUMENTS){
            //var tok = PRS.token, ret;
            var 
               tok = ParserWithIterable_PRS_token
               , ret = undefined
            ;

            //case tok.type
            var _case9=type__(tok);
              //when TYPE.name,TYPE.keyword:
                if (__is(_case9,ParserWithIterable_TYPE_name)||__is(_case9,ParserWithIterable_TYPE_keyword)){
                    
                //ret = PRS._make_symbol(AST.SymbolRef);
                ret = ParserWithIterable_PRS__make_symbol(undefined,1,(any_arr){AST_SymbolRef});
                
            ;
                }
              //when TYPE.num:
                else if (__is(_case9,ParserWithIterable_TYPE_num)){
                    
                //ret = new AST.NumberLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = _fastNew(AST_NumberLiteral,3,start_,tok
                ,endpos_,tok
                ,value_,value__(tok)
                );
                
            ;
                }
              //when TYPE.string:
                else if (__is(_case9,ParserWithIterable_TYPE_string)){
                    
                //ret = new AST.StringLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = _fastNew(AST_StringLiteral,3,start_,tok
                ,endpos_,tok
                ,value_,value__(tok)
                );
                
            ;
                }
              //when TYPE.regexp:
                else if (__is(_case9,ParserWithIterable_TYPE_regexp)){
                    
                //ret = new AST.RegExpLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = _fastNew(AST_RegExpLiteral,3,start_,tok
                ,endpos_,tok
                ,value_,value__(tok)
                );
                
            ;
                }
              //when TYPE.atom:
                else if (__is(_case9,ParserWithIterable_TYPE_atom)){
                    

                //case tok.value
                var _case10=value__(tok);
                  //when "false":
                    if (__is(_case10,any_LTR("false"))){
                        
                    //ret = new AST.FalseAtom({ start: tok, endpos: tok });
                    ret = _fastNew(AST_FalseAtom,2,start_,tok
                    ,endpos_,tok
                    );
                    
                ;
                    }
                  //when "true":
                    else if (__is(_case10,any_LTR("true"))){
                        
                    //ret = new AST.TrueAtom({ start: tok, endpos: tok });
                    ret = _fastNew(AST_TrueAtom,2,start_,tok
                    ,endpos_,tok
                    );
                    
                ;
                    }
                  //when "null":
                    else if (__is(_case10,any_LTR("null"))){
                        
                    //ret = new AST.NullAtom({ start: tok, endpos: tok });
                    ret = _fastNew(AST_NullAtom,2,start_,tok
                    ,endpos_,tok
                    );
                    
                ;
                    };
                
            ;
                };

            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //return ret;
            return ret;
            
        return undefined;
        }


        //        method expr_atom(allow_calls)
        any ParserWithIterable_PRS_expr_atom(DEFAULT_ARGUMENTS){
            
            // define named params
            var allow_calls = argc>0? arguments[0] : undefined;
            //---------
            //if PRS.isToken(TYPE.operator, "new")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("new")})))  {
            
                //return PRS.new_();
                return ParserWithIterable_PRS_new_(undefined,0,NULL);
                
            };

            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //if PRS.isToken(TYPE.punc)
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_punc})))  {
            

                //case start.value
                var _case11=value__(start);
                  //when "(":
                    if (__is(_case11,any_LTR("("))){
                        
                    //PRS.next();
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //var ex= PRS.expression(true);
                    var 
                       ex = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
                    ;
                    //ex.start = start;
                    start__(ex) = start;
                    //ex.endpos = PRS.token;
                    endpos__(ex) = ParserWithIterable_PRS_token;
                    //PRS.expect(")");
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(")")});
                    //return PRS.subscripts(ex, allow_calls);
                    return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){ex,allow_calls});
                    
                ;
                    }
                  //when "[":
                    else if (__is(_case11,any_LTR("["))){
                        
                    //return PRS.subscripts(PRS.array_(), allow_calls);
                    return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){ParserWithIterable_PRS_array_(undefined,0,NULL),allow_calls});
                    
                ;
                    }
                  //when "{":
                    else if (__is(_case11,any_LTR("{"))){
                        
                    //return PRS.subscripts(PRS.object_(), allow_calls);
                    return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){ParserWithIterable_PRS_object_(undefined,0,NULL),allow_calls});
                    
                ;
                    };

                //PRS.unexpected();
                ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                
            };

            //if PRS.isToken(TYPE.keyword, "function")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_keyword,any_LTR("function")})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //var func:AST.FunctionExpression = PRS.function_(AST.FunctionExpression);
                var 
                   func = ParserWithIterable_PRS_function_(undefined,1,(any_arr){AST_FunctionExpression})
                ;
                //func.start = start;
                start__(func) = start;
                //func.endpos = PRS.getPrev();
                endpos__(func) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //return PRS.subscripts(func, allow_calls);
                return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){func,allow_calls});
                
            };

            //if PRS.token.type >= TYPE.atom // in ATOMIC_START_TOKEN
            if (_anyToNumber(type__(ParserWithIterable_PRS_token)) >= _anyToNumber(ParserWithIterable_TYPE_atom))  {
            
                //return PRS.subscripts(PRS.as_atom_node(), allow_calls);
                return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){ParserWithIterable_PRS_as_atom_node(undefined,0,NULL),allow_calls});
                
            };

            //PRS.unexpected()
            ParserWithIterable_PRS_unexpected(undefined,0,NULL);
            
        return undefined;
        }



        //        method expr_list(closing, allow_trailing_comma, allow_empty)
        any ParserWithIterable_PRS_expr_list(DEFAULT_ARGUMENTS){
            
            // define named params
            var closing = argc>0? arguments[0] : undefined;
            var allow_trailing_comma = argc>1? arguments[1] : undefined;
            var allow_empty = argc>2? arguments[2] : undefined;
            //---------
            //var first = true, a = [];
            var 
               first = true
               , a = new(Array,0,NULL)
            ;

            //do while not PRS.isToken(TYPE.punc, closing)
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,closing})))){

                //if first
                if (_anyToBool(first))  {
                
                    //first = false
                    first = false;
                    
                }
                //else
                //else
                
                else {
                    //PRS.expect(",")
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(",")});
                    
                };

                //if allow_trailing_comma and PRS.isToken(TYPE.punc, closing), break
                if (_anyToBool(allow_trailing_comma) && _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,closing}))) {break;};

                //if PRS.isToken(TYPE.punc, ",") and allow_empty
                if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(",")})) && _anyToBool(allow_empty))  {
                
                    //a.push(new AST.Hole({ start: PRS.token, endpos: PRS.token }));
                    METHOD(push_,a)(a,1,(any_arr){_fastNew(AST_Hole,2,start_,ParserWithIterable_PRS_token
                    ,endpos_,ParserWithIterable_PRS_token
                    )});
                    
                }
                //else
                //else
                
                else {
                    //a.push(PRS.expression(false))
                    METHOD(push_,a)(a,1,(any_arr){ParserWithIterable_PRS_expression(undefined,1,(any_arr){false})});
                    
                };
                
            };// end loop

            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //return a;
            return a;
            
        return undefined;
        }


        //        method array_
        any ParserWithIterable_PRS_array_(DEFAULT_ARGUMENTS){
            //return PRS.embed_tokens(PRS.array_parser)
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;

            //var expr:AST.Node = PRS.array_parser();
            var 
               expr = ParserWithIterable_PRS_array_parser(undefined,0,NULL)
            ;

            //var endpos = PRS.getPrev();
            var 
               endpos = ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ;

            //expr.start = start;
            start__(expr) = start;
            //expr.endpos = endpos;
            endpos__(expr) = endpos;

            //return expr
            return expr;
            
        return undefined;
        }


        //        method array_parser
        any ParserWithIterable_PRS_array_parser(DEFAULT_ARGUMENTS){
            //PRS.expect("[");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("[")});
            //return new AST.ArrayLiteral({
                //elements: PRS.expr_list("]", not PRS.options.strict, true)
            //});
            return _fastNew(AST_ArrayLiteral,1,elements_,ParserWithIterable_PRS_expr_list(undefined,3,(any_arr){any_LTR("]"),any_bool(!(_anyToBool(strict__(ParserWithIterable_PRS_options)))),true})
            );
            
        return undefined;
        }


        //        method object_
        any ParserWithIterable_PRS_object_(DEFAULT_ARGUMENTS){
            //return PRS.embed_tokens(PRS.object_parser)
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;

            //var expr:AST.Node = PRS.object_parser();
            var 
               expr = ParserWithIterable_PRS_object_parser(undefined,0,NULL)
            ;

            //var endpos = PRS.getPrev();
            var 
               endpos = ParserWithIterable_PRS_getPrev(undefined,0,NULL)
            ;

            //expr.start = start;
            start__(expr) = start;
            //expr.endpos = endpos;
            endpos__(expr) = endpos;

            //return expr
            return expr;
            
        return undefined;
        }

        //        method object_parser
        any ParserWithIterable_PRS_object_parser(DEFAULT_ARGUMENTS){
            //PRS.expect("{");
            ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("{")});
            //var first = true, a = [];
            var 
               first = true
               , a = new(Array,0,NULL)
            ;

            //do while not PRS.isToken(TYPE.punc, "}")
            while(!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("}")})))){

                //if (first)
                if ((_anyToBool(first)))  {
                
                    //first = false
                    first = false;
                    
                }
                //else
                //else
                
                else {
                    //PRS.expect(",")
                    ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(",")});
                    
                };

                //if not PRS.options.strict and PRS.isToken(TYPE.punc, "}")
                if (!(_anyToBool(strict__(ParserWithIterable_PRS_options))) && _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("}")})))  {
                
                    // allow trailing comma
                    //break;
                    break;
                    
                };

                //var start = PRS.token;
                var 
                   start = ParserWithIterable_PRS_token
                ;
                //var type = start.type;
                var 
                   type = type__(start)
                ;
                //var name = PRS.as_property_name();
                var 
                   name = ParserWithIterable_PRS_as_property_name(undefined,0,NULL)
                ;

                //if type is TYPE.name and not PRS.isToken(TYPE.punc, ":")
                if (__is(type,ParserWithIterable_TYPE_name) && !(_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(":")}))))  {
                
                    //if name  is "get"
                    if (__is(name,any_LTR("get")))  {
                    
                        //var og = new AST.ObjectGetter({
                            //start : start,
                            //key   : PRS.as_atom_node(),
                            //value : PRS.function_(AST.Accessor)
                            //})
                        var 
                           og = _fastNew(AST_ObjectGetter,3,start_,start
                        ,key_,ParserWithIterable_PRS_as_atom_node(undefined,0,NULL)
                        ,value_,ParserWithIterable_PRS_function_(undefined,1,(any_arr){AST_Accessor})
                        )
                        ;

                        //og.endpos = PRS.getPrev()
                        endpos__(og) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                        //a.push og
                        METHOD(push_,a)(a,1,(any_arr){og});
                        //continue;
                        continue;
                        
                    };

                    //if name is "set"
                    if (__is(name,any_LTR("set")))  {
                    
                        //var os = new AST.ObjectSetter({
                            //start : start,
                            //key   : PRS.as_atom_node(),
                            //value : PRS.function_(AST.Accessor)
                            //})
                        var 
                           os = _fastNew(AST_ObjectSetter,3,start_,start
                        ,key_,ParserWithIterable_PRS_as_atom_node(undefined,0,NULL)
                        ,value_,ParserWithIterable_PRS_function_(undefined,1,(any_arr){AST_Accessor})
                        )
                        ;

                        //os.endpos =  PRS.getPrev()
                        endpos__(os) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                        //a.push os
                        METHOD(push_,a)(a,1,(any_arr){os});
                        //continue;
                        continue;
                        
                    };
                    
                };


                //PRS.expect(":");
                ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(":")});
                //var okv = new AST.ObjectKeyVal({
                    //start : start,
                    //key   : name,
                    //value : PRS.expression(false)
                    //})
                var 
                   okv = _fastNew(AST_ObjectKeyVal,3,start_,start
                ,key_,name
                ,value_,ParserWithIterable_PRS_expression(undefined,1,(any_arr){false})
                )
                ;
                //okv.endpos = PRS.getPrev()
                endpos__(okv) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //a.push okv
                METHOD(push_,a)(a,1,(any_arr){okv});
                
            };// end loop

            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //return new AST.ObjectLiteral({ props: a })
            return _fastNew(AST_ObjectLiteral,1,props_,a
            );
            
        return undefined;
        }


        //        method as_property_name()
        any ParserWithIterable_PRS_as_property_name(DEFAULT_ARGUMENTS){
            //var tmp = PRS.token;
            var 
               tmp = ParserWithIterable_PRS_token
            ;
            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //case tmp.type
            var _case12=type__(tmp);
              //when
                if (__is(_case12,ParserWithIterable_TYPE_num)||__is(_case12,ParserWithIterable_TYPE_string)||__is(_case12,ParserWithIterable_TYPE_name)||__is(_case12,ParserWithIterable_TYPE_operator)||__is(_case12,ParserWithIterable_TYPE_keyword)||__is(_case12,ParserWithIterable_TYPE_atom)){
                    
                    //return tmp.value;
                    return value__(tmp);
                    
            ;
                }
            else {
                //PRS.unexpected();
                ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                
            };
            
        return undefined;
        }



        //        method as_name()
        any ParserWithIterable_PRS_as_name(DEFAULT_ARGUMENTS){
            //var tmp = PRS.token;
            var 
               tmp = ParserWithIterable_PRS_token
            ;
            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //case tmp.type
            var _case13=type__(tmp);
              //when TYPE.name, TYPE.operator, TYPE.keyword, TYPE.atom:
                if (__is(_case13,ParserWithIterable_TYPE_name)||__is(_case13,ParserWithIterable_TYPE_operator)||__is(_case13,ParserWithIterable_TYPE_keyword)||__is(_case13,ParserWithIterable_TYPE_atom)){
                    
                    //return tmp.value;
                    return value__(tmp);
                    
            ;
                }
            else {
                //PRS.unexpected()
                ParserWithIterable_PRS_unexpected(undefined,0,NULL);
                
            };
            
        return undefined;
        }

        //        method _make_symbol(typeClass)
        any ParserWithIterable_PRS__make_symbol(DEFAULT_ARGUMENTS){
            
            // define named params
            var typeClass = argc>0? arguments[0] : undefined;
            //---------
            //var name = PRS.token.value;
            var 
               name = value__(ParserWithIterable_PRS_token)
            ;
            //typeClass = name  is  "this" ? AST.This : typeClass;
            typeClass = __is(name,any_LTR("this")) ? AST_This : typeClass;
            //return new typeClass({
                //name  : name.toString(),
                //start : PRS.token,
                //endpos: PRS.token
            //});
            return _fastNew(typeClass,3,name_,METHOD(toString_,name)(name,0,NULL)
            ,start_,ParserWithIterable_PRS_token
            ,endpos_,ParserWithIterable_PRS_token
            );
            
        return undefined;
        }


        //        method as_symbol(type, noerror)
        any ParserWithIterable_PRS_as_symbol(DEFAULT_ARGUMENTS){
            
            // define named params
            var type = argc>0? arguments[0] : undefined;
            var noerror = argc>1? arguments[1] : undefined;
            //---------
            //if not PRS.isToken(TYPE.name)
            if (!(_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_name}))))  {
            
                //if not noerror, PRS.croak("Name expected");
                if (!(_anyToBool(noerror))) {ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("Name expected")});};
                //return null
                return null;
                
            };

            //var sym = PRS._make_symbol(type);
            var 
               sym = ParserWithIterable_PRS__make_symbol(undefined,1,(any_arr){type})
            ;
            //PRS.next();
            ParserWithIterable_PRS_next(undefined,0,NULL);
            //return sym;
            return sym;
            
        return undefined;
        }


        //        method subscripts(expr:AST.Node, allow_calls)
        any ParserWithIterable_PRS_subscripts(DEFAULT_ARGUMENTS){
            
            // define named params
            var expr = argc>0? arguments[0] : undefined;
            var allow_calls = argc>1? arguments[1] : undefined;
            //---------
            //var start = expr.start;
            var 
               start = start__(expr)
            ;
            //if (PRS.isToken(TYPE.punc, "."))
            if ((_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(".")}))))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //var s=new AST.Dot({
                    //start      : start,
                    //expression : expr,
                    //prop       : PRS.as_name(),
                    //})
                var 
                   s = _fastNew(AST_Dot,3,start_,start
                ,expression_,expr
                ,prop_,ParserWithIterable_PRS_as_name(undefined,0,NULL)
                )
                ;
                //s.endpos = PRS.getPrev()
                endpos__(s) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //return PRS.subscripts(s, allow_calls)
                return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){s,allow_calls});
                
            };


            //if (PRS.isToken(TYPE.punc, "["))
            if ((_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("[")}))))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //var prop = PRS.expression(true);
                var 
                   prop = ParserWithIterable_PRS_expression(undefined,1,(any_arr){true})
                ;
                //PRS.expect("]");
                ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR("]")});
                //return PRS.subscripts(new AST.Sub({
                    //start      : start,
                    //expression : expr,
                    //prop       : prop,
                    //endpos     : PRS.getPrev()
                //}), allow_calls);
                return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){_fastNew(AST_Sub,4,start_,start
                ,expression_,expr
                ,prop_,prop
                ,endpos_,ParserWithIterable_PRS_getPrev(undefined,0,NULL)
                ),allow_calls});
                
            };

            //if (allow_calls and PRS.isToken(TYPE.punc, "("))
            if ((_anyToBool(allow_calls) && _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR("(")}))))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //var cs = new AST.CallStatement({
                    //start      : start,
                    //expression : expr,
                    //args       : PRS.expr_list(")")
                    //})
                var 
                   cs = _fastNew(AST_CallStatement,3,start_,start
                ,expression_,expr
                ,args_,ParserWithIterable_PRS_expr_list(undefined,1,(any_arr){any_LTR(")")})
                )
                ;
                //cs.endpos= PRS.getPrev()
                endpos__(cs) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //return PRS.subscripts(cs,true)
                return ParserWithIterable_PRS_subscripts(undefined,2,(any_arr){cs,true});
                
            };

            //return expr
            return expr;
            
        return undefined;
        }


        //        method maybe_unary(allow_calls)
        any ParserWithIterable_PRS_maybe_unary(DEFAULT_ARGUMENTS){
            
            // define named params
            var allow_calls = argc>0? arguments[0] : undefined;
            //---------
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //if PRS.isToken(TYPE.operator) and Utils.isPredicate(UNARY_PREFIX,start.value)
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_operator})) && _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_UNARY_PREFIX,value__(start)})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //PRS.handle_regexp();
                ParserWithIterable_PRS_handle_regexp(undefined,0,NULL);
                //var ex:AST.Node = PRS.make_unary(AST.UnaryPrefix, start.value, PRS.maybe_unary(allow_calls));
                var 
                   ex = ParserWithIterable_PRS_make_unary(undefined,3,(any_arr){AST_UnaryPrefix,value__(start),ParserWithIterable_PRS_maybe_unary(undefined,1,(any_arr){allow_calls})})
                ;
                //ex.start = start;
                start__(ex) = start;
                //ex.endpos = PRS.getPrev();
                endpos__(ex) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                //return ex;
                return ex;
                
            };

            //var val:AST.Node = PRS.expr_atom(allow_calls);
            var 
               val = ParserWithIterable_PRS_expr_atom(undefined,1,(any_arr){allow_calls})
            ;

            //while PRS.isToken(TYPE.operator)
            while(_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_operator})) && _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_UNARY_POSTFIX,value__(ParserWithIterable_PRS_token)})) && !(_anyToBool(nlb__(ParserWithIterable_PRS_token)))){

                //val = PRS.make_unary(AST.UnaryPostfix, PRS.token.value, val);
                val = ParserWithIterable_PRS_make_unary(undefined,3,(any_arr){AST_UnaryPostfix,value__(ParserWithIterable_PRS_token),val});
                //val.start = start;
                start__(val) = start;
                //val.endpos = PRS.token;
                endpos__(val) = ParserWithIterable_PRS_token;
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                
            };// end loop

            //return val;
            return val;
            
        return undefined;
        }


        //        method make_unary(ctor, op, expr)
        any ParserWithIterable_PRS_make_unary(DEFAULT_ARGUMENTS){
            
            // define named params
            var ctor = argc>0? arguments[0] : undefined;
            var op = argc>1? arguments[1] : undefined;
            var expr = argc>2? arguments[2] : undefined;
            //---------
            //if ((op  is  "++"  or  op  is  "--") and not PRS.is_assignable(expr))
            var ___or26=undefined;
            if (((_anyToBool((_anyToBool(___or26=any_number(__is(op,any_LTR("++"))))? ___or26 : any_number(__is(op,any_LTR("--")))))) && !(_anyToBool(ParserWithIterable_PRS_is_assignable(undefined,1,(any_arr){expr})))))  {
            
                //PRS.croak("Invalid use of #{op} operator");
                ParserWithIterable_PRS_croak(undefined,1,(any_arr){_concatAny(3,any_LTR("Invalid use of "),op,any_LTR(" operator"))});
                
            };
            //return new ctor({ operator: op, expression: expr });
            return _fastNew(ctor,2,operator_,op
            ,expression_,expr
            );
            
        return undefined;
        }


        //        method expr_op(left:AST.Node, min_prec, no_in)
        any ParserWithIterable_PRS_expr_op(DEFAULT_ARGUMENTS){
            
            // define named params
            var left = argc>0? arguments[0] : undefined;
            var min_prec = argc>1? arguments[1] : undefined;
            var no_in = argc>2? arguments[2] : undefined;
            //---------

            //var op = PRS.isToken(TYPE.operator) ? PRS.token.value : null;
            var 
               op = _anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_operator})) ? value__(ParserWithIterable_PRS_token) : null
            ;
            //if (op  is  "in" and no_in), op = null;
            if ((__is(op,any_LTR("in")) && _anyToBool(no_in))) {op = null;};
            //var prec = op isnt null ? PRECEDENCE.tryGetProperty(op) : null;
            var 
               prec = !__is(op,null) ? METHOD(tryGetProperty_,ParserWithIterable_PRECEDENCE)(ParserWithIterable_PRECEDENCE,1,(any_arr){op}) : null
            ;

            //if (prec and prec > min_prec)
            if ((_anyToBool(prec) && _anyToNumber(prec) > _anyToNumber(min_prec)))  {
            

                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);

                //var right:AST.Node = PRS.expr_op(PRS.maybe_unary(true), prec, no_in);
                var 
                   right = ParserWithIterable_PRS_expr_op(undefined,3,(any_arr){ParserWithIterable_PRS_maybe_unary(undefined,1,(any_arr){true}),prec,no_in})
                ;
                //return PRS.expr_op(new AST.Binary({
                    //start    : left.start,
                    //left     : left,
                    //operator : op,
                    //right    : right,
                    //endpos   : right.endpos
                //}), min_prec, no_in);
                return ParserWithIterable_PRS_expr_op(undefined,3,(any_arr){_fastNew(AST_Binary,5,start_,start__(left)
                ,left_,left
                ,operator_,op
                ,right_,right
                ,endpos_,endpos__(right)
                ),min_prec,no_in});
                
            };

            //return left;
            return left;
            
        return undefined;
        }


        //        method expr_ops(no_in)
        any ParserWithIterable_PRS_expr_ops(DEFAULT_ARGUMENTS){
            
            // define named params
            var no_in = argc>0? arguments[0] : undefined;
            //---------
            //return PRS.expr_op(PRS.maybe_unary(true), 0, no_in);
            return ParserWithIterable_PRS_expr_op(undefined,3,(any_arr){ParserWithIterable_PRS_maybe_unary(undefined,1,(any_arr){true}),any_number(0),no_in});
            
        return undefined;
        }


        //        method maybe_conditional(no_in)
        any ParserWithIterable_PRS_maybe_conditional(DEFAULT_ARGUMENTS){
            
            // define named params
            var no_in = argc>0? arguments[0] : undefined;
            //---------
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //var expr = PRS.expr_ops(no_in);
            var 
               expr = ParserWithIterable_PRS_expr_ops(undefined,1,(any_arr){no_in})
            ;
            //if PRS.isToken(TYPE.operator, "?")
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_operator,any_LTR("?")})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //var yes = PRS.expression(false);
                var 
                   yes = ParserWithIterable_PRS_expression(undefined,1,(any_arr){false})
                ;
                //PRS.expect(":");
                ParserWithIterable_PRS_expect(undefined,1,(any_arr){any_LTR(":")});
                //var altern = PRS.expression(false, no_in)
                var 
                   altern = ParserWithIterable_PRS_expression(undefined,2,(any_arr){false,no_in})
                ;
                //return new AST.Conditional({
                    //start       : start
                    //condition   : expr
                    //consequent  : yes
                    //alternative : altern
                    //endpos      : PRS.getPrev()
                //});
                return _fastNew(AST_Conditional,5,start_,start
                ,condition_,expr
                ,consequent_,yes
                ,alternative_,altern
                ,endpos_,ParserWithIterable_PRS_getPrev(undefined,0,NULL)
                );
                
            };

            //return expr;
            return expr;
            
        return undefined;
        }


        //        method is_assignable(expr)
        any ParserWithIterable_PRS_is_assignable(DEFAULT_ARGUMENTS){
            
            // define named params
            var expr = argc>0? arguments[0] : undefined;
            //---------
            //if no PRS.options.strict, return true;
            if (!_anyToBool(strict__(ParserWithIterable_PRS_options))) {return true;};
            //if expr instanceof AST.This, return false;
            if (_instanceof(expr,AST_This)) {return false;};
            //return (expr instanceof AST.PropAccess  or  expr instanceof AST.Symbol);
            var ___or27=undefined;
            return ((_anyToBool(___or27=any_number(_instanceof(expr,AST_PropAccess)))? ___or27 : any_number(_instanceof(expr,AST_Symbol))));
            
        return undefined;
        }


        //        method maybe_assign(no_in)
        any ParserWithIterable_PRS_maybe_assign(DEFAULT_ARGUMENTS){
            
            // define named params
            var no_in = argc>0? arguments[0] : undefined;
            //---------
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //var left = PRS.maybe_conditional(no_in), val = PRS.token.value;
            var 
               left = ParserWithIterable_PRS_maybe_conditional(undefined,1,(any_arr){no_in})
               , val = value__(ParserWithIterable_PRS_token)
            ;
            //if PRS.isToken(TYPE.operator) and Utils.isPredicate(ASSIGNMENT,val)
            if (_anyToBool(ParserWithIterable_PRS_isToken(undefined,1,(any_arr){ParserWithIterable_TYPE_operator})) && _anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_ASSIGNMENT,val})))  {
            
                //if PRS.is_assignable(left)
                if (_anyToBool(ParserWithIterable_PRS_is_assignable(undefined,1,(any_arr){left})))  {
                
                    //PRS.next();
                    ParserWithIterable_PRS_next(undefined,0,NULL);
                    //var a = new AST.Assign({
                        //start    : start,
                        //left     : left,
                        //operator : val,
                        //right    : PRS.maybe_assign(no_in)
                        //});
                    var 
                       a = _fastNew(AST_Assign,4,start_,start
                    ,left_,left
                    ,operator_,val
                    ,right_,ParserWithIterable_PRS_maybe_assign(undefined,1,(any_arr){no_in})
                    )
                    ;
                    //a.endpos = PRS.getPrev()
                    endpos__(a) = ParserWithIterable_PRS_getPrev(undefined,0,NULL);
                    //return a
                    return a;
                    
                };

                //PRS.croak("Invalid assignment");
                ParserWithIterable_PRS_croak(undefined,1,(any_arr){any_LTR("Invalid assignment")});
                
            };

            //return left;
            return left;
            
        return undefined;
        }


        //        method expression(commas, no_in) returns AST.Seq
        any ParserWithIterable_PRS_expression(DEFAULT_ARGUMENTS){
            
            // define named params
            var commas = argc>0? arguments[0] : undefined;
            var no_in = argc>1? arguments[1] : undefined;
            //---------
            //var start = PRS.token;
            var 
               start = ParserWithIterable_PRS_token
            ;
            //var expr = PRS.maybe_assign(no_in);
            var 
               expr = ParserWithIterable_PRS_maybe_assign(undefined,1,(any_arr){no_in})
            ;
            //if commas and PRS.isToken(TYPE.punc, ",")
            if (_anyToBool(commas) && _anyToBool(ParserWithIterable_PRS_isToken(undefined,2,(any_arr){ParserWithIterable_TYPE_punc,any_LTR(",")})))  {
            
                //PRS.next();
                ParserWithIterable_PRS_next(undefined,0,NULL);
                //return new AST.Seq({
                    //start  : start,
                    //car    : expr,
                    //cdr    : PRS.expression(true, no_in),
                    //endpos : PRS.peek()
                //});
                return _fastNew(AST_Seq,4,start_,start
                ,car_,expr
                ,cdr_,ParserWithIterable_PRS_expression(undefined,2,(any_arr){true,no_in})
                ,endpos_,ParserWithIterable_PRS_peek(undefined,0,NULL)
                );
                
            };

            //return expr;
            return expr;
            
        return undefined;
        }
        
        //------------------
        void ParserWithIterable_PRS__namespaceInit(void){
            ParserWithIterable_PRS_token = null;
            ParserWithIterable_PRS_prev = null;
            ParserWithIterable_PRS_peeked = null;
            ParserWithIterable_PRS_in_function = any_number(0);
            ParserWithIterable_PRS_in_directives = true;
            ParserWithIterable_PRS_in_loop = any_number(0);
            ParserWithIterable_PRS_labels = new(Array,0,NULL);

        //end statement_parser


        //        method labeled_statement()
        
        //end statement_parser
        };
    //shim import LiteCore, PMREX, Iterable
    

    //import Utils
    
    //import AST
    

    //function is_letter(code) //utf-8
    any ParserWithIterable_is_letter(DEFAULT_ARGUMENTS){
        // define named params
        var code = argc>0? arguments[0] : undefined;
        //---------
        //return (code >= 97 and code <= 122)
            //or (code >= 65 and code <= 90)
            //or (code >= 0xaa and PMREX.whileRanges(code, UNICODE.letter) )
            var ___or5=undefined;
            var ___or4=undefined;
        return (_anyToBool(___or5=(_anyToBool(___or4=(any_number(_anyToNumber(code) >= 97 && _anyToNumber(code) <= 122)))? ___or4 : (any_number(_anyToNumber(code) >= 65 && _anyToNumber(code) <= 90))))? ___or5 : (any_number(_anyToNumber(code) >= 0xaa && _anyToBool(PMREX_whileRanges(undefined,2,(any_arr){code,ParserWithIterable_UNICODE_letter})))));
        
    return undefined;
    }

    //function is_digit(code)
    any ParserWithIterable_is_digit(DEFAULT_ARGUMENTS){
        // define named params
        var code = argc>0? arguments[0] : undefined;
        //---------
        //return code >= 48 and code <= 57; //XXX: find out if "UnicodeDigit" means something else than 0..9
        return any_number(_anyToNumber(code) >= 48 && _anyToNumber(code) <= 57);
        
    return undefined;
    }

    //function is_alphanumeric_char(code)
    any ParserWithIterable_is_alphanumeric_char(DEFAULT_ARGUMENTS){
        // define named params
        var code = argc>0? arguments[0] : undefined;
        //---------
        //return is_digit(code) or is_letter(code)
        var ___or6=undefined;
        return (_anyToBool(___or6=ParserWithIterable_is_digit(undefined,1,(any_arr){code}))? ___or6 : ParserWithIterable_is_letter(undefined,1,(any_arr){code}));
        
    return undefined;
    }

    //function is_unicode_combining_mark(ch)
    any ParserWithIterable_is_unicode_combining_mark(DEFAULT_ARGUMENTS){
        // define named params
        var ch = argc>0? arguments[0] : undefined;
        //---------
        //if PMREX.whileRanges(ch,UNICODE.non_spacing_mark), return true;
        if (_anyToBool(PMREX_whileRanges(undefined,2,(any_arr){ch,ParserWithIterable_UNICODE_non_spacing_mark}))) {return true;};
        //if PMREX.whileRanges(ch,UNICODE.space_combining_mark), return true;
        if (_anyToBool(PMREX_whileRanges(undefined,2,(any_arr){ch,ParserWithIterable_UNICODE_space_combining_mark}))) {return true;};
        
    return undefined;
    }

    //function is_unicode_connector_punctuation(ch)
    any ParserWithIterable_is_unicode_connector_punctuation(DEFAULT_ARGUMENTS){
        // define named params
        var ch = argc>0? arguments[0] : undefined;
        //---------
        //return PMREX.whileRanges(ch,UNICODE.connector_punctuation)
        return PMREX_whileRanges(undefined,2,(any_arr){ch,ParserWithIterable_UNICODE_connector_punctuation});
        
    return undefined;
    }


    //function is_identifier(name:string)
    any ParserWithIterable_is_identifier(DEFAULT_ARGUMENTS){
        // define named params
        var name = argc>0? arguments[0] : undefined;
        //---------
        //if name.charAt(0)>='0' and name.charAt(0)<='9', return false //starts with a number
        if (_anyToNumber(METHOD(charAt_,name)(name,1,(any_arr){any_number(0)})) >= '0' && _anyToNumber(METHOD(charAt_,name)(name,1,(any_arr){any_number(0)})) <= '9') {return false;};
        //var ident = PMREX.whileRanges(name,"A-Za-z0-9\x7F-\xFF$_")
        var 
           ident = PMREX_whileRanges(undefined,2,(any_arr){name,any_LTR("A-Za-z0-9\x7F-\xFF$_")})
        ;
        //if ident isnt name, return false //more than those chars
        if (!__is(ident,name)) {return false;};
        //if Utils.isPredicate(RESERVED_WORDS,name), return false
        if (_anyToBool(Utils_isPredicate(undefined,2,(any_arr){ParserWithIterable_RESERVED_WORDS,name}))) {return false;};
        //return true
        return true;
        
    return undefined;
    }

    //function is_identifier_start(code)
    any ParserWithIterable_is_identifier_start(DEFAULT_ARGUMENTS){
        // define named params
        var code = argc>0? arguments[0] : undefined;
        //---------
        //return code is 36 or code is 95 or is_letter(code)
        var ___or8=undefined;
        var ___or7=undefined;
        return (_anyToBool(___or8=(_anyToBool(___or7=any_number(__is(code,any_number(36))))? ___or7 : any_number(__is(code,any_number(95)))))? ___or8 : ParserWithIterable_is_letter(undefined,1,(any_arr){code}));
        
    return undefined;
    }

    //function is_identifier_char(ch:string)
    any ParserWithIterable_is_identifier_char(DEFAULT_ARGUMENTS){
        // define named params
        var ch = argc>0? arguments[0] : undefined;
        //---------

        //var code = ch.charCodeAt(0);
        var 
           code = METHOD(charCodeAt_,ch)(ch,1,(any_arr){any_number(0)})
        ;

        //if is_identifier_start(code) or is_digit(code), return true;
        var ___or9=undefined;
        if (_anyToBool((_anyToBool(___or9=ParserWithIterable_is_identifier_start(undefined,1,(any_arr){code}))? ___or9 : ParserWithIterable_is_digit(undefined,1,(any_arr){code})))) {return true;};

        //if code < 128, return false; //a symbol: not $, nor _
        if (_anyToNumber(code) < 128) {return false;};

        //return code  is  8204 // \u200c: zero-width non-joiner <ZWNJ>
            //or code  is  8205 // \u200d: zero-width joiner <ZWJ> (in my ECMA-262 PDF, this is also 200c)
            //or is_unicode_combining_mark(ch)
            //or is_unicode_connector_punctuation(ch)
            var ___or12=undefined;
            var ___or11=undefined;
            var ___or10=undefined;
        return (_anyToBool(___or12=(_anyToBool(___or11=(_anyToBool(___or10=any_number(__is(code,any_number(8204))))? ___or10 : any_number(__is(code,any_number(8205)))))? ___or11 : ParserWithIterable_is_unicode_combining_mark(undefined,1,(any_arr){ch})))? ___or12 : ParserWithIterable_is_unicode_connector_punctuation(undefined,1,(any_arr){ch}));
        
    return undefined;
    }


    //function is_identifier_string(str)
    any ParserWithIterable_is_identifier_string(DEFAULT_ARGUMENTS){
        // define named params
        var str = argc>0? arguments[0] : undefined;
        //---------
        //return PMREX.whileRanges(str,"A-Za-z0-9\x7F-\xFF$_") is str
        return any_number(__is(PMREX_whileRanges(undefined,2,(any_arr){str,any_LTR("A-Za-z0-9\x7F-\xFF$_")}),str));
        
    return undefined;
    }

    //function parse_js_number(num:string)
    any ParserWithIterable_parse_js_number(DEFAULT_ARGUMENTS){
        // define named params
        var num = argc>0? arguments[0] : undefined;
        //---------

        //if num.slice(0,2) is '0x'
        if (__is(METHOD(slice_,num)(num,2,(any_arr){any_number(0),any_number(2)}),any_LTR("0x")))  {
        
            //return parseInt(num.substr(2), 16)
            return parseInt(undefined,2,(any_arr){METHOD(substr_,num)(num,1,(any_arr){any_number(2)}),any_number(16)});
            
        };

        //if num.slice(0,1) is '0' and num.length is 4
        if (__is(METHOD(slice_,num)(num,2,(any_arr){any_number(0),any_number(1)}),any_LTR("0")) && __is(any_number(_length(num)),any_number(4)))  {
        
            //if PMREX.whileRanges(num,"0-7") is num // (RE_OCT_NUMBER.test(num))
            if (__is(PMREX_whileRanges(undefined,2,(any_arr){num,any_LTR("0-7")}),num))  {
            
                //return parseInt(num.substr(1), 8)
                return parseInt(undefined,2,(any_arr){METHOD(substr_,num)(num,1,(any_arr){any_number(1)}),any_number(8)});
                
            };
            
        };

        //return parseFloat(num);
        return parseFloat(undefined,1,(any_arr){num});
        
    return undefined;
    }


    //function js_error(message, filename, line, col, pos)
    any ParserWithIterable_js_error(DEFAULT_ARGUMENTS){
        // define named params
        var message = argc>0? arguments[0] : undefined;
        var filename = argc>1? arguments[1] : undefined;
        var line = argc>2? arguments[2] : undefined;
        var col = argc>3? arguments[3] : undefined;
        var pos = argc>4? arguments[4] : undefined;
        //---------
        //var err = new JS_Parse_Error(message, line, col, pos)
        var 
           err = new(ParserWithIterable_JS_Parse_Error,4,(any_arr){message,line,col,pos})
        ;
        //console.error err.toString()
        console_error(undefined,1,(any_arr){METHOD(toString_,err)(err,0,NULL)});
        //throw err
        throw(err);
        
    return undefined;
    }


    //function is_token(token, type, val)
    any ParserWithIterable_is_token(DEFAULT_ARGUMENTS){
        // define named params
        var token = argc>0? arguments[0] : undefined;
        var type = argc>1? arguments[1] : undefined;
        var val = argc>2? arguments[2] : undefined;
        //---------
        //return token.type is type and (no val or token.value is val)
        var ___or13=undefined;
        return any_number(__is(type__(token),type) && (_anyToBool((_anyToBool(___or13=any_bool(!_anyToBool(val)))? ___or13 : any_number(__is(value__(token),val))))));
        
    return undefined;
    }
//------------------
void ParserWithIterable__namespaceInit(void){
        ParserWithIterable_JS_Parse_Error =_newClass("ParserWithIterable_JS_Parse_Error", ParserWithIterable_JS_Parse_Error__init, sizeof(struct ParserWithIterable_JS_Parse_Error_s), Error);
        _declareMethods(ParserWithIterable_JS_Parse_Error, ParserWithIterable_JS_Parse_Error_METHODS);
        _declareProps(ParserWithIterable_JS_Parse_Error, ParserWithIterable_JS_Parse_Error_PROPS, sizeof ParserWithIterable_JS_Parse_Error_PROPS);
    
        ParserWithIterable_PRSOptions =_newClass("ParserWithIterable_PRSOptions", ParserWithIterable_PRSOptions__init, sizeof(struct ParserWithIterable_PRSOptions_s), Object);
        _declareMethods(ParserWithIterable_PRSOptions, ParserWithIterable_PRSOptions_METHODS);
        _declareProps(ParserWithIterable_PRSOptions, ParserWithIterable_PRSOptions_PROPS, sizeof ParserWithIterable_PRSOptions_PROPS);
    
    ParserWithIterable_KEYWORDS_s = any_LTR("break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with");
    ParserWithIterable_KEYWORDS_ATOM_s = any_LTR("false null true");
    ParserWithIterable_RESERVED_WORDS_s = any_LTR("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized this throws transient volatile yield");
    //RESERVED_WORDS_s = "#{RESERVED_WORDS_s} #{KEYWORDS_ATOM} #{KEYWORDS}"
    ParserWithIterable_RESERVED_WORDS_s = _concatAny(5,ParserWithIterable_RESERVED_WORDS_s,any_LTR(" "),ParserWithIterable_KEYWORDS_ATOM,any_LTR(" "),ParserWithIterable_KEYWORDS);
    ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION_s = any_LTR("return new delete throw else case");
    ParserWithIterable_KEYWORDS = Utils_makePredicate(undefined,2,(any_arr){any_LTR("KEYWORDS_s"),ParserWithIterable_KEYWORDS_s});
    ParserWithIterable_RESERVED_WORDS = Utils_makePredicate(undefined,2,(any_arr){any_LTR("RESERVED_WORDS_s"),ParserWithIterable_RESERVED_WORDS_s});
    ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION = Utils_makePredicate(undefined,2,(any_arr){any_LTR("KEYWORDS_BEFORE_EXPRESSION_s"),ParserWithIterable_KEYWORDS_BEFORE_EXPRESSION_s});
    ParserWithIterable_KEYWORDS_ATOM = Utils_makePredicate(undefined,2,(any_arr){any_LTR("KEYWORDS_ATOM_s"),ParserWithIterable_KEYWORDS_ATOM_s});
    ParserWithIterable_OPERATOR_CHARS = any_LTR("+-*&%=<>!?|~^");
    ParserWithIterable_OPERATORS = Utils_makePredicate(undefined,2,(any_arr){any_LTR("OPERATORS"),new(Array,44,(any_arr){any_LTR("in"), any_LTR("instanceof"), any_LTR("typeof"), any_LTR("new"), any_LTR("void"), any_LTR("delete"), any_LTR("++"), any_LTR("--"), any_LTR("+"), any_LTR("-"), any_LTR("!"), any_LTR("~"), any_LTR("&"), any_LTR("|"), any_LTR("^"), any_LTR("*"), any_LTR("/"), any_LTR("%"), any_LTR(">>"), any_LTR("<<"), any_LTR(">>>"), any_LTR("<"), any_LTR(">"), any_LTR("<="), any_LTR(">="), any_LTR("=="), any_LTR("==="), any_LTR("!="), any_LTR("!=="), any_LTR("?"), any_LTR("="), any_LTR("+="), any_LTR("-="), any_LTR("/="), any_LTR("*="), any_LTR("%="), any_LTR(">>="), any_LTR("<<="), any_LTR(">>>="), any_LTR("|="), any_LTR("^="), any_LTR("&="), any_LTR("&&"), any_LTR("||")})});
    ParserWithIterable_WHITESPACE_CHARS = Utils_makePredicate(undefined,2,(any_arr){any_LTR("WHITESPACE_CHARS"),Utils_characters(undefined,1,(any_arr){any_LTR(" \u00a0\n\r\t\f\x0b\u200b\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000")})});
    ParserWithIterable_PUNC_BEFORE_EXPRESSION = any_LTR("[{(,.;:");
    ParserWithIterable_PUNC_CHARS = any_LTR("[]{}(),;:");
    ParserWithIterable_REGEXP_MODIFIERS = any_LTR("gmsiy");
    ParserWithIterable_FOUR_ZEROES = any_LTR("0000");
    ParserWithIterable_TYPE__namespaceInit();
    ParserWithIterable_UNICODE__namespaceInit();
    ParserWithIterable_EX_EOF = new(Map,0,NULL)
;
    ParserWithIterable_TKZ__namespaceInit();

//next_token.context = method(nc) {
//            if (nc) TKZ = nc;
//            return TKZ;
//        };
//        

    //end namespace TKZ

//## -----[ Parser (constants) ]-----

    //var UNARY_PREFIX = Utils.makePredicate("UNARY_PREFIX",[
    
    //end namespace TKZ
    ParserWithIterable_UNARY_PREFIX = Utils_makePredicate(undefined,2,(any_arr){any_LTR("UNARY_PREFIX"),new(Array,9,(any_arr){any_LTR("typeof"), any_LTR("void"), any_LTR("delete"), any_LTR("--"), any_LTR("++"), any_LTR("!"), any_LTR("~"), any_LTR("-"), any_LTR("+")})});
    ParserWithIterable_UNARY_POSTFIX = Utils_makePredicate(undefined,2,(any_arr){any_LTR("UNARY_POSTFIX"),new(Array,2,(any_arr){any_LTR("--"), any_LTR("++")})});
    ParserWithIterable_ASSIGNMENT = Utils_makePredicate(undefined,2,(any_arr){any_LTR("ASSIGNMENT"),new(Array,12,(any_arr){any_LTR("="), any_LTR("+="), any_LTR("-="), any_LTR("/="), any_LTR("*="), any_LTR("%="), any_LTR(">>="), any_LTR("<<="), any_LTR(">>>="), any_LTR("|="), any_LTR("^="), any_LTR("&=")})});
    ParserWithIterable_PRECEDENCE = new(Map,23,(any_arr){
            _newPair("||",any_number(1)), 
            _newPair("&&",any_number(2)), 
            _newPair("|",any_number(3)), 
            _newPair("^",any_number(4)), 
            _newPair("&",any_number(5)), 
            _newPair("==",any_number(6)), 
            _newPair("===",any_number(6)), 
            _newPair("!=",any_number(6)), 
            _newPair("!==",any_number(6)), 
            _newPair("<",any_number(7)), 
            _newPair(">",any_number(7)), 
            _newPair("<=",any_number(7)), 
            _newPair(">=",any_number(7)), 
            _newPair("in",any_number(7)), 
            _newPair("instanceof",any_number(7)), 
            _newPair(">>",any_number(8)), 
            _newPair("<<",any_number(8)), 
            _newPair(">>>",any_number(8)), 
            _newPair("+",any_number(9)), 
            _newPair("-",any_number(9)), 
            _newPair("*",any_number(10)), 
            _newPair("/",any_number(10)), 
            _newPair("%",any_number(10))
            })
;
    ParserWithIterable_PRS__namespaceInit();
};


//-------------------------
void ParserWithIterable__moduleInit(void){
    ParserWithIterable__namespaceInit();
};
