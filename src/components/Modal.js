import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import style from "./modal.module.css";

const Modal = ({ setModal, setTodos }) => {
  //  form input setter******************
  const [value, setValue] = useState(``);
  return (
    <div className={style.formDiv}>
      <form
        className={style.modalForm}
        onSubmit={(e) => {
          e.preventDefault();
          setTodos((prev) => {
            return {
              ...prev,
              backlog: [...prev.backlog, { id: uuid(), text: value }],
            };
          });
          setValue("");
          setModal(false);
        }}
      >
        <input
          className={style.formInput}
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className={style.formBtn} type="submit" disabled={!value}>
          add
        </button>
      </form>
    </div>
  );
};

export default Modal;
