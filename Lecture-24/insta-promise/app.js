
let step1 = function(){
    console.log('plz wait selecting the image...')
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('selected image');
        } , 4000)
    })
}
let step2 = function(data){
    console.log(`plz wait applying filter to the ${data}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('filtered image')
        } , 2000)
    })
}
let step3 = function(filter){
    console.log(`plz wait adding caption to the ${filter}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            reject('unable to caption')
        } , 6000)
    })
}
let step4 = function(caption){
    console.log(`plz wait uploading the ${caption}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('uploaded image')
        } , 5000)
    })
}

// step1().then().then()
step1()
.then(function(data){
    console.log(data)
    return step2(data)
})
.then(function(filter){
    console.log(filter)
    return step3(filter)
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(){
    console.log("image uploaded")
})
.catch(function(err){
    console.log(err)
})