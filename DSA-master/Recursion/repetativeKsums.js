function geta(ar,n,k)
{
    //var ans=[];//can try array
    var ans="";
    //ans.push(ar[0]/k);
    var temp=ar[0]/k;
    ans=ans+temp;
    //console.log("ans is "+ans);
    //console.log("ar is "+ar);
    //var i=0;
    var l=k-1;
    while(n>1)
    {
        //var j=ans[i]*k;
        var j=temp*k;
        //console.log("j is "+j);
        var index=ar.indexOf(j);
        //console.log(index);
        while(ar[index]==j)
        {
            index++;
        }
        //ans.push(ar[index]-j+ans[i]);
        temp=ar[index]-j+temp;
        ans=ans+" "+temp;

        //i++;
        n--;
    }
    return ans;
}

function processData(input) {
    //Enter your code here
    var inp=input.split("\n");
    var t=parseInt(inp[0],10);
    for (var i=0;i<2*t-1;i++)
    {
        var nk=inp[i+1].split(" ");
        var n=parseInt(nk[0],10);
        var k=parseInt(nk[1],10);
        i++;
        var arr=inp[i+1].split(" ").map(num=>parseInt(num,10));
        var ans=geta(arr,n,k);
        //console.log(n+"nk"+k+" "+arr);
        console.log(ans);
    } 
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});