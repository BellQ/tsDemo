/**
 * Created by hehe on 2017/3/10.
 */
export class hello{


}

let age:number=23;
let name:string='BellQ';
let love:any={};
function getLove(){
    return `${name} Love ${love}`;
}
function box(template,name,age):void{
    console.log(template);
    console.log(name);
    console.log(age);
}
function box2():string{
    return '';
}

box`my name is ${name},I'm ${age}`

class Person{
    name:string;
    age:number;
}
const person=new Person();
person.name='BellQ';
person.age=23;

function box3(a:string,b?:string,c:string='BellQ'){
    console.log(a);
    console.log(b);
    console.log(c);
}
box3('s','w','y');
box3('w','q');
box3('w');

function box4(...args){
    args.forEach(function(arg){
        console.log(arg);
    })
}
box4(1,2,3,4,5,6);