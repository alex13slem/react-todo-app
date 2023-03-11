import {useEffect} from 'react';
import cl from './style.module.scss';
import {PostService} from '../../../API/PostService';
import {useFetching} from '../../../hooks';
import {getPageCount, getTotalCount} from '../../../utils/pages';
import {MyBtn} from '../../UI/buttons';
import {useModalState} from '../../../store/useModalState';
import {usePostsState} from '../../../store/usePostsState';
import {
  ModalCreatePost,
  PostsPagination,
  PostsSearch,
  PostsSortSelect,
} from './components';
import {LoadingScreen} from '../../UI';
import {PostList} from '../../../components';

export const Posts = () => {
  // Базовые хуки
  const {setOpen: setOpenModal} = useModalState();
  const {setPosts} = usePostsState();
  const {page, limit, setTotalPages} = usePostsState(
    (state) => state.pagination
  );

  // Кастомные хуки
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const totalCount = getTotalCount(response);
      setPosts(response.data);
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);
  return (
    <section className={cl['sect']}>
      <ModalCreatePost />
      <MyBtn className={cl['add-btn']} onClick={() => setOpenModal(true)}>
        Добавить пост
      </MyBtn>

      <PostsSearch className={cl['search']} />

      <PostsSortSelect
        options={[
          {name: 'По заголовку', value: 'title'},
          {name: 'По описанию', value: 'body'},
        ]}
      />

      {postsError && <pre style={{color: 'red'}}>{postsError}</pre>}
      {isPostsLoading && <LoadingScreen />}
      <PostList title={'Список постов 1'} />

      <PostsPagination />
    </section>
  );
};
