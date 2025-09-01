import { useEffect, useState } from 'react'

export default function Timer() {
    const [count, SetCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>{
            SetCount((prev) => prev +1);
        })
        return () => {
            clearInterval(intervalId);
            console.log("Timer đã được dừng khi component");
            
        };
    }, [])
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h2>Bộ đếm thời gian: {count}</h2>
    </div>
  )
}