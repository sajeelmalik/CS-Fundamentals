// Sajeel Malik
// Insertion Sort

// time complexity = O(n^2), Theta(n^2) - in reality it's less, and even better than selection sort and bubble sort
// greater utility in small data sets

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items){

  for(var i = 1; i < items.length; i++){

    var j = i;

    while(j > 0 && items[j - 1] > items[j]){
      
      swap(items, j, j - 1)
      j--;
    }
  }

  return items;
}

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
