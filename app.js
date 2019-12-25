const resizeButton = document.querySelector(".button Resize");
const clearButton = document.querySelector(".button Clear");
const rainbowButton = document.querySelector(".button Rainbow");
const randomColorButton = document.querySelector(".button randomColor");
const table = document.querySelector(".grid container");

startTable(16);

resizeButton.addEventListener("click", makeTable);
clearButton.addEventListener("click", clearTable);
rainbowButton.addEventListener("click", rainbowCellColor);
randomColorButton.addEventListener("click", randomCellColor);


//Clears the table to become a blank canvas
const clearTable = () => {
    cell = document.querySelectorAll(".grid")
    cell.forEach((div) => {
        div.style.backgroundColor = ""
    });
};

//Makes the color of each cell randomized rainbow.
const rainbowCellColor = () => {
    cell = document.querySelectorAll(".grid")
    const color = Math.floor(Math.random()*16777215).toString(16);
    cell.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#" + color
        });
    });
};

//One random color for cells
const randomCellColor = () => {
    cell = document.querySelectorAll(".grid")
    cell.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    });
};

//Color changes
const changeColor = () => {
    cell = document.querySelectorAll(".grid")
    cell.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "rgb(44, 196, 90)";
        });
    });
}



const startTable = (n) => {
    for(i=0; i<n*n; i++){
        row = document.createElement("div");
        row.setAttribute("id", "grid-item" + i);
        row.classList.add("grid")
        table.appendChild(row);
    };
    changeColor();
};

const makeTable = () => {
    table.innerHTML ="";
    var n = prompt ("Please Enter a Number Between 10-100");
    if (isNaN(n)){
        alert("Please enter a number between 10 - 100")
    }else if (n<=0 || n > 100{
        alert("Pleaes enter a number between 10 - 100")
    }else{
        startTable(n);
        table.style.gridTemplateColumns = repeat(" "+ n +" ", auto);
    };
};

makeTable();