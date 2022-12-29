//1-Create an array called colors where the value is a list of your five favorite colors.
let colors = ["Orange", "Bleu", "Violet", "Rouge", "Jaune", "Vert"]

//2-Loop through the array and as you loop console.log a string like so: 
//“My #1 choice is blue”, “My #2 choice is red” ect… .
for (const key in colors) {
    console.log("My choice #" + (parseInt(key) + 1) + " is " + colors[key]);
}

//3-Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus
let suffix = ["st", "nd", "rd", "th"];

for (let i = 0; i < colors.length; i++) {
    if (i < suffix.length) {
        console.log("My " + (parseInt(i) + 1) + suffix[i] + " choice is " + colors[i]);
    } else {
        console.log("My " + (parseInt(i) + 1) + suffix[suffix.length - 1] + " choice is " + colors[i]);
    }
}