var Person = (function () {
    function Person(config) {
        this.config = config;
    }
    Person.prototype.eat = function () {
    };
    return Person;
}());
var p1 = new Person({
    name: "BellQ",
    age: 22
});
