import { memo, useCallback, useState } from "react";

export default function UseCallBack() {
    let [count , setCount] = useState(0);
    // let a = 1;
    let a = useCallback(function(){
        console.log("tere pind de gere marda");
    } , [])
  return (
    <div>
        <Hello lol={a} />
        <button onClick={()=>setCount(count+1)}>count: {count}</button>
    </div>
  )
}

let Hello = memo(function (props){
    return(<div>{props.lol()}</div>)
})