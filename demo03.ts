/**
 * Created by hehe on 2017/3/10.
 */
function getName(){
    return {
        name:'BellQ',
        age:23
    }
}
let {name,age}=getName();
console.log(name);
console.log(age);

let arr=[1,2,3,4,5,6,7];
let [num1,...num2]=arr;
console.log(num1);
console.log(num2);
function num([num1,...num2]){
    console.log(num1);
    console.log(num2);
}
num(arr);