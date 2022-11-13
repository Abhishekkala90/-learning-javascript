//Find the unique elements in the array if not found then  print "no unique elements found."
//A unique element is the element which is not repeated.
//Shirhan's solution.
// const mat=
// [[2,14,15,18],
// [10,18,14,22],
// [8,21,22,15],
// [10,14,21,28]]
// //output-2,8
// function unique(mat) {
//     let map = {};

//     for(let row of mat) {
//         for(let num of row) {
//             map[num] = (map[num] || 0) + 1;
            
//         }
//     }
//     for(let key in map) {
//     if(map[key] == 1) {
//         console.log(key);
//     }
// }
// }
// unique(mat); //uncomment for output.

//Relevel's approach.


var R = 4, C = 4;

// Function that calculate
// unique element
function unique(mat, n, m)
{
	var maximum = 0, flag = 0;
	for(var i = 0; i < n; i++)
		for(var j = 0; j < m; j++)
		
			// Find maximum element in a matrix
			if (maximum < mat[i][j])
				maximum = mat[i][j];

	// Take 1-D array of (maximum + 1) size
	var b = Array(maximum+1).fill(0);
	for(var i = 0 ; i < n; i++)
		for(var j = 0; j < m; j++)
			b[mat[i][j]]++;

	// Print unique element
	for(var i = 1; i <= maximum; i++)
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
unique(mat, R, C);
