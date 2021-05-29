var board = document.getElementsByClassName("chars")[0];
var array = new Array();
var algo = document.getElementsByClassName("algorithm"); //Gets all elements with class name "Algorithm". Algo will be an array.


function appendThem() {

  //Remove white spaces and split the values wherever  comma occurs
  var input = document.getElementById("charInput").value;
  input = input.replace(/ /g, "");
  array = input.split(",");

  //Remove any existing children from old data when new data is entered.
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }


  //Append the data from the input array as children of div
  for (var i = 0; i < array.length; i++) {
    var elem = document.createElement("p");
    elem.style.marginLeft = "20px";
    var textnode = document.createTextNode(array[i]);
    elem.appendChild(textnode);
    board.appendChild(elem);
  }


  //Checking for which algorithm is selected in the Radio Buttons
  if (algo[0].checked) {
    bubbleSort();
  } else if (algo[1].checked) {
    selectionSort();
  } else if (algo[2].checked) {
    insertionSort();
  } else if (algo[3].checked) {
    mergeSort();
  } else {
    console.log("Not an option!");
  }
}


function randomArray(){
  var randomArray = Array(8).fill().map( () => Math.round( Math.random() * 10 ) );
  document.getElementById("charInput").value = randomArray;
}