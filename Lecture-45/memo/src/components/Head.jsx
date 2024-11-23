import { useState } from "react"

export default function Head() {
  return (
    <div>
        <BadaHead naam="samarth" />
        <ChotaHead naam="maverick" />
    </div>
  )
}
function BadaHead(props){
    let [myname , setMyName] = useState(props.naam);
    function handleClick(){
        setMyName(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <ChotaHead naam={myname} />
        </div>
    )
}
function ChotaHead(props){
    return(
        <div>
            <h1>{props.naam} hu mai</h1>
        </div>
    )
}
