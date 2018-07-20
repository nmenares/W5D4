
function range(start,end) {
  if (start===end) {
    return [start];
  }
  return [start].concat(range(start + 1,end));  
}


function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.shift() + sumRec(arr);  
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp%2 === 0){
    let temp1 = exponent2(base, exp / 2);
    return temp1 * temp1;
  }else {
    let temp2 = exponent2(base, (exp - 1) / 2);
    return base * temp2 * temp2;
  }
}

function fibonacci(n) {
  if (n===1) {
    return [1];
  }
  if (n===2) {
    return [1,1];
  }
  let temp = fibonacci(n-1);
  let last= temp[temp.length-1];
  let secondLast= temp[temp.length-2];
  temp.push(last+secondLast);
  return temp;
}

function deepDup(arr) {
  if (arr.length === 1 ) {
    return arr;
  }

  let el = arr.shift();
  if (Object.prototype.toString.call(el)==="[object Array]") {
    return deepDup(el);
  } 
  
  return [el].concat(deepDup(arr));
  
}

function bsearch(arr, target) {
  if (arr.length <= 0) {
    return -1;
  }
  
  let middle = Math.floor(arr.length/2);
  
  if (arr[middle] === target) {
    return middle;
  }
  if (arr[middle] < target) {
    if(bsearch(arr.slice(middle+1), target)!=-1){
      return middle + 1 + bsearch(arr.slice(middle+1), target);
    }else {
      return -1;
    }
  }
  if (arr[middle] > target) {
    return bsearch(arr.slice(0, middle), target);
  }    
}

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let prev = subsets(arr.slice(0,arr.length-1));
  let result = [];
  for(let i =0 ; i < prev.length; i++){
    result.push(prev[i].push(arr[arr.length-1]));
  }
  return prev.concat(result);
}



