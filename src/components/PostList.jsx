import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, removePost }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        {posts.length ? title : 'Посты не найдены'}
      </h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
          <CSSTransition key={post.id} classNames="post" timeout={500}>
            <PostItem
              id={post.id}
              number={idx + 1}
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
