
//MergeArray contains board children items
function mergeSort() {
  var mergeArray = [];
  for (var i = 0; i < array.length; i++) {
    mergeArray.push(board.children[i]);
  }
    sortArray(mergeArray);
    function sortArray(mergeArray) {
        var leftArray = mergeArray.slice(0, mergeArray.length / 2);
        var rightArray = mergeArray.slice(mergeArray.length / 2, mergeArray.length);
        leftArray = sortArray(leftArray);
        rightArray = sortArray(rightArray);
        return merge(leftArray, rightArray);
      }
      function merge(leftArray, rightArray) {
        var mainArray = [];
        var leftArrayIndex = 0;
        var rightArrayIndex = 0;
        var mainArrayIndex = 0;
        while( leftArrayIndex < leftArray.length || rightArrayIndex < rightArray.length){
          if(Number(leftArray[leftArrayIndex].innerHTML) <= Number(rightArray[rightArrayIndex].innerHTML)){
              mainArray[mainArray++] = leftArray[leftArrayIndex++];
              mainArray[mainArray++] = rightArray[rightArrayIndex++];
          }
          else{
              mainArray[mainArray++] = rightArray[rightArrayIndex++];
              mainArray[mainArray++] = leftArray[leftArrayIndex++];
          }
        }
        if(leftArrayIndex < leftArray.length){
            for(var i = leftArrayIndex; i <= leftArrayIndex.length; i++){
                mainArray[mainArrayIndex++] = leftArray[i];
            }
            break;
        }
        if(rightArrayIndex < rightArray.length){
          for( i = rightArrayIndex; i <= rightArrayIndex.length; i++){
              mainArray[mainArrayIndex++] = rightArray[i];
          }
          break;
      }
      }
      
}
