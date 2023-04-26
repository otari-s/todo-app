import React from "react";
import style from "./todoTitle.module.css";

function TodoTitle({ title, quantity }) {
  return (
    <div className={`${style.todoTitle} ${style[title]}`}>
      <h1>{title}</h1>
      <div className={style.line}></div>
      <span className={style.todoSpan}>{quantity}</span>
    </div>
  );
}

export default TodoTitle;
