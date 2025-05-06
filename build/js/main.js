"use strict";
//
// convert to more or less specific type
//
// 'as' keyword
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// angled brackets '<>' * This SyntaxDoes not work in React *
let d = "world";
let e = "world";
// examples
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! Because TS sees no problem - but a string is returned not a number
let nextVal = addOrConcat(2, 2, "concat");
// TS still check assertions when it can
/* 10 as string; */ // throws error
10;
//
// The DOM
//
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
//bracket syntax
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
