"use strict";
/*
const a: string = "Hello world"
const n: number = 3
const b: boolean = true
const d: null = null
const arr: string[] = ['aze', 'aze', 'aze']
const user: {firstname: string, lastname?: string} = {firstname: "john", lastname: "Doe"}
const userInf : {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"}
const date: Date = new Date(); // On cree un object
const cb: (e: MouseEvent) => void  = (e: MouseEvent): void => {
        // syntax pour une fonction qui prend en parametre un MouseEvent et return void
}

const compteur = document.querySelector('#compteur') as HTMLButtonElement
                // or <HTMLButtonElement>document.querySelector('#compteur')

function printId(id: number | string): void {
    console.log(id.toString());
}


*/
var compteur = document.querySelector('#compteur'); // ou ! qui est du narrowing forcer
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) { // narrowing, vue qu'on on entre dans cette condition donc forcement on elimine les possibilites que span soit null ou undefined
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
var date = new Date();
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
