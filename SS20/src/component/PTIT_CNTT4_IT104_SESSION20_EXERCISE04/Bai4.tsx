import {useEffect, useState } from 'react'

export default function PageTitle() {
    const [title, SetTitle] = useState("");
    useEffect(() => {
        document.title = title
    }, [title])
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
        <h2>Bai 4</h2>
        <div>Chào mừng bạn đến với trang web của chúng tôi</div>
        <input type="text" placeholder='Nhập lời chào của bạn' onChange={(e) => SetTitle(e.target.value)}/>
        <p>Tiêu đề trang sẽ thay đổi khi bạn nhậ tên vào trường nhập bên trên</p>
    </div>
  )
}
