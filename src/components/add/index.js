import React from "react";

function Add(props) {
  function handleTitle(e) {
    const tit = e.target.value;
    console.log(tit);
  }
  function handleDescription(e) {
    const car = e.target.value;
    console.log(car);
  }
  function Add() {
    props.add(handleTitle());
    // let title = document.querySelector(".title").value;
    // let car = document.querySelector(".car").value;
    // if ((title && car) !== "") {
    //   props.add(title, car);
    // } else {
    //   alert("some fileds are empty");
    // }
  }
  return (
    <header className="header">
      <input
        type="text"
        className="title"
        onChange={handleTitle}
        placeholder="Enter title"
      />
      <input
        type="pasword"
        onChange={handleDescription}
        className="car"
        placeholder="Enter car"
      />
      <button onClick={Add}>Add</button>
    </header>
  );
}

export default Add;