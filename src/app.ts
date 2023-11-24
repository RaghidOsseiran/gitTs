

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


const compteur = document.querySelector('#compteur') as HTMLInputElement // ou ! qui est du narrowing forcer
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

const date: Date = new Date();


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

 

