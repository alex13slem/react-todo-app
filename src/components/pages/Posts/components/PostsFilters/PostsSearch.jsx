import {usePostsState} from '../../../../../store';
import {Search} from '../../../../common';

export const PostsSearch = ({className}) => {
  const {filter, setFilter} = usePostsState();
  return <Search className={className} filter={filter} setFilter={setFilter} />;
};
