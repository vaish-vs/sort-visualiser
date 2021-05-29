var board = document.getElementsByClassName("chars")[0];

function selectionSort() {
  var min;
  for (var i = 0; i < array.length - 1; i++) {
    min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (
        Number(board.children[min].innerHTML) >
        Number(board.children[j].innerHTML)
      )
        min = j;
    }
    var temp = board.children[min].innerHTML;
    board.children[min].innerHTML = board.children[i].innerHTML;
    board.children[i].innerHTML = temp;
  }
}
