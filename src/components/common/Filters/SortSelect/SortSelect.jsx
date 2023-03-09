import {MySelect} from '../../../UI/selects';

export const SortSelect = ({className, filter, setFilter, options}) => {
  return (
    <MySelect
      className={className}
      value={filter.sort}
      onChange={(sort) => setFilter({...filter, sort})}
      options={options}
      defaultOption="Сортировать"
    />
  );
};
