const resetButton = document.getElementById("reset");
const clearButton = document.getElementById("Clear");
const rainbowButton = document.getElementById("rainbow");
const blackButton = document.getElementById("black");




const makeGrid = (gridSize, gridTotal) => {
    for (let i = 0; i < gridTotal; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "board");
        container.appendChild(div);
    }
    container.setAttribute("style", `grid: repeat(${gridSize}, auto) / repeat(${gridSize}, auto)`);
}

const defaultColor = () => {
    let gBox = document.querySelectorAll(".board");
    gBox.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", "background-color: black;");
        });
    });
}



//Generates random color and returns
const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return (`rgb(${red}, ${green}, ${blue});`);
}
//Sets randomColor into the grid cell and repeats
const setRandomColor = () => {
    randomColor();
    let gBox = document.querySelectorAll(".board");
    gBox.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", `background-color: ${randomColor()};`);
        });
    });
}
//Removes the grid before able to reset the grid to a new size
const removeGrid = () => {
    let gBox = document.querySelectorAll(".board");
    gBox.forEach((div) => {
        div.parentNode.removeChild(div);
    });
}

//Setting the reset button to prompt new size of grid and restart blank canavas
resetButton.addEventListener('click', function () {
    const gPrompt = prompt("Please enter size of grid. Enter one side only e.g (14) for 14x14 grid.");
    const gridTotal = gPrompt * gPrompt;
    if ( gPrompt === null) {
        return;
    }else{
        removeGrid();
        makeGrid(gPrompt, gridTotal);
        defaultColor();
    }
});




blackButton.addEventListener('click', defaultColor);
rainbowButton.addEventListener('click', setRandomColor);


document.addEventListener("DOMContentLoaded", function(){
    makeGrid(16, 256);
    defaultColor();
});

