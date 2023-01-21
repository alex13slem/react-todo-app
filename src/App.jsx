import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AlertIcon,
  ChakraProvider,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  theme,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoCard from './components/TodoCard';
import TodoForm from './components/TodoForm';
import TodoSelect from './components/TodoSelect';
import { FaSearch } from 'react-icons/fa';

const App = () => {
  const [postsData, setPostsData] = useState([
    {
      id: 1,
      title: 'Заметка 1',
      body: 'фффффффффффффффф',
    },
    {
      id: 2,
      title: 'Заметка 2',
      body: 'кккккккккккккккккккккккккккккк',
    },
    {
      id: 3,
      title: 'Заметка 3',
      body: 'ёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёё',
    },
  ]);

  const [filterValue, setFilterValue] = useState({
    value: 'DEFAULT',
    reverse: false,
  });

  const addNewPost = newPost => setPostsData([...postsData, newPost]);
  const removePost = postId => {
    setPostsData(postsData.filter(el => el.id !== postId));
  };

  const selectFilterValue = ({ value, reverse }) => {
    setFilterValue({ value, reverse });
    if (reverse) {
      setPostsData(
        [...postsData]
          .sort((a, b) => a[value].localeCompare(b[value]))
          .reverse()
      );
    }
    if (!reverse) {
      setPostsData(
        [...postsData].sort((a, b) => a[value].localeCompare(b[value]))
      );
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher pos="absolute" right={15} top={15} />
        <Container maxW={'5xl'} display="flex" flexDirection={'column'}>
          <TodoForm getNewPost={addNewPost} />
          <Flex wrap={'wrap'} justifyContent={'end'} gap={'25px'}>
            <InputGroup flex={['auto', , '1']}>
              <Input placeholder="Поиск" />
              <InputRightElement
                color={'var(--chakra-colors-gray-300)'}
                _dark={{ color: 'var(--chakra-colors-whiteAlpha-200)' }}
                children={<FaSearch />}
              />
            </InputGroup>
            <TodoSelect
              placeholder={'Сортировать'}
              options={[
                { name: 'По заголовку', value: 'title' },
                { name: 'По описанию', value: 'body' },
              ]}
              value={filterValue}
              getCurrentValue={req => selectFilterValue(req)}
            />
          </Flex>
          <SimpleGrid mt={5} mb={5} columns={[1, 2, 3]} gap={30}>
            {postsData.length ? (
              postsData.map(post => (
                <TodoCard key={post.id} data={post} removeFn={removePost} />
              ))
            ) : (
              <Alert status="warning" gridColumn={'span 3'}>
                <AlertIcon />
                Заметок пока нет
              </Alert>
            )}
          </SimpleGrid>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
