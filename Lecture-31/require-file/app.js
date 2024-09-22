    // import -> require
    // let samaan = require('./index'); //.js se farak nhi padhta
    // console.log(samaan , "saaman") //default = empty {}

    // way-1
    // let {PIII , objjj , sqrrr} = require('./index'); 
    // console.log(PIII);
    // console.log(objjj)
    // console.log(sqrrr)

    // console.log(sqrrr(4));
    // way-2

    // way-3

    // -----------------------

    // let storedExport = require("./index") //.js is not comp

    // console.log(storedExport) ; //default -> empty{}

    // ----------------------
    //way-1
    // let storedExport = require("./index") //.js is not comp
    // let {sammm , arrrr , abccc} = require("./index") 
    // console.log(storedExport)
    
    // console.log(storedExport.abccc)
    // console.log(storedExport.arrrr)
    // storedExport.sammm();


    // ----------------------
    //way-2
    // let {sam , arr , abc} = require("./index") //.js is not comp
    
    // sam()
    // console.log(abc)
    // console.log(arr)

    //  // ----------------------
    // //way-3
    // let {sam , arr , abc} = require("./index") //.js is not comp
    
    // sam()
    // console.log(abc)
    // console.log(arr)

    // ----------------------
    // naam karan change hua hai key ka ( value nhi)

    //way-4 //if you change the name then u wont be able to access it with the prev name
    let {sam:samm , arr , abc} = require("./index") //.js is not comp
    
    // sam() // ❌
    samm() // ✅
    // console.log(abc)
    // console.log(arr)


