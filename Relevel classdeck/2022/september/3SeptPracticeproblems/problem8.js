/*
Given a grid of size NxM, K cells have plants while remaining have weeds. Your job is to lay fence
on the grid such that the following conditions are met: If adjacent cells are plants no need to put
fence between them If adjacent cell is of weed, then put a fence.

Note: Cells are said to be adjacent if they share the same boundary.
And building of fences can happen on cell boundaries. So now the total length of constructed fence
will be calculated as count of pairs of the side adjacent cells such that there is a fence built on there
common side on sides of cells. On the grid boundary which have fences built on them. Find the
minimum required length of the total length of fences that needs to be built.

Example-1
Input:
n = 4;
m = 4;
k = 1;
arr = [[1,1]];
Output:
4
*/
var N, M, K;
	N = 4;
	M = 4;
	K = 1;
	var items = [
	  [1, 1]
	];
	var set = [];
	for ( i = 0; i < K; i++) {
  
     set[i] = items[i][0] + " " + items[i][1];
  
	  
	}
	var value = K * 4;
	console.log(set);
	for (i = 0; i < K; i++) {
	  s1 = items[i][0] + " " + (items[i][1] - 1);
	  s2 = items[i][0] + " " + (items[i][1] + 1);
	  s3 = (items[i][0] - 1) + " " + items[i][1];
	  s4 = (items[i][0] + 1) + " " + items[i][1];
	  console.log(s1+" "+s2+" "+s3+" "+s4);
	  if (set.includes(s1))
	    value--;
	  if (set.includes(s2))
	    value--;
	  if (set.includes(s3))
	    value--;
	  if (set.includes(s4))
	    value--;
	}
	console.log(value);
	