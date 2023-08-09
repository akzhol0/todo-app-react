import { useState } from "react";
import MainButton from "./components/MainButton";
import MainText from "./components/MainText";
import PostList from "./components/PostList";
import MyModal from "./components/UI/modal/MyModal";
import "./styles/global.css";

function App() {
  const [posts, setPosts] = useState([
    { title: "Write essay", time: Date(), id: 1, sortYes: 'a', sortNo: 'b',},
    { title: "Do math", time: Date(), id: 2, sortYes: 'a', sortNo: 'b',},
    { title: "Go for a walk", time: Date(), id: 3, sortYes: 'a', sortNo: 'b',},
  ]);
  const [isModal, setIsModal] = useState(false);

  const addTask = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deleteTask = (delPost) => {
    posts.filter(() =>
      setPosts(posts.filter((post) => delPost.id !== post.id))
    );
  };

  const filterFunc = (sort) => {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const changeCompleted = (changePost) => {
    posts.forEach((post) => {
      if (post.id === changePost.id) {
        if (post.sortYes === 'a' && post.sortNo === 'b') {
          post.sortYes = 'b'; post.sortNo = 'a'
        } else {
          post.sortYes = 'a'; post.sortNo = 'b'
        }
      }
    });

    filterFunc('sortYes');
  };

  return (
    <div className="wrapper">
      <MyModal
        addTask={addTask}
        setIsModal={setIsModal}
        isModal={isModal}
        posts={posts}
      ></MyModal>
      <MainText>TODO LIST</MainText>
      <MainButton filterFunc={filterFunc} setIsModal={setIsModal} />
      <PostList
        changeCompleted={changeCompleted}
        deleteTask={deleteTask}
        posts={posts}
      />
    </div>
  );
}

export default App;
