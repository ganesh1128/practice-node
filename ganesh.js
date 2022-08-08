let arr = [1,8,9,5,2,4]
let sum = 6;
let res = [];
for(i=0; i<=arr.length; i++){
    for (j=1; j<=arr.length; j++){
        if(sum == arr[i] + arr[j+1]){
            res.push([arr[i], arr[j+1]])
        }
    }
}
console.log(res);
