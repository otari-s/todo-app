import React, { useState } from "react";
import style from "./card.module.css";
import {
  MdDeleteForever,
  MdArrowCircleRight,
  MdArrowCircleLeft,
  MdFileDownloadDone,
} from "react-icons/md";
function Card({ todo, setTodos, type }) {
  const [done, setDone] = useState(false);
  return (
    <div className={style.cardList}>
      <h2 className={done ? style.done : ``}>{todo.text}</h2>

      <div className={style.btnDiv}>
        {/* left arrow button *****************************************************8 */}
        {type === "inProgress" ? (
          <MdArrowCircleLeft
            className={style.addLeftBtn}
            onClick={() => {
              setTodos((prev) => {
                return {
                  ...prev,
                  inProgress: prev.inProgress.filter(
                    (item) => item.id !== todo.id
                  ),
                  backlog: [
                    ...prev.backlog,
                    ...prev.inProgress.filter((item) => item.id === todo.id),
                  ],
                };
              });
            }}
          />
        ) : null}
        {/* delete button ******************************************************* */}
        {type === "backlog" ? (
          <MdDeleteForever
            className={style.deleteBtn}
            onClick={() => {
              setTodos((prev) => {
                return {
                  ...prev,
                  backlog: prev.backlog.filter((item) => item.id !== todo.id),
                };
              });
            }}
          />
        ) : null}
        {/* right arrow button ********************************************************* */}
        {type === "backlog" || type === "inProgress" ? (
          <MdArrowCircleRight
            className={style.addRightBtn}
            onClick={() => {
              if (type === "inProgress") {
                setTodos((prev) => {
                  return {
                    ...prev,
                    inProgress: prev.inProgress.filter(
                      (item) => item.id !== todo.id
                    ),

                    done: [
                      ...prev.done,
                      ...prev.inProgress.filter((item) => item.id === todo.id),
                    ],
                  };
                });
              }
              setTodos((prev) => {
                return {
                  ...prev,
                  backlog: prev.backlog.filter((item) => item.id !== todo.id),
                  inProgress: [
                    ...prev.inProgress,
                    ...prev.backlog.filter((item) => item.id === todo.id),
                  ],
                };
              });
            }}
          />
        ) : null}
        {/* done button **********************************************************8 */}
        {type === "done" ? (
          <MdFileDownloadDone
            className={style.doneBtn}
            onClick={() => {
              setDone(!done);
            }}
          />
        ) : null}

        {type === "done" ? (
          <MdDeleteForever
            className={style.deleteBtn}
            onClick={() => {
              if (!done) {
                setTodos((prev) => {
                  return {
                    ...prev,
                    done: prev.done.filter((item) => item.id !== todo.id),
                  };
                });
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export { Card };
