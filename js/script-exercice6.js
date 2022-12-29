const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

//1-Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentense = "";
for (const key in details) {
    sentense += " " + key + " " + details[key];
}
console.log(sentense);