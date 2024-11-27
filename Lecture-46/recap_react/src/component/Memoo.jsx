import { Fragment, memo, useState } from "react"

export default function App() {
  let  [name , setName] = useState("samarth")
  function handleClick(){
    setName(Math.floor(Math.random()*10))
  }
  return (
    <div>
      <Head naam={name} />
      <button onClick={handleClick}>Click</button>
      <Head naam="maverick" />
      <Head naam="kashish" />
    </div>
  )
}
let Head = memo(function(props){
  return(
    <>
      <h1>i am {props.naam}</h1>
    </>
  )
})

