var board = document.getElementsByClassName("chars")[0];
var array = new Array();
var algo = document.getElementsByClassName("algorithm"); //Gets all elements with class name "Algorithm". Algo will be an array.

function appendThem() {
  var input = document.getElementById("charInput").value;
  input = input.replace(/ /g, "");
  array = input.split(",");

  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }

  for (var i = 0; i < array.length; i++) {
    var elem = document.createElement("p");
    elem.style.marginLeft = "20px";
    var textnode = document.createTextNode(array[i]);
    elem.appendChild(textnode);
    board.appendChild(elem);
  }

  if (algo[0].checked) {
    bubbleSort();
  } else if (algo[1].checked) {
    selectionSort();
  } else if (algo[2].checked) {
    insertionSort();
  } else {
    console.log("Not an option!");
  }
}
