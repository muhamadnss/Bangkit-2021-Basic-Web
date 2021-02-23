
// Using var as a variable 
// a = 30;
// b = 20;

// var a; var b;

// Using let as a variable to avoid hoisting occured
let a = 30;
let b = 20;

console.log("Hasilnya adalah :", a + b);
console.log("Hasilnya adalah :", a - b);
console.log("Hasilnya adalah :", b - a);
console.log("Hasilnya adalah :",a * b);
console.log("Hasilnya adalah :", b / a);

let c = 30;

console.log(c++);
// output 30, but actually number is 31 in background

// If try to compile code below, value could be raising 1 point and will be extend by 1 point again (32)
console.log(++c);

let word = "Hello World";
console.log(word);
console.log("Ini merupakan tipe data", typeof(word));

let intro1 = "Hello";
let intro2 = "saya adalah Ahmad"
// if try to concatenate using "," will be output spacing but if try to concatenate using + will not be output spacing between character
console.log(intro1 + ",", intro2)

let d = true;
let e = false;

console.log(typeof(d));
console.log(typeof(e));

console.log("\nTry to using Array")
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

console.log("\nTry to using Object")
let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};
console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");
console.log("Kesukaan saya adalah : " + user.stuff[0])

console.log("\nTry to implement assignment operation ")
let f = 12;
let g = 2;
console.log(f += g);
console.log(f -= g);
console.log(f *= g);
console.log(f /= g);
console.log(f %= g);

console.log("\nTry to using comparative operator")
let h = 10;
let i = 12;

/* AND operator */
console.log(h < 15 && i > 10); // (true && true) -> true
console.log(h > 15 && i > 10); // (false && true) -> false

/* OR operator */
console.log(h < 15 || i > 10); // (true || true) -> true
console.log(h > 15 || i > 10); // (false || true) -> true

/* NOT operator */
console.log(!(h < 15)); // !(true) -> false
console.log(!(h < 15 && i > 10)); // !(true && true) -> !(true) -> false