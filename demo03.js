/**
 * Created by hehe on 2017/3/10.
 */
function getName() {
    return {
        name: 'BellQ',
        age: 23
    };
}
var _a = getName(), name = _a.name, age = _a.age;
console.log(name);
console.log(age);
var arr = [1, 2, 3, 4, 5, 6, 7];
var num1 = arr[0], num2 = arr.slice(1);
console.log(num1);
console.log(num2);
function num(_a) {
    var num1 = _a[0], num2 = _a.slice(1);
    console.log(num1);
    console.log(num2);
}
num(arr);
