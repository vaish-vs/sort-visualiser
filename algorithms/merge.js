//MergeArray contains board children items
var leftArray, rightArray, leftArrayIndex, rightArrayIndex;
function mergeSort() {
  var mergeArray = [];
  for (var i = 0; i < array.length; i++) {
    mergeArray.push(board.children[i]);
  }
  mergeArray = sortArray(mergeArray);
}
//SortArray breaks down the arrays to two halfs recursively and then sorts and then merges them
function sortArray(mergeArray) {
  if (mergeArray.length === 1) return;
  leftArray = mergeArray.slice(0, mergeArray.length / 2);
  rightArray = mergeArray.slice(mergeArray.length / 2, mergeArray.length);
  leftArray = sortArray(leftArray);
  rightArray = sortArray(rightArray);
  return merge(leftArray, rightArray);
}
//Function to sort and merge two
function merge(leftArray, rightArray) {
  var mainArray = []; //main mergeed sorted array
  leftArrayIndex = 0;
  rightArrayIndex = 0;
  var mainArrayIndex = 0;
  //check each index and see which element is larger in one row and add then add the other
  while (
    leftArrayIndex < leftArray.length &&
    rightArrayIndex < rightArray.length
  ) {
    if (
      Number(leftArray[leftArrayIndex].innerHTML) <=
      Number(rightArray[rightArrayIndex].innerHTML)
    ) {
      mainArray[mainArrayIndex++] = leftArray[leftArrayIndex++];
      mainArray[mainArrayIndex++] = rightArray[rightArrayIndex++];
    } else {
      mainArray[mainArrayIndex++] = rightArray[rightArrayIndex++];
      mainArray[mainArrayIndex++] = leftArray[leftArrayIndex++];
    }
  }
  //condition where left array is larger than right
  if (leftArrayIndex < leftArray.length) {
    for (var i = leftArrayIndex; i <= leftArrayIndex.length; i++) {
      mainArray[mainArrayIndex++] = leftArray[i];
    }
  }
  //condition for right being larger than left
  else if (rightArrayIndex < rightArray.length) {
    for (i = rightArrayIndex; i <= rightArrayIndex.length; i++) {
      mainArray[mainArrayIndex++] = rightArray[i];
    }
  }
  return mainArray;
}
