const people = ["Greg", "Mary", "Devon", "James"];

//PART 1
//1-Write code to remove “Greg” from the people array.
for (let i = 0; i < people.length; i++) {
    if (people[i] == "Greg") {
        people.splice(i, 1);
        break;
    }
}

//2-Write code to replace “James” to “Jason”
for (let i = 0; i < people.length; i++) {
    if (people[i] == "James") {
        people[i] = "Jason";
        break;
    }
}

console.log(people);

//3-Write code to add your name to the end of the people array.
people.push("Etoumi");

//4-Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary"));

//5-Write code to make a copy of the people array using the slice method
//The copy should NOT include “Mary” or your name.
let peopleCopy = people.slice(1, people.length - 1);

//6-Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
//Explication: Le résultat est -1 car Foo n'existe pas dans le tableau

//7-Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
//Explication: L'index du dernier élément du tableau correspond à la taille du tableau -1

//PART 2
//1-Using a loop, iterate through the people array and console.log each person.
for (const peopleItem of people) {
    console.log(peopleItem);
}

//2-Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (const peopleItem of people) {
    console.log(peopleItem);
    if (peopleItem == "Jason") break
}