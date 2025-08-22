const buttonsText = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
]

const rightIcons = ["÷", "x", "-", "+", "="]
const topIcons = ["AC", "+/-", "%"]

const buttons = document.querySelector(".buttons")
const display = document.querySelector(".display")
let justEvaluated = true;


let A = 0;
let operator = null;
let B = null;


buttonsText.forEach(button => {
    const newButton = document.createElement("button")
    newButton.innerText = `${button}`;

    if(button == "0") {
        newButton.style.width = "175px"
        newButton.style.gridColumn = "span 2"
    }

    if(rightIcons.includes(button)) {
        newButton.style.backgroundColor = "#FF9500";
    } else if (topIcons.includes(button)) {
        newButton.style.backgroundColor = "#D4D4D2";
        newButton.style.color = "#1C1C1C";
    }

    newButton.addEventListener("click", () => {
        if(rightIcons.includes(button)) {
            if(button == "=") {
                if(A !== null) {
                    B = display.value;
                    let numA = parseFloat(A)
                    let numB = parseFloat(B)

                    if(operator == "÷") {
                        display.value = numA / numB;
                    } else if(operator == "x") {
                        display.value = numA * numB;
                    } else if(operator == "-") {
                        display.value = numA - numB;
                    } else if (operator == "+") {
                        display.value = numA + numB;
                    }
                    justEvaluated = true;
                    
                }
            } else {
                if(display.value !== "") {
                    A = display.value;
                    display.value = "";
                }
                operator = button;
                
            }
        } else if(topIcons.includes(button)) {
            if(button == "AC") {
                display.value = "";
                A = 0;
                operator = null;
                B = null;
            }else if(button == "+/-") {
                if(display.value !== ""  && display.value != "0") {
                    if(display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = "-" + display.value;
                    }
                }

            } else if(button == "%") {
                display.value = (parseFloat(display.value) / 100).toFixed(4);
            }
            
        } else {
            if(justEvaluated) {
                justEvaluated = false;
                display.value = "";
            }
            if(button == ".") {
                if(display.value != "" && !display.value.includes(button)) {
                    display.value += button
                }
            } else if(display.value == "0") {
                display.value = button;
            } else {
                display.value += button;
            }
        }
    })

    buttons.appendChild(newButton)
});

