function angkaPalindrome(num) {
    var newNum = num + 1;
    var stringnewNum = newNum.toString()
    var reverse = '';
    for(i = stringnewNum.length-1; i >= 0; i--){
      reverse += stringnewNum[i]
    }var doubleCheck = newNum;
      var stringdoubleCheck;
       var finalResult = '';
   if (reverse === stringnewNum){
     var reverseNumber = Number(reverse);
     return reverseNumber;
     
   }else{ while(finalResult !== stringdoubleCheck){
         doubleCheck++
         stringdoubleCheck = doubleCheck.toString();
         for(ii = stringdoubleCheck.length-1; ii >= 0; ii--){
           finalResult += stringdoubleCheck[ii];
           }if (finalResult === stringdoubleCheck){
             var finalNumber = Number(finalResult);
             return finalNumber;
           }finalResult = '';
     }
   }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  
  
  
  
  
  
  
  