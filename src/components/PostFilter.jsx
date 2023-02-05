import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        style={{ marginBottom: '30px' }}
        placeholder="Поиск..."
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={sort => setFilter({ ...filter, sort: sort })}
        options={[
          { name: 'По заголовку', value: 'title' },
          { name: 'По описанию', value: 'description' },
        ]}
        defaultOption="Сортировать"
      />
    </>
  );
};

export default PostFilter;
