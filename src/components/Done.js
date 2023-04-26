import React from "react";
import style from "./styles.module.css";
import CardList from "./CardList";
import TodoTitle from "./TodoTitle";

const Done = ({ done, setTodos, quantity }) => {
  return (
    <div className={style.todoCard}>
      <TodoTitle quantity={quantity} title={"Done"} />

      {done.map((item) => {
        return (
          <CardList
            key={item.id}
            todo={item}
            setTodos={setTodos}
            type="done"
            name="name"
          />
        );
      })}
    </div>
  );
};

export default Done;
