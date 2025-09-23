const keys = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");
// const operator = document.querySelectorAll(".operator");
let screenNum = [];
const operator = ["+", "-", "*", "/"];


keys.forEach(e => {
    e.onclick = () => {
        if(e.dataset.key != "ce" && e.dataset.key != "=") {
            let lastElement = screenNum.length;
            let value = e.dataset.key;

             if(screenNum.length === 0 && operator.includes(value)) {
                return;
            }
            
            if(operator.includes(value)) {
                if(operator.includes(screenNum[lastElement - 1])) { //checks if
                    screenNum[lastElement - 1] = value; //overtides the operator
                }
                else {
                    screenNum.push(value);
                }
            }
            else {
                screenNum.push(value);
            }
            // console.log(screenNum.length);
            // console.log(operator.includes(value));
            screen.textContent = screenNum.join("");
        }
    }
});
document.querySelector(".equal").onclick = () => {
    let expression = screenNum.join(""); // convert array to string
    let result = eval(expression);       // evaluate the string
    screen.textContent = result;         // show result on screen
    screenNum = [result.toString()];     // store result for next operations
}

