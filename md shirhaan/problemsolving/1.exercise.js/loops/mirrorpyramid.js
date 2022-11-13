function printPyramidUp(n) {
    for (let i = 1; i <= n; i++) {
        let str = giveMeNSpaces(i - 1);
        for (let j = i; j <= n; j++) {
            str += j + "   ";
        }

        console.log(str);
    }
}
function printPyramidDown(n) {
    for (let i = n; i > 0; i--) {
        let str = giveMeNSpaces(i - 1);
        {
            for (j = i; j <= n; j++) {
                str += j + '   ';
            }
            if (i == n)
                continue;
        } console.log(str);
    }
}
function giveMeNSpaces(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "  ";
    }
    return str;
}
function mirrorPyramid(n) {
    printPyramidUp(n);
    printPyramidDown(n)
}
mirrorPyramid(8);