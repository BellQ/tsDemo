/**
 * Created by hehe on 2017/3/10.
 */
var add = function (num1, num2) { return num1 + num2; };
console.log(add(12, 10));
var arr = [1, 2, 3, 4, 5, 7, 9, 15];
console.log(arr.filter(function (x) { return x % 3 === 0; }));
function box(name) {
    var _this = this;
    this.name = name;
    setTimeout(function () { return console.log("Your name is " + _this.name); }, 1000);
}
box('BellQ');
