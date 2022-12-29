//1-Create an object called family with a few key value pairs.
let family = {
    pere: "Jean",
    mere: "Jeanne",
    enfant: "Ange"
};

//2-Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key);
}

//3-Using a for in loop, console.log the values of the object.
for (const key in family) {
    console.log(family[key]);
}