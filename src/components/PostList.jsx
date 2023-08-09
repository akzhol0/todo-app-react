import React from "react";
import Post from "./Post";

const PostList = ({ deleteTask, posts, changeCompleted }) => {
  return (
    <div className="items-wrapper">
      <div className="items">
        {posts.length ? (
          posts.map((post, index) => (
            <Post
              deleteTask={deleteTask}
              number={index + 1}
              key={post.id}
              post={post}
              changeCompleted={changeCompleted}
            />
          ))
        ) : (
          <p style={{ fontSize: "28px" }}>Empty</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
