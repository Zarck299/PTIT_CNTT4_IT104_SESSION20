import { useState } from 'react'
const data = [
  { id: 1, name: "Apple iPhone 13", description: "Smartphone mới nhất của Apple" },
  { id: 2, name: "Samsung Galaxy S21", description: "Smartphone flagship của Samsung" },
  { id: 3, name: "OnePlus 9 Pro", description: "Smartphone hiệu suất cao từ OnePlus" },
  { id: 4, name: "Google Pixel 6", description: "Điện thoại thông minh của Google" },
  { id: 5, name: "Xiaomi Mi 11", description: "Điện thoại thông minh giá rẻ" },
];
export default function Search() {
    const [keyword, SetKeyword] = useState("");
    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            item.description.toLowerCase().includes(keyword.toLowerCase())
    )
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <h2>Tìm kiếm sản phẩm</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={keyword}
        onChange={(e) => SetKeyword(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
      />

      {keyword && (
        <p>
          {filteredData.length} kết quả tìm thấy cho "<b>{keyword}</b>"
        </p>
      )}

      <div>
        {filteredData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              margin: "10px 0",
              textAlign: "left",
            }}
          >
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
