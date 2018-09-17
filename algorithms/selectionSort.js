// Sajeel Malik
// Selection Sort

//time complexity = O(n^2), Theta(n^2) - in reality it's less due to the j+1 constraint, but asymptotically we'll still refer to it as n^2

function selectionSort(array){

    var min;

    for (var i = 0; i < array.length; i++){

        min = i;

        for(var j = i + 1; j < array.length; j ++){
            if(array[min] > array[j]){
                min = j;
            }
        }

        if(i !== min){
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
    
}


//Tests

console.log(selectionSort([6,7,3,2,4,5,8]))