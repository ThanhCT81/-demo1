import logo from "./logo.svg";
// import "./App.css";
import StudentList from "./StudentList";
import { useEffect, useState } from "react";
import { prettyDOM } from "@testing-library/react";
import Calc from "./Calc";

function App() {
  const [x, setX] = useState(0);
  const sv = [
    { name: "Heo", old: 2 },
    { name: "Gà", old: 3 },
  ];

  const [text, setText] = useState("Mèo");
  const [name, setName] = useState("");
  const [old, setOld] = useState("");
  const [check, setCheck] = useState(true);
  const [list, setList] = useState([1, 2, 3, 4]);
  const [animal, setAnimal] = useState(() => {
    let animalLocal;
    if (localStorage.getItem("list")) {
      animalLocal = JSON.parse(localStorage.getItem("list"));
    } else {
      animalLocal = sv;
    }
    return animalLocal;
  });
  const [student, setStudent] = useState({ name: "Nguyễn Gia Bảo", old: 5 });
  const handle_Increase = () => {
    // setX(x + 1);
    setX((pre) => pre + 1);
    setX((pre) => pre + 1);
  };
  const handle_ChangeText = (e) => {
    e.preventDefault();
    setText(name);
    //setStudent((pre) => ({ ...pre, name: name }));
    setStudent({ name: name, old: old });
    setOld("");
    setName("");
  };
  const handle_Add = () => {
    setAnimal((pre) => {
      const newList = [...pre, { name: name, old: old }];
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
    setName("");
    setOld("");
  };
  const handle_ChangeName = (e) => {
    setName(e.target.value);
  };
  const handle_ChangeOld = (e) => {
    setOld(e.target.value);
  };
  const handle_ToggleCheck = () => {
    setCheck((pre) => !pre);
  };
  return (
    <div>
      <h2>HELLO WORLD</h2>
      <h2>update lần 2</h2>
      <h2>update lần 3</h2>
      <h1>{x}</h1>
      <h1>{text}</h1>
      <h1>
        Họ và tên: {student.name}, Tuổi: {student.old},{JSON.stringify(student)}
      </h1>
      <h2>reactjs</h2>
      <button onClick={handle_Increase}>Increase</button>
      <button onClick={handle_ChangeText}>Change Text</button>
      <form onSubmit={handle_ChangeText}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_ChangeName}
        />
        <input
          type="text"
          placeholder="Old"
          value={old}
          onChange={handle_ChangeOld}
        />
      </form>
      <button onClick={handle_ToggleCheck}>Toggle Student</button>
      {check ? <StudentList /> : ""}
      {/* <Calc/> */}
      <ul>
        {list.map((st, key) => {
          return <li>{st}</li>;
        })}
      </ul>
      <ul>
        {animal.map((st, key) => {
          return (
            <li>
              {st.name} &#10084; {st.old}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handle_ChangeName}
      />
      <input
        type="text"
        placeholder="Old"
        value={old}
        onChange={handle_ChangeOld}
      />
      <button onClick={handle_Add}>Add Student</button>
    </div>
  );
}

export default App;
