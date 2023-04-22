import { useState } from "react";
import Box from "./Box";
import BoxGame from "./BoxGame";
import "./App.css";
function App1() {
  const [show, setShow] = useState(true);
  const handle_click = () => {
    alert("Em đã gặp anh trong buổi chiều nắng ấm!!!");
  };
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [check, setCheck] = useState(true);
  const handle_play = (index) => {
    if (board[index] !== "") return;
    const newBoard = [...board];
    newBoard[index] = check ? "X" : "O";
    setBoard(newBoard);
    setCheck(!check);
  };
  return (
    <div>
      {show ? <Box name={"Lê Chó"} old={2} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle Mount</button>
      <div className="game">
        {board.map((value, key) => {
          return (
            <BoxGame value={board[key]} handle_play={handle_play} index={key} />
          );
        })}
      </div>
    </div>
  );
}
export default App1;
