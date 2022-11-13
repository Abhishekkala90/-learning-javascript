function indexMinElement(a) {
    {
        min = a[0];
        let index = 0;
        for (let i = 0; i < a.length; i++) {
            if (min > a[i]) {
                min = a[i];
                index = i;
            }
        } return index;
    }

}
function sortAscend(a) {
    let result = [];
    length = a.length;
    for (let i = 0; i < length; i++) {
        min = indexMinElement(a);
        b = a.splice(min, 1);
        result[i] = b[0];
    }
    return result;

}
let a = [0, 1, 1, 0, 1, 0, 0, 1]
console.log(sortAscend(a));