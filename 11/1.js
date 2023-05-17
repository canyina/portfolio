const svg = document.getElementById("svg-canvas");


// 窗口大小改变，圆的大小不变

function makeRGB(R,G,B){
    return 'rgb(${R},${G},${B})'
}

function makeRGB(redinput,greeninput,blueinput){
let redoutput=redinput ?? Math.round(Math.random()*255);
let greenoutput=greeninput ?? Math.round(Math.random()*255);
let blueoutput=blueinput ?? Math.round(Math.random()*255);
return `rgb(${redoutput},${greenoutput},${blueoutput})`;
}
console.log(makeRGB(null,null,null));


function drawcircle(cr,r,g,b) {
   
    let C = makeRGB(r,g,b);
    
    let myCir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    console.log(myCir)
    myCir.setAttribute("cx", 500);
    myCir.setAttribute("cy", 500);
    myCir.setAttribute("r", cr);
    myCir.setAttribute('fill', C);

    svg.appendChild(myCir);
}
// for loop function
for (let i=10; i>0; i--) {
        drawcircle(i*50,null,null,null);
}

