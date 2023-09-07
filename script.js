function fibsRec(n) {
    return n<=0 ? "Please enter a valid number"
    : n === 1
    ? [0]
    : n === 2
    ? [0,1]
    :[...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
}

console.log(fibsRec(8));