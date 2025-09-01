import { useReducer } from 'react'
type CounterState ={
    count: number
}
type CounterAction = { type: "increment" } | { type: "decrement" };
function reducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};  
        default:
            return state;
    }
}
export default function Count() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Bài 7: useReducer Counter</h2>
      <p>Giá trị hiện tại: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
    </div>
  )
}
