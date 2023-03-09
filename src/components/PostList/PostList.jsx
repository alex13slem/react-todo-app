import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PostItem from '../PostItem/PostItem';
import cl from './PostList.module.scss';

const PostList = ({posts, setPosts, title}) => {
  const removePost = (post) => {
    setPosts([...posts].filter((el) => el.id !== post.id));
  };
  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {posts.length ? title : 'Посты не найдены'}
      </h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
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

export default PostList;
