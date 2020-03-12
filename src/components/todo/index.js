import React from "react";
import "./style.css";

function Todo(props) {
  //   function edit() {
  //     let title = document.querySelector(".mytittle").value;
  //     let desc = document.getElementById("wq").value;
  //     console.log(desc);
  //     props.update(props.id, title, desc);
  //   }
  function qwe() {
    props.qwe(props.id);
  }
  return (
    <div className="todo">
      <h2 className="todo__title">{props.title}</h2>
      <input type="text" className="mytittle" />
      <p className="todo__description">{props.desc}</p>
      <input type="text" className="myDesc" data-columns id="wq" />
      {/* <button onClick={edit}>edit</button> */}
      <button onClick={qwe}>delete</button>
    </div>
  );
}

export default Todo;
