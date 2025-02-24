let promise = new Promise(function(resolve, reject){
    console.log("Wait for promise");
    setTimeout(function(){
        let data = "promise is resolved, found the data";
        let err = 'promise is rejected, did not recieved the money';
        resolve(data);
        reject(data);
    },2000)
    
})


promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})