class MaxBinaryHeap {
  constructor() {
     this.values = [];
  }

  insert(value) {
     //push the value into our array
     this.values.push(value);

     // store the index of the inserted value
     let index = this.values.length - 1;
     // store the value at the index we are checking
     const inserted = this.values[index];

     // initialize a while loop to run while inserted value is not at the root
     while (index > 0) {
        // store the parent index 
        let parentIndex = Math.floor((index - 1) / 2);
        // store the parent value
        let parent = this.values[parentIndex];

        // if the inserted value is less than or equal to the parent, we do not need to change anything and we can break out of the loop
        if (inserted <= parent) break;

        // else we will swap the values at the parent index and index
        this.values[parentIndex] = inserted;
        this.values[index] = parent;

        // update the index to be parent index, so we can check the next level in our loop
        index = parentIndex;
     }

     // return the array
     return this.values;
  }

  remove() {
     // store the root as a variable so we can return it at the end
     const max = this.values[0];
     // pop off the last value in our array
     const end = this.values.pop();

     // if the values array is now empty, we do not need to do run the following code and can return the max variable
     if (this.values.length > 0) {
        // swap the root as the popped off value
        this.values[0] = end;

        // start the bubble down effect
        // store the parent index that we will check
        let index = 0;
        // store the length of the array
        const length = this.values.length;
        // store the value that we are checking
        const check = this.values[0];

        // loop while true
        while (true) {
           // store the left child index
           let leftIndex = 2 * index + 1;
           // store the right child index
           let rightIndex = 2 * index + 2;
           // initialize variables for left and right child values
           let leftChild, rightChild;
           // keep track if there are any swaps, so we know when to break out of the loop
           let swap = null;

           // check if there is a left child and set the value of left child
           if (leftIndex < length) {
              leftChild = this.values[leftIndex];
              // check if we should swap the left child
              if (leftChild > check) {
                 swap = leftIndex;
              }
           }
           // check if there is a right child and set the value of right child
           if (rightIndex < length) {
              rightChild = this.values[rightIndex];
              // check if we should swap the right child
              if (
                 // if left child was not swapped and right child is greater than check value
                 (swap === null && rightChild > check) ||
                 // if left child was swapped, and right child is greater than left child
                 (swap !== null && rightChild > leftChild)
              ) {
                 swap = rightIndex;
              }
           }

           // if no swaps were done, we will break out of the while loop
           if (swap === null) break;
           // else, swap the values at our index and swap
           this.values[index] = this.values[swap];
           this.values[swap] = check;
           // update index to the swap index to check the next level
           index = swap;
        }
     }

     // return the removed root
     return max;
  }

}

function checkMaxHeap(arr, i = 0, n = arr.length - 1) {
  // If (2 * i) + 1 >= n, then leaf node, so return true
  if (i >= (n - 1) / 2) {
     return true;
  }

  // If an internal node and
  // is greater than its
  // children, and same is
  // recursively true for the
  // children
  if (arr[i] >= arr[2 * i + 1] &&
     arr[i] >= arr[2 * i + 2] &&
     checkMaxHeap(arr, 2 * i + 1, n) &&
     checkMaxHeap(arr, 2 * i + 2, n)) {
     return true;
  }

  return false;
}

function heapify(arr, N, i) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest])
     largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest])
     largest = r;

  // If largest is not root
  if (largest != i) {
     var swap = arr[i];
     arr[i] = arr[largest];
     arr[largest] = swap;

     // Recursively heapify the affected sub-tree
     heapify(arr, N, largest);
  }
}

function maxHeapify(arr) {
  var N = arr.length;

  // Build heap (rearrange array)
  for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
     heapify(arr, N, i);
  return arr;
}