function numberOfPaths(m, n)//better approach.
    {
    
        // If either given row number is first or
        // given column number is first
        if (m == 1 || n == 1)//in actual the matrix starts form 0th index so we are starting the matrix from
            return 1;
        
        // If diagonal movements are allowed then
        // the last addition is required.
        return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1);// recursion tree.
       
       // + numberOfPaths(m - 1, n - 1);
    }
    
    console.log(numberOfPaths(2,2));

    //shirhaan's approach.//better explaination.
    function maze(i,j,r,c) {
        if(i==r && j == c) {
            return 1;
        }
        let down = 0;
        let right = 0;
        if(i<r) 
            down = maze(i+1, j,r,c);
        if(j < c)
            right = maze(i,j+1,r,c);
        return down + right;
        
    }
    
    maze(0,0,1,2);