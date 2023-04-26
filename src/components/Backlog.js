import React, { useState } from "react";
import { Card } from "./Card";
import Modal from "./Modal";
import style from "./styles.module.css";
import { MdAdd } from "react-icons/md";
import TodoTitle from "./TodoTitle";
function Backlog({ backlog, setTodos, quantity }) {
  //   modal form setter
  const [modal, setModal] = useState(false);
  return (
    <div className={style.todoCard}>
      <TodoTitle quantity={quantity} title={"Backlog"} />

      {backlog.map((item) => {
        return (
          <Card key={item.id} todo={item} setTodos={setTodos} type="backlog" />
        );
      })}

      {modal ? <Modal setTodos={setTodos} setModal={setModal} /> : null}
      <button
        onClick={() => {
          setModal(true);
        }}
        className={style.modalBtn}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export { Backlog };
