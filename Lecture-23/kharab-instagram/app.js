function step1(){
    console.log("plzz wait i am selecting image....");
    setTimeout(function(){
        return 'selected image'
    } , 4000)
}
function step2(image){
    console.log(`plzz wait adding filter on ${image}`);
    setTimeout(function(){
        return 'filtered image'
    } , 2000)
}
function step3(filter){
    console.log(`plz wait adding caption to the ${filter}`);
    setTimeout(function(){
        return 'captioned image'
    } , 6000)
}
function step4(caption){
    console.log(`plz wait uploading the ${caption}`);
    setTimeout(function(){
        console.log(`${caption} uploaded`)
    } , 5000)
}

let image = step1();
let filter = step2(image);
let caption = step3(filter)
step4(caption)










