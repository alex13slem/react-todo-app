import {MyInput} from '../../../UI/inputs';

export const Search = ({className, filter, setFilter}) => {
  return (
    <MyInput
      className={className}
      placeholder="Поиск..."
      value={filter.query}
      onChange={(e) => setFilter({...filter, query: e.target.value})}
    />
  );
};
