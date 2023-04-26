import React from "react";
import CardList from "./CardList";
import style from "./styles.module.css";
import TodoTitle from "./TodoTitle";

function InProgress({ inProgress, setTodos, quantity }) {
  return (
    <div className={style.todoCard}>
      <TodoTitle quantity={quantity} title={"In Progress"} />
      {inProgress.map((item) => {
        return (
          <CardList
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

export default InProgress;
