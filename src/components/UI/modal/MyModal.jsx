import React from "react";
import { useState } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import styles from "./MyModal.module.css";

const MyModal = ({ isModal, setIsModal, addTask, posts }) => {
  const [input, setInput] = useState("");

  const addTaskCB = () => {
    if (input === "") return;

    const newPost = {
      title: input,
      time: Date(),
      sortYes: 'a', 
      sortNo: 'b',
      id: posts.length + 1,
    };

    setInput('');
    setIsModal(false);
    addTask(newPost);
  };

  return (
    <div
      style={{ display: isModal ? "flex" : "none" }}
      className={styles.modalWrapper}
    >
      <div className={styles.modal}>
        <p className={styles.text}>Add TODO</p>
        <MyInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Title..."
        />
        <div className={styles.wrapper}>
          <MyButton onClick={addTaskCB}>Add Task</MyButton>
          <MyButton
            onClick={() => setIsModal(false)}
            style={{ background: "#f32323" }}
          >
            Cancel
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
