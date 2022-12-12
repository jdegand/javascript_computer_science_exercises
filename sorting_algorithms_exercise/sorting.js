function bubbleSort(inputArr) {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
};

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

const merge = (left, right) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        output.push(left[leftIndex]);
        leftIndex++;
      } else {
        output.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  }
  
const mergeSort = array => {
    if(array.length <= 1){
      return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);
  
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}



function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++;
        if (i !== swapIndex) {
          [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
      }
    }
    if (swapIndex !== start) {
      [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    }
    return swapIndex;
  }

function quickSort(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return [];
    let pivotIndex = pivot(arr, start, end);
    // Left
    quickSort(arr, start, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, end);
    return arr;
}


/*
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const piv = pivot(arr, left, right)
      quickSort(arr, left, piv - 1)
      quickSort(arr, piv + 1, right)
    }
    return arr
  }
  
  function pivot(arr, left, right) {
    const piv = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < piv) {
        swap(arr, i, j)
        i++
      }
    }
    swap(arr, i, right)
    return i
  }
  
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
*/

/*

// rithmschool solution doesn't pass all tests either ?

// also this doesn't match the function signature

function swap(arr, idx1, idx2) {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

function quickSort(arr, left=0, right=arr.length - 1){
  if(left < right){
   let partitionIndex = partition(arr, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, start, end) {
  // We are assuming the pivot is always the last element
  var pivot = arr[end];
  var swapPoint = start;

  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, swapPoint);
      swapPoint++;
    }
  }

  // Swap the pivot from the end to the swapPoint
  swap(arr, swapPoint, end);
  return swapPoint;
}
*/

/*
function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  
  const [pivot, ...rest] = arr;

  const left = [];
  const right = [];
  rest.forEach(el => el < pivot ? left.push(el) : right.push(el));
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
*/
