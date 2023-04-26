import React from "react";
import { Card } from "./Card";
import style from "./styles.module.css";
import TodoTitle from "./TodoTitle";

function InProgress({ inProgress, setTodos, quantity }) {
  return (
    <div className={style.todoCard}>
      <TodoTitle quantity={quantity} title={"In Progress"} />
      {inProgress.map((item) => {
        return (
          <Card
            key={item.id}
            todo={item}
            setTodos={setTodos}
            type="inProgress"
          />
        );
      })}
    </div>
  );
}

export { InProgress };
