/**
 * Created by hehe on 2017/3/10.
 */
function box(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
//let arg1=[1,2,3,4];
//box(...arg1);  ES6语法现在typescript还不支持
function* doSomething(){
    console.log('start');
    yield ;
    console.log('finish');
}
const doSome=doSomething();
doSome.next();
setTimeout(function(){
    doSome.next();
},1000);
//typescript 目前还不支持

function* getMath(){
    while (true){
        yield Math.random()*100;
    }
}
const getMathgen=getMath();
let minSpr=15;
let start=100;
while (start>minSpr){
    start=getMathgen.next().value;
    console.log(`The IBM is ${start}`);
}
console.log(`buy at ${start}`);