const input = document.getElementById('one');
const inputTwo = document.getElementById('two');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonDele = document.getElementById('dele');
const buttonMnoj = document.getElementById('mnoj');
const resultDiv = document.getElementById('result');
let result;
let operation;

resultDiv.style.display = "none";

function calc() {
    let num1 = parseInt(input.value);
    let num2 = parseInt(inputTwo.value);

    switch (operation) {
        case "+": {
            result = num1 + num2;
            break;
        }
        case "-": {
            result = num1 - num2;
            break;
        }
        case "/": {
            result = num1 / num2;
            break;
        }
        case "*": {
            result = num1 * num2;
            break;
        }
    }
    resultDiv.style.display = "block";
    resultDiv.textContent = `${result}`;
}


buttonPlus.addEventListener("mousedown", () => {
    operation = "+";

})
buttonMinus.addEventListener("mousedown", () => {
    operation = "-";
})
buttonDele.addEventListener("mousedown", () => {
    operation = "/";
})
buttonMnoj.addEventListener("mousedown", () => {
    operation = "*";
})
