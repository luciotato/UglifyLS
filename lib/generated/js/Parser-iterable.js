
    //import Utils, AST
    var Utils = require('./Utils.js');
    var AST = require('./AST.js');

    //shim import LiteCore, PMREX, Iterable
    var LiteCore = require('./interfaces/LiteCore.js');
    var PMREX = require('./PMREX.js');
    var Iterable = require('./interfaces/Iterable.js');


//Lucio Tato - 2014
//Litescript translation of:

///*
  //A JavaScript tokenizer / parser / beautifier / compressor.
  //https://github.com/mishoo/UglifyJS2

  //-------------------------------- (C) ---------------------------------

                           //Author: Mihai Bazon
                         //<mihai.bazon@gmail.com>
                       //http://mihai.bazon.net/blog

  //Distributed under the BSD license:

    //Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>
    //Parser based on parse-js (http://marijn.haverbeke.nl/parse-js/).

    //Redistribution and use in source and binary forms, with or without
    //modification, are permitted provided that the following conditions
    //are met:

        //* Redistributions of source code must retain the above
          //copyright notice, this list of conditions and the following
          //disclaimer.

        //* Redistributions in binary form must reproduce the above
          //copyright notice, this list of conditions and the following
          //disclaimer in the documentation and/or other materials
          //provided with the distribution.

    //THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    //EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    //IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    //PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    //LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    //OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    //PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    //PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    //THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    //TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    //THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    //SUCH DAMAGE.

 //***********************************************************************/

    //var KEYWORDS_s = 'break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with';
    var KEYWORDS_s = 'break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with';
    //var KEYWORDS_ATOM_s = 'false null true'
    var KEYWORDS_ATOM_s = 'false null true';
    //var RESERVED_WORDS_s = 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized this throws transient volatile yield'
    var RESERVED_WORDS_s = 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized this throws transient volatile yield';
    //RESERVED_WORDS_s = "#{RESERVED_WORDS_s} #{KEYWORDS_ATOM} #{KEYWORDS}"
    RESERVED_WORDS_s = '' + RESERVED_WORDS_s + " " + KEYWORDS_ATOM + " " + KEYWORDS;

    //var KEYWORDS_BEFORE_EXPRESSION_s = 'return new delete throw else case'
    var KEYWORDS_BEFORE_EXPRESSION_s = 'return new delete throw else case';

    //var KEYWORDS = Utils.makePredicate(KEYWORDS_s);
    var KEYWORDS = Utils.makePredicate(KEYWORDS_s);
    //var RESERVED_WORDS = Utils.makePredicate(RESERVED_WORDS_s);
    var RESERVED_WORDS = Utils.makePredicate(RESERVED_WORDS_s);
    //var KEYWORDS_BEFORE_EXPRESSION = Utils.makePredicate(KEYWORDS_BEFORE_EXPRESSION_s);
    var KEYWORDS_BEFORE_EXPRESSION = Utils.makePredicate(KEYWORDS_BEFORE_EXPRESSION_s);
    //var KEYWORDS_ATOM = Utils.makePredicate(KEYWORDS_ATOM_s);
    var KEYWORDS_ATOM = Utils.makePredicate(KEYWORDS_ATOM_s);

    //var OPERATOR_CHARS = "+-*&%=<>!?|~^";
    var OPERATOR_CHARS = "+-*&%=<>!?|~^";

    //var RE_HEX_NUMBER = /^0x[0-9a-f]+$/i;
    //var RE_OCT_NUMBER = /^0[0-7]+$/;
    //var RE_DEC_NUMBER = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i;

    //var OPERATORS = Utils.makePredicate([
        //"in",
        //"instanceof",
        //"typeof",
        //"new",
        //"void",
        //"delete",
        //"++",
        //"--",
        //"+",
        //"-",
        //"!",
        //"~",
        //"&",
        //"|",
        //"^",
        //"*",
        //"/",
        //"%",
        //">>",
        //"<<",
        //">>>",
        //"<",
        //">",
        //"<=",
        //">=",
        //"==",
        //"===",
        //"!=",
        //"!==",
        //"?",
        //"=",
        //"+=",
        //"-=",
        //"/=",
        //"*=",
        //"%=",
        //">>=",
        //"<<=",
        //">>>=",
        //"|=",
        //"^=",
        //"&=",
        //"&&",
        //"||"
    var OPERATORS = Utils.makePredicate(["in", "instanceof", "typeof", "new", "void", "delete", "++", "--", "+", "-", "!", "~", "&", "|", "^", "*", "/", "%", ">>", "<<", ">>>", "<", ">", "<=", ">=", "==", "===", "!=", "!==", "?", "=", "+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&=", "&&", "||"]);
        //])

    //var WHITESPACE_CHARS = " \u00a0\n\r\t\f\x0b\u200b\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000";
    var WHITESPACE_CHARS = " \u00a0\n\r\t\f\x0b\u200b\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000";

    //var PUNC_BEFORE_EXPRESSION = "[{(,.;:";
    var PUNC_BEFORE_EXPRESSION = "[{(,.;:";

    //var PUNC_CHARS = "[]{}(),;:";
    var PUNC_CHARS = "[]{}(),;:";

    //var REGEXP_MODIFIERS = "gmsiy";
    var REGEXP_MODIFIERS = "gmsiy";

    //var FOUR_ZEROES = "0000";
    var FOUR_ZEROES = "0000";

    ///* -----[ Tokenizer ]----- 
    //*/

    // regexps adapted from http://xregexp.com/plugins/#unicode
    //namespace UNICODE 
    var UNICODE={};
        //properties 
            //letter= "A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u097B-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400\u4DB5\u4E00\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA90A-\uA925\uA930-\uA946\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAC00\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC"
            //non_spacing_mark= "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0900-\u0902\u093C\u0941-\u0948\u094D\u0951-\u0955\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1DC0-\u1DE6\u1DFD-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26"
            //space_combining_mark= "\u0903\u093E-\u0940\u0949-\u094C\u094E\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u19B0-\u19C0\u19C8\u19C9\u1A19-\u1A1B\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC"
            //connector_punctuation= "_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F"
            UNICODE.letter="A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u097B-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400\u4DB5\u4E00\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA90A-\uA925\uA930-\uA946\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAC00\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
            UNICODE.non_spacing_mark="\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0900-\u0902\u093C\u0941-\u0948\u094D\u0951-\u0955\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1DC0-\u1DE6\u1DFD-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26";
            UNICODE.space_combining_mark="\u0903\u093E-\u0940\u0949-\u094C\u094E\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u19B0-\u19C0\u19C8\u19C9\u1A19-\u1A1B\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC";
            UNICODE.connector_punctuation="_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F";
        

    //function is_letter(code) //utf-8
    function is_letter(code){ //utf-8
        //return (code >= 97 and code <= 122)
        return (code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 0xaa && PMREX.whileRanges(code, UNICODE.letter));
    };
            //or (code >= 65 and code <= 90)
            //or (code >= 0xaa and PMREX.whileRanges(code, UNICODE.letter) )

    //function is_digit(code) 
    function is_digit(code){
        //return code >= 48 and code <= 57; //XXX: find out if "UnicodeDigit" means something else than 0..9
        return code >= 48 && code <= 57; //XXX: find out if "UnicodeDigit" means something else than 0..9
    };

    //function is_alphanumeric_char(code) 
    function is_alphanumeric_char(code){
        //return is_digit(code) or is_letter(code)
        return is_digit(code) || is_letter(code);
    };

    //function is_unicode_combining_mark(ch) 
    function is_unicode_combining_mark(ch){
        //if PMREX.whileRanges(ch,UNICODE.non_spacing_mark), return true;
        if (PMREX.whileRanges(ch, UNICODE.non_spacing_mark)) {return true};
        //if PMREX.whileRanges(ch,UNICODE.space_combining_mark), return true;
        if (PMREX.whileRanges(ch, UNICODE.space_combining_mark)) {return true};
    };

    //function is_unicode_connector_punctuation(ch) 
    function is_unicode_connector_punctuation(ch){
        //return PMREX.whileRanges(ch,UNICODE.connector_punctuation) 
        return PMREX.whileRanges(ch, UNICODE.connector_punctuation);
    };


    //function is_identifier(name:string) 
    function is_identifier(name){
        //if name.charAt(0)>='0' and name.charAt(0)<='9', return false //starts with a number 
        if (name.charAt(0) >= '0' && name.charAt(0) <= '9') {return false};
        //var ident = PMREX.whileRanges(name,"A-Za-z0-9\x7F-\xFF$_")
        var ident = PMREX.whileRanges(name, "A-Za-z0-9\x7F-\xFF$_");
        //if ident isnt name, return false //more than those chars
        if (ident !== name) {return false};
        //if Utils.isPredicate(RESERVED_WORDS,name), return false
        if (Utils.isPredicate(RESERVED_WORDS, name)) {return false};
        //return true
        return true;
    };

    //function is_identifier_start(code) 
    function is_identifier_start(code){
        //return code is 36 or code is 95 or is_letter(code)
        return code === 36 || code === 95 || is_letter(code);
    };

    //function is_identifier_char(ch:string) 
    function is_identifier_char(ch){

        //var code = ch.charCodeAt(0);
        var code = ch.charCodeAt(0);

        //if is_identifier_start(code) or is_digit(code), return true;
        if (is_identifier_start(code) || is_digit(code)) {return true};

        //if code < 128, return false; //a symbol: not $, nor _
        if (code < 128) {return false};

        //return code  is  8204 // \u200c: zero-width non-joiner <ZWNJ>
        return code === 8204 || code === 8205 || is_unicode_combining_mark(ch) || is_unicode_connector_punctuation(ch); // \u200c: zero-width non-joiner <ZWNJ>
    };
            //or code  is  8205 // \u200d: zero-width joiner <ZWJ> (in my ECMA-262 PDF, this is also 200c)
            //or is_unicode_combining_mark(ch)
            //or is_unicode_connector_punctuation(ch)


    //function is_identifier_string(str)
    function is_identifier_string(str){
        //return PMREX.whileRanges(str,"A-Za-z0-9\x7F-\xFF$_") is str
        return PMREX.whileRanges(str, "A-Za-z0-9\x7F-\xFF$_") === str;
    };

    //function parse_js_number(num:string) 
    function parse_js_number(num){

        //if num.slice(0,2) is '0x' 
        if (num.slice(0, 2) === '0x') {
            //return parseInt(num.substr(2), 16)
            return parseInt(num.substr(2), 16);
        };

        //if num.slice(0,1) is '0' and num.length is 4 
        if (num.slice(0, 1) === '0' && num.length === 4) {
            //if PMREX.whileRanges(num,"0-7") is num // (RE_OCT_NUMBER.test(num)) 
            if (PMREX.whileRanges(num, "0-7") === num) { // (RE_OCT_NUMBER.test(num))
                //return parseInt(num.substr(1), 8)
                return parseInt(num.substr(1), 8);
            };
        };

        //return parseFloat(num);
        return parseFloat(num);
    };


    //class JS_Parse_Error extends Error
    // constructor
    function JS_Parse_Error(message, line, col, pos){//Sadly, the Error Class in javascript is not easily subclassed.
//http://stackoverflow.com/questions/8802845/inheriting-from-the-error-object-where-is-the-message-property
this.__proto__.__proto__=Error.apply(null,arguments);
//NOTE: all instances of ControlledError will share the same info

        //properties
            //line,col,pos

        //constructor new JS_Parse_Error(message, line, col, pos) 
            //this.message = message;
            this.message = message;
            //this.line = line;
            this.line = line;
            //this.col = col;
            this.col = col;
            //this.pos = pos;
            this.pos = pos;
        };
    // JS_Parse_Error (extends|proto is) Error
    JS_Parse_Error.prototype.__proto__ = Error.prototype;
            //this.stack = new Error().stack;


        //method toString
        JS_Parse_Error.prototype.toString = function(){
            //return "#{this.message}  (line: #{this.line}, col: #{this.col}, pos: #{this.pos})" //\n\n" + this.stack;
            return '' + this.message + "  (line: " + this.line + ", col: " + this.col + ", pos: " + this.pos + ")"; //\n\n" + this.stack;
        };
    // end class JS_Parse_Error


    //function js_error(message, filename, line, col, pos) 
    function js_error(message, filename, line, col, pos){
        //var err = new JS_Parse_Error(message, line, col, pos)
        var err = new JS_Parse_Error(message, line, col, pos);
        //console.error err.toString()
        console.error(err.toString());
        //throw err
        throw err;
    };


    //function is_token(token, type, val) 
    function is_token(token, type, val){
        //return token.type is type and (no val or token.value is val)
        return token.type === type && (!val || token.value === val);
    };

    //var EX_EOF = {};
    var EX_EOF = {};


    //public namespace TKZ 
    var TKZ={};
        //properties 
            //text      :string
            //filename  :string
            //textLen   :number
            //iterPos   = new Iterable.Position // "cursor" to consume each unicode-point from loaded file
            //pos             = 0,
            //tokpos          = 0,
            //line            = 1,
            //tokline         = 0,
            //col             = 0,
            //tokcol          = 0,
            //newline_before  = false,
            //regex_allowed   = false, //how to handle a slash
            //comments_before = []

            //html5_comments: boolean

            //prev_was_dot = false

            //chunk: string
            //moreChars: boolean
            TKZ.iterPos=new Iterable.Position();
            TKZ.tokpos=0;
            TKZ.line=1;
            TKZ.tokline=0;
            TKZ.col=0;
            TKZ.tokcol=0;
            TKZ.newline_before=false;
            TKZ.regex_allowed=false;
            TKZ.comments_before=[];
            TKZ.prev_was_dot=false;


