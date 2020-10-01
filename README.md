Uglify2 parser translated to LiteScript 
==========

TL;DR: *By "translating" to LiteScript and then compiling to C, 
UglifyJS parser runs 2.5 times faster.*

### Background
I'm working on [LiteScript](https://github.com/luciotato/LiteScript), 
a literate, compile-to-js, ***and compile-to-c*** language, 
based on Javascript design (the good parts). 

## Proof of concept

This is a proof of concept, to measure performance increases
from:

1) original pure js hand-optimized code 

2) the same code "translated" to LiteScript and compiled-to-js 

3) the previous LiteScript code compiled-to-c 

## Test contenders

### Contender #1: Original Uglify2 parser.js

The actual Uglify2.JS parser code, from: https://github.com/mishoo/UglifyJS2

### Contender #2: LiteScript code, compiled-to-js

A "translation" from the original Uglify2.JS "parser.js" to LiteScript. 
Since LiteScript is heavily based in javascript
most of the translation is trivial.

### Contender #3: LiteScript code, compiled-to-c

A further altered version of the previous LiteScript code, 
to adhere to stricter rules allowing compilation 
to a fast c standalone executable.

## Test Results

Input: all parsers are fed a .js file composed of: `jquery-1.11.1.js + Underscore.js 1.6.0 + AngularJS`. File size is 366 KiB

source code               | target/generated   | parse time | relative to base
------------------        | ------------------ | ------:| -----------------
Original Uglify2 parse.js | js                 | 430 ms | base
LiteScript code           | compiled-to-js     | 450 ms | +20 ms, 5% slower
LiteScript code           | compiled-to-c      | 170 ms | 2.5 times faster !!

#### Conclusion
>UglifyJS parser "translated" to LiteScript and compiled-to-c, runs 2.5 times faster

-------------------

## "Translating" to LiteScript

Most parts of a "translation" from js code to LiteScript code are trivial.

Here's a side-by-side example of the original UglifyJS parser.js code (left) 
and the equivalent "translated" LiteScript code (right)

![Screenshot](/screenshot/snapshot1.png?raw=true "left: original js, right: translated ls")

## Contributors needed

Can anyone estimate the time spent worldwide running Uglify? 

Making Uglify run faster will save a lot of people a lot of time.
If you're interested to take this project further, I'll transfer this repo.

I'm interested in advancing LiteScript, so I'll give full support.

To produce a fast compiled-to-c version of Uglify seems the perfect candidate 
project at this point to advance LiteScript because the -actually limited-
support of LiteC-core is just what Uglify requires.

LiteC-core is the C hand-coded core support of LiteScript compiled-to-c programs,
and it mimics basic JavaScript core support: Object, Class, Strings, Map, etc.
and also a few functions from basic node.js support modules as "fs" & "path".

## To reproduce this results

get this repo, execute:

    . runtest

To alter, compile and hack on this, you'll need to get also: 
- LiteScript (https://github.com/luciotato/LiteScript)
- node
- SublimeText (to use LiteScript syntax coloring)
- NetBeans with C/C++ to compile generated-c

-------

read next: [Self-Compiling LiteScript, 7x performance gain] (self-compiling-LiteScript.md)

