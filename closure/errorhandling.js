// try and catch throw

function d(a,b){
    try{
        if(b==0){
            throw new Error("Cant Divide by 0")
        }
        else{
            return a/b;
        }
    }
    catch(err){
        console.log(err.message)
    }
}
console.log(d(10,0))