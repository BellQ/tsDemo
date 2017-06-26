var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.show = function (point) {
        return point.name + " is age " + point.age + " and love " + point.love[0] + "\u3001" + point.love[1];
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var point = { name: 'BellQ', age: 22, love: ['play game', 'watch TV'] };
console.log(greeter.greet());
console.log(greeter.show(point));
