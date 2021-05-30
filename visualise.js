var visualItems = document.getElementsByClassName("visualiseItem");
var board = document.getElementsByClassName("chars")[0];

function visualiseBar(a, value, time = 1){

    visualItems[a].style.height = (value + 1) * 10 + "px";
    console.log("Setting " + a + "th line to height " + (value + 1) * 10 + "px");
    if(time==1){
        visualItems[a].style.background = "#FA7921";
    }
    else if(time==0) {
        visualItems[a].style.background = "#645EBE";
    }
    else if(time==2){
        visualItems[a].style.background = "#FA7921";
    }
    else{
        visualItems[a].style.background = "#fff";
    }   
    
    

}

function visualiseNum(a){
    board.children[a].style.border = "2px solid #642CA9";
    board.children[a].style.borderRadius = "50%";

}


function backToNormal(a) {
    visualItems[a].style.background = "#645EBE";
    board.children[a].style.border = "none";
}

