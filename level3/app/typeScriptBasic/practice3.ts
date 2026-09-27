
//Generics
function hello<T>(a:T, b:T){
}

hello(43,11)


function hello2<T>(a:T, b:T){
}

hello2("Asad","Nawaz")

interface user<T>{
    Lname: string,
    age: T
}

let user1:user<number>={
    Lname: 'asad',
    age:24
}

function identity<T>(value:T):T {
return value
}

const n = identity('asadNawaz');
const m = identity(24);
const o = identity(true)

//generic interface
interface box<T> {value1:T}
const strBox:box<string> = {value1:'asadnawaz'}
const numBox:box<number> = {value1:24}

//Global declaring
declare global {
    type Asad = {
        name: string
    }
}
export {}

declare global{
    type age = number | string
}
export {}
