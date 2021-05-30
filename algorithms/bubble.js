var board = document.getElementsByClassName("chars")[0];
var isSwapped = false;

function bubbleSort() {
  for (var m = 0; m < array.length; m++) {
    isSwapped = false;

    for (var j = 0; j < array.length - m - 1; j++) {
      if (
        Number(board.children[j].innerHTML) >
        Number(board.children[j + 1].innerHTML)
      ) {
        var temp = board.children[j].innerHTML;
        board.children[j].innerHTML = board.children[j + 1].innerHTML;
        visualiseIt(j, Number(board.children[j].innerHTML));
        board.children[j + 1].innerHTML = temp;
        visualiseIt(j + 1, Number(board.children[j + 1].innerHTML));
        isSwapped = true;

        //Setting heights for the visual bars according to swapped values
      }
    }

    if (!isSwapped) {
      break;
    }
  }
}