//tokenize returns a function next_token(forceRegexp:booleean) 
//returning the next token in the stream

        //method tokenize($TEXT:string, filename, html5_comments) returns function
        TKZ.tokenize = function($TEXT, filename, html5_comments){

            //TKZ.text = $TEXT.replaceAll("\r\n", "\n").replaceAll("\uFEFF", '')
            TKZ.text = $TEXT.replaceAll("\r\n", "\n").replaceAll("\uFEFF", '');

            //move to first char in the stream
            //TKZ.moreChars = TKZ.text.iterableNext(TKZ.iterPos)
            TKZ.moreChars = TKZ.text.iterableNext(TKZ.iterPos);

            //TKZ.chunk = TKZ.text
            TKZ.chunk = TKZ.text;

            //TKZ.textLen = TKZ.text.length
            TKZ.textLen = TKZ.text.length;
            //TKZ.filename = filename
            TKZ.filename = filename;
            //TKZ.html5_comments = html5_comments
            TKZ.html5_comments = html5_comments;

            //return TKZ.next_token // function next_token(forceRegexp:booleean) 
            return TKZ.next_token; // function next_token(forceRegexp:booleean)
        };


        //method next(signal_eof, in_string) 
        TKZ.next = function(signal_eof, in_string){

            //if no TKZ.moreChars 
            if (!TKZ.moreChars) {
                //if signal_eof 
                if (signal_eof) {
                    //throw EX_EOF
                    throw EX_EOF;
                }
                else {
                //else
                    //TKZ.iterPos.value = null
                    TKZ.iterPos.value = null;
                    //return null
                    return null;
                };
            };

            //var ch = TKZ.iterPos.value
            var ch = TKZ.iterPos.value;

            //if ch is "\n"
            if (ch === "\n") {
                //TKZ.newline_before = TKZ.newline_before or not in_string
                TKZ.newline_before = TKZ.newline_before || !(in_string);
                //++TKZ.line
                ++TKZ.line;
                //TKZ.col = 0
                TKZ.col = 0;
            }
            else {
            //else
                //++TKZ.col
                ++TKZ.col;
            };

            //advance one - "peek" next char into TKZ.iterPos.value
            //TKZ.moreChars = TKZ.text.iterableNext(TKZ.iterPos)
            TKZ.moreChars = TKZ.text.iterableNext(TKZ.iterPos);

            //return ch
            return ch;
        };

        //method peek() 
        TKZ.peek = function(){
            //return TKZ.iterPos.value
            return TKZ.iterPos.value;
        };

        //method forward(i) 
        TKZ.forward = function(i){
            //while i-- > 0 
            while(i-- > 0){
                //TKZ.next()
                TKZ.next();
            };// end loop
            
        };

        //method looking_at(str:string) 
        TKZ.looking_at = function(str){
            //return TKZ.text.byteSubstr(TKZ.iterPos.index, str.length) is str
            return TKZ.text.byteSubstr(TKZ.iterPos.index, str.length) === str;
        };

        //method findByteIndex(what, signal_eof) 
        TKZ.findByteIndex = function(what, signal_eof){
            //var pos = TKZ.text.byteIndexOf(what, TKZ.iterPos.index)
            var pos = TKZ.text.byteIndexOf(what, TKZ.iterPos.index);
            //if (signal_eof and pos is -1), throw EX_EOF
            if ((signal_eof && pos === -1)) {throw EX_EOF};
            //return pos
            return pos;
        };


        //method start_token() 
        TKZ.start_token = function(){
            //TKZ.tokline = TKZ.line;
            TKZ.tokline = TKZ.line;
            //TKZ.tokcol = TKZ.col;
            TKZ.tokcol = TKZ.col;
            //TKZ.tokpos = TKZ.iterPos.key; //"key" holds -codepoint- index of current position
            TKZ.tokpos = TKZ.iterPos.key; //"key" holds -codepoint- index of current position
        };


        //method token(type, value, is_comment) 
        TKZ.token = function(type, value, is_comment){

//TKZ.regex_allowed is a semiglobal flag, to mark how to treat the *next* token if it is a /.
//if as a regexpLiteral or division oper

            //TKZ.regex_allowed = (type is "operator" and not Utils.isPredicate(UNARY_POSTFIX,value))  
            TKZ.regex_allowed = (type === "operator" && !(Utils.isPredicate(UNARY_POSTFIX, value))) || (type === "keyword" && Utils.isPredicate(KEYWORDS_BEFORE_EXPRESSION, value)) || (type === "punc" && PUNC_BEFORE_EXPRESSION.indexOf(value)>=0);
                                //or (type is "keyword" and Utils.isPredicate(KEYWORDS_BEFORE_EXPRESSION,value))  
                                //or (type is "punc" and value in PUNC_BEFORE_EXPRESSION)

            //TKZ.prev_was_dot = (type  is  "punc" and value  is  ".")
            TKZ.prev_was_dot = (type === "punc" && value === ".");

            //var ret = 
                //type   : type,
                //value  : value,
                //line   : TKZ.tokline,
                //col    : TKZ.tokcol,
                //pos    : TKZ.tokpos,
                //endpos : TKZ.iterPos.key,
                //nlb    : TKZ.newline_before,
                //file   : TKZ.filename
                //comments_before: undefined
            var ret = {type: type
               , value: value
               , line: TKZ.tokline
               , col: TKZ.tokcol
               , pos: TKZ.tokpos
               , endpos: TKZ.iterPos.key
               , nlb: TKZ.newline_before
               , file: TKZ.filename
               , comments_before: undefined
           };

            //if (not is_comment) 
            if ((!(is_comment))) {

                //ret.setProperty "comments_before", TKZ.comments_before
                ret.setProperty("comments_before", TKZ.comments_before);

                // make note of any newlines in the comments that came before
                //for each comment:AST.Token in TKZ.comments_before
                for( var comment__inx=0,comment ; comment__inx<TKZ.comments_before.length ; comment__inx++){comment=TKZ.comments_before[comment__inx];
                
                    //if comment.nlb 
                    if (comment.nlb) {
                        //ret.setProperty "nlb",true
                        ret.setProperty("nlb", true);
                        //break
                        break;
                    };
                };// end for each in TKZ.comments_before

                //TKZ.comments_before = [];
                TKZ.comments_before = [];
            };

            //end if
            

            //TKZ.newline_before = false;
            TKZ.newline_before = false;

            //return new AST.Token(ret)
            return new AST.Token(ret);
        };


        //method skip_whitespace() 
        TKZ.skip_whitespace = function(){
            //var ch
            var ch = undefined;
            //while TKZ.peek() into ch and ch in WHITESPACE_CHARS
            while((ch=TKZ.peek()) && WHITESPACE_CHARS.indexOf(ch)>=0){
                //TKZ.next
                TKZ.next();
            };// end loop
            
        };

        ///*method read_while(pred) 
            //var ret = "", ch, i = 0
            //while (peek() into ch and pred(ch, i++))
                //ret &= next();
            //return ret;
        //};
        //*/

        //method parse_error(err) 
        TKZ.parse_error = function(err){
            //js_error(err, TKZ.filename, TKZ.tokline, TKZ.tokcol, TKZ.tokpos);
            js_error(err, TKZ.filename, TKZ.tokline, TKZ.tokcol, TKZ.tokpos);
        };


        //method read_num(prefix) returns number
        TKZ.read_num = function(prefix){

            //var has_e = false, after_e = false, has_x = false, has_dot = prefix  is  ".";
            var has_e = false
               , after_e = false
               , has_x = false
               , has_dot = prefix === "."
           ;

            //var i=-1, start=TKZ.iterPos.key;
            var i = -1, start = TKZ.iterPos.key;
            //do 
            while(true){

                //var ch:string = TKZ.peek()
                var ch = TKZ.peek();
                //var code = ch.charCodeAt(0)
                var code = ch.charCodeAt(0);
                //i++
                i++;

                //var valid = true //default
                var valid = true; //default

                //case code
                
                  //when 120,88: // xX
                if ((code==120)
                   ||(code==88)
               ){
                    //valid = has_x ? false : (true into has_x);
                    valid = has_x ? false : ((has_x=true));
                
                }
                  //when 101,69: // eE
                else if ((code==101)
                   ||(code==69)
               ){
                    //valid = has_x ? true : has_e ? false : (true into has_e into after_e);
                    valid = has_x ? true : has_e ? false : ((after_e=(has_e=true)));
                
                }
                  //when 45: // -
                else if ((code==45)
               ){
                    //valid = after_e or (i is 0 and not prefix);
                    valid = after_e || (i === 0 && !(prefix));
                
                }
                  //when 43: // +
                else if ((code==43)
               ){
                    //valid = after_e;
                    valid = after_e;
                
                }
                else {
                //else
                    //after_e = false
                    after_e = false;
                    //if code is 46 // .
                    if (code === 46) { // .
                        //valid = (no has_dot and no has_x and no has_e) ? (true into has_dot) : false;
                        valid = (!has_dot && !has_x && !has_e) ? ((has_dot=true)) : false;
                    }
                    else {
                    //else
                        //valid = is_alphanumeric_char(code)
                        valid = is_alphanumeric_char(code);
                    };
                };

                //if not valid, break
                if (!(valid)) {break};
                //TKZ.next //consume char
                TKZ.next(); //consume char
            };// end loop
            //loop

            //var num = TKZ.text.substr(start,i)
            var num = TKZ.text.substr(start, i);

            //if prefix 
            if (prefix) {
                //num = prefix & num
                num = prefix + num;
            };

            //var parsed = parse_js_number(num);
            var parsed = parse_js_number(num);
            //if not Number.isNaN(parsed)
            if (!(Number.isNaN(parsed))) {
                //return TKZ.token("num", parsed)
                return TKZ.token("num", parsed);
            }
            else {
            //else 
                //TKZ.parse_error("Invalid syntax: " & num)
                TKZ.parse_error("Invalid syntax: " + num);
            };
        };


        //method read_escaped_char(in_string:boolean) 
        TKZ.read_escaped_char = function(in_string){
            //var ch:string = TKZ.next(true, in_string);
            var ch = TKZ.next(true, in_string);
            //case ch.charCodeAt(0)
            
              //when 110 : return "\n"
            if ((ch.charCodeAt(0)==110)
           ){return "\n"
            }
              //when 114 : return "\r"
            else if ((ch.charCodeAt(0)==114)
           ){return "\r"
            }
              //when 116 : return "\t"
            else if ((ch.charCodeAt(0)==116)
           ){return "\t"
            }
              //when 98  : return "\b"
            else if ((ch.charCodeAt(0)==98)
           ){return "\b"
            }
              //when 118 : return "\x0b"; // \v : vert tab
            else if ((ch.charCodeAt(0)==118)
           ){return "\x0b"
            }
              //when 102 : return "\f";
            else if ((ch.charCodeAt(0)==102)
           ){return "\f"
            }
              //when 48  : return "\0";
            else if ((ch.charCodeAt(0)==48)
           ){return "\0"
            }
              //when 120 : return String.fromCharCode(TKZ.hex_bytes(2)); // \x
            else if ((ch.charCodeAt(0)==120)
           ){return String.fromCharCode(TKZ.hex_bytes(2))
            }
              //when 117 : return String.fromCharCode(TKZ.hex_bytes(4)); // \u
            else if ((ch.charCodeAt(0)==117)
           ){return String.fromCharCode(TKZ.hex_bytes(4))
            }
              //when 10  : return ""; // newline
            else if ((ch.charCodeAt(0)==10)
           ){return ""
            }
            else {
              //else
                 //return ch;
                 return ch;
            };
        };

        //method hex_bytes(n) 
        TKZ.hex_bytes = function(n){

            //var num = 0
            var num = 0;

            //while n--
            while(n--){
                //var digit = parseInt(TKZ.next(true), 16)
                var digit = parseInt(TKZ.next(true), 16);

                //if Number.isNaN(digit)
                if (Number.isNaN(digit)) {
                    //TKZ.parse_error("Invalid hex-character pattern in string")
                    TKZ.parse_error("Invalid hex-character pattern in string");
                };

                //num = (num << 4) bitor digit
                num = (num << 4) | digit;
            };// end loop

            //return num;
            return num;
        };


        //var read_string = with_eof_error("Unterminated string constant", method(){
        //method read_string
        TKZ.read_string = function(){

            //var quote = TKZ.next(), ret = ""
            var quote = TKZ.next(), ret = "";

            //do
            while(true){

                //var ch = TKZ.next(true)
                var ch = TKZ.next(true);

                //if ch  is  quote, break
                if (ch === quote) {break};

                //if ch  is  "\\"
                if (ch === "\\") {

                    // try to read OctalEscapeSequence (XXX: deprecated if "strict mode")
                    // https://github.com/mishoo/UglifyJS/issues/178
                    //var octal_len = 0, first = null;
                    var octal_len = 0, first = null;

                    //var i=-1, start=TKZ.iterPos.key;
                    var i = -1, start = TKZ.iterPos.key;
                    //do 
                    while(true){
                        //ch= TKZ.peek()
                        ch = TKZ.peek();
                        //i++
                        i++;
                        //var valid = true
                        var valid = true;

                        //if ch >= "0" and ch <= "7"
                        if (ch >= "0" && ch <= "7") {
                            //if not first
                            if (!(first)) {
                                //first = ch
                                first = ch;
                                //valid = ++octal_len
                                valid = ++octal_len;
                            }
                            else if (first <= "3" && octal_len <= 2) {
                            //else if first <= "3" and octal_len <= 2 
                                //valid = ++octal_len
                                valid = ++octal_len;
                            }
                            else if (first >= "4" && octal_len <= 1) {
                            //else if first >= "4" and octal_len <= 1 
                                //valid = ++octal_len
                                valid = ++octal_len;
                            };
                        }
                        else {
                        //else
                            //valid = false
                            valid = false;
                        };

                        //if not valid, break
                        if (!(valid)) {break};
                        //TKZ.next //consume char
                        TKZ.next(); //consume char
                    };// end loop
                    //loop

                    //ch=TKZ.text.substr(start,i)
                    ch = TKZ.text.substr(start, i);

                    //if (octal_len > 0) 
                    if ((octal_len > 0)) {
                        //ch = String.fromCharCode(parseInt(ch, 8))
                        ch = String.fromCharCode(parseInt(ch, 8));
                    }
                    else {
                    //else 
                        //ch = TKZ.read_escaped_char(true);
                        ch = TKZ.read_escaped_char(true);
                    };
                };

                //end if "\\"
                

                //ret &= ch
                ret += ch;
            };// end loop

            //loop

            //return TKZ.token("string", ret)
            return TKZ.token("string", ret);
        };


        //method skip_line_comment(type) 
        TKZ.skip_line_comment = function(type){

            //need to save TKZ.regex_allowed flag because TKZ.token() resets it
            //var save_regex_allowed = TKZ.regex_allowed
            var save_regex_allowed = TKZ.regex_allowed;

            //var i = TKZ.findByteIndex("\n"), ret;
            var i = TKZ.findByteIndex("\n"), ret = undefined;
            //if (i  is  -1) 
            if ((i === -1)) {
                //ret = TKZ.text.byteSubstr(TKZ.iterPos.index);
                ret = TKZ.text.byteSubstr(TKZ.iterPos.index);
                //TKZ.iterPos.index = TKZ.iterPos.size; //move to EOF
                TKZ.iterPos.index = TKZ.iterPos.size; //move to EOF
            }
            else {
            //else 
                //ret = TKZ.text.byteSlice(TKZ.iterPos.index, i);
                ret = TKZ.text.byteSlice(TKZ.iterPos.index, i);

                //while TKZ.iterPos.index < i
                while(TKZ.iterPos.index < i){
                    //TKZ.text.iterableNext(TKZ.iterPos)
                    TKZ.text.iterableNext(TKZ.iterPos);
                };// end loop
                
            };


            //TKZ.comments_before.push( TKZ.token(type, ret, true) );
            TKZ.comments_before.push(TKZ.token(type, ret, true));

            //restore TKZ.regex_allowed flag 
            //TKZ.regex_allowed = save_regex_allowed
            TKZ.regex_allowed = save_regex_allowed;

            //return TKZ.next_token();
            return TKZ.next_token();
        };


        //method skip_multiline_comment //= with_eof_error("Unterminated multiline comment", method(){
        TKZ.skip_multiline_comment = function(){ //= with_eof_error("Unterminated multiline comment", method(){

            //need to save TKZ.regex_allowed flag because TKZ.token() resets it
            //var save_regex_allowed = TKZ.regex_allowed
            var save_regex_allowed = TKZ.regex_allowed;

            //var i = TKZ.findByteIndex("*/", true);
            var i = TKZ.findByteIndex("*/", true);
            //var text:string = TKZ.text.byteSlice(TKZ.iterPos.index, i);
            var text = TKZ.text.byteSlice(TKZ.iterPos.index, i);
            //var a = text.split("\n"), n = a.length;
            var a = text.split("\n"), n = a.length;
            // update stream position
            //while TKZ.iterPos.index < i + 2
            while(TKZ.iterPos.index < i + 2){
                //TKZ.text.iterableNext TKZ.iterPos
                TKZ.text.iterableNext(TKZ.iterPos);
            };// end loop

            //TKZ.line += n - 1;
            TKZ.line += n - 1;
            //if n > 1 
            if (n > 1) {
                //TKZ.col = a[n - 1].length;
                TKZ.col = a[n - 1].length;
            }
            else {
            //else 
                //TKZ.col += a[n - 1].length;
                TKZ.col += a[n - 1].length;
            };

            //TKZ.col += 2;
            TKZ.col += 2;
            //TKZ.newline_before = TKZ.newline_before or text.indexOf("\n") >= 0;
            TKZ.newline_before = TKZ.newline_before || text.indexOf("\n") >= 0;
            //var saveNLB = TKZ.newline_before
            var saveNLB = TKZ.newline_before;

            //TKZ.comments_before.push(TKZ.token("comment2", text, true));
            TKZ.comments_before.push(TKZ.token("comment2", text, true));

            //restore TKZ.regex_allowed flag 
            //TKZ.regex_allowed = save_regex_allowed
            TKZ.regex_allowed = save_regex_allowed;
            //TKZ.newline_before = saveNLB
            TKZ.newline_before = saveNLB;

            //return TKZ.next_token();
            return TKZ.next_token();
        };


