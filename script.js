const container = document.getElementById("container");

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
            })
        };
    };
};

// GET variable reference for button
const 
// BEGIN function for new grid
// LISTEN for CLICK
// GET PROMPT INPUT from user for numOfSquares
// SET limit to 100
// SET width limit to 960px in CSS
// REMOVE current grid
// Generate new grid based on the input 

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
