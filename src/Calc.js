// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";

function Calc() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const handle_A = (e) => {
    setA(e.target.value);
  };
  const handle_B = (e) => {
    setB(e.target.value);
  };
  const handle_Sum = () => {
    setC(a * 1 + b * 1);
    setA("");
    setB("");
  };
  const handle_Minus = () => {
    setC(a - b);
    setA("");
    setB("");
  };
  const handle_Multi = () => {
    setC(a * b);
    setA("");
    setB("");
  };
  const handle_Division = () => {
    setC((a / b).toFixed(2));
    setA("");
    setB("");
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="Nhập A" value={a} onChange={handle_A} />
        <input type="text" placeholder="Nhập B" value={b} onChange={handle_B} />
      </form>
      <button onClick={handle_Sum}>+</button>
      <button onClick={handle_Minus}>-</button>
      <button onClick={handle_Multi}>*</button>
      <button onClick={handle_Division}>/</button>
      <h1>Kết quả phép tính là: {c}</h1>
    </div>
  );
}

export default Calc;
