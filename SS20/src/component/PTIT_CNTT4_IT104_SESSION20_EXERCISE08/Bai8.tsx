import { useReducer } from 'react'
type State = {
    name:string,
    email: string
}
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

const initialState: State = {
  name: "",
  email: "",
};
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_EMAIL":
            return {...state, name: action.payload}    
        default:
            return state
    }
}
export default function UserForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User Information Form</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #007bff",
          borderRadius: "8px",
        }}
      >
        <h4>Thông tin người dùng:</h4>
        <p>Tên: {state.name || "(Chưa nhập)"}</p>
        <p>Email: {state.email || "(Chưa nhập)"}</p>
      </div>
    </div>
  )
}
