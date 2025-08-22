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
    buttons.appendChild(newButton)
})