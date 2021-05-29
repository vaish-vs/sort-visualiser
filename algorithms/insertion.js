var board = document.getElementsByClassName("chars")[0];
var isSwapped = false;

function insertionSort() {
  var key, i, j;
  for (i = 1; i < array.length; i++) {
    isSwapped = false;
    key = Number(board.children[i].innerHTML);
    j = i - 1;
    while (j >= 0 && key > Number(board.children[j].innerHTML)) {
      board.children[j + 1].innerHTML = board.children[j].innerHTML;
      j--;
      isSwapped = true;
    }
    board.children[j + 1].innerHTML = key;
    if (!isSwapped) break;
  }
}
