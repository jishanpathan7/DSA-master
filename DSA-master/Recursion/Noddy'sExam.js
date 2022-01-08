 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
 
function main(input) {
 
 
     let str = input.split('\n')[0]
    let n = str.split(' ')[1]
    let strArr = input.split('\n')[1]
    let arr = strArr.split(' ');
    let isSkip = false;
    let sum = 0;
    for(let i = 0 ; i < arr.length ;i++){
        if( parseInt(arr[i])  <= n){
            sum++
        }else if(!isSkip) {
            isSkip = true
        }else{
            console.log(sum)
            return
        }
   }
     console.log(sum)
 // Writing output to STDOUT
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
//input format
// 7 6
// 4 3 7 6 7 2 2
 
// Write your code here
process.stdin.on("end", function () {
   main(stdin_input);
});
 
 
 