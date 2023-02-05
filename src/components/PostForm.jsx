import { useState } from 'react';
import MyBtn from './UI/button/MyBtn';
import MyInput from './UI/input/MyInput';

const PostForm = ({ createPost }) => {
  const [newPostFields, setNewPostFields] = useState({
    title: '',
    body: '',
  });

  const addNewPost = e => {
    e.preventDefault();
    const newPost = {
      ...newPostFields,
      id: Date.now(),
    };
    createPost(newPost);
    setNewPostFields({
      title: '',
      body: '',
    });
  };

  return (
    <form>
      <MyInput
        placeholder="Название поста"
        value={newPostFields.title}
        onChange={e =>
          setNewPostFields({ ...newPostFields, title: e.target.value })
        }
      />
      <MyInput
        placeholder="Описание поста"
        value={newPostFields.body}
        onChange={e =>
          setNewPostFields({ ...newPostFields, body: e.target.value })
        }
      />
      <MyBtn onClick={addNewPost}>Создать пост</MyBtn>
    </form>
  );
};

export default PostForm;
