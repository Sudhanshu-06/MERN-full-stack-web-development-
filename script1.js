function name(){
    console.log("I am sudhanshu");
}
name();

function name1(a){
    console.log(a+"I am sudhanshu");
}
name1("Hello ");

function name2(a,b){
    console.log(a+ "I am Sudh" +b);
}
name2("Hello ", " Hi");

function xyz(a,b){
    console.log(a+b);
}
xyz(2,3);

function xyz1(a,b,c){
    console.log(a+b+c);
}
let c=6;
xyz1(2,3,c)


let sum = function(a,b){
    return a+b;
}
console.log(sum(2,3));

//Arrow Function

let sum1 = (a,b) => a+b;
console.log(sum(2,3));

//Arrays

let num = [1,2,3,4,5];
console.log(num);
console.log(num[2]);
console.log(num.length);