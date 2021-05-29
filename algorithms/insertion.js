var board = document.getElementsByClassName("chars")[0];

function insertionSort() {
  var key, i, j;
  for (i = 1; i < array.len; i++) {
    key = board.children[i].innerHTML;
    j = i - 1;
    while (j >= 0 && Number(board.children[j].innerHTML) > Number(key)) {
      board.children[j + 1].innerHTML = board.children[j].innerHTML;
      j = j - 1;
    }
    board.children[j + 1].innerHTML = key;
  }
}
