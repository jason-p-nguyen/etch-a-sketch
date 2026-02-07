// Create a 16x16 grid of square divs
    // Create divs using js.

    // Contain the grid squares in "container" div
    const container = document.getElementById("container");
    let rows = document.getElementsByClassName("rowCell");
    let cells = document.getElementsByClassName("cell");

    // Use flexbox to make divs appear as a grid
    function makeGrid(num) {
        makeRows(num);
        makeColumns(num);
    };

    // make grid create rows
    function makeRows(rowNum) {
        for (r = 0; r < rowNum; r++) {
            let row = document.createElement('div');
            container.appendChild(row).className = "rowCell";
        };
    };

    // make grid create columns
    function makeColumns(cellNum) {
        for (let i = 0; i < rows.length; i++) {
            for (j = 0; j < cellNum; j++) {
                let newCell = document.createElement('div');
                rows[j].appendChild(newCell).className = "cell";
            };
        };
    };

    makeGrid(20)
    // Beware of borders and margins, as they can adjust the size of the squares

    // Set hover effect to change grid div colors when passed over
    // Add a new class for the hover
    // change the divs background using js

// Add a button on the top of the screen
    // Create event listener for button 
    // prompt user for number of squares per side
    // existing grid should be removed
    // new grid should be created with requested number of squares
// keep total space to 960px wide
// limit user input to a max of 100