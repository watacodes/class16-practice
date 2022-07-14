// JavaScript Playground

// Test out Number() command

const input = prompt('Enter a number: ');
const inputToNumber = Number(input);

const input2 = prompt('Enter a string: ');
const stringToNumber = Number(input2);

// Testing out input buttons and switch statement

const buttons = document.querySelectorAll('.buttons');
const placeholder = document.getElementById('placeholder');

const trigger = (e) => {
    let getValue = e.target.value;
    let compPlay = 'Scissors';

    switch(getValue) {
        case "Rock":
            placeholder.innerText = `You chose ${getValue}! CPU selected ${compPlay}, You won!`;
            break;
        case "Paper":
            placeholder.innerText = `You chose ${getValue}! CPU selected ${compPlay}, You lost!`;
            break;
        case "Scissors":
            placeholder.innerText = `You chose ${getValue}! CPU selected ${compPlay}, Play again!`;
            break;
        default:
            console.log('User has selected none');
    }
};

Array.from(buttons).forEach(btn => btn.addEventListener('click', trigger));

