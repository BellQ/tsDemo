/**
 * Created by hehe on 2017/3/10.
 */
class Person{
    constructor(){
        console.log('hehe');
    }
   name:string;
   private eat(){
        console.log(`${this.name} want eat`);
    }
    eatP(){
        this.eat()
    }
}
var person1=new Person();
person1.name='BellQ';
person1.eatP();

var person2=new Person();
person2.name='Yan';
person2.eatP();

class PersonX{
    constructor(public name:string){
        this.name=name;
    }
    getName(){
        console.log(`${this.name}`);
    }
}
class Student extends PersonX{
    constructor(public name:string,public code:number){
        super(name);
        this.code=code;
    }
    getStu(){
        super.getName()
        console.log(`${this.name} 的编号为${this.code}`)
    }
}
var p1=new PersonX('BellQ');
p1.getName();
var s1=new Student('Yan',1364);
s1.getStu();

var arr:Array<PersonX>=[];
arr[0]=new Student('Yan',14632);
arr[1]=new PersonX('BellQ');