//read a indentifier 

        //method read_name() 
        TKZ.read_name = function(){

            //var 
                //backslash = false, name = "", ch:string
                //escaped = false, hex:string
            var backslash = false
               , name = ""
               , ch = undefined
               , escaped = false
               , hex = undefined
           ;

            //while TKZ.peek() into ch isnt null
            while((ch=TKZ.peek()) !== null){

                //if no backslash
                if (!backslash) {

                    //if ch  is  "\\" 
                    if (ch === "\\") {
                        //escaped = true
                        escaped = true;
                        //backslash = true 
                        backslash = true;
                        //TKZ.next()
                        TKZ.next();
                    }
                    else if (is_identifier_char(ch)) {

                    //else if is_identifier_char(ch) 
                        //name &= TKZ.next()
                        name += TKZ.next();
                    }
                    else {

                    //else 
                        //break
                        break;
                    };
                }
                else {

                //else 
                    //if ch isnt "u", TKZ.parse_error("Expecting UnicodeEscapeSequence -- uXXXX");
                    if (ch !== "u") {TKZ.parse_error("Expecting UnicodeEscapeSequence -- uXXXX")};
                    //ch = TKZ.read_escaped_char();
                    ch = TKZ.read_escaped_char();
                    //if (not is_identifier_char(ch)), TKZ.parse_error("Unicode char: " & ch.charCodeAt(0) & " is not valid in identifier");
                    if ((!(is_identifier_char(ch)))) {TKZ.parse_error("Unicode char: " + ch.charCodeAt(0) + " is not valid in identifier")};
                    //name &= ch;
                    name += ch;
                    //backslash = false;
                    backslash = false;
                };
            };// end loop

            //end while
            

            //if escaped and Utils.isPredicate(KEYWORDS,name) 
            if (escaped && Utils.isPredicate(KEYWORDS, name)) {
                //hex = name.charCodeAt(0).toString(16).toUpperCase();
                hex = name.charCodeAt(0).toString(16).toUpperCase();
                //name = "\\u" & FOUR_ZEROES.substr(hex.length) & hex & name.slice(1);
                name = "\\u" + FOUR_ZEROES.substr(hex.length) + hex + name.slice(1);
            };

            //return name
            return name;
        };



        //var read_regexp = with_eof_error("Unterminated regular expression", method(regexp){
        //method read_regexp
        TKZ.read_regexp = function(){

            //var prev_backslash = false, ch, in_class = false, regexp="";
            var prev_backslash = false
               , ch = undefined
               , in_class = false
               , regexp = ""
           ;

            //while TKZ.next(true) into ch
            while((ch=TKZ.next(true))){

                //if prev_backslash
                if (prev_backslash) {
                    //regexp &= "\\" & ch
                    regexp += "\\" + ch;
                    //prev_backslash = false
                    prev_backslash = false;
                }
                else if (ch === "[") {

                //else if ch  is  "["
                    //in_class = true
                    in_class = true;
                    //regexp &= ch
                    regexp += ch;
                }
                else if (ch === "]" && in_class) {

                //else if ch  is  "]" and in_class
                    //in_class = false
                    in_class = false;
                    //regexp &= ch
                    regexp += ch;
                }
                else if (ch === "/" && !(in_class)) {

                //else if ch  is  "/" and not in_class
                    //break
                    break;
                }
                else if (ch === "\\") {

                //else if ch  is  "\\"
                    //prev_backslash = true
                    prev_backslash = true;
                }
                else {

                //else 
                    //regexp &= ch;
                    regexp += ch;
                };
            };// end loop

            //end while
            

            //var mods = TKZ.read_name();
            var mods = TKZ.read_name();

            //NOTE: original-Uglify:
            //return token("regexp", new RegExp(regexp, mods));
            //return TKZ.token("regexp", {regexp:regexp, mods:mods}) 
            return TKZ.token("regexp", {regexp: regexp, mods: mods});
        };


        //method read_operator(prefix) 
        TKZ.read_operator = function(prefix){

            //var operator= prefix or TKZ.next()
            var operator = prefix || TKZ.next();

//read the bigger operator possible.

//Keep reading until it is not an operator. return last one which is

            //do while TKZ.peek() into var ch
            var ch=undefined;
            while((ch=TKZ.peek())){
                //if not Utils.isPredicate(OPERATORS,operator & ch)
                if (!(Utils.isPredicate(OPERATORS, operator + ch))) {
                    //break
                    break;
                };
                //operator &= ch
                operator += ch;
                //TKZ.next //consume char
                TKZ.next(); //consume char
            };// end loop
            //loop

            //return TKZ.token("operator", operator)
            return TKZ.token("operator", operator);
        };


        //method handle_slash() 
        TKZ.handle_slash = function(){

            //TKZ.next();
            TKZ.next();

            //case TKZ.peek()
            
              //when "/":
            if ((TKZ.peek()=="/")
           ){
                //TKZ.next();
                TKZ.next();
                //return TKZ.skip_line_comment("comment1");
                return TKZ.skip_line_comment("comment1");
            
            }
              //when "*":
            else if ((TKZ.peek()=="*")
           ){
                //TKZ.next();
                TKZ.next();
                //return TKZ.skip_multiline_comment();
                return TKZ.skip_multiline_comment();
            
            };

            //return TKZ.regex_allowed ? TKZ.read_regexp("") : TKZ.read_operator("/");
            return TKZ.regex_allowed ? TKZ.read_regexp("") : TKZ.read_operator("/");
        };


        //method handle_dot() 
        TKZ.handle_dot = function(){

            //TKZ.next();
            TKZ.next();

            //return is_digit(TKZ.peek().charCodeAt(0))
            return is_digit(TKZ.peek().charCodeAt(0)) ? TKZ.read_num(".") : TKZ.token("punc", ".");
        };
                //? TKZ.read_num(".")
                //: TKZ.token("punc", ".")


        //method read_word() 
        TKZ.read_word = function(){
            //var word = TKZ.read_name()
            var word = TKZ.read_name();
            //if TKZ.prev_was_dot, return TKZ.token("name", word)
            if (TKZ.prev_was_dot) {return TKZ.token("name", word)};

            //return Utils.isPredicate(KEYWORDS_ATOM,word) ? TKZ.token("atom", word)
            return Utils.isPredicate(KEYWORDS_ATOM, word) ? TKZ.token("atom", word) : !(Utils.isPredicate(KEYWORDS, word)) ? TKZ.token("name", word) : Utils.isPredicate(OPERATORS, word) ? TKZ.token("operator", word) : TKZ.token("keyword", word);
        };
                //: not Utils.isPredicate(KEYWORDS,word) ? TKZ.token("name", word)
                //: Utils.isPredicate(OPERATORS,word) ? TKZ.token("operator", word)
                //: TKZ.token("keyword", word);


        ///*method with_eof_error(eof_error, cont) {
            //return method(x) {
                //try {
                    //return cont(x);
                //} catch(ex) {
                    //if (ex  is = EX_EOF) parse_error(eof_error);
                    //else throw ex;
                //}
            //};
        //};
        //*/

        //method next_token(force_regexp) 
        TKZ.next_token = function(force_regexp){

            //if force_regexp 
            if (force_regexp) {
                //return TKZ.read_regexp(force_regexp);
                return TKZ.read_regexp(force_regexp);
            };

            //TKZ.skip_whitespace();
            TKZ.skip_whitespace();
            //TKZ.start_token();
            TKZ.start_token();

            //if TKZ.html5_comments
            if (TKZ.html5_comments) {
                //if TKZ.looking_at("<!--")
                if (TKZ.looking_at("<!--")) {
                    //TKZ.forward(4);
                    TKZ.forward(4);
                    //return TKZ.skip_line_comment("comment3");
                    return TKZ.skip_line_comment("comment3");
                };

                //if TKZ.looking_at("-->") and TKZ.newline_before 
                if (TKZ.looking_at("-->") && TKZ.newline_before) {
                    //TKZ.forward(3);
                    TKZ.forward(3);
                    //return TKZ.skip_line_comment("comment4");
                    return TKZ.skip_line_comment("comment4");
                };
            };



            //var ch:string = TKZ.peek();
            var ch = TKZ.peek();
            //if no ch, return TKZ.token("eof");
            if (!ch) {return TKZ.token("eof")};

            //var code = ch.charCodeAt(0)
            var code = ch.charCodeAt(0);
            //case code
            
                //when 34,39: return TKZ.read_string();
            if ((code==34)
               ||(code==39)
           ){return TKZ.read_string()
            }
                //when 46: return TKZ.handle_dot();
            else if ((code==46)
           ){return TKZ.handle_dot()
            }
                //when 47: return TKZ.handle_slash();
            else if ((code==47)
           ){return TKZ.handle_slash()
            };

            //if is_digit(code), return TKZ.read_num()
            if (is_digit(code)) {return TKZ.read_num()};

            //if ch in PUNC_CHARS, return TKZ.token("punc", TKZ.next())
            if (PUNC_CHARS.indexOf(ch)>=0) {return TKZ.token("punc", TKZ.next())};

            //if ch in OPERATOR_CHARS, return TKZ.read_operator()
            if (OPERATOR_CHARS.indexOf(ch)>=0) {return TKZ.read_operator()};

            //if code is 92 or is_identifier_start(code), return TKZ.read_word()
            if (code === 92 || is_identifier_start(code)) {return TKZ.read_word()};

            //TKZ.parse_error("Unexpected character '#{ch}'")
            TKZ.parse_error("Unexpected character '" + ch + "'");
        };

        //end next_token / aka "input"       
        
    
    // export
    module.exports.TKZ = TKZ;

        ///*next_token.context = method(nc) {
            //if (nc) TKZ = nc;
            //return TKZ;
        //};
        //*/

    //end namespace TKZ
    

    ///* -----[ Parser (constants) ]----- */

    //var UNARY_PREFIX = Utils.makePredicate([
        //"typeof",
        //"void",
        //"delete",
        //"--",
        //"++",
        //"!",
        //"~",
        //"-",
        //"+"
    var UNARY_PREFIX = Utils.makePredicate(["typeof", "void", "delete", "--", "++", "!", "~", "-", "+"]);
    //])

    //var UNARY_POSTFIX = Utils.makePredicate([ "--", "++" ]);
    var UNARY_POSTFIX = Utils.makePredicate(["--", "++"]);

    //var ASSIGNMENT = Utils.makePredicate([ "=", "+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&=" ]);
    var ASSIGNMENT = Utils.makePredicate(["=", "+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&="]);

    ///*
    //var PRECEDENCE = (function(a, ret){
        //for (var i = 0; i < a.length; ++i) {
            //var b = a[i];
            //for (var j = 0; j < b.length; ++j) {
                //ret[b[j]] = i + 1;
            //}
        //}
        //return ret;
    //})(
        //[
            //["||"],
            //["&&"],
            //["|"],
            //["^"],
            //["&"],
            //["==", "===", "!=", "!=="],
            //["<", ">", "<=", ">=", "in", "instanceof"],
            //[">>", "<<", ">>>"],
            //["+", "-"],
            //["*", "/", "%"]
        //],
        //{}
    //);
    //*/
    //var PRECEDENCE =  //higher number is higher precedence

            //"||": 1
            //"&&": 2
            //"|" : 3
            //"^" : 4
            //"&" : 5

            //"==":6, "===":6, "!=":6, "!==":6

            //"<":7, ">":7, "<=":7, ">=":7, "in":7, "instanceof":7

            //">>":8, "<<":8, ">>>":8

            //"+":9, "-":9

            //"*":10, "/":10, "%":10
    var PRECEDENCE = {"||": 1
       , "&&": 2
       , "|": 3
       , "^": 4
       , "&": 5
       , "==": 6
       , "===": 6
       , "!=": 6
       , "!==": 6
       , "<": 7
       , ">": 7
       , "<=": 7
       , ">=": 7
       , "in": 7
       , "instanceof": 7
       , ">>": 8
       , "<<": 8
       , ">>>": 8
       , "+": 9
       , "-": 9
       , "*": 10
       , "/": 10
       , "%": 10
   }; //higher number is higher precedence


    //var STATEMENTS_WITH_LABELS = array_to_hash([ "for", "do", "while", "switch" ]);

    //var ATOMIC_START_TOKEN = "|atom|num|string|regexp|name|";
    var ATOMIC_START_TOKEN = "|atom|num|string|regexp|name|";

    ///* -----[ Parser ]----- 
    //*/

    //class PRSOptions
    // constructor
    function PRSOptions(){ // default constructor
        //properties
            //strict         = false,
            //filename:string        = null,
            //toplevel:AST.Toplevel  = null,
            //expression     = false,
            //html5_comments = true
            this.strict=false;
            this.filename=null;
            this.toplevel=null;
            this.expression=false;
            this.html5_comments=true;
    };
    
    // end class PRSOptions


    //public namespace PRS 
    var PRS={};

        //properties
            //input  : Function //next_token
            //token         = null,
            //prev          = null,
            //peeked        = null,
            //in_function   = 0,
            //in_directives = true,
            //in_loop       = 0,
            //labels        = []
            //options: PRSOptions     
            PRS.token=null;
            PRS.prev=null;
            PRS.peeked=null;
            PRS.in_function=0;
            PRS.in_directives=true;
            PRS.in_loop=0;
            PRS.labels=[];

        //method parse($TEXT, options) 
        PRS.parse = function($TEXT, options){

            //PRS.options = new PRSOptions
            PRS.options = new PRSOptions();

            //for each property name,value in options
            var value=undefined;
            for ( var name in options){value=options[name];
                {
                //PRS.options.setProperty name,value
                PRS.options.setProperty(name, value);
                }
                
                }// end for each property

            //PRS.input = ( typeof $TEXT is  "string" ? 
            PRS.input = (typeof $TEXT === "string" ? TKZ.tokenize($TEXT, PRS.options.filename, PRS.options.html5_comments) : $TEXT);
                            //TKZ.tokenize($TEXT, PRS.options.filename, PRS.options.html5_comments) 
                            //: $TEXT)

            //PRS.token = PRS.next();
            PRS.token = PRS.next();

            //if PRS.options.expression
            if (PRS.options.expression) {
                //return PRS.expression(true);
                return PRS.expression(true);
            };

            //var start = PRS.token;
            var start = PRS.token;
            //var body:array = [];
            var body = [];
            //while not PRS.isToken("eof")
            while(!(PRS.isToken("eof"))){
                //body.push PRS.statement()
                body.push(PRS.statement());
            };// end loop

            //var endpos = PRS.getPrev();
            var endpos = PRS.getPrev();

            //var toplevel:AST.Toplevel = PRS.options.toplevel
            var toplevel = PRS.options.toplevel;

            //if (toplevel) 
            if ((toplevel)) {
                //toplevel.body = toplevel.body.concat(body);
                toplevel.body = toplevel.body.concat(body);
                //toplevel.endpos = endpos;
                toplevel.endpos = endpos;
            }
            else {

            //else 
                //toplevel = new AST.Toplevel({ start: start, body: body, endpos: endpos })
                toplevel = new AST.Toplevel({start: start, body: body, endpos: endpos});
            };

            //return toplevel;
            return toplevel;
        };


        //method isToken(type, value) 
        PRS.isToken = function(type, value){
            //return is_token(PRS.token, type, value)
            return is_token(PRS.token, type, value);
        };

        //method peek() returns string 
        PRS.peek = function(){
            //return PRS.peeked or (PRS.input.call(undefined) into PRS.peeked)
            return PRS.peeked || ((PRS.peeked=PRS.input.call(undefined)));
        };

        //method next() 
        PRS.next = function(){
            //PRS.prev = PRS.token
            PRS.prev = PRS.token;
            //if PRS.peeked
            if (PRS.peeked) {
                //PRS.token = PRS.peeked
                PRS.token = PRS.peeked;
                //PRS.peeked = null
                PRS.peeked = null;
            }
            else {
            //else 
                //PRS.token = PRS.input.call(undefined)
                PRS.token = PRS.input.call(undefined);
            };

            //PRS.in_directives = PRS.in_directives 
            PRS.in_directives = PRS.in_directives && (PRS.token.type === "string" || PRS.isToken("punc", ";"));
                //and ( PRS.token.type  is  "string"  or  PRS.isToken("punc", ";") )

            //return PRS.token
            return PRS.token;
        };


        //method getPrev() 
        PRS.getPrev = function(){
            //return PRS.prev
            return PRS.prev;
        };


        //method croak(msg, line, col, pos) 
        PRS.croak = function(msg, line, col, pos){
            //var ctx = PRS.input.context();
            //js_error(msg,
            js_error(msg, TKZ.filename, line !== null ? line : TKZ.tokline, col !== null ? col : TKZ.tokcol, pos !== null ? pos : TKZ.tokpos);
        };
                     //TKZ.filename,
                     //line isnt null ? line : TKZ.tokline,
                     //col isnt null ? col : TKZ.tokcol,
                     //pos isnt null ? pos : TKZ.tokpos);


        //method token_error(token, msg) 
        PRS.token_error = function(token, msg){
            //PRS.croak(msg, token.line, token.col);
            PRS.croak(msg, token.line, token.col);
        };


        //method unexpected(token) 
        PRS.unexpected = function(token){
            //if no token, token = PRS.token;
            if (!token) {token = PRS.token};
            //PRS.token_error(token, "Unexpected token: #{token.type} (#{token.value})");
            PRS.token_error(token, "Unexpected token: " + token.type + " (" + token.value + ")");
        };


        //method expect_token(type, val) 
        PRS.expect_token = function(type, val){
            //if PRS.isToken(type, val), return PRS.next()
            if (PRS.isToken(type, val)) {return PRS.next()};
            //PRS.token_error(PRS.token, "Unexpected token #{PRS.token.type} «#{PRS.token.value}», expected #{type} «#{val}»")
            PRS.token_error(PRS.token, "Unexpected token " + PRS.token.type + " «" + PRS.token.value + "», expected " + type + " «" + val + "»");
        };

        //method expect(punc) 
        PRS.expect = function(punc){
            //return PRS.expect_token("punc", punc);
            return PRS.expect_token("punc", punc);
        };

        //method can_insert_semicolon() 
        PRS.can_insert_semicolon = function(){
            //return not PRS.options.strict 
            return !(PRS.options.strict) && (PRS.token.nlb || PRS.isToken("eof") || PRS.isToken("punc", "}"));
        };
                //and (PRS.token.nlb  or PRS.isToken("eof") or PRS.isToken("punc", "}") )


        //method semicolon() 
        PRS.semicolon = function(){

            //if PRS.isToken("punc", ";") 
            if (PRS.isToken("punc", ";")) {
                //PRS.next()
                PRS.next();
            }
            else if (!(PRS.can_insert_semicolon())) {

            //else if not PRS.can_insert_semicolon() 
                //PRS.unexpected();
                PRS.unexpected();
            };
        };


        //method parenthesised() 
        PRS.parenthesised = function(){

            //PRS.expect("(");
            PRS.expect("(");
            //var exp = PRS.expression(true);
            var exp = PRS.expression(true);
            //PRS.expect(")");
            PRS.expect(")");
            //return exp;
            return exp;
        };


        //method handle_regexp() 
        PRS.handle_regexp = function(){
            //if PRS.isToken("operator", "/")  or  PRS.isToken("operator", "/=")
            if (PRS.isToken("operator", "/") || PRS.isToken("operator", "/=")) {
                //PRS.peeked = null;
                PRS.peeked = null;
                //var v:string = PRS.token.value
                var v = PRS.token.value;
                //PRS.token = PRS.input.call(v.substr(1)); // force regexp
                PRS.token = PRS.input.call(v.substr(1)); // force regexp
            };
        };


        //method embed_tokens(parser_fn:function) 
        PRS.embed_tokens = function(parser_fn){

//calls parser_fn, returns AST_node

            //var start = PRS.token;
            var start = PRS.token;

            //var expr:AST.Node = parser_fn.call(undefined);
            var expr = parser_fn.call(undefined);

            //var endpos = PRS.getPrev();
            var endpos = PRS.getPrev();

            //expr.start = start;
            expr.start = start;
            //expr.endpos = endpos;
            expr.endpos = endpos;

            //return expr
            return expr;
        };


        //method statement
        PRS.statement = function(){
            //return PRS.embed_tokens(PRS.statement_parser_fn)
            return PRS.embed_tokens(PRS.statement_parser_fn);
        };

        //method statement_parser_fn
        PRS.statement_parser_fn = function(){

            //var tmp;
            var tmp = undefined;
            //PRS.handle_regexp();
            PRS.handle_regexp();

            //case PRS.token.type
            
              //when "string":
            if ((PRS.token.type=="string")
           ){
                //var dir = PRS.in_directives, stat:AST.SimpleStatement = PRS.simple_statement();
                var dir = PRS.in_directives, stat = PRS.simple_statement();
                // XXXv2: decide how to fix directives
                //if (dir and stat.body instanceof AST.StringLiteral and not PRS.isToken("punc", ","))
                if ((dir && stat.body instanceof AST.StringLiteral && !(PRS.isToken("punc", ",")))) {
                    //return new AST.Directive({ value: stat.body.value });
                    return new AST.Directive({value: stat.body.value});
                };
                //return stat;
                return stat;
            
            }
              //when 
            else if ((PRS.token.type=="num")
               ||(PRS.token.type=="regexp")
               ||(PRS.token.type=="operator")
               ||(PRS.token.type=="atom")
           ){
                //"num"
                //"regexp"
                //"operator"
                //"atom":
                    //return PRS.simple_statement();
                    return PRS.simple_statement();
            
            }
              //when "name":
            else if ((PRS.token.type=="name")
           ){
                //return is_token(PRS.peek(), "punc", ":")
                return is_token(PRS.peek(), "punc", ":") ? PRS.labeled_statement() : PRS.simple_statement();
            
            }
              //when "punc":
            else if ((PRS.token.type=="punc")
           ){
                //case PRS.token.value
                
                  //when "{":
                if ((PRS.token.value=="{")
               ){
                    //return new AST.BlockStatement({
                        //start : PRS.token,
                        //body  : PRS.block_(),
                        //endpos   : PRS.getPrev()
                    return new AST.BlockStatement({start: PRS.token, body: PRS.block_(), endpos: PRS.getPrev()});
                
                }
                  //when "[","(":
                else if ((PRS.token.value=="[")
                   ||(PRS.token.value=="(")
               ){
                    //return PRS.simple_statement();
                    return PRS.simple_statement();
                
                }
                  //when ";":
                else if ((PRS.token.value==";")
               ){
                    //PRS.next();
                    PRS.next();
                    //return new AST.EmptyStatement();
                    return new AST.EmptyStatement();
                
                }
                else {

                  //else
                    //PRS.unexpected();
                    PRS.unexpected();
                };

                //end case punc
                
            
            }
              //when "keyword":
            else if ((PRS.token.type=="keyword")
           ){
                //tmp = PRS.token.value
                tmp = PRS.token.value;
                //PRS.next()
                PRS.next();
                //case tmp
                
                  //when "break":
                if ((tmp=="break")
               ){
                    //return PRS.break_cont(AST.BreakStatement);
                    return PRS.break_cont(AST.BreakStatement);
                
                }
                  //when "continue":
                else if ((tmp=="continue")
               ){
                    //return PRS.break_cont(AST.ContinueStatement);
                    return PRS.break_cont(AST.ContinueStatement);
                
                }
                  //when "debugger":
                else if ((tmp=="debugger")
               ){
                    //PRS.semicolon();
                    PRS.semicolon();
                    //return new AST.Debugger();
                    return new AST.Debugger();
                
                }
                  //when "do":
                else if ((tmp=="do")
               ){

                    //var theBody = PRS.in_loop_call(PRS.statement)
                    var theBody = PRS.in_loop_call(PRS.statement);

                    //PRS.expect_token("keyword", "while") 
                    PRS.expect_token("keyword", "while");
                    //var cond = PRS.parenthesised() 
                    var cond = PRS.parenthesised();
                    //PRS.semicolon()
                    PRS.semicolon();

                    //return new AST.DoStatement({
                        //body      : theBody
                        //condition : cond
                    return new AST.DoStatement({body: theBody, condition: cond});
                
                }
                  //when "while":
                else if ((tmp=="while")
               ){
                    //return new AST.WhileStatement({
                        //condition : PRS.parenthesised(),
                        //body      : PRS.in_loop_call(PRS.statement)
                    return new AST.WhileStatement({condition: PRS.parenthesised(), body: PRS.in_loop_call(PRS.statement)});
                
                }
                  //when "for":
                else if ((tmp=="for")
               ){
                    //return PRS.for_();
                    return PRS.for_();
                
                }
                  //when "function":
                else if ((tmp=="function")
               ){
                    //return PRS.function_(AST.Defun);
                    return PRS.function_(AST.Defun);
                
                }
                  //when "if":
                else if ((tmp=="if")
               ){
                    //return PRS.if_();
                    return PRS.if_();
                
                }
                  //when "return":
                else if ((tmp=="return")
               ){

                    //if PRS.in_function  is  0
                    if (PRS.in_function === 0) {
                        //PRS.croak("'return' outside of method");
                        PRS.croak("'return' outside of method");
                    };

                    //var value=null;
                    var value = null;
                    //if PRS.isToken("punc", ";")
                    if (PRS.isToken("punc", ";")) {
                        //PRS.next
                        PRS.next();
                    }
                    else if (PRS.can_insert_semicolon()) {
                    //else if PRS.can_insert_semicolon()
                        //do nothing
                        null;
                    }
                    else {
                    //else
                        //value = PRS.expression(true)
                        value = PRS.expression(true);
                        //PRS.semicolon()
                        PRS.semicolon();
                    };

                    //return new AST.ReturnStatement({
                        //value: value
                    return new AST.ReturnStatement({value: value});
                
                }
                  //when "switch":
                else if ((tmp=="switch")
               ){
                    //return new AST.Switch({
                        //expression : PRS.parenthesised(),
                        //body       : PRS.in_loop_call(PRS.switch_body_)
                    return new AST.Switch({expression: PRS.parenthesised(), body: PRS.in_loop_call(PRS.switch_body_)});
                
                }
                  //when "throw":
                else if ((tmp=="throw")
               ){
                    //if (PRS.token.nlb)
                    if ((PRS.token.nlb)) {
                        //PRS.croak("Illegal newline after 'throw'");
                        PRS.croak("Illegal newline after 'throw'");
                    };

                    //tmp = PRS.expression(true) 
                    tmp = PRS.expression(true);
                    //PRS.semicolon()
                    PRS.semicolon();

                    //return new AST.ThrowStatement({
                        //value: tmp
                    return new AST.ThrowStatement({value: tmp});
                
                }
                  //when "try":
                else if ((tmp=="try")
               ){
                    //return PRS.try_();
                    return PRS.try_();
                
                }
                  //when "var":
                else if ((tmp=="var")
               ){
                    //tmp = PRS.var_()
                    tmp = PRS.var_();
                    //PRS.semicolon()
                    PRS.semicolon();
                    //return tmp
                    return tmp;
                
                }
                  //when "const":
                else if ((tmp=="const")
               ){
                    //tmp = PRS.const_()
                    tmp = PRS.const_();
                    //PRS.semicolon()
                    PRS.semicolon();
                    //return tmp;
                    return tmp;
                
                }
                  //when "with":
                else if ((tmp=="with")
               ){
                    //return new AST.WithStatement({
                        //expression : PRS.parenthesised(),
                        //body       : PRS.statement()
                    return new AST.WithStatement({expression: PRS.parenthesised(), body: PRS.statement()});
                
                }
                else {
                    //});

                  //else
                    //PRS.unexpected();
                    PRS.unexpected();
                };
            
            };
        };

        //end statement_parser
        


        //method labeled_statement() 
        PRS.labeled_statement = function(){
            //var label = PRS.as_symbol(AST.Label);
            var label = PRS.as_symbol(AST.Label);

            //var found
            var found = undefined;
            //for each lab:AST.Label in PRS.labels
            for( var lab__inx=0,lab ; lab__inx<PRS.labels.length ; lab__inx++){lab=PRS.labels[lab__inx];
            
                //if lab.name is label.name
                if (lab.name === label.name) {
                    //found = lab
                    found = lab;
                    //break
                    break;
                };
            };// end for each in PRS.labels

            //if found 
            if (found) {
                // ECMA-262, 12.12: An ECMAScript program is considered
                // syntactically incorrect if it contains a
                // LabelledStatement that is enclosed by a
                // LabelledStatement with the same Identifier as label.
                //PRS.croak("Label #{label.name} defined twice");
                PRS.croak("Label " + label.name + " defined twice");
            };


            //PRS.expect(":");
            PRS.expect(":");
            //PRS.labels.push(label);
            PRS.labels.push(label);
            //var stat = PRS.statement();
            var stat = PRS.statement();
            //PRS.labels.pop();
            PRS.labels.pop();
            //if stat isnt instanceof AST.IterationStatement 
            if (!(stat instanceof AST.IterationStatement)) {
                // check for `continue` that refers to this label.
                // those should be reported as syntax errors.
                // https://github.com/mishoo/UglifyJS2/issues/287
                //for each contStat:AST.ContinueStatement in label.references
                for( var contStat__inx=0,contStat ; contStat__inx<label.references.length ; contStat__inx++){contStat=label.references[contStat__inx];
                  if(contStat instanceof AST.ContinueStatement){
                    //where contStat instanceof AST.ContinueStatement
                        //var tok = contStat.label.start;
                        var tok = contStat.label.start;
                        //PRS.croak("Continue label `#{label.name}` refers to non-IterationStatement.",
                        PRS.croak("Continue label `" + label.name + "` refers to non-IterationStatement.", tok.line, tok.col, tok.pos);
                }};// end for each in label.references
                
            };
                              //tok.line, tok.col, tok.pos);



            //return new AST.LabeledStatement({ body: stat, label: label });
            return new AST.LabeledStatement({body: stat, label: label});
        };


        //method simple_statement(tmp) 
        PRS.simple_statement = function(tmp){
            //tmp = PRS.expression(true) 
            tmp = PRS.expression(true);
            //PRS.semicolon()
            PRS.semicolon();
            //return new AST.SimpleStatement({ body: tmp });
            return new AST.SimpleStatement({body: tmp});
        };


        //method break_cont(type:Function) 
        PRS.break_cont = function(type){

            //var label = null, found
            var label = null, found = undefined;

            //if not PRS.can_insert_semicolon()
            if (!(PRS.can_insert_semicolon())) {
                //label = PRS.as_symbol(AST.LabelRef, true)
                label = PRS.as_symbol(AST.LabelRef, true);
            };

            //if (label isnt null) 
            if ((label !== null)) {

                //for each lab:AST.Label in PRS.labels
                for( var lab__inx=0,lab ; lab__inx<PRS.labels.length ; lab__inx++){lab=PRS.labels[lab__inx];
                
                    //if lab.name is label.name
                    if (lab.name === label.name) {
                        //found = lab
                        found = lab;
                        //break
                        break;
                    };
                };// end for each in PRS.labels

                //if not found
                if (!(found)) {
                    //PRS.croak("Undefined label #{label.name}");
                    PRS.croak("Undefined label " + label.name);
                };

                //label.thedef = found;
                label.thedef = found;
            }
            else if ((PRS.in_loop === 0)) {

            //else if (PRS.in_loop  is  0)
                //PRS.croak("#{type.name} not inside a loop or switch");
                PRS.croak('' + type.name + " not inside a loop or switch");
            };

            //PRS.semicolon();
            PRS.semicolon();

            //var stat = new type({ label: label });
            var stat = new type({label: label});
            //if found, found.references.push(stat);
            if (found) {found.references.push(stat)};
            //return stat;
            return stat;
        };


        //method for_() 
        PRS.for_ = function(){
            //PRS.expect("(");
            PRS.expect("(");
            //var init:AST.Node = null;
            var init = null;

            //if not PRS.isToken("punc", ";")
            if (!(PRS.isToken("punc", ";"))) {

                //if PRS.isToken("keyword", "var")
                if (PRS.isToken("keyword", "var")) {
                    //PRS.next()
                    PRS.next();
                    //init = PRS.var_(true)
                    init = PRS.var_(true);
                }
                else {
                //else
                    //init = PRS.expression(true, true);
                    init = PRS.expression(true, true);
                };

                //if PRS.isToken("operator", "in")
                if (PRS.isToken("operator", "in")) {
                    //if init instanceof AST.Var 
                    if (init instanceof AST.Var) {
                        //declare init:AST.Var 
                        
                        //if init.definitions.length>1
                        if (init.definitions.length > 1) {
                            //PRS.croak("Only one variable declaration allowed in for..in loop")
                            PRS.croak("Only one variable declaration allowed in for..in loop");
                        };
                    };

                    //PRS.next();
                    PRS.next();
                    //return PRS.for_in(init);
                    return PRS.for_in(init);
                };
            };


            //return PRS.regular_for(init);
            return PRS.regular_for(init);
        };


        //method regular_for(init) 
        PRS.regular_for = function(init){
            //PRS.expect(";");
            PRS.expect(";");
            //var test = PRS.isToken("punc", ";") ? null : PRS.expression(true);
            var test = PRS.isToken("punc", ";") ? null : PRS.expression(true);
            //PRS.expect(";");
            PRS.expect(";");
            //var step = PRS.isToken("punc", ")") ? null : PRS.expression(true);
            var step = PRS.isToken("punc", ")") ? null : PRS.expression(true);
            //PRS.expect(")");
            PRS.expect(")");
            //return new AST.ForStatement({
                //init      : init,
                //condition : test,
                //step      : step,
                //body      : PRS.in_loop_call(PRS.statement)
            return new AST.ForStatement({init: init, condition: test, step: step, body: PRS.in_loop_call(PRS.statement)});
        };
            //});


        //method for_in(init:AST.Var) 
        PRS.for_in = function(init){
            //var lhs = init instanceof AST.Var ? init.definitions[0].name : null;
            var lhs = init instanceof AST.Var ? init.definitions[0].name : null;
            //var obj = PRS.expression(true);
            var obj = PRS.expression(true);
            //PRS.expect(")");
            PRS.expect(")");
            //return new AST.ForIn({
                //init   : init,
                //name   : lhs,
                //object : obj,
                //body   : PRS.in_loop_call(PRS.statement)
            return new AST.ForIn({init: init, name: lhs, object: obj, body: PRS.in_loop_call(PRS.statement)});
        };
            //});


        //method function_(ctor) 
        PRS.function_ = function(ctor){
            //var in_statement = ctor is AST.Defun;
            var in_statement = ctor === AST.Defun;
            //var name = PRS.isToken("name") ? PRS.as_symbol(in_statement ? AST.SymbolDefun : AST.SymbolLambda) : null;
            var name = PRS.isToken("name") ? PRS.as_symbol(in_statement ? AST.SymbolDefun : AST.SymbolLambda) : null;
            //if (in_statement and not name)
            if ((in_statement && !(name))) {
                //PRS.unexpected();
                PRS.unexpected();
            };

            //PRS.expect("(");
            PRS.expect("(");

//arguments

            //var a=[],first=true            
            var a = [], first = true;
            //while not PRS.isToken("punc", ")")
            while(!(PRS.isToken("punc", ")"))){
                //if first 
                if (first) {
                    //first = false 
                    first = false;
                }
                else {
                //else 
                    //PRS.expect(",")
                    PRS.expect(",");
                };

                //a.push PRS.as_symbol(AST.SymbolFunarg)
                a.push(PRS.as_symbol(AST.SymbolFunarg));
            };// end loop

            //PRS.next();
            PRS.next();

//body

            //var 
                //inLoopFlag = PRS.in_loop 
                //labels = PRS.labels
            var inLoopFlag = PRS.in_loop, labels = PRS.labels;

            //++PRS.in_function;
            ++PRS.in_function;
            //PRS.in_directives = true;
            PRS.in_directives = true;
            //PRS.in_loop = 0;
            PRS.in_loop = 0;
            //PRS.labels = [];
            PRS.labels = [];

            //var theBody = PRS.block_();
            var theBody = PRS.block_();

            //--PRS.in_function;
            --PRS.in_function;
            //PRS.in_loop = inLoopFlag;
            PRS.in_loop = inLoopFlag;
            //PRS.labels = labels;
            PRS.labels = labels;

            //return new ctor({
                //name: name,
                //argnames: a,
                //body: theBody
            return new ctor({name: name, argnames: a, body: theBody});
        };
            //});


        //method if_() 
        PRS.if_ = function(){
            //var cond = PRS.parenthesised(), body = PRS.statement(), belse = null;
            var cond = PRS.parenthesised()
               , body = PRS.statement()
               , belse = null
           ;
            //if PRS.isToken("keyword", "else")
            if (PRS.isToken("keyword", "else")) {
                //PRS.next();
                PRS.next();
                //belse = PRS.statement();
                belse = PRS.statement();
            };

            //return new AST.IfStatement({
                //condition   : cond,
                //body        : body,
                //alternative : belse
            return new AST.IfStatement({condition: cond, body: body, alternative: belse});
        };
            //});


        //method block_() 
        PRS.block_ = function(){

            //PRS.expect("{");
            PRS.expect("{");
            //var a = [];
            var a = [];

            //while not PRS.isToken("punc", "}") 
            while(!(PRS.isToken("punc", "}"))){
                //if PRS.isToken("eof"), PRS.unexpected();
                if (PRS.isToken("eof")) {PRS.unexpected()};
                //a.push PRS.statement()
                a.push(PRS.statement());
            };// end loop

            //PRS.next()
            PRS.next();
            //return a
            return a;
        };


        //method switch_body_() 
        PRS.switch_body_ = function(){

            //PRS.expect("{");
            PRS.expect("{");
            //var a = [], cur:array = null, branch:AST.Token = null, tmp;
            var a = []
               , cur = null
               , branch = null
               , tmp = undefined
           ;

            //while not PRS.isToken("punc", "}") 
            while(!(PRS.isToken("punc", "}"))){

                //if PRS.isToken("eof"), PRS.unexpected();
                if (PRS.isToken("eof")) {PRS.unexpected()};

                //if PRS.isToken("keyword", "when")
                if (PRS.isToken("keyword", "when")) {
                    //if branch, branch.endpos = PRS.getPrev();
                    if (branch) {branch.endpos = PRS.getPrev()};
                    //cur = [];
                    cur = [];
                    //tmp = PRS.token 
                    tmp = PRS.token;
                    //PRS.next()
                    PRS.next();
                    //branch = new AST.Case({
                        //start      : tmp,
                        //expression : PRS.expression(true),
                        //body       : cur
                    branch = new AST.Case({start: tmp, expression: PRS.expression(true), body: cur});
                    //});
                    //a.push(branch);
                    a.push(branch);
                    //PRS.expect(":");
                    PRS.expect(":");
                }
                else if (PRS.isToken("keyword", "default")) {

                //else if PRS.isToken("keyword", "default")
                    //if branch, branch.endpos = PRS.getPrev();
                    if (branch) {branch.endpos = PRS.getPrev()};
                    //cur = [];
                    cur = [];
                    //tmp = PRS.token 
                    tmp = PRS.token;
                    //PRS.next() 
                    PRS.next();
                    //PRS.expect(":")
                    PRS.expect(":");
                    //branch = new AST.Default({
                        //start : tmp,
                        //body  : cur
                    branch = new AST.Default({start: tmp, body: cur});
                    //});
                    //a.push(branch);
                    a.push(branch);
                }
                else {

                //else 
                    //if not cur, PRS.unexpected()
                    if (!(cur)) {PRS.unexpected()};
                    //cur.push PRS.statement()
                    cur.push(PRS.statement());
                };
            };// end loop


            //if branch, branch.endpos = PRS.getPrev()
            if (branch) {branch.endpos = PRS.getPrev()};

            //PRS.next();
            PRS.next();

            //return a;
            return a;
        };


        //method try_() 
        PRS.try_ = function(){

            //var 
                //start = PRS.token
                //body = PRS.block_() 
                //bcatch = null 
                //bfinally = null
            var start = PRS.token
               , body = PRS.block_()
               , bcatch = null
               , bfinally = null
           ;

            //if PRS.isToken("keyword", "catch")
            if (PRS.isToken("keyword", "catch")) {
                //PRS.next();
                PRS.next();
                //PRS.expect("(");
                PRS.expect("(");
                //var name = PRS.as_symbol(AST.SymbolCatch);
                var name = PRS.as_symbol(AST.SymbolCatch);
                //PRS.expect(")");
                PRS.expect(")");
                //bcatch = new AST.Catch({
                    //start   : start,
                    //argname : name,
                    //body    : PRS.block_(),
                    //endpos  : PRS.getPrev()
                bcatch = new AST.Catch({start: start, argname: name, body: PRS.block_(), endpos: PRS.getPrev()});
            };
                //});

            //if PRS.isToken("keyword", "finally")
            if (PRS.isToken("keyword", "finally")) {
                //PRS.next();
                PRS.next();
                //bfinally = new AST.Finally({
                    //start : start,
                    //body  : PRS.block_(),
                    //endpos: PRS.getPrev()
                bfinally = new AST.Finally({start: start, body: PRS.block_(), endpos: PRS.getPrev()});
            };
                //});

            //if no bcatch and no bfinally
            if (!bcatch && !bfinally) {
                //PRS.croak("Missing catch/finally blocks");
                PRS.croak("Missing catch/finally blocks");
            };

            //return new AST.Try({
                //body     : body,
                //bcatch   : bcatch,
                //bfinally : bfinally
            return new AST.Try({body: body, bcatch: bcatch, bfinally: bfinally});
        };
            //});



        //method vardefs(no_in, in_const) 
        PRS.vardefs = function(no_in, in_const){
            //var a = [];
            var a = [];
            //do
            while(true){
                //var start = PRS.token;
                var start = PRS.token;

                //var name = PRS.as_symbol( in_const? AST.SymbolConst : AST.SymbolVar);
                var name = PRS.as_symbol(in_const ? AST.SymbolConst : AST.SymbolVar);

                //var value = null
                var value = null;
                //if PRS.isToken("operator", "=")
                if (PRS.isToken("operator", "=")) {
                    //PRS.next()
                    PRS.next();
                    //value = PRS.expression(false, no_in)
                    value = PRS.expression(false, no_in);
                };

                //a.push(new AST.VarDef({
                    //start : start,
                    //name  : name,
                    //value : value,
                    //endpos: PRS.getPrev()
                a.push(new AST.VarDef({start: start, name: name, value: value, endpos: PRS.getPrev()}));
                //}));

                //if no PRS.isToken("punc", ","), break
                if (!PRS.isToken("punc", ",")) {break};
                //PRS.next()
                PRS.next();
            };// end loop
            //loop
            //return a;
            return a;
        };


        //method var_ (no_in)
        PRS.var_ = function(no_in){
            //return new AST.Var({
                //start       : PRS.getPrev(),
                //definitions : PRS.vardefs(no_in, false),
                //endpos      : PRS.getPrev()
            return new AST.Var({start: PRS.getPrev(), definitions: PRS.vardefs(no_in, false), endpos: PRS.getPrev()});
        };
            //});


        //method const_
        PRS.const_ = function(){
            //return new AST.Const({
                //start       : PRS.getPrev(),
                //definitions : PRS.vardefs(false, true),
                //endpos      : PRS.getPrev()
            return new AST.Const({start: PRS.getPrev(), definitions: PRS.vardefs(false, true), endpos: PRS.getPrev()});
        };
            //});


        //method new_ 
        PRS.new_ = function(){
            //var start = PRS.token;
            var start = PRS.token;
            //PRS.expect_token("operator", "new");
            PRS.expect_token("operator", "new");
            //var newexp = PRS.expr_atom(false), args;
            var newexp = PRS.expr_atom(false), args = undefined;
            //if PRS.isToken("punc", "(")
            if (PRS.isToken("punc", "(")) {
                //PRS.next();
                PRS.next();
                //args = PRS.expr_list(")");
                args = PRS.expr_list(")");
            }
            else {
            //else 
                //args = [];
                args = [];
            };

            //return PRS.subscripts(new AST.New({
                //start      : start,
                //expression : newexp,
                //args       : args,
                //endpos     : PRS.getPrev()
            return PRS.subscripts(new AST.New({start: start, expression: newexp, args: args, endpos: PRS.getPrev()}), true);
        };
            //}), true);


        //method as_atom_node() 
        PRS.as_atom_node = function(){
            //var tok = PRS.token, ret;
            var tok = PRS.token, ret = undefined;

            //case tok.type
            
              //when "name","keyword":
            if ((tok.type=="name")
               ||(tok.type=="keyword")
           ){
                //ret = PRS._make_symbol(AST.SymbolRef);
                ret = PRS._make_symbol(AST.SymbolRef);
            
            }
              //when "num":
            else if ((tok.type=="num")
           ){
                //ret = new AST.NumberLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = new AST.NumberLiteral({start: tok, endpos: tok, value: tok.value});
            
            }
              //when "string":
            else if ((tok.type=="string")
           ){
                //ret = new AST.StringLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = new AST.StringLiteral({start: tok, endpos: tok, value: tok.value});
            
            }
              //when "regexp":
            else if ((tok.type=="regexp")
           ){
                //ret = new AST.RegExpLiteral({ start: tok, endpos: tok, value: tok.value });
                ret = new AST.RegExpLiteral({start: tok, endpos: tok, value: tok.value});
            
            }
              //when "atom":
            else if ((tok.type=="atom")
           ){

                //case tok.value
                
                  //when "false":
                if ((tok.value=="false")
               ){
                    //ret = new AST.FalseAtom({ start: tok, endpos: tok });
                    ret = new AST.FalseAtom({start: tok, endpos: tok});
                
                }
                  //when "true":
                else if ((tok.value=="true")
               ){
                    //ret = new AST.TrueAtom({ start: tok, endpos: tok });
                    ret = new AST.TrueAtom({start: tok, endpos: tok});
                
                }
                  //when "null":
                else if ((tok.value=="null")
               ){
                    //ret = new AST.NullAtom({ start: tok, endpos: tok });
                    ret = new AST.NullAtom({start: tok, endpos: tok});
                
                };
            
            };

            //PRS.next();
            PRS.next();
            //return ret;
            return ret;
        };


        //method expr_atom(allow_calls) 
        PRS.expr_atom = function(allow_calls){
            //if PRS.isToken("operator", "new")
            if (PRS.isToken("operator", "new")) {
                //return PRS.new_();
                return PRS.new_();
            };

            //var start = PRS.token;
            var start = PRS.token;
            //if PRS.isToken("punc")
            if (PRS.isToken("punc")) {

                //case start.value
                
                  //when "(":
                if ((start.value=="(")
               ){
                    //PRS.next();
                    PRS.next();
                    //var ex= PRS.expression(true);
                    var ex = PRS.expression(true);
                    //ex.start = start;
                    ex.start = start;
                    //ex.endpos = PRS.token;
                    ex.endpos = PRS.token;
                    //PRS.expect(")");
                    PRS.expect(")");
                    //return PRS.subscripts(ex, allow_calls);
                    return PRS.subscripts(ex, allow_calls);
                
                }
                  //when "[":
                else if ((start.value=="[")
               ){
                    //return PRS.subscripts(PRS.array_(), allow_calls);
                    return PRS.subscripts(PRS.array_(), allow_calls);
                
                }
                  //when "{":
                else if ((start.value=="{")
               ){
                    //return PRS.subscripts(PRS.object_(), allow_calls);
                    return PRS.subscripts(PRS.object_(), allow_calls);
                
                };

                //PRS.unexpected();
                PRS.unexpected();
            };

            //if PRS.isToken("keyword", "function")
            if (PRS.isToken("keyword", "function")) {
                //PRS.next();
                PRS.next();
                //var func:AST.FunctionExpression = PRS.function_(AST.FunctionExpression);
                var func = PRS.function_(AST.FunctionExpression);
                //func.start = start;
                func.start = start;
                //func.endpos = PRS.getPrev();
                func.endpos = PRS.getPrev();
                //return PRS.subscripts(func, allow_calls);
                return PRS.subscripts(func, allow_calls);
            };

            //if "|#{PRS.token.type}|" in ATOMIC_START_TOKEN
            if (ATOMIC_START_TOKEN.indexOf("|" + PRS.token.type + "|")>=0) {
                //return PRS.subscripts(PRS.as_atom_node(), allow_calls);
                return PRS.subscripts(PRS.as_atom_node(), allow_calls);
            };

            //PRS.unexpected()
            PRS.unexpected();
        };



        //method expr_list(closing, allow_trailing_comma, allow_empty) 
        PRS.expr_list = function(closing, allow_trailing_comma, allow_empty){
            //var first = true, a = [];
            var first = true, a = [];

            //do while not PRS.isToken("punc", closing)
            while(!(PRS.isToken("punc", closing))){

                //if first 
                if (first) {
                    //first = false 
                    first = false;
                }
                else {
                //else 
                    //PRS.expect(",")
                    PRS.expect(",");
                };

                //if allow_trailing_comma and PRS.isToken("punc", closing), break
                if (allow_trailing_comma && PRS.isToken("punc", closing)) {break};

                //if PRS.isToken("punc", ",") and allow_empty
                if (PRS.isToken("punc", ",") && allow_empty) {
                    //a.push(new AST.Hole({ start: PRS.token, endpos: PRS.token }));
                    a.push(new AST.Hole({start: PRS.token, endpos: PRS.token}));
                }
                else {

                //else 
                    //a.push(PRS.expression(false))
                    a.push(PRS.expression(false));
                };
            };// end loop

            //loop        

            //PRS.next();
            PRS.next();
            //return a;
            return a;
        };


        //method array_
        PRS.array_ = function(){
            //return PRS.embed_tokens(PRS.array_parser)
            return PRS.embed_tokens(PRS.array_parser);
        };

        //method array_parser 
        PRS.array_parser = function(){
            //PRS.expect("[");
            PRS.expect("[");
            //return new AST.ArrayLiteral({
                //elements: PRS.expr_list("]", not PRS.options.strict, true)
            return new AST.ArrayLiteral({elements: PRS.expr_list("]", !(PRS.options.strict), true)});
        };
            //});


        //method object_ 
        PRS.object_ = function(){
            //return PRS.embed_tokens(PRS.object_parser)
            return PRS.embed_tokens(PRS.object_parser);
        };

        //method object_parser
        PRS.object_parser = function(){
            //PRS.expect("{");
            PRS.expect("{");
            //var first = true, a = [];
            var first = true, a = [];

            //do while not PRS.isToken("punc", "}")
            while(!(PRS.isToken("punc", "}"))){

                //if (first) 
                if ((first)) {
                    //first = false 
                    first = false;
                }
                else {
                //else 
                    //PRS.expect(",")
                    PRS.expect(",");
                };

                //if not PRS.options.strict and PRS.isToken("punc", "}")
                if (!(PRS.options.strict) && PRS.isToken("punc", "}")) {
                    // allow trailing comma
                    //break;
                    break;
                };

                //var start = PRS.token;
                var start = PRS.token;
                //var type = start.type;
                var type = start.type;
                //var name = PRS.as_property_name();
                var name = PRS.as_property_name();

                //if type is "name" and not PRS.isToken("punc", ":")
                if (type === "name" && !(PRS.isToken("punc", ":"))) {
                    //if name  is "get"
                    if (name === "get") {
                        //a.push(new AST.ObjectGetter({
                            //start : start,
                            //key   : PRS.as_atom_node(),
                            //value : PRS.function_(AST.Accessor),
                            //endpos: PRS.getPrev()
                        a.push(new AST.ObjectGetter({start: start, key: PRS.as_atom_node(), value: PRS.function_(AST.Accessor), endpos: PRS.getPrev()}));
                        //}));
                        //continue;
                        continue;
                    };

                    //if name is "set"
                    if (name === "set") {
                        //a.push(new AST.ObjectSetter({
                            //start : start,
                            //key   : PRS.as_atom_node(),
                            //value : PRS.function_(AST.Accessor),
                            //endpos: PRS.getPrev()
                        a.push(new AST.ObjectSetter({start: start, key: PRS.as_atom_node(), value: PRS.function_(AST.Accessor), endpos: PRS.getPrev()}));
                        //}));
                        //continue;
                        continue;
                    };
                };


                //PRS.expect(":");
                PRS.expect(":");
                //a.push(new AST.ObjectKeyVal({
                    //start : start,
                    //key   : name,
                    //value : PRS.expression(false),
                    //endpos: PRS.getPrev()
                a.push(new AST.ObjectKeyVal({start: start, key: name, value: PRS.expression(false), endpos: PRS.getPrev()}));
            };// end loop
                //}));

            //loop

            //PRS.next();
            PRS.next();
            //return new AST.ObjectLiteral({ props: a })
            return new AST.ObjectLiteral({props: a});
        };


        //method as_property_name() 
        PRS.as_property_name = function(){
            //var tmp = PRS.token;
            var tmp = PRS.token;
            //PRS.next();
            PRS.next();
            //case tmp.type
            
              //when 
            if ((tmp.type=="num")
               ||(tmp.type=="string")
               ||(tmp.type=="name")
               ||(tmp.type=="operator")
               ||(tmp.type=="keyword")
               ||(tmp.type=="atom")
           ){
                //"num",
                //"string"
                //"name"
                //"operator"
                //"keyword"
                //"atom":
                    //return tmp.value;
                    return tmp.value;
            
            }
            else {

              //else
                //PRS.unexpected();
                PRS.unexpected();
            };
        };



        //method as_name() 
        PRS.as_name = function(){
            //var tmp = PRS.token;
            var tmp = PRS.token;
            //PRS.next();
            PRS.next();
            //case tmp.type
            
              //when "name", "operator", "keyword", "atom":
            if ((tmp.type=="name")
               ||(tmp.type=="operator")
               ||(tmp.type=="keyword")
               ||(tmp.type=="atom")
           ){
                    //return tmp.value;
                    return tmp.value;
            
            }
            else {
              //else
                //PRS.unexpected()
                PRS.unexpected();
            };
        };

        //method _make_symbol(typeClass) 
        PRS._make_symbol = function(typeClass){
            //var name = PRS.token.value;
            var name = PRS.token.value;
            //typeClass = name  is  "this" ? AST.This : typeClass;
            typeClass = name === "this" ? AST.This : typeClass;
            //return new typeClass({
                //name  : name.toString(),
                //start : PRS.token,
                //endpos: PRS.token
            return new typeClass({name: name.toString(), start: PRS.token, endpos: PRS.token});
        };
            //});


        //method as_symbol(type, noerror) 
        PRS.as_symbol = function(type, noerror){
            //if not PRS.isToken("name")
            if (!(PRS.isToken("name"))) {
                //if not noerror, PRS.croak("Name expected");
                if (!(noerror)) {PRS.croak("Name expected")};
                //return null
                return null;
            };

            //var sym = PRS._make_symbol(type);
            var sym = PRS._make_symbol(type);
            //PRS.next();
            PRS.next();
            //return sym;
            return sym;
        };


        //method subscripts(expr:AST.Node, allow_calls) 
        PRS.subscripts = function(expr, allow_calls){
            //var start = expr.start;
            var start = expr.start;
            //if (PRS.isToken("punc", ".")) 
            if ((PRS.isToken("punc", "."))) {
                //PRS.next();
                PRS.next();
                //return PRS.subscripts(new AST.Dot({
                    //start      : start,
                    //expression : expr,
                    //prop       : PRS.as_name(),
                    //endpos     : PRS.getPrev()
                return PRS.subscripts(new AST.Dot({start: start, expression: expr, prop: PRS.as_name(), endpos: PRS.getPrev()}), allow_calls);
            };
                //}), allow_calls);

            //if (PRS.isToken("punc", "[")) 
            if ((PRS.isToken("punc", "["))) {
                //PRS.next();
                PRS.next();
                //var prop = PRS.expression(true);
                var prop = PRS.expression(true);
                //PRS.expect("]");
                PRS.expect("]");
                //return PRS.subscripts(new AST.Sub({
                    //start      : start,
                    //expression : expr,
                    //prop       : prop,
                    //endpos     : PRS.getPrev()
                return PRS.subscripts(new AST.Sub({start: start, expression: expr, prop: prop, endpos: PRS.getPrev()}), allow_calls);
            };
                //}), allow_calls);

            //if (allow_calls and PRS.isToken("punc", "(")) 
            if ((allow_calls && PRS.isToken("punc", "("))) {
                //PRS.next();
                PRS.next();
                //return PRS.subscripts(new AST.CallStatement({
                    //start      : start,
                    //expression : expr,
                    //args       : PRS.expr_list(")"),
                    //endpos     : PRS.getPrev()
                return PRS.subscripts(new AST.CallStatement({start: start, expression: expr, args: PRS.expr_list(")"), endpos: PRS.getPrev()}), true);
            };
                //}), true);

            //return expr
            return expr;
        };


        //method maybe_unary(allow_calls) 
        PRS.maybe_unary = function(allow_calls){
            //var start = PRS.token;
            var start = PRS.token;
            //if PRS.isToken("operator") and Utils.isPredicate(UNARY_PREFIX,start.value) 
            if (PRS.isToken("operator") && Utils.isPredicate(UNARY_PREFIX, start.value)) {
                //PRS.next();
                PRS.next();
                //PRS.handle_regexp();
                PRS.handle_regexp();
                //var ex:AST.Node = PRS.make_unary(AST.UnaryPrefix, start.value, PRS.maybe_unary(allow_calls));
                var ex = PRS.make_unary(AST.UnaryPrefix, start.value, PRS.maybe_unary(allow_calls));
                //ex.start = start;
                ex.start = start;
                //ex.endpos = PRS.getPrev();
                ex.endpos = PRS.getPrev();
                //return ex;
                return ex;
            };

            //var val:AST.Node = PRS.expr_atom(allow_calls);
            var val = PRS.expr_atom(allow_calls);

            //while PRS.isToken("operator") 
            while(PRS.isToken("operator") && Utils.isPredicate(UNARY_POSTFIX, PRS.token.value) && !(PRS.token.nlb)){
                    //and Utils.isPredicate(UNARY_POSTFIX,PRS.token.value) 
                    //and not PRS.token.nlb

                //val = PRS.make_unary(AST.UnaryPostfix, PRS.token.value, val);
                val = PRS.make_unary(AST.UnaryPostfix, PRS.token.value, val);
                //val.start = start;
                val.start = start;
                //val.endpos = PRS.token;
                val.endpos = PRS.token;
                //PRS.next();
                PRS.next();
            };// end loop

            //return val;
            return val;
        };


        //method make_unary(ctor, op, expr) 
        PRS.make_unary = function(ctor, op, expr){
            //if ((op  is  "++"  or  op  is  "--") and not PRS.is_assignable(expr))
            if (((op === "++" || op === "--") && !(PRS.is_assignable(expr)))) {
                //PRS.croak("Invalid use of #{op} operator");
                PRS.croak("Invalid use of " + op + " operator");
            };
            //return new ctor({ operator: op, expression: expr });
            return new ctor({operator: op, expression: expr});
        };


        //method expr_op(left:AST.Node, min_prec, no_in) 
        PRS.expr_op = function(left, min_prec, no_in){

            //var op = PRS.isToken("operator") ? PRS.token.value : null;
            var op = PRS.isToken("operator") ? PRS.token.value : null;
            //if (op  is  "in" and no_in), op = null;
            if ((op === "in" && no_in)) {op = null};
            //var prec = op isnt null ? PRECEDENCE.tryGetProperty(op) : null;
            var prec = op !== null ? PRECEDENCE.tryGetProperty(op) : null;

            //if (prec isnt null and prec > min_prec) 
            if ((prec !== null && prec > min_prec)) {

                //PRS.next();
                PRS.next();

                //var right:AST.Node = PRS.expr_op(PRS.maybe_unary(true), prec, no_in);
                var right = PRS.expr_op(PRS.maybe_unary(true), prec, no_in);
                //return PRS.expr_op(new AST.Binary({
                    //start    : left.start,
                    //left     : left,
                    //operator : op,
                    //right    : right,
                    //endpos   : right.endpos
                return PRS.expr_op(new AST.Binary({start: left.start, left: left, operator: op, right: right, endpos: right.endpos}), min_prec, no_in);
            };
                //}), min_prec, no_in);

            //return left;
            return left;
        };


        //method expr_ops(no_in) 
        PRS.expr_ops = function(no_in){
            //return PRS.expr_op(PRS.maybe_unary(true), 0, no_in);
            return PRS.expr_op(PRS.maybe_unary(true), 0, no_in);
        };


        //method maybe_conditional(no_in) 
        PRS.maybe_conditional = function(no_in){
            //var start = PRS.token;
            var start = PRS.token;
            //var expr = PRS.expr_ops(no_in);
            var expr = PRS.expr_ops(no_in);
            //if PRS.isToken("operator", "?")
            if (PRS.isToken("operator", "?")) {
                //PRS.next();
                PRS.next();
                //var yes = PRS.expression(false);
                var yes = PRS.expression(false);
                //PRS.expect(":");
                PRS.expect(":");
                //return new AST.Conditional({
                    //start       : start,
                    //condition   : expr,
                    //consequent  : yes,
                    //alternative : PRS.expression(false, no_in),
                    //endpos      : PRS.getPrev()
                return new AST.Conditional({start: start, condition: expr, consequent: yes, alternative: PRS.expression(false, no_in), endpos: PRS.getPrev()});
            };
                //});

            //return expr;
            return expr;
        };


        //method is_assignable(expr) 
        PRS.is_assignable = function(expr){
            //if no PRS.options.strict, return true;
            if (!PRS.options.strict) {return true};
            //if expr instanceof AST.This, return false;
            if (expr instanceof AST.This) {return false};
            //return (expr instanceof AST.PropAccess  or  expr instanceof AST.Symbol);
            return (expr instanceof AST.PropAccess || expr instanceof AST.Symbol);
        };


        //method maybe_assign(no_in) 
        PRS.maybe_assign = function(no_in){
            //var start = PRS.token;
            var start = PRS.token;
            //var left = PRS.maybe_conditional(no_in), val = PRS.token.value;
            var left = PRS.maybe_conditional(no_in), val = PRS.token.value;
            //if PRS.isToken("operator") and Utils.isPredicate(ASSIGNMENT,val)
            if (PRS.isToken("operator") && Utils.isPredicate(ASSIGNMENT, val)) {
                //if PRS.is_assignable(left)
                if (PRS.is_assignable(left)) {
                    //PRS.next();
                    PRS.next();
                    //return new AST.Assign({
                        //start    : start,
                        //left     : left,
                        //operator : val,
                        //right    : PRS.maybe_assign(no_in),
                        //endpos   : PRS.getPrev()
                    return new AST.Assign({start: start, left: left, operator: val, right: PRS.maybe_assign(no_in), endpos: PRS.getPrev()});
                };
                    //});

                //PRS.croak("Invalid assignment");
                PRS.croak("Invalid assignment");
            };

            //return left;
            return left;
        };


        //method expression(commas, no_in) returns AST.Seq
        PRS.expression = function(commas, no_in){
            //var start = PRS.token;
            var start = PRS.token;
            //var expr = PRS.maybe_assign(no_in);
            var expr = PRS.maybe_assign(no_in);
            //if commas and PRS.isToken("punc", ",")
            if (commas && PRS.isToken("punc", ",")) {
                //PRS.next();
                PRS.next();
                //return new AST.Seq({
                    //start  : start,
                    //car    : expr,
                    //cdr    : PRS.expression(true, no_in),
                    //endpos : PRS.peek()
                return new AST.Seq({start: start, car: expr, cdr: PRS.expression(true, no_in), endpos: PRS.peek()});
            };
                //});

            //return expr;
            return expr;
        };


        //method in_loop_call(cont_fn:Function) 
        PRS.in_loop_call = function(cont_fn){
            //++PRS.in_loop;
            ++PRS.in_loop;
            //var ret = cont_fn.call(undefined);
            var ret = cont_fn.call(undefined);
            //--PRS.in_loop;
            --PRS.in_loop;
            //return ret;
            return ret;
        };
    
    // export
    module.exports.PRS = PRS;





