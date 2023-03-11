import {usePostsState} from '../../../../../store';
import {SortSelect} from '../../../../common';

export const PostsSortSelect = ({options}) => {
  const {filter, setFilter} = usePostsState();
  return <SortSelect filter={filter} setFilter={setFilter} options={options} />;
};
