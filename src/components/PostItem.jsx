import MyBtn from './UI/button/MyBtn';

const PostItem = ({ post, number, id, removePost }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className="post__btns">
        <MyBtn onClick={e => removePost({ id })}>Удалить</MyBtn>
      </div>
    </div>
  );
};

export default PostItem;
