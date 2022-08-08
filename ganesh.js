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

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
  
  // matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
  
  const n = matrix.length;
    const x = Math.floor(n/ 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          k = matrix[i][j];
          matrix[i][j] = matrix[y - j][i];
          matrix[y - j][i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[j][y - i]
          matrix[j][y - i] = k
          
       }
    }
    console.log(matrix)