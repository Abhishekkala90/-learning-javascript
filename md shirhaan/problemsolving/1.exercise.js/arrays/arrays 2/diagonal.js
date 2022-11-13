//diagonal can have zero..
function isDiagonalMat(mat) {
    for(let i =0; i<mat.length; i++) {
        for(let j = 0; j <mat[i].length;j++) {
            if((i!=j && mat[i][j]!=0) ||(i==j && mat[i][j]==0)) {
                return false;
            }
        }
    }
    return true;
}


let mat = [
    [1,1,0],
    [0,5,0],
    [0,0,3]
    
];

console.log(isDiagonalMat(mat));
//but here i hava made an strict diagonal