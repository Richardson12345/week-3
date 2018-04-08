str = '';
arr = ['Hello World'];

  function reverse(arr){    
            for(i = 0; i < arr.length; i++){
              str += arr[i] + ' ';  
             } str = str.trim();     
             return str;
              } 

var storeString = reverse(arr);
var reverseString = '';
function balikString(){
  for (ii = storeString.length - 1; ii >= 0; ii--){
    reverseString += storeString[ii];
  }console.log(reverseString);
}

balikString();

 