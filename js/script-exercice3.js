//1-Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
//2-While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?
let userInput;
do {
    userInput = prompt("Entrez un nombre >=10 svp!");
    
} while (isNaN(userInput) || parseInt(userInput) < 10 || parseFloat(userInput) < 10);