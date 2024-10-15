const number = 10;
const number2 = 11;

const message = number % 2 === 0 ? 'Numarul este par' : 'Numarul nu este par'

let message2 = '';

if(number2 % 2 === 0) {
  message2 = 'Numarul este par';
} else {
  message2 = 'Numarul nu este par';
}

console.log(message);
console.log(message2);