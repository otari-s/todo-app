import React from "react";
import style from "./styles.module.css";
import { Card } from "./Card";
import TodoTitle from "./TodoTitle";

function Done({ done, setTodos, quantity }) {
  return (
    <div className={style.todoCard}>
      <TodoTitle quantity={quantity} title={"Done"} />

      {done.map((item) => {
        return (
          <Card
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
}

export { Done };
