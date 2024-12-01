import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quote(props) {
  let navigate = useNavigate()
  // function handleShow(){
  function handleShow(id){
    // navigate(`/quotes/${props.id}`)
    navigate(`/quotes/${id}`)
  }
  return (
    <div>
        <div>
            <p>{props.text}</p>
            <h2>{props.author}</h2>
            {/* <button onClick={handleShow}>View Quote</button> */}
            <button onClick={()=>handleShow(props.id)}>View Quote</button>
        </div>
    </div>
  )
}
