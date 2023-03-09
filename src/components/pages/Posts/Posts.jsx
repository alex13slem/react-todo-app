import {useEffect, useState} from 'react';
import cl from './style.module.scss';
import {PostService} from '../../../API/PostService';
import {useFetching, useSortedAndSearchedPosts} from '../../../hooks';
import {getPageCount, getTotalCount} from '../../../utils/pages';
import PostList from '../../PostList/PostList';
import MyBtn from '../../UI/buttons/MyBtn';
import LoadingScreen from '../../UI/loading-screen/LoadingScreen';
import MyPagination from '../../UI/paginations/MyPagination';
import {Search, SortSelect} from '../../common';
import {useModal} from '../../../store/useModal';
import {usePosts} from '../../../store/usePosts';
import {ModalCreatePost} from './components';

export const Posts = () => {
  // Базовые хуки
  const {posts, setPosts} = usePosts();
  const {setOpen: setOpenModal} = useModal();
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  // Кастомные хуки
  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    filter.sort,
    filter.query
  );
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const totalCount = getTotalCount(response);
      setPosts(response.data);
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  // Функции компонента

  const changePage = (pageNum) => {
    setPage(pageNum);
    fetchPosts(limit, pageNum);
  };

  // useEffect
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);
  return (
    <section className={cl['sect']}>
      <ModalCreatePost />
      <MyBtn className={cl['add-btn']} onClick={() => setOpenModal(true)}>
        Добавить пост
      </MyBtn>

      <Search className={cl['search']} filter={filter} setFilter={setFilter} />

      <SortSelect
        filter={filter}
        setFilter={setFilter}
        options={[
          {name: 'По заголовку', value: 'title'},
          {name: 'По описанию', value: 'body'},
        ]}
      />

      {postsError && <pre style={{color: 'red'}}>{postsError}</pre>}
      {isPostsLoading && <LoadingScreen />}
      <PostList
        posts={sortedAndSearchedPosts}
        setPosts={setPosts}
        title={'Список постов 1'}
      />

      <MyPagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </section>
  );
};
