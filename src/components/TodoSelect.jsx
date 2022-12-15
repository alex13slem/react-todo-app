import { Flex, IconButton, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { BsFilterRight } from 'react-icons/bs';

const TodoSelect = ({ getCurrentValue, value, placeholder, options }) => {
  const filterStyle = {
    standart: {},
    reverse: {
      transform: 'scale(1, -1)',
    },
  };
  return (
    <Flex justifyContent={'end'} gap={'10px'}>
      {value.value === 'title' || value.value === 'body' ? (
        <IconButton
          icon={
            value.reverse ? (
              <BsFilterRight style={filterStyle.reverse} />
            ) : (
              <BsFilterRight style={filterStyle.standart} />
            )
          }
          onClick={() => getCurrentValue({ ...value, reverse: !value.reverse })}
        />
      ) : (
        ''
      )}

      <Select
        w={['100%', '300px']}
        value={value.value}
        onChange={e =>
          getCurrentValue({ value: e.target.value, reverse: false })
        }
      >
        <option value="DEFAULT" disabled>
          {placeholder}
        </option>
        {options?.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default TodoSelect;
