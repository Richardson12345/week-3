function tentukanDeretAritmatika(arr) {
  var sequence = Math.abs(arr[0]-arr[1]);
   var arithCode = [arr[0]];
     for(i = 0; i < arr.length-1; i++){
       arithCode.push(arr[i] + sequence);
   }var stringCode = arithCode.toString();
    var stringArray = arr.toString();
  return stringCode === stringArray;
  
  // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); //false

