//Synchronous

// const { reject } = require("async");

// const { reject } = require("async");

// const { reject } = require("async");

// console.log("This");
// console.log("is");
// console.log("sync");

//Asynchronous

// console.log("This");
// setTimeout(()=>{
//     console.log("is");
// },5000)

// setTimeout(()=>{
//     console.log("sync");
// },2000)

function loadingData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1}Loading Data...")
            resolve();
        },1000)
    })
  
}
function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2}Loading Data...")
            resolve();
            
        },3000)
    })
    
}
function approvingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3}Loading Data...")
            reject();
        },2000)
    })
    
}
function approved(){
    console.log("4}Loading Data...")
    
}

// loadingData(function(){
//     collectingData(function(){
//         approvingData();
//         approved();
//     });
// });
// loadingData().then(collectingData).then(approvingData).then(approved).catch((err)=>{
//             console.log(err)
// })

 async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

Ex().catch((err)=>{
    console.log(err)
});


