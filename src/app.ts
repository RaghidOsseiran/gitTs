const a: string = "Hello world"
const n: number = 3
const b: boolean = true
const d: null = null
const arr: string[] = ['aze', 'aze', 'aze']
const user: {firstname: string, lastname?: string} = {firstname: "john", lastname: "Doe"}
const userInf : {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"}
const date: Date = new Date();
const cb: (e: MouseEvent) => void  = (e: MouseEvent): void => {
        // syntax pour une fonction qui prend en parametre un MouseEvent et return void
}


function printId(id: number): void {
    console.log(id.toString());
}

/*

const compteur = document.querySelector('#compteur')
let i = 0;

const increment = (e) => {
    i++
    compteur.querySelector('span').innerText = i.toString()
}


compteur.addEventListener('click', increment) */

