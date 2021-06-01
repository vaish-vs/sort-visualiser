var board = document.getElementsByClassName("chars")[0];
var isSwapped = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort() {
  for (var m = 0; m < array.length; m++) {
    isSwapped = false;

    for (var j = 0; j < array.length - m - 1; j++) {
      visualiseBar(j, Number(board.children[j].innerHTML), 2);
      //visualiseBar(j+1, Number(board.children[j+1].innerHTML), 3);
      visualiseNum(j);
      visualiseNum(j + 1);
      await sleep(100);

      if (
        Number(board.children[j].innerHTML) >
        Number(board.children[j + 1].innerHTML)
      ) {
        var temp = board.children[j].innerHTML;
        board.children[j].innerHTML = board.children[j + 1].innerHTML;
        visualiseBar(j, Number(board.children[j].innerHTML)); //Function to change color of bars
        board.children[j + 1].innerHTML = temp;
        await sleep(550);
        backToNormal(j); //Function to change color of bars
        isSwapped = true;

        //Setting heights for the visual bars according to swapped values
      }
      backToNormal(j);
      backToNormal(j + 1);
    }

    if (!isSwapped) {
      break;
    }
  }

  visualiseBar(7, Number(board.children[7].innerHTML));
  await sleep(1000);
  backToNormal(7);
}
