

/*
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

const compteur = document.querySelector('#compteur') as HTMLButtonElement
                // or <HTMLButtonElement>document.querySelector('#compteur')

function printId(id: number | string): void {
    console.log(id.toString());
}


*/


const compteur = document.querySelector('#compteur') as HTMLButtonElement
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++
    const span = compteur?.querySelector('span')
    if (span){
        span.innerText = i.toString()
    }
}


compteur?.addEventListener('click', increment)


// possibiliter que compteur soit null, solution 1:

// if (compteur){
//     compteur.addEventListener('click', increment)
// }

// solution 2:
//compteur?.addEventListener('click', increment)

 

