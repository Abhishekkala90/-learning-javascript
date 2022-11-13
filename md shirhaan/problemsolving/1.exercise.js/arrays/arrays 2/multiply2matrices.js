function mulMatrices(m,n)
{

    let c = m[0].length;
    let r=n.length;
    if(c!=r)
    {
        return false;
    }
        //generating matrix.
        let result=[];
        for(let i=0;i<m.length;i++){
        result[i]=[];
    }
    for(let i=0;i<m.length;i++)
    {
        for(j=0;j<m[0].length;j++)
        {
            let sum=0;
            for(let k=0;k<m[0].length;k++)
            {
                sum+=m[i][k]*n[k][j];
            }
            result[i][j]=sum;
        }
    }
    return result;
}

let a=[
    [1,2],
    [3,4]
];
let b=[
    [5,6],
    [7,8],
    
];
console.log(mulMatrices(a,b));
//suppose a=>[a b]  and b=> [e f] then a*b=>[ae+bg  af+bh] you can say row multiply to column.
//           [c d]          [g h]           [ce+dg  cf+dh]

//condition for multiplication of matrix is elements in row of matrix should be equal to elements in colulmn of matrix 2.