import { useEffect, useState } from "react"

export default function Effect(){
    let [count , setCount] = useState(0);
    // useEffect(cb , [])
    // useEffect(function(){
    //     async function sam(){

    //     }
    //     sam();
    // } , [])
    function handleClick(){
        setCount(count+1)
    }

    console.log("mai state change hu");
    useEffect(function(){
       setTimeout(()=>{
        console.log("mai effect change hu");
       } , 2000)
    } , [count])

    return(
        <div>
            <h1>i am effect</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}