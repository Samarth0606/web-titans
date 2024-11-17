import { useEffect, useState } from "react"


export default function Time() {
    let [time , setTime] = useState(0);
    
    useEffect(function(){
        let id = setInterval(function(){
            setTime(time+1)
        } , 1000)

        // cleanup fn
        return ()=> clearInterval(id)
    } , [])

  return (
    <div>Timer: {time}</div>
  )
}

