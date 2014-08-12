Uglify2 parser translated to LiteScript 
==========

TL;DR; *By compiling LiteScript to C, UglifyJS parser runs 2.4 times faster.*

###Background
I'm working on [LiteScript](https://github.com/luciotato/LiteScript), 
a compile-to-js, ***and compile-to-c*** language, based on Javascript design (the good parts). 

##Proof of concept

This is a proof of concept, to measure performance increases
from pure js hand-optimized code vs the same code "translated" to LiteScript and then compiled-to-js 
and LiteScript compiled-to-c 

##Test suites

all parsers are feeded a .js file composed of the concatenation of: jquery + undescore + AngularJS

file size is 365 Kib

###Original Uglify2

The actual Uglify2.JS parser code, from: https://github.com/mishoo/UglifyJS2

###LS code, compile-to-js

A "translation" from the original Uglify2.JS code to LiteScript. 
Since LiteScript is heavily based in javascript
most of the "translation" is trivial.

###LS code, compile-to-c

A further altered version of the previous LiteScript code, 
to adhere to stricter rules allowing compilation to c

##Results:

parsing of: `jquery-1.11.1.js + Underscore.js 1.6.0 + AngularJS` 366 KiB

code | time | difference
--|--
Original Uglify2, parse.js code | 425 ms | base
--|--
LS code, compile-to-js | 455 ms  | +30 ms, 7% slower
--|--
LS code, compile-to-c - release | 180 ms | 2.4 times faster

## "Translating" to LiteScript

a side-by-side example of original js-code and the equivalent "translated" LiteScript code

Most parts of a "translation" from js code to LiteScript code are trivial.

![Screenshot](/screenshot/snapshot1.png?raw=true "left: original js, right: translated ls")

## Contributors needed

Can anyone estimate time spent worldwide running Uglify? 

Making Uglify run faster will save a lot of people a lot of time.
If anybody is interested to take this proyect further, I'll transfer this repo.

I'm interested in advancing LiteScript, so I'll give full support.

To produce a fast compiled-to-c version of Uglify seems the perfect candidate 
project at this point to advance LiteScript because the -actually limited-
support of LiteC-core is just what Uglify requires.

LiteC-core is the C hand-coded core support of LiteScript compiled-to-c programs,
and it mimics basic JavaScript core support: Object, Class, Strings, Map, etc.
and also basic node.js support modules as "fs" & "path".

## To reproduce this results

get this repo, execute:

    . runtest

To alter, compile and hack on this, you'll need to get also: 
- LiteScript(https://github.com/luciotato/LiteScript)
- node
- SublimeText (to use LiteScript syntax coloring)
- NetBeans with C/C++ to compile generated-c
