import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyBtn from './components/UI/button/MyBtn';
import MyModal from './components/UI/modal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';

import './style.scss';

function App() {
  // Базовые хуки
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModal, setVisibleModal] = useState(false);
  // Кастомные хуки
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
  // Функции компонента
  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };
  const removePost = post => {
    setPosts([...posts].filter(el => el.id !== post.id));
  };
  // useEffect
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyBtn style={{ marginBlock: 30 }} onClick={() => setVisibleModal(true)}>
        Добавить пост
      </MyBtn>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <h1 style={{ textAlign: 'center' }}>Идёт загрузка...</h1>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов 1'}
        />
      )}
    </div>
  );
}

export default App;
