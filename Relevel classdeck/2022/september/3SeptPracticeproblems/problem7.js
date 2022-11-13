// Problem - 7
// Given a 2D array. Our task is to find the unique elements. A unique element is an element whose
// frequency is 1 i.e. it is not repeating in the whole 2D Array.
// If there is no any unique element, print message as “No unique element found”

//Output 2,8,28.

//My approach.
const a = [
  [18, 14, 15, 18],
  [10, 8, 14, 22],
  [2, 21, 22, 15],
  [10, 14, 21, 28],
];
function unique1(a) {
  row = a.length;
  col = a[0].length;
  const result = [];
  let k = 0;
  let one_D = [];
  for (let i = 0; i < row; i++) {//Function to convert 2d to 1d.
    for (let j = 0; j < col; j++) {
      while (k < row * col) {  //Total elements in an matrix.
        one_D[k] = a[i][j];
        k++;
        break;
      }
    }
  }
  for (let i = 0; i < one_D.length; i++) {
    let count = 0;
    for (let j = 0; j < one_D.length; j++) {
      if (one_D[i] == one_D[j]) {
        count++;
      }
    }
    if (count == 1) result.push(one_D[i]);//to check if the element is repeated or not using counter every no is count atleast for once.
  }
  if(result.length==0)
  return 'No Unique Elements';
  else
  return result;
}
console.log("My approach:");
console.log(unique1(a));


//Relevel's approach:Its a bit confusing but chalega they are using index approach.
var R = 4, C = 4;

// Function that calculate
// unique element
function unique(mat, n, m)
{
	var maximum = 0, flag = 0;
	for(var i = 0; i < n; i++)//because var has global scope.
		for(var j = 0; j < m; j++)
		
			// Find maximum element in a matrix
			if (maximum < mat[i][j])
				maximum = mat[i][j];

	// Take 1-D array of (maximum + 1) size
	var b = Array(maximum+1).fill(0);
	for(var i = 0 ; i < n; i++)
		for(var j = 0; j < m; j++)
			b[mat[i][j]]++;//if same element(of mat) it will be incremented again so the  value of that index(element of mat) of b gets greater then 1.

	// Print unique element
	for(var i = 0; i < maximum; i++)
		if (b[i] == 1)
			console.log(i + " ");
			flag = 1;
			
	if (flag == 0)
	{
		console.log("No unique element found");
	}
    
}

//Input array
var mat = [ [ 11, 2, 2, 20 ],
			[ 5, 16, 20, 7 ],
			[ 1, 13, 5, 16 ],
			[ 6, 7, 18, 15 ] ];
				
//execute the logic
console.log("\nRelevel's approach:")
unique(mat, R, C);

