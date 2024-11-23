import React, { memo, useState } from 'react'

export default function Memooo() {
    let [gaana,setGaana] = useState("samarth");
    function handleChange(){
        setGaana(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Burger naam={gaana} />
        <button onClick={handleChange}>Click me</button>
        <Burger naam="chipi" />
        <Burger naam="chapa" />
        <Burger naam="duby" />
    </div>
  )
}
let Burger = memo(function(props){
    return(
        <h1>i am burger of {props.naam}</h1>
    )
})


// function Burger(props){
//     return(
//         <h1>i am burger of {props.naam}</h1>
//     )
// }
