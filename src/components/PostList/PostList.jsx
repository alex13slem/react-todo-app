import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useSortedAndSearchedPosts} from '../../hooks';
import {usePostsState} from '../../store';
import {PostItem} from '../PostItem';
import cl from './PostList.module.scss';

export const PostList = ({title}) => {
  const {posts: postsState, filter, setPosts} = usePostsState();
  const posts = useSortedAndSearchedPosts(
    postsState,
    filter.sort,
    filter.query
  );

  const removePost = (post) => {
    setPosts([...posts].filter((el) => el.id !== post.id));
  };
  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {posts.length ? title : 'Посты не найдены'}
      </h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
            key={post.id}
            classNames={{
              enter: cl['anim-enter'],
              enterActive: cl['anim-enter-active'],
              exit: cl['anim-exit'],
              exitActive: cl['anim-exit-active'],
            }}
            timeout={500}
          >
            <PostItem
              id={post.id}
              number={post.id}
              post={post}
              removePost={removePost}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
