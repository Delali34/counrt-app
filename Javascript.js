// document.getElementById("dream-el").innerText = 5;
// let myAge = 20;
// let dogAge = 7;

// count = myAge * dogAge;
// console.log(count);
// let bonusPoints = 50;
// bonusPoints = bonusPoints * 2;
// console.log(bonusPoints);
// bonusPoints = bonusPoints / 4;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// let lap1 = 0;

// function increment() {
//   lap1 = lap1 + 1;
//   console.log(lap1);
// }
// increment();
// increment();
// increment();
let countEl = document.getElementById("dream-el");
let saveEl = document.getElementById("entry-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  saveEl.textContent += " " + count + " - ";
  count = 0;
  countEl.textContent = count;
}

// let message = "you have three notifications";
// console.log(message);

// let welcomeEl = document.getElementById("welcome-el");
// let names = "Dela";
// let greeting = "Hi, my name is";
// let myGreetings = greeting + " " + names + "❤";
// welcomeEl.innerText = myGreetings;
