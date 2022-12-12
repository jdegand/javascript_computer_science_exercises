function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    } 

    return arr.shift() * productOfArray(arr);
}

/* needs a global variable to succeed - can't add anything to the function parameters 

let ans = false;

function contains(obj, targetValue){
    // Array.isArray() check needed as well ?
    Object.keys(obj).forEach(key => {
      if(obj[key] === targetValue) {
        ans = true;
      } else if(typeof obj[key] === 'object'){
         contains(obj[key], targetValue);
    }
})
  return ans
}
*/

function contains(obj, targetValue){
    for(const key in obj){
        if(obj[key] === targetValue){
            return true
        }
        if(typeof obj[key] === 'object'){
            return contains(obj[key], targetValue)
        }
    }
    return false
}

/*

needs global variable or adding arr as parameter to collectStrings

let arr = [];

function collectStrings(obj){
  
	for(prop in obj) {
  	if(typeof(obj[prop]) == "object"){
    	collectStrings(obj[prop]);
    } else {
    	if(typeof prop === 'string'){   
         arr.push(obj[prop]);
      }
      
    }
     
  }
 return arr;
}
*/

function collectStrings(obj){
  let stringsArr = [];
  for(const key in obj){
      if(typeof obj[key] === 'string'){
          stringsArr.push(obj[key])
      } else{
        stringsArr = stringsArr.concat(collectStrings(obj[key])) 
      }
  }

  return stringsArr;
}

function search(arr, num){
  return search2(arr, num, 0)
}

function search2(arr,num,index){
if(arr.length === index) {
  return -1; 
} else if(arr[index] !== num){
    return search2(arr, num, index+1)
 }
 return index;
}

function binarySearch(arr, num){
  const length = arr.length;
  const sortedArr = arr.sort();
  return binary2(sortedArr, num, 0, length);
}

function binary2(arr, num, start, end){
    if (start > end) {
      return -1;
    } 
  
    let mid=Math.floor((start + end)/2);
  
    if (arr[mid]===num) {
      return mid;
    } 

    if (arr[mid] > num) {
      return binary2(arr, num, start, mid-1);
    } else {
      return binary2(arr, num, mid+1, end); 
    }
}

/*

// this modifies the existing object

function stringifyNumbers(obj){

  for(const key in obj){
      if(typeof obj[key] === 'number'){
          obj[key] = obj[key].toString()
      } else{
        stringifyNumbers(obj[key]) 
      }
  }

  return obj;
}
*/

function stringifyNumbers(obj){
  let newObj = {}
  for(const key in obj){
      if(typeof obj[key] === 'number'){
        newObj[key] = obj[key].toString()
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
    } else {
        newObj[key] = obj[key];
    }
  }

  return newObj;
}