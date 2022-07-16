
const outPut = document.getElementById('output');
const buttonEl = document.querySelector('.button')

let passLength = document.getElementById('length');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const upperCaseLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const allSymbols = ['@', '#', '$', '%', '^', '&', '*', '!'];

//Create LowerCaseletters Using for loop;
const lowerCaseletters = [];

for (let i = 0; i < upperCaseLetters.length; i++) {

    lowerCaseletters[i] = upperCaseLetters[i].toLocaleLowerCase();
}


// Create function to generate password

buttonEl.addEventListener('click', function generatePassword() {

    let len = passLength.value;

    let passwordResult = '';

    for (let i = passwordResult.length; i < len; i++) {

        //Accept char from return type function and store it to var X 

        let x = generate();

        passwordResult += x;

    }

    outPut.value = passwordResult;
})


function generate() {

    // Initialize an empty array and store one value of each element if is checked

    let temp = [];

    if (upperCase.checked) {
        temp.push(uppercaseF());
    }

    if (lowerCase.checked) {
        temp.push(lowercaseF());
    }

    if (numbers.checked) {
        temp.push(numbersF());
    }

    if (symbols.checked) {
        temp.push(symbolsF());
    }

    //Return empty string if the length of temp == 0

    if (temp.length == 0) return "";

    //Select one char from temp array and return it when function is invoked

    return temp[Math.floor(Math.random() * temp.length)];

}


function uppercaseF() {
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function lowercaseF() {
    return lowerCaseletters[Math.floor(Math.random() * lowerCaseletters.length)];
}

function numbersF() {
    return allNumbers[Math.floor(Math.random() * allNumbers.length)];
}

function symbolsF() {
    return allSymbols[Math.floor(Math.random() * allSymbols.length)];

}

//Create function to copy password

function copyPaasword() {

    const textarea = document.createElement("textarea");
    const password = outPut.value;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");

    outPut.value = "";
}