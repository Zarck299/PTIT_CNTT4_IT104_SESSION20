import React, {useState} from 'react'

export default function UserProfile() {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [submit, SetSubmitted] = useState(false)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        SetSubmitted(true);
    }
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h2>Thông tin người dùng</h2>
      <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nhập tên' value={name} onChange={(e) => SetName(e.target.value)}/>
            <input type="text" placeholder='Nhập email' value={email} onChange={(e) => SetEmail(e.target.value)}/>
            <button type="submit" style={{color: "green"}}>Gửi</button>
      </form>
      <div style={{display: `${submit  ? "block" : "none"}`}}> <br/>
            <div>Tên: {name}</div>
            <div>Email: {email}</div>
      </div>
    </div>
  )
}
