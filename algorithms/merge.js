//MergeArray contains board children items
function mergeSort() {
  var mergeArray = [];
  for (var i = 0; i < array.length; i++) {
    mergeArray.push(board.children[i]);
  }
  sortArray(mergeArray);
}
//SortArray breaks down the arrays to two halfs recursively and then sorts and then merges them
function sortArray(mergeArray) {
  var leftArray = mergeArray.slice(0, mergeArray.length / 2);
  var rightArray = mergeArray.slice(mergeArray.length / 2, mergeArray.length);
  leftArray = sortArray(leftArray);
  rightArray = sortArray(rightArray);
  return merge(leftArray, rightArray);
}
//Function to sort and merge two
function merge(leftArray, rightArray) {
  var mainArray = []; //main mergeed sorted array
  var leftArrayIndex = 0;
  var rightArrayIndex = 0;
  var mainArrayIndex = 0;
  //check each index and see which element is larger in one row and add then add the other
  while (
    leftArrayIndex < leftArray.length ||
    rightArrayIndex < rightArray.length
  ) {
    if (
      Number(leftArray[leftArrayIndex].innerHTML) <=
      Number(rightArray[rightArrayIndex].innerHTML)
    ) {
      mainArray[mainArray++] = leftArray[leftArrayIndex++];
      mainArray[mainArray++] = rightArray[rightArrayIndex++];
    } else {
      mainArray[mainArray++] = rightArray[rightArrayIndex++];
      mainArray[mainArray++] = leftArray[leftArrayIndex++];
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
