import React, { useMemo, useState } from 'react'

export default function UseMemoo() {
    let [count,setCount] = useState(0);
    let [inp,setInp] = useState(0);

    function handleInc(){
        setCount(count+1);
    }
    function handleInp(e){
        setInp(e.target.value)
    }
    let babuu = useMemo(function(){
        let ans=0;
        for(let i=1;i<=inp;i++){
            console.log("mai chaliii");
            ans+=i;
        }
        return ans;
    } , [inp])
    
  return (
    <div>
        <input onChange={handleInp} type="text" value={inp} />
        <h1>Answer: {babuu}</h1>
        <button onClick={handleInc}>increment:{count} </button>
    </div>
  )
}
