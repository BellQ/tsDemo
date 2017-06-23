var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by hehe on 2017/3/10.
 */
var Person = (function () {
    function Person() {
        console.log('hehe');
    }
    Person.prototype.eat = function () {
        console.log(this.name + " want eat");
    };
    Person.prototype.eatP = function () {
        this.eat();
    };
    return Person;
}());
var person1 = new Person();
person1.name = 'BellQ';
person1.eatP();
var person2 = new Person();
person2.name = 'Yan';
person2.eatP();
var PersonX = (function () {
    function PersonX(name) {
        this.name = name;
        this.name = name;
    }
    PersonX.prototype.getName = function () {
        console.log("" + this.name);
    };
    return PersonX;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, code) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.code = code;
        _this.code = code;
        return _this;
    }
    Student.prototype.getStu = function () {
        _super.prototype.getName.call(this);
        console.log(this.name + " \u7684\u7F16\u53F7\u4E3A" + this.code);
    };
    return Student;
}(PersonX));
var p1 = new PersonX('BellQ');
p1.getName();
var s1 = new Student('Yan', 1364);
s1.getStu();
var arr = [];
arr[0] = new Student('Yan', 14632);
arr[1] = new PersonX('BellQ');
