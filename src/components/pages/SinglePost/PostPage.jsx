import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {PostService} from '../../../API/PostService';
import {useFetching} from '../../../hooks/useFetching';
import PostComments from '../../PostComments/PostComments';

export const PostPage = () => {
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);
  const {id} = useParams();
  const [fetchPost, postLoading, postError] = useFetching(async () => {
    const response = await PostService.getPost(id);
    setPost(response.data);
  });
  const [fetchPostComments, postComLoading, postComError] = useFetching(
    async () => {
      const response = await PostService.getPostComment(id);
      setPostComments(response.data);
    }
  );

  useEffect(() => {
    fetchPost();
    fetchPostComments();
  }, []);

  return postLoading ? (
    <h1>Загрузка...</h1>
  ) : (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <h1>Комментарии</h1>
      {postComLoading ? (
        <h2>Загрузка комментариев...</h2>
      ) : !postComments ? (
        <h2>Нет комментариев</h2>
      ) : (
        <PostComments comments={postComments} />
      )}
    </div>
  );
};