import React, {useEffect, useState } from 'react'

export default function Welcome() {
    const [greeting, SetGreeting] = useState("");
    useEffect(() => {
        console.log("Component đã được render lần đầu");
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetGreeting(e.target.value)
    }
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
        <h2>Bai 3</h2>
        <input type="text" placeholder='Nhập lời chào của bạn' value={greeting} onChange={handleChange}/>
        <p>{greeting}</p>
    </div>
  )
}
