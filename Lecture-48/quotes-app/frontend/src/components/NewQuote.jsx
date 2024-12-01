import React, { Fragment, useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewQuote() {
  let navigate = useNavigate()
  const usernameRefInput = useRef();
  const quoteRefInput = useRef();

  async function addQuoteHandler(e){
    e.preventDefault();//reload/refresh ❌
    let author = usernameRefInput.current.value;
    let text = quoteRefInput.current.value;
    try{
      let resp = await axios.post('http://localhost:5050/allquotes',  {author , text} )
      // console.log(resp , "resp post axios");
      navigate('/');
    }
    catch(e){
      console.log("cannot create a new quote");
    }
  }
  
  return (
    <Fragment>
      <h1>NewQuote</h1>
      <form onSubmit={addQuoteHandler}>
        <div>
          <label htmlFor="autor">Author:</label>
          <input type="text" ref={usernameRefInput} id="autor" placeholder='Enter Author Name' />
        </div>
        <div>
          <label htmlFor="quote">Quote:</label>
          <textarea rows={5} ref={quoteRefInput} cols={40} id="quote" placeholder='Enter Quote Here' />
        </div>
        <button>Add Quote</button>
      </form>
    </Fragment>
  )
}
