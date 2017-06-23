/**
 * Created by hehe on 2017/3/10.
 */
interface Box{
    name:string;
    age:number;
}
interface BoxF{
    eat()
}
class Person implements BoxF{
    constructor(public config:Box){

    }
    eat(){

    }
}
var p1=new Person({
    name:"BellQ",
    age:22
});
