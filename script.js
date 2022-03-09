const drawArea = document.querySelector("#draw-area");
const opacity = document.querySelector("#opacity");
const gridColor = document.querySelector("#grid-color");
const brushColor = document.querySelector("#brush-color");
const gridNumber = document.querySelector("#grids");
const rangePara = document.querySelector("#range-para");
const resetBtn = document.querySelector("#clear-canvas");


function hexTorgb(hex) {  //Converts the hex code to rgb value
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  }

function detectLeftButton(evt) {  //Detects if the left button is clicked (stole from stack overflow)
    evt = evt || window.event;
    if ("buttons" in evt) {
        return evt.buttons == 1;
    }
    var button = evt.which || evt.button;
    return button == 1;
}


function Color(e){
    let rgbv = hexTorgb(brushColor.value);
    red = rgbv[0];
    green = rgbv[1];
    blue = rgbv [2];
    colorOpacity = parseInt(opacity.value)/10;
    let leftBtn = detectLeftButton(e);
    if(leftBtn == false){
        return;
    }else{
        this.style.background = `rgba(${red},${green},${blue}, ${colorOpacity})`;
    }
}

function changeGridBackground(){
    drawArea.style.background = gridColor.value;
}

function displayGridNumber(){
    let grids = gridNumber.value;
    rangePara.textContent = `${grids}x${grids}`;
}


function reset(){       //Resets the whole board and sets up a new canvas
    let grids = parseInt(gridNumber.value);
    addDiv(grids);
}
function addDiv(num){
    drawArea.innerHTML = '';
    drawArea.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for(let i = 0; i<(num*num); i++){
        let div = document.createElement("DIV");
        div.classList.add("added");
        drawArea.append(div);
    }   
    let squares = document.querySelectorAll(".added");
    squares.forEach(ele => ele.addEventListener("mouseenter", Color));
}

window.onload = addDiv(16);   //Puts 16x16 grids on website load
gridNumber.addEventListener("input", displayGridNumber);
gridColor.addEventListener("input", changeGridBackground);
resetBtn.addEventListener("click", reset);