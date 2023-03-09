import {useEffect, useState} from 'react';
import {useModal, usePosts} from '../../../../../store';
import {Form} from '../../../../common';
import MyBtn from '../../../../UI/buttons/MyBtn';
import {MyInput} from '../../../../UI/inputs';
import cl from './PostForm.module.scss';

export const PostForm = () => {
  const {posts, setPosts} = usePosts();
  const {setOpen} = useModal();
  const [createError, setCreateError] = useState('');
  const [newPostFields, setNewPostFields] = useState({
    title: '',
    body: '',
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setOpen(false);
  };

  const addNewPost = () => {
    if (!newPostFields.body || !newPostFields.title) {
      setCreateError('Все поля должны быть заполнены');
    } else {
      const newPost = {
        ...newPostFields,
        id: Date.now(),
      };
      createPost(newPost);
      setNewPostFields({
        title: '',
        body: '',
      });
    }
  };

  useEffect(() => {
    createError &&
      newPostFields.body &&
      newPostFields.title &&
      setCreateError('');
  }, [newPostFields]);

  return (
    <Form className={cl['form']} isError={createError} onSubmit={addNewPost}>
      <MyInput
        placeholder="Название поста"
        value={newPostFields.title}
        className={createError && cl['error']}
        onChange={(e) =>
          setNewPostFields({...newPostFields, title: e.target.value})
        }
      />
      <MyInput
        placeholder="Описание поста"
        value={newPostFields.body}
        className={createError && cl['error']}
        onChange={(e) =>
          setNewPostFields({...newPostFields, body: e.target.value})
        }
      />
      <MyBtn>Создать пост</MyBtn>
    </Form>
  );
};
