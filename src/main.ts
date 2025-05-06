type One = string;
type Two = string | number;
type Three = "hello";

//
// convert to more or less specific type
//

// 'as' keyword
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// angled brackets '<>' * This SyntaxDoes not work in React *
let d = <One>"world";
let e = <string | number>"world";

// examples
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! Because TS sees no problem - but a string is returned not a number
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// TS still check assertions when it can

/* 10 as string; */ // throws error
10 as unknown as string;

//
// The DOM
//

const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
//bracket syntax
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
