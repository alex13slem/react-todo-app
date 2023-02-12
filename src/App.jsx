import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyBtn from './components/UI/button/MyBtn';
import MyModal from './components/UI/modal/MyModal';
import MyPagination from './components/UI/pagination/MyPagination';
import { useFetching } from './hooks/useFetching';
import { usePagination } from './hooks/usePagination';
import { usePosts } from './hooks/usePosts';

import './style.scss';
import { getPageCount } from './utils/pages';

function App() {
  // Базовые хуки
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [selectPage, setSelectPage] = useState(1);

  // Кастомные хуки
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, selectPage);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const pagesArray = usePagination(totalPages);

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
  }, [selectPage]);

  return (
    <div className="App">
      <MyBtn style={{ marginBlock: 30 }} onClick={() => setVisibleModal(true)}>
        Добавить пост
      </MyBtn>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <pre style={{ color: 'red' }}>{postsError}</pre>}
      {isPostsLoading ? (
        <h1 style={{ textAlign: 'center' }}>Идёт загрузка...</h1>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов 1'}
        />
      )}
      <MyPagination pagesNums={pagesArray} setSelectPage={setSelectPage} />
    </div>
  );
}

export default App;
