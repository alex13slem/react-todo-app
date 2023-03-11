import {PostCommentItem} from './components';

export const PostComments = ({
  comments,
  classNames = {
    commentsBlock: null,
    commentItem: null,
  },
}) => {
  return (
    <div className={classNames.commentsBlock}>
      {comments.map((item) => (
        <PostCommentItem className={classNames.commentItem} item={item} />
      ))}
    </div>
  );
};
