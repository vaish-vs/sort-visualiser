var board = document.getElementsByClassName("chars")[0];
var array= new Array();

function appendthem(){
    var input = document.getElementById("charInput").value; 
    input = input.replace(/ /g,'')
    console.log(input);
    array = input.split(",");

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }

    for(var i=0; i<array.length; i++){
        var elem = document.createElement("p");
        elem.style.marginLeft="20px";
        var textnode  = document.createTextNode(array[i]);
        elem.appendChild(textnode);
        board.appendChild(elem);    
    }
  
        bubbleSort();

}

