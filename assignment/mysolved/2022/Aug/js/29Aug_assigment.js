/*"Write a program to sort an integer array with custom number as reference.
Sample Input:
2356481790
0 1 2 3 9 5 6 2 8 1 9
*/

const reference = [2, 3, 5, 6, 4, 8, 1, 7, 9, 0];
const input = [0, 1, 2, 3, 9, 5, 6, 2, 8, 1, 9];
function sortref(inp, ref) {
 const result = [];
  for (num of ref) {
    for (num1 of inp) {
      if (num1 == num) result.push(num);
    }
  }
  return result;
}
const result = sortref(input, reference);
console.log(result);
