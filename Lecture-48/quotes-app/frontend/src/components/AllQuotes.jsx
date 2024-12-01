import React, { Fragment, useEffect, useState } from 'react'
import Quote from './Quote';
import axios from 'axios';

export default function AllQuotes() {

  let [quotes , setQuotes] = useState([]);

  async function getQuotes(){
    let resp = await axios.get('http://localhost:5050/allquotes');
    // console.log(resp.data , "axios resp");
    setQuotes(resp.data);
  }

  useEffect(()=>{
    getQuotes()
  } , [])

  return (
    <Fragment>
      <h1>AllQuotes</h1>
      {
        quotes.map((quote , index)=>{
          return <Quote key={index} author={quote.author} text={quote.text} id={quote._id} />
        })
      }

    </Fragment>

  )
}
