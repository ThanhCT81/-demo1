function Box(props) {
  return (
    <div onClick={props.handle_click}>
      <h1>
        Tôi là {props.name} Tôi {props.old} tuổi.
      </h1>
    </div>
  );
}
export default Box;
