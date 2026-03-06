console.log("script started")

function changeColor(){
    console.log("click");
    let poem = document.getElementById("poem");
    let color = prompt("Enter a new color for the poem");
    poem.style.color = color
}

function changeFontSize (){
    console. log ("click");
    let poem = document.getElementById("poem");
    let FontSize = prompt ("Enter a new Font Size");
    poem.style.fontSize = FontSize
}