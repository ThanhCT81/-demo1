function BoxGame(props) {
  return (
    <div onClick={() => props.handle_play(props.index)} className="BoxGame">
      {props.value}
    </div>
  );
}
export default BoxGame;
