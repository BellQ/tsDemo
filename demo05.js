/**
 * Created by hehe on 2017/3/10.
 */
var arr = [12, 2, 3, 4, 5,];
arr.esc = 'six number';
arr.forEach(function (x) { return console.log(x); });
for (var n in arr) {
    console.log(n);
    console.log(arr[n]);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    console.log(n);
}
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var n = arr_2[_a];
    if (n == 2) {
        break;
    }
    console.log(n);
}
