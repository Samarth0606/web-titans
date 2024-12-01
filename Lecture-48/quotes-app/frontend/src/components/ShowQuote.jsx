import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

export default function ShowQuote() {
    let params = useParams();
    let [quote , setQuote] = useState({author:'' , text:''});
    // console.log(params , "params hook se");
    async function fetchQuote(){
        let resp = await axios.get(`http://localhost:5050/quotes/${params.id}`)
        // console.log(resp.data , "resp");
        let {text , author } = resp.data;
        setQuote({text , author})
    }
    useEffect(()=>{
        fetchQuote()
    } , [])
    
  return (
    <div>
        <h1>Showing a particular product</h1>
        <div>
            <h2>{quote.author}</h2>
            <p>{quote.text}</p>
        </div>
    </div>
  )
}
