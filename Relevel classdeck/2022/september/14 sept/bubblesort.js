let arr=[1,2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100];



function bubblesort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let flag = false;
        for (let j = 0; j < (arr.length-i-1); j++) { 
            if(arr[j]>arr[j+1]){ 
                flag = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        } 
        if(!flag) {
            break;
        }
    } 
    console.log(arr) ;
}
bubblesort(arr)
