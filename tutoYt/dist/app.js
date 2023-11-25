"use strict";
const userr = {
    fistname: "john",
    lastname: "doe",
    age: 32
};
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
// example de generics, un des outils les plus puissant en typescript
function identity(arg) {
    return arg;
}
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const bb = first(["aze", "cze", "bze"]);
// Array aussi est un type generique 
const cc = ["aze", "wze", 3];
const a = "Hello world";
const n = 3;
const b = true;
const d = null;
const d8 = 'string';
const arr = ['aze', 'aze', 'aze'];
const user = { firstname: "john", lastname: "Doe" };
const userInf = { firstname: "John", lastname: "Doe" };
const date = new Date(); // On cree un object
const cb = (e) => {
    // syntax pour une fonction qui prend en parametre un MouseEvent et return void
};
// const compteur = document.querySelector('#compteur') as HTMLButtonElement
//                 // or <HTMLButtonElement>document.querySelector('#compteur')
// function printId(id: number | string): void {
//     console.log(id.toString());
// }
// const compteur = document.querySelector('#compteur') as HTMLButtonElement // ou ! qui est du narrowing forcer
// avec un generique :
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) { // narrowing, vue qu'on on entre dans cette condition donc forcement on elimine les possibilites que span soit null ou undefined
        span.innerText = i.toString();
    }
};
compteur?.addEventListener('click', increment);
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
// const date: Date = new Date();
function example(a) {
    if (a instanceof Date) {
        a;
    }
}
function example2(a) {
    if (Array.isArray(a)) {
        return a[0];
    }
    return;
}
function example3(a) {
    if ("value" in a) {
        a; // detect que c'est du type HTMLInputElement car c'est le seul des deux type qui a une cle value
    }
}
function isDate(a) {
    return a instanceof Date;
}
function example4(a) {
    if (isDate(a)) {
        a;
    }
}
// des typeof, des instaceof, egalite, Array.isArray ...
// possibiliter que compteur soit null, solution 1:
// if (compteur){
//     compteur.addEventListener('click', increment)
// }
// solution 2:
//compteur?.addEventListener('click', increment)
