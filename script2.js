//synchronous
// console.log("I");

// setTimeout(() =>{
//     console.log("Sync JS");
// },2000);
// console.log("am");
/////----////

function loadingData(){

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("1) loading Data");
            resolve();
        },2000)
    })
   
}
function collectingData(){
    setTimeout(()=>{
        console.log("2) collecting Data")
    },2000)
}
function approvingData(){
    console.log("3) approving Data")
}
function approved(){
    console.log("4) approved")
}

loadingData().then(collectingData());


async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
Ex();


let obj={
    name:"Sudh",
    age:25,
    fun: function(){
        console.log("I am function");
    }
}
console.log(obj.fun());

//Array of object

let arr=[
    {
        user:1,
        name:"aman"
    },
    {
        user:2,
        name:"rohan"
    },
    {
        user:3,
        name:"suman"
    }
]
console.log(arr);
console.log(arr[0]);