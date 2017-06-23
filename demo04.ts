/**
 * Created by hehe on 2017/3/10.
 */
var add=(num1,num2)=>num1+num2;
console.log(add(12, 10));
var arr=[1,2,3,4,5,7,9,15];
console.log(arr.filter(x=>x%3===0));

function box(name:string){
    this.name=name;
    setTimeout(()=>console.log(`Your name is ${this.name}`),1000)
}
box('BellQ');