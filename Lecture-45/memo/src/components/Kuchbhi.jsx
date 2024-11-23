import { useMemo, useState } from "react"


export default function Kuchbhi() {
    let [count , setCount] = useState(0);
    let [inp , setInp] = useState(0);
    
    let out = useMemo(()=>{
        let sum = 0;
        for(let i=1;i<=inp;i++){
            sum = sum + i;
            console.log("mai chal diya");
        }
        return sum;
    } , [inp])

    function handleChange(e){
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} type="number" value={inp} />
        <h1> {out}</h1>
        <button onClick={()=>setCount(count+1)}> count:{count} </button>
    </div>
  )
}
