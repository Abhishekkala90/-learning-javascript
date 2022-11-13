//Print the nodes of a Binary Tree from left to right.
let n1 = {
    val : 1,
    left : null,
    right : null
}

let n2 = {
    val : 2,
    left : null,
    right : null
}

let n3 = {
    val : 3,
    left : null,
    right : null
}

let n4 = {
    val : 4,
    left : null,
    right : null
}

let n5 = {
    val : 5,
    left : null,
    right : null
}

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
function printLeaf(node) {
    if(node.left == null && node.right == null) {
        console.log(node.val);
    }
    if(node.right != null) {
        printLeaf(node.right);
    }
    if(node.left != null) {
        printLeaf(node.left);
    }
}


console.log(n1);

printLeaf(n1);
// leaf is a node which has no branches.