//Qshift the negative elements of an array to the end of an array.
//My approach.
let a=[-5,3,-4,88,-9,-10,21,5,6];
// function separatenegative(a)
// {
//     let result=[];
//     for(let i=0;i<a.length;i++)
//     {if(a[i]>=0)
//         result.push(a[i]);
//     }
//     for(let i=0;i<a.length;i++)
//     {if(a[i]<0)
//         result.push(a[i]);
//     }
//     console.log(result);
//     }

//     separatenegative(a);
    
    //2.shirhaans approach.
    function seperatePosNeg(arr) {
    
        let b=0;
        let e=arr.length-1;
        let temp;
        while(e>b)
        {
            if(arr[b]>0)
                b++;
            else if(arr[e]<0)
            e--;
            else{
                temp=arr[b];
                arr[b]=arr[e];
                arr[e]=temp;
            }
        }console.log(arr);
        }
        seperatePosNeg(a);
    