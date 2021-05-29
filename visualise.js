var visualItems = document.getElementsByClassName("visualiseItem");


function visualiseIt(a, value){
    visualItems[a].style.height = (value + 1) * 10 + "px";
    console.log("Setting " + a + "th line to height " + (value + 1) * 10 + "px");
}