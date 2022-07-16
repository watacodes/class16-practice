// JavaScript Playground

// Test out Number() command

// const input = prompt('Enter a number: ');
// const inputToNumber = Number(input);

// const input2 = prompt('Enter a string: ');
// const stringToNumber = Number(input2);

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

// Chessboard

/* 
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, 
define a binding size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.

1. The odd rows should start with a blankspace first.

2. The even rows should start with a hash symbol.



*/

let space = "";
for (let row = 1; row < 9; row++) {
    for (let col = 1; col < 9; col++) {
        if ((row + col) % 2 == 0) {
            space += " ";
        } else {
            space += "#";
        }
    }
    space += "\n";
}

console.log(space);

// Find even number

const isEven = (num) => {
    if (num < 0) {
        return false;
    } else if (num === 0 || num % 2 === 0) {
        return true;
    } else {
         return false; 
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Find minimum number without using Math.min() method

const min = (a, b) => a > b ? b : a;

console.log(min(9, 2));
console.log(min('Zebra', 'monkey'));

console.log('Z'.charCodeAt(0));
console.log('monkey'.charCodeAt(0));

// Count how many "B" letters in a string

const countBs = (str) => {
    let b = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            b++;
        }
    }
    return b;
};

console.log(countBs('BeeBeeb'));
console.log(countBs('beepBo'));

// Count specific letters given by user as a second param 

const countChars = (str, letter) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
};

console.log(countChars('Riceball Kingdom', 'l'));
console.log(countChars('I am AaaAAA', "A"));

// checkboard

let gridSize = 8;
let chess = "";
function chessBoard() {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if ((row + col) % 2 === 0) {
        chess += " ";
      } else {
        chess += "#";
      }
    }
    chess += "\n";
  }
  console.log(chess);
}

chessBoard();

// triangle

    // line 1 => one hash sign
    // linebreak
    // line 2 => two hash signs
    // linebreak
    // continue till 7
for (let triangle = "#"; triangle.length < 8; triangle += "#") {
    console.log(triangle);
}
