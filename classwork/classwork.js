 // .pop()
 // must use 'arrayLen' var to hold length BEFORE the loop. 

 var  finalArray = [ 1,2,3,"foo", "bar", "xyz"];

 var arrayLen = finalArray.length;

 for (var i = 0; i < arrayLen; i++) {
 	finalArray.pop();
 };

 // .splice();


 // .shift() == pops/removes from the front

 // .unshift() == adds to front of array 