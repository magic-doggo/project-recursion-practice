// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     else {
//         return (fibonacci(n-1) + fibonacci(n-2))
//     }
// }

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
console.log(fibs(8))
