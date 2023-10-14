let box = document.getElementById('box');

let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;


box.addEventListener("mouseover", function(event) {
    let boxAttr = box.getBoundingClientRect();
    console.log(boxAttr);
    
    let pos = getNewPosition(boxAttr.width, boxAttr.height);
    console.log(pos);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    let newX = Math.floor((Math.random() * viewWidth)  - boxWidth);
    let newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    console.log(newX);
    console.log(newY);

    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
     console.log(newX);
    console.log(newY);
}


















