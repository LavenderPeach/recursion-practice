function fibs(n) {
    const arr = [0,1];
    if (n<=0) return "Please enter a valid number."
    if (n === 1) return [0];
    if (n === 2) return [arr];
    for (let i = 2; i < n; i++)
        arr.push(arr[arr.length-2]+arr[arr.length-1]);
    return arr;
}

console.log(fibs(8));