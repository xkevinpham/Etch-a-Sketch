

function gridGenerator(gridWidth, gridHeight){

    const container = document.querySelector(".container");

    let cellWidth = (650/gridWidth);
    let cellHeight = (475/gridHeight);
    let cellWidthpx = cellWidth.toString()+"px";
    let cellHeightpx = cellHeight.toString()+"px";


    for (let i = 1; i < gridWidth; i++){
        let gridRow = document.createElement("div");
        gridRow.classList = "gridRow";
    

    for (let n =1; n <= gridHeight; n++){
        let gridCell = document.createElement("div");
        gridCell.classList = "gridCell";
        gridCell.style.display = "table-cell";
        gridCell.style.margin = "none";
        gridCell.style.padding = "0px";
        gridCell.style.borderRadius = "3px";
        gridCell.style.width = "cellWidthPx";
        gridCell.style.height = "cellHeightPx";

        gridRow.appendChild(gridCell);
    };

        container.appendChild(gridRow);
};

};