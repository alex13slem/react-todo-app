import {usePostsState} from '../../../../../store';
import {MyPagination} from '../../../../UI/paginations';

export const PostsPagination = () => {
  const {page, totalPages, setPage} = usePostsState(
    (state) => state.pagination
  );
  return (
    <MyPagination totalPages={totalPages} page={page} changePage={setPage} />
  );
};
