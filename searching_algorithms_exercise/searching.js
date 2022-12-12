function linearSearch(arr, num){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === num){
        return i;
      } 
    }
    return -1;
}

function linearSearchRecursive(arr, num){
    return linearSearchRecursive2(arr, num, 0)
  }
  
  function linearSearchRecursive2(arr,num,index){
  if(arr.length === index) {
    return -1; 
  } else if(arr[index] !== num){
      return linearSearchRecursive2(arr, num, index+1)
   }
   return index;
}

function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === n) {
        return mid;
      } else if (arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
}

function binarySearchRecursive(arr, num){
    const length = arr.length;
    const sortedArr = arr.sort();
    return binarySearchRecursive2(sortedArr, num, 0, length);
  }
  
  function binarySearchRecursive2(arr, num, start, end){
      if (start > end) {
        return -1;
      } 
    
      let mid=Math.floor((start + end)/2);
    
      if (arr[mid]===num) {
        return mid;
      } 
  
      if (arr[mid] > num) {
        return binarySearchRecursive2(arr, num, start, mid-1);
      } else {
        return binarySearchRecursive2(arr, num, mid+1, end); 
      }
  }