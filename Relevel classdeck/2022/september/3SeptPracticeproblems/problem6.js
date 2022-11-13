// Given an array . Your task is to find if there is a triplet present with the given sum.
// Input - [1,2,5,6,7,8,3], sum = 8
// Output - 1,2,5
//my approach.
const  a=[6,7,8,3,2,1,5], sum1 = 8;
function FindTriplet(a,sum)
{
   a.sort((a,b)=>a-b);
    n=a.length;
    let i=0;
    result=[];
    while(i<n)
    {
        if(a[i]+a[i+1]+a[i+2]==sum)
        result.push(a[i],a[i+1],a[i+2]);
        i++;
    }
    if(result[0]==null)
    return 'No triplet exist';
    else
    return result;
   

}
console.log('My approach:',FindTriplet(a,sum1));


//Relevel's approach:
function findTriplet(A, sum)
{
    let arr_size = A.length;
	let l, r;
    
	A.sort((a,b) => a-b);
	for (let i = 0; i < arr_size; i++) {

        
        l = i + 1;
		
		r = arr_size - 1;
		while (l < r) {
            if (A[i] + A[l] + A[r] == sum)
			{
                console.log("Triplet is " + A[i] + ", "
				+ A[l] + ", " + A[r]);
				return true;
			}
			else if (A[i] + A[l] + A[r] < sum)
            l++;
			else 
				r--;
		}
	}
    
	return false;
}



let A = [1,2,5,6,7,8,3 ];
let sum = 8;
console.log("Relevel's approach");
	findTriplet(A,sum);



