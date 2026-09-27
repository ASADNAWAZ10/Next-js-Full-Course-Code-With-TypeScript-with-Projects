let a = "Asad";
a = "Nawaz";
// a = 23 //will not assign the number here
let b: number;
b = 24; //here it will accept number type, not string type OR other types.

let c: string;
c = "Mengal";

let isOnline: boolean;
isOnline = false;

let arr: number[];
arr = [32, 43, 56, 78];

let str: string[];
str = ["one", "two", "three"];

let mix: [number, string, boolean];
mix = [23, "asad", true];
console.log(mix);

enum role {
  "user",
  "admin",
}

const myRole: role = role.admin;
console.log(myRole);

let f: any;
f = 23; //number
f = "Asad"; //string
f = false; //boolean

let g: Array<number>;
g = [1, 2, 3, 4, 5, 6, 7];
