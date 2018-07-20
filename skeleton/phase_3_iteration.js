Array.prototype.bubbleSort = function() {
  let order = false;
  while (order===false) {
    order = true;
  for(let i = 0 ; i < this.length-1; i++)  {
    for(let j = i+1; j < this.length ; j++) {
      if (this[i]>this[j]) {
        tmp = this[i];
        this[i]= this[j];
        this[j]= tmp;
        order=false;
      }
    }
  }
}
return this;
};

String.prototype.substrings = function() {
  let result = [] ;
  for(let i = 0; i < this.length ; i++) {
    for(let j=i+1; j < this.length+1; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
