const drawArea = document.querySelector("#draw-area");

function addDiv(num){
    drawArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for(let i = 0; i<(num*num); i++){
        let div = document.createElement("DIV");
        div.classList.add("added");
        drawArea.append(div);
    }
}

