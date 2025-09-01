import React, { useState } from 'react'

export default function CheckInput() {
    const [key, SetKey] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const length = e.target.value.length;
        console.log(length);
        if (length > 5) {
            SetKey("Độ dài chuỗi vượt quá 5")
        }
    }
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h2>Kiểm tra độ dài chuỗi nhập vào: </h2>
      <input type="text" placeholder='Nhập chuỗi bạn muốn' onChange={handleChange}/>
      <p style={{color: "red"}}>{key}</p>
    </div>
  )
}
