const container = document.getElementById("container");
const button = document.querySelector("button");

function generateGrid(numOfSquares = 16) {
    //This loop creates the top-row of the grid
    for (let i = 0; i <= numOfSquares; i++) {
        // This loop fills out the grid from the top-row
        for (let j = 0; j <= numOfSquares; j++) {
            let newSquare = document.createElement("div");
            newSquare.classList.add("square");
            container.appendChild(newSquare);
            // Changes square background color
            newSquare.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "purple";
            });
        };
    };
};

// BEGIN function for new grid
button.addEventListener("click", (event) => {
    numOfSquares = prompt("Please enter the number of squares you want", "16")
        if (numOfSquares == null) {
            alert("Please enter a number.")
        }
        else if (!(Number.isInteger(numOfSquares))) {
            alert("Please enter a whole number.")
        }
        else if (numOfSquares >= 100) {
            alert("Please enter a number less than 100.")
        }
        else if (numOfSquares <= 0) {
            alert("Please enter a number greater than 0.")
        }
        else {
            generateGrid(numOfSquares);
        }
});

// SET limit to 100
// SET max-width limit to 960px in CSS
// REMOVE current grid
// Generate new grid based on the input 

// Make container evenly spaced, OR "boxed" (border-box?)

// Randomize RGB colors for every square that is touched
// BEGIN function randomColor
// SET constant variable for randomColor
// BEGIN anon function
// let r = Math.floor(Math.random() * 256)
// let g = Math.floor(Math.random() * 256)
// let b = Math.floor(Math.random()* 256)
// return 'rgb(' + r + ',' + g + ',' b + ')';
// CONNECT new rgb to backGroundColor


generateGrid();
