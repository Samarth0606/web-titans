import { useRef, useState } from "react"

export default function Reff() {
    let [count,setCount] = useState(0);
    let refEl = useRef(0)
    function handleBtn1(){
        setCount(count+1)
    }
    function handleBtn2(){
        refEl.current+=1;
    }
  return (
    <div>
        <button onClick={handleBtn1}>State : {count}</button>
        <button onClick={handleBtn2}>Ref : {refEl.current}</button>
    </div>
  )
}




