class HashTable{
    constructor(size=5){
        this.keyMap = new Array(size);
        this.RANDOM_VAL = 18539;
    }

    _hash(key) {
        var hashFunction = function(numericKey, multiple, size) {
          return (numericKey * multiple) % size;
        }
      
        if (Number.isFinite(key)) {
          return hashFunction(key);
        }
      
        if (typeof key === 'string' && !isNaN(Number(key))) {
          return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
        }
        
        var tempKey = key; 
        if (key === null) {
          tempKey = "null";
        }
      
        if (key === undefined) {
          tempKey = "undefined";
        }
      
        if (isNaN(key) || !isFinite(key)) {
          tempKey = "NaN";
        }
      
        if (typeof tempKey === 'string') {
          var numKey = 0;
          for (var i = 0; i < tempKey.length && i < 5; i++) {
            numKey += tempKey.charCodeAt(i);
          }
      
          return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length)
        }
    }

    /* this is too simple
    set(key, value){
        const index = this._hash(key);
        this.keyMap[index] = value;
    }
    */

    set(key, value){
        var index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);
        return this.keyMap[index][0][1];
    }

    containsKey(key){
        let index = this._hash(key);
        return index in this.keyMap;
    }

    remove(key){
        let index = this._hash(key);
        delete this.keyMap[index]
    }

    keys(){
        var keyArr = [];

        for (var i = 0; i < this.keyMap.length; i++) {
          if (this.keyMap[i]) {
            for(var j =0; j < this.keyMap[i].length; j++){
              if(!keyArr.includes(this.keyMap[i][j][0])){
                keyArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keyArr
    }

    values(){
        const values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
          if (this.keyMap[i]) {
            for(let j =0; j < this.keyMap[i].length; j++){
              if(!values.includes(this.keyMap[i][j][0])){
                values.push(this.keyMap[i][j][1])
              }
            }
          }
        }
        return values;
    }

    setSeparateChaining(key, value) {
        return this.set(key, value);
    }

    getSeparateChaining(key) {
       let index = this._hash(key);
       
       if (this.keyMap[index]) {
        for (var i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
            }
        }
    }
   }

   setLinearProbing(key, value) {
    let index = this._hash(key);

    if (this.keyMap[index] === undefined) {
        return this.keyMap[index] = [key, value];
    } else {
        while (this.keyMap[index] !== undefined) {
            index++;
        }
    }

    return this.keyMap[index] = [key, value];
  }

  getLinearProbing(key) {
    let index = this._hash(key);

    while (this.keyMap[index] !== undefined) {
        if (this.keyMap[index][0] === key) {
            return this.keyMap[index][1];
        }
        index++;
    }

    return undefined;
  }
}

/*
class HashTable{
    constructor(size=5){
        this.keyMap = new Array(size);
        this.RANDOM_VAL = 18539;
    }

    _hash(key) {
        var hashFunction = function(numericKey, multiple, size) {
          return (numericKey * multiple) % size;
        }
      
        if (Number.isFinite(key)) {
          return hashFunction(key);
        }
      
        if (typeof key === 'string' && !isNaN(Number(key))) {
          return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
        }
        
        var tempKey = key; 
        if (key === null) {
          tempKey = "null";
        }
      
        if (key === undefined) {
          tempKey = "undefined";
        }
      
        if (isNaN(key) || !isFinite(key)) {
          tempKey = "NaN";
        }
      
        if (typeof tempKey === 'string') {
          var numKey = 0;
          for (var i = 0; i < tempKey.length && i < 5; i++) {
            numKey += tempKey.charCodeAt(i);
          }
      
          return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length)
        }
    }

    /* doesn't work - key value is not saved 
    set(key, value){
        const index = this._hash(key);
        this.keyMap[index] = value;
    }
    /

    /* do the values passed in all total the same number? 
        all values are set at index 2 
        - NO
    /

    set(key, value){
        const index = this._hash(key);
        this.keyMap[index] = [key,value];
    }

    get(key){
        let index = this._hash(key);
        return this.keyMap[index][1];
    }

    containsKey(key){
        let index = this._hash(key);
        return index in this.keyMap;
    }

    remove(key){
        let index = this._hash(key);
        delete this.keyMap[index]
    }

    keys(){
        let keys = []
        
          for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i][0]) {
              keys.push(this.keyMap[i]);
            }
          }
        
        return keys;
    }
}
*/