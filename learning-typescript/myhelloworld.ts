console.log("Hello World");


let found: boolean = true;

let lastname: string = "Jane";

//template Strings
console.log(`Hi ${lastname}`);


//loop

for(let i = 1; i <=5; i++){

    console.log(i);
}

let team: string[] = ["Miami", "ATL", "Port"];
//Arrays in typescript are always growable/ dynamic
team.push("Argentina");
team.push("USA");

for(let x of team){

    console.log(x);
}
