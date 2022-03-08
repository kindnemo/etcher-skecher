const drawArea = document.querySelector("#draw-area");
const opacity = document.querySelector("#opacity");

function color(e){
    colorOpacity = parseInt(opacity.value)/10;
    console.log(e);
    this.style.background = `rgba(0,0,0, ${colorOpacity})`;
}


function addDiv(num){
    drawArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for(let i = 0; i<(num*num); i++){
        let div = document.createElement("DIV");
        div.classList.add("added");
        drawArea.append(div);
    }   
    let squares = document.querySelectorAll(".added");
    squares.forEach(ele => ele.addEventListener("mouseenter", color));
}

window.onload = addDiv(16);   //Puts 16x16 grids on website load