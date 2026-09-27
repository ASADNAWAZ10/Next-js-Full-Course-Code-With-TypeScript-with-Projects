function Asad(a: number, b: string) {}
Asad(24, "asadnawaz");

let z: string; //type annotation
z = "MENGAL";

let y = 24; //type inference

type ABC = number | string;
let p: ABC;
p = "asad";
p = 24;

type state = "SUCESS" | "FAIL" | "ERROR";
let j: state;
j = "ERROR";
j = "FAIL";
j = "SUCESS";

type user = {
  name: string;
  age: number;
  image?: string
};
let s: user;

s = {
  name: "asad",
  age: 24,
};
 
interface m {
  Fname: string
}

interface n extends m{
 Lname: string
}

let myObj:n={
Fname:'ASAD',
Lname: 'NAWAZ'
}

//UNION
type Responses = "ok" | "loading" | "Fail"
let res:Responses = "ok";

//INTEREACTION
type one = {name:string};
type two = {phone: number}

type info = one & two;
let user:info = {name:'asad', phone:93333334}

let username:Asad = {
  name: "Asad" //from practice3.tsx file.
}

let h:age = 23 //from practice3.tsx file we declare age as a global.
let o:age = 'Asad'