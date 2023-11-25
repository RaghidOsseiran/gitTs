
// utiliser que par typescript pour comprendre notre code, mais pas exporter sur javascript
type User = {firstname: string, lastname: string}
type DateString = string
type Id = string | number
type identity<ArgType> = (arg: ArgType) => ArgType
type P = keyof User
type Username = User['firstname'] // prend le meme type que celui de la valeur qui a pour cle firstname

const userr = {
    fistname: "john",
    lastname: "doe",
    age: 32
}

type Userr = typeof userr

function consoleSize<Type extends {length: number}>(arg: Type): Type{
    console.log(arg.length)
    return arg
}

const abb = consoleSize(['3', 2])


// example de generics, un des outils les plus puissant en typescript
function identity<ArgType>(arg: ArgType): ArgType{
    return arg;
}

const aa = identity<number>(3)


function first<Type>(arg: Type[]): Type {
    return arg[0];
}

const bb = first(["aze", "cze", "bze"]);

// Array aussi est un type generique 
const cc: Array<string | number> = ["aze", "wze", 3]


const a: string = "Hello world"
const n: number = 3
const b: boolean = true
const d: null = null
const d8: DateString = 'string'
const arr: string[] = ['aze', 'aze', 'aze']
const user: User = {firstname: "john", lastname: "Doe"}
const userInf : {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"}
const date: Date = new Date(); // On cree un object
const cb: (e: MouseEvent) => void  = (e: MouseEvent): void => {
        // syntax pour une fonction qui prend en parametre un MouseEvent et return void
}

// const compteur = document.querySelector('#compteur') as HTMLButtonElement
//                 // or <HTMLButtonElement>document.querySelector('#compteur')

// function printId(id: number | string): void {
//     console.log(id.toString());
// }





// const compteur = document.querySelector('#compteur') as HTMLButtonElement // ou ! qui est du narrowing forcer
// avec un generique :
const compteur = document.querySelector<HTMLButtonElement>('#compteur')
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++
    const span = compteur?.querySelector('span')
    if (span){ // narrowing, vue qu'on on entre dans cette condition donc forcement on elimine les possibilites que span soit null ou undefined
        span.innerText = i.toString()
    }
}



compteur?.addEventListener('click', increment)



function printId (id: string | number){
    if (typeof id === "number"){
        console.log((id*3).toString())
    } else {
        console.log(id.toUpperCase())
    }
}

// const date: Date = new Date();


function example (a: string | Date){
    if(a instanceof Date){
        a
    }
}

function example2(a: string | string[]){
    if (Array.isArray(a)){
        return a[0]
    }
    return
}

function example3(a: MouseEvent | HTMLInputElement){
    if("value" in a){
        a // detect que c'est du type HTMLInputElement car c'est le seul des deux type qui a une cle value
    }

}

function isDate(a: any): a is Date {
    return a instanceof Date
}

function example4(a: Date | HTMLInputElement){
    if (isDate(a)){
        a
    }
}


// des typeof, des instaceof, egalite, Array.isArray ...





// possibiliter que compteur soit null, solution 1:

// if (compteur){
//     compteur.addEventListener('click', increment)
// }

// solution 2:
//compteur?.addEventListener('click', increment)

 

