const PostComments = ({ comments, ...props }) => {
  const classNames = {
    commentsBlock: `comments${
      !props.classNames?.commentsBlock
        ? ''
        : ' ' + props.classNames?.commentsBlock
    }`,
    commentItem: `comment${
      !props.classNames?.commentItem ? '' : ' ' + props.classNames?.commentItem
    }`,
  };
  return (
    <div className={classNames.commentsBlock}>
      {comments.map(com => (
        <div className={classNames.commentItem}>
          <h3>Пользователь: {com.name}</h3>
          <p>{com.body}</p>
          <p>
            <i>Email: {com.email}</i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
