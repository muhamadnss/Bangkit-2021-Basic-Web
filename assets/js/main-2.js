console.log("Try to using conditional operator")
let languange = "Indonesia";
let statement = "Good Morning;"

if (languange == "Indonesia") {
    statement = "Selamat Pagi";
}
console.log("\n" + statement + " because languange parameter is " + languange);

languange = "English";

if (languange == "English") {
    statement = "Good Morning";
}
console.log(statement + " because languange parameter is " + languange);

console.log("\nTry to using Loop");

console.log("\nThis is using ES5")
const myArray = ["Harry", "Ron", "Hermione", "Tom"];
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("\nThis is using ES6")
let newMyArray = ["Ahmad", "Siti", "Ani", "Indah"];
for(const eachArray of newMyArray) {
    console.log(eachArray);
}

console.log("\nTry to using Function")
function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Harry", "Bahasa");

console.log("\nDefine function to returning value");
function hitung (a, b) {
    return a + b;
}

let hasil = hitung(4,5);
console.log("Hasil hitung adalah :",hasil);