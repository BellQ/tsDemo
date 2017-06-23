/**
 * Created by hehe on 2017/3/10.
 */
var arr=[12,2,3,4,5,];
arr.esc='six number';
arr.forEach(x=>console.log(x));
for(var n in arr){
    console.log(n);
    console.log(arr[n]);
}
for(var n of arr){
    console.log(n);
}
for(var n of arr){
    if (n==2){
        break;
    }
    console.log(n);
}