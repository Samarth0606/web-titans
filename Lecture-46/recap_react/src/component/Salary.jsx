// import { useEffect } from "react";

// export default function Salary(){
//     let salary = 4000000;

//     useEffect(function(){
//         setTimeout(function(){
//             document.querySelector('#salaryy').innerHTML = 20;
//         } , 3000)
//     } , [])

//     return(
//         <div>
//             <h1>FLEXING : <span id="salaryy"> {salary} </span></h1>
//         </div>
//     )
// }



import { useEffect, useRef, useState } from "react";

export default function Salary(){
    // let salary = 4000000;
    let [salary , setSalary] = useState(4000000);
    let spanEl = useRef();
    console.log(spanEl , "spanEl");
    useEffect(function(){
        setTimeout(function(){
            console.log(spanEl.current);
            spanEl.current.innerHTML = 20;
        } , 3000)
    } , [])

    return(
        <div>
            <h1>FLEXING : <span ref={spanEl}> {salary} </span></h1>
        </div>
    )
}