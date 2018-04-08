function tentukanDeretGeometri(arr) {
    var multiply = arr[1]/arr[0];
    var correctArray = [arr[0]];
    for(i = 0; i <= arr.length-2; i++){
      correctArray.push(arr[i] * multiply)
    }var stringArr = arr.toString();
    var stringCorrectArray = correctArray.toString();
    return stringArr == stringCorrectArray;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false