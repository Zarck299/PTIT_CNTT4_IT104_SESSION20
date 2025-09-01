import { useEffect, useRef, useState } from 'react'

export default function FocusInput() {
    const [open, SetOpen] = useState(false);
    const isRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(open){
            isRef.current?.focus();
        }
    }, [open])
    const handleOpen = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
  return (
    <div>
        <h1>Bài 6</h1>
        <h2>Ưngs dụng React với modal và focus input</h2>
        <button onClick={handleOpen}>Mở</button>
        {open && (
            <div>
                <h1>Đăng nhập</h1>
                <input ref={isRef} type="text" placeholder='Nhập tên người dùng'/>
                <br />
                <button onClick={handleClose}>Đóng</button>
            </div>
        )}
    </div>
  )
}
