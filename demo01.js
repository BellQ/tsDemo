"use strict";
exports.__esModule = true;
/**
 * Created by hehe on 2017/3/10.
 */
var hello = (function () {
    function hello() {
    }
    return hello;
}());
exports.hello = hello;
var age = 23;
var name = 'BellQ';
var love = {};
function getLove() {
    return name + " Love " + love;
}
function box(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
function box2() {
    return '';
}
(_a = ["my name is ", ",I'm ", ""], _a.raw = ["my name is ", ",I'm ", ""], box(_a, name, age));
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'BellQ';
person.age = 23;
function box3(a, b, c) {
    if (c === void 0) { c = 'BellQ'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
box3('s', 'w', 'y');
box3('w', 'q');
box3('w');
function box4() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
box4(1, 2, 3, 4, 5, 6);
var _a;
