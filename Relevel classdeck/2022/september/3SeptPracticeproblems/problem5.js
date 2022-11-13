/*
Problem - 5
Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the
elements which occur in both the arrays.
Example-1
Input: A: [1 2 3 3 4 5 6] B: [3 3 5]
Output: [3 3 5]
*/
let A1 = [1, 2, 3, 3,3,3,3, 4, 5, 6];
        let A2 = [3, 3,4,4,4,4,4, 5];
        function intersection(a1,a2)
        {
            let result=[];
            let m = a1.length;
            let n = a2.length;
            let i=0;j=0;
            while(i<m && j<n)
            {
                if(a1[i]>a2[j])
                j++;
                else if(a1[i]<a2[j])
                i++;
                else{
                    result.push(a1[i]);
                    i++;
                    j++;
                }
            }
            return result;
            
}
console.log('My approach:',intersection(A1,A2));

//Relevel's approach.
function printIntersection(arr1, arr2, m, n) {
    var i = 0,
    j = 0;
    while (i < m && j < n) {
    if (arr1[i] < arr2[j])
    i++;
    else if (arr2[j] < arr1[i])
    j++;
    else {
       console.log(arr2[j++] + " ");
        i++;
        }
        }
        }
        var arr1 = [1, 2, 3, 3,3,3,3, 4, 5, 6];
        var arr2 = [3, 3, 5];
        var m = arr1.length;
        var n = arr2.length;
        console.log("\nRelevel's approach:")
        printIntersection(arr1, arr2, m, n);
        //better approach