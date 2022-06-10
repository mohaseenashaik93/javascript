var age = 85;

const doesDrive = false;

if(age == 18){
    console.log("age is 18");
}
if (age == 25) {
    console.log("age is 25");
} 
else {
    console.log("age is not 18");
}

if (typeof i !== undefined ) {
    console.log("undefiend")
}
else {
    console.log("defiend")
}

if (doesDrive || age>18) {
    console.log("you can");
}
else {
    console.log("you can't");
}

console.log(age===18? "yes" : "no");

switch (age) {
    case 18:
        console.log("your age is 18");
        break;
    case 45:
        console.log("your age is 45");
        break;
    case 25:
        console.log("your age is 25");
        break;
    default:
        console.log("your unknown age");
        break;
}