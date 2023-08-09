import React from "react";
import styles from "./MySelect.module.css";

const MySelect = ({ filterFunc }) => {
  return (
    <select onChange={(e) => filterFunc(e.target.value)} className={styles.selct}>
      <option disabled value="">Sort</option>
      <option value="sortYes">Completed</option>
      <option value="sortNo">Not completed</option>
    </select>
  );
};

export default MySelect;
