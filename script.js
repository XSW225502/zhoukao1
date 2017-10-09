var arr = [2,5,8,2,8,7,9];
// 第一种方法
// function fn(arr){
//     var brr = [];
//     for(var i=0;i<arr.length;i++){
//         if(brr.indexOf(arr[i])===-1){
//             brr.push(arr[i]);
//         }
//     }
//     return brr;
// }
// console.log(fn(arr));
// 第二种方法
var num=null;
for(var i=0;i<arr.length;i++){
    num=arr[i];
    for(var j=i+1;j<arr.length;j++){
        if(num===arr[j]){
            arr.splice(j,1);
        }
    }
}
console.log(arr);