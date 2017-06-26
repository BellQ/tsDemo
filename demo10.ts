/**
 * Created by hehe on 2017/6/26.
 */
interface point{
    name: string,
    age: number,
    love: [
        string,
        string
        ]
}
class Greeter {
    greeting: string;
    constructor(public message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    show(point) {
        return `${point.name} is age ${point.age} and love ${point.love[0]}、${point.love[1]}`
    }
}

let greeter = new Greeter("world");
const point={name:'BellQ',age:22,love:['play game','watch TV']}

console.log(greeter.greet());
console.log(greeter.show(point))


