import React from "react";

const Post = ({post, number, deleteTask, changeCompleted}) => {
  return (
    <div className="item">
      <div className="left-block">
        <input onClick={() => changeCompleted(post)} className="inp-checkbox" type="checkbox" />
        <div className="item-name">
          <strong>{post.id}. {post.title}</strong>
          <small>{post.time}</small>
        </div>
      </div>
      <div className="rigth-block">
        <button onClick={() => deleteTask(post)} className="item-btns"></button>
        <button className="item-btns edit"></button>
      </div>
    </div>
  );
};

export default Post;
