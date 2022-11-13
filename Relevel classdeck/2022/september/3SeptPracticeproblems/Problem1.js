/*Given an array of length N, where every element is present twice and only one element is present
once. Find the unique element
Sample input: N = 5, Array = [3,2,1,2,3]
Sample output: 1
*/
function findSingle(ar) {
    // Do XOR of all elements and return
    let res = ar[0];
    for (let i = 1; i < ar.length; i++)//here is the logic if we  a^b^a=b so all the pair will get cancelled.
      res = res ^ ar[i];
  
    return res;
  }
  
  let Array = [3,2,1,1,5,2,3];
  console.log("Element occurring once is " +
    findSingle(Array));
  //a^a is always false or zero.
  // a^b depends.
