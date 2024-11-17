import { useEffect, useState } from "react"

export default function Api(){
    let [data , setData] = useState([]);

    async function calling(){
        let data1 = await fetch('https://api.tvmaze.com/search/shows?q=girls')
        let resp = await data1.json();
        setData(resp)
    }
    // calling()

    // useEffect(()=>{
    //     async function calling(){
    //         let data1 = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    //         let resp = await data1.json();
    //         setData(resp)
    //     }
    //     calling()

    // } , [])

    return(
        <div>
           <h1>i am api calling</h1>
        </div>
    )
}