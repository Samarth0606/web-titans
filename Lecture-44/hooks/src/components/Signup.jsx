// export default function Signup(props){
//     let naam = props.name;
//     function handleLogout(){
//         console.log(naam);
//         naam = "Anonymous";
//         console.log(naam);
//     }


//     return(
    //         <div>
    //             <h1>Name: {naam} </h1>
    //             <h1>Age: {props.age} </h1>
    //             {/* <button onClick={handleLogout} >Logout</button> */}
    //             <button onClick={()=> handleLogout() } >Logout</button>
    //         </div>
    //     )
    // }
    
    // -----------------------------
    
import { useState } from "react"

export default function Signup(props){
    let [naam , setNaam] = useState(props.name);

    function handleLogout(){
        console.log(naam , "1");
        setNaam('Anonymous');
        console.log(naam , "2");
    }

    return(
        <div>
            <h1>Name: {naam} </h1>
            <h1>Age: {props.age} </h1>
            <button onClick={()=>handleLogout()}>Logout</button>
        </div>
    )
}

