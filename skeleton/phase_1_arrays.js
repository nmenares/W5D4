Array.prototype.uniq = function() {
  let result = [];
  for(let i =0  ; i < this.length; i++) {
    if (result.includes(this[i])) {
      continue;
    }else {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function () {
  let result = [];
  for(let i = 0 ; i < this.length - 1 ; i++) {
    for(let j = i+1; j < this.length ; j++) {
      if (this[i]+this[j]===0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function () {
  let result=  [] ;
  for(let i = 0 ; i < this.length ; i++) {
    let temp = [];
    for(let j = 0; j < this.length; j++) {
      temp.push(this[j][i]);
      // this[i][j],this[j][i] = this[j][i],this[i][j];
    }
    result.push(temp);
  }
  return result;
};







  
























