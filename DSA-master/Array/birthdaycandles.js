var arr = [3,1,2,3,3];

var obj = {};
for(var i =0;i<arr.length;i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]] += 1;
    }
}
var count = 0;
var max = 0;
for(var key in obj){
    if(obj[key] > max){
        max = obj[key];
        count++;
    }else if(obj[key] == max){
        count = 1;
    }
}
console.log(count);