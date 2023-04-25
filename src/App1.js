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

  const [status, setStatus] = useState("");
  const handle_play = (index) => {
    if (calculaterWiner(board)) {
      setStatus("Winner: " + calculaterWiner(board));
    } else {
      if (board[index] !== "") return;
      let newBoard = [...board];
      newBoard[index] = check ? "X" : "O";
      setBoard(newBoard);
      setCheck(!check);
    }
  };
  const calculaterWiner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  return (
    <div>
      {show ? <Box name={"Lê Chó"} old={2} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle Mount</button>
      <h1>{status}</h1>
      <div className="game">
        {board.map((value, key) => {
          return (
            <BoxGame
              value={board[key]}
              handle_play={handle_play}
              index={key}
              key={key}
              status={status}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App1;
