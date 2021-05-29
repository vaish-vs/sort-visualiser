var board = document.getElementsByClassName("chars")[0];
var isSwapped = false;

function appendthem(){
    var input = document.getElementById("charInput").value; 
    input = input.replace(/ /g,'')
    console.log(input);
    var array= input.split(",");

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

        for(var m=0; m<array.length; m++){
            isSwapped =false;
    
            for(var j=0; j<array.length-m-1; j++){
                if(  Number(board.children[j].innerHTML) > Number(board.children[j+1].innerHTML) ){
                    
                        var temp = board.children[j].innerHTML;
                        board.children[j].innerHTML = board.children[j+1].innerHTML;    
                        board.children[j+1].innerHTML = temp;
                    
                
                    isSwapped = true;
                }
            }
    
          if( !isSwapped ){
              break;
          }
        }
    
    
}

