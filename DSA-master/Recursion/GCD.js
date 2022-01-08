//Question link: https://oj.masaischool.com/contest/2781/problem/03


function  implementGCD(a, b) {
    if (b == 0) {
        return a;
    }
    return implementGCD(b, a % b);
}
console.log(implementGCD(2,25));