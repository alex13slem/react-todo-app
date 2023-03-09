import MyBtn from '../UI/buttons/MyBtn';
import cl from './PostItem.module.scss';

const PostItem = ({post, number, id, removePost}) => {
  return (
    <div className={cl['post']}>
      <div className={cl['post__content']}>
        <strong>
          {number}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className={cl['post__btns']}>
        <MyBtn isLink to={`${id}`}>
          Перейти
        </MyBtn>
        <MyBtn onClick={(e) => removePost({id})}>Удалить</MyBtn>
      </div>
    </div>
  );
};

export default PostItem;
