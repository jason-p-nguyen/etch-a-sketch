const container = document.getElementById("container");
const button = document.querySelector("button");
const rows = document.getElementsByClassName("row");
const squares = document.getElementsByClassName("square");

function generateGrid(numOfSquares) {
    makeRow(numOfSquares);
    makeColumns(numOfSquares);
    // Change square color when mouse hovers over
    Array.from(squares).forEach(square => {
        square.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "purple";
        })
    })
}

function makeRow(numOfSquares) {
    for (let r = 0; r < numOfSquares; r++) {
        let rowSquare = document.createElement("div");
        rowSquare.classList.add("row");
        container.appendChild(rowSquare);
    }
}

function makeColumns(numOfSquares) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numOfSquares; j++) {
            let columnSquare = document.createElement("div");
            columnSquare.classList.add("square");
            rows[j].appendChild(columnSquare);

        }
    }
}

generateGrid(16);

button.addEventListener("click", (event) => {    
    // Removes current grid
    while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
    }

    input = prompt("Please enter the number of squares you want", "64")
        if (input == null) {
            alert("Please enter a number.")
        }
        // BUG
        // else if (!(Number.isInteger(numOfSquares))) {
        //     alert("Please enter a whole number.")
        // }
        else if (input >= 100) {
            alert("Please enter a number less than 100.")
        }
        else if (input <= 0) {
            alert("Please enter a number greater than 0.")
        }
        else {
            generateGrid(input);
        }
});

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
