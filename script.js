//fibonacci with recursion
// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     else {
//         return (fibonacci(n-1) + fibonacci(n-2))
//     }
// } 

//first n fibonacci numbers iterative
function fibs(n) {
    if (n < 0) return "error";
    if (n == 0) return 0;
    let firstNum = 1;
    let secondNum = 0;
    let fibonacciArray = [0];
    for (let i = 2; i <= n; i++) {
        let current = firstNum + secondNum;
        fibonacciArray.push(current)
        firstNum = secondNum;
        secondNum = current;
    }
    return fibonacciArray;
}
// console.log(fibs(8))


//first num fibonacci numbers recursion
function fibsRec(num, arr=[0,1]) {
    if (num == 0) return [];
    if (num == 1) return arr[0];
    if (num == 2) return arr;
    // console.log(newArr)
    newArr = fibsRec(num-1)
    newArr.push(newArr[newArr.length -1] + newArr[newArr.length -2]);
    return newArr;   
}
console.log(fibsRec(4))

//both newArr[newArr.length -1] and newArr.at(-1) do the same
//different solution first num fibonacci numbers with recursion
function fibsRec2(num) {
    if (num == 0) return [];
    if (num == 1) return [0];
    if (num == 2) return [0,1];

    let oldArray = fibsRec2(num-1);
    let lastNum = oldArray.at(-1);
    let secondLastNum = oldArray.at(-2);
    let nextNum = lastNum + secondLastNum;
    return oldArray.concat(nextNum);
}
// console.log(fibsRec2(5))