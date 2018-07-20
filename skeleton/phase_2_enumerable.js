// Phase 2 

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
  return this;
};


Array.prototype.myMap = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
};


Array.prototype.myReduce = function(callback, initialValue) {      
      if (initialValue === undefined) {
        initialValue = this.shift();
      }
      for(let i = 0 ; i < this.length ; i++) {
        initialValue = callback(initialValue,this[i]);
      }
        return initialValue;
    };
    
Array.prototype.myReduce2 = function(callback, initialValue) {      
      if (initialValue === undefined) {
        initialValue = this.shift();
      }
      this.myEach(function (el) {
        initialValue = callback(initialValue,el);
      });
        return initialValue;
    };
    