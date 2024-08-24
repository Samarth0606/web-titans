function step1(fn){
    console.log('plz wait i am selecting image');
    setTimeout(function(){
        // console.log("image selected");
        fn("selected image");
    } , 4000)
}

function step2(image , fn){
    console.log(`plz wait i am applying filter on ${image}`);
    setTimeout(function(){
        fn("filtered image")
    } , 2000)
}

function step3(filter , fn){
    console.log(`plz wait adding caption on ${filter}`);
    setTimeout(function(){
        fn('captioned image')
    } , 6000)
}
function step4(caption){
    console.log(`plzz wait uploading ${caption}`);
    setTimeout(function(){
        console.log("image uploaded finally")
    } , 5000)
}

step1( function(image){
    console.log(image);
    step2(image , function(filter){
        console.log(filter);
        step3(filter , function(caption){
            console.log(caption);
            step4(caption);
        })
    });
} );
