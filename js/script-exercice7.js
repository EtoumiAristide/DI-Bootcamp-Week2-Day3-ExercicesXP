const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//1-A group of friends have decided to start a secret society. 
//The society’s name will be the first letter of each of their names sorted in alphabetical order.
let societyNameFirstLetter = "";
for (const name of names) {
    societyNameFirstLetter += name.charAt(0);
}
let societyNameSplit = societyNameFirstLetter.trim().split("").sort();
let societyName = "";
for (const letter of societyNameSplit) {
    societyName += letter;
}
//2-Console.log the name of their secret society. The output should be “ABJKPS”
console.log(societyName);