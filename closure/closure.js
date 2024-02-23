function outside(){
    var a =1;
    console.log("This is function 1:"+a)
    function inside(){
        console.log("This is function 2 :"+a);
    }
    inside();
}
outside();