export const PostCommentItem = ({className, item}) => {
  return (
    <div className={className}>
      <h3>Пользователь: {item.name}</h3>
      <p>{item.body}</p>
      <p>
        <i>Email: {item.email}</i>
      </p>
    </div>
  );
};
