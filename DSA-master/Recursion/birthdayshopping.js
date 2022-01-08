//Alex is celebrating his birthday and wants to buy a few things for himself.
//There are n items present in the shop indexed from 1 to n. He wished he could buy everything but he has been instructed by his mother that he can buy exactly k item.
//Alex has to buy exactly k items.
//print the all valid combinations of items he can buy.
//Input Format
//The first line contains two integers n and k.
//print each possible combinatio in a new line.

function printallCombinations(n, k) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    let result = [];
    let temp = [];
    printCombinations(arr, temp, 0, k, result);
    console.log(result);
}
function printCombinations(arr, temp, start, k, result) {
    if (k == 0) {
        result.push(temp.slice());
        return;
    }
    for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        printCombinations(arr, temp, i + 1, k - 1, result);
        temp.pop();
    }
}
printallCombinations(3,1);
//# sourceMappingURL=birthdayshopping.js.map