import React, { useEffect, useRef, useState } from 'react';
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  theme,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoCard from './components/TodoCard';
import TodoForm from './components/TodoForm';

const App = () => {
  const [postsData, setPostsData] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex!',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex!',
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex!',
    },
  ]);

  const addNewPost = newPost => setPostsData([...postsData, newPost]);
  const removePost = postId => {
    setPostsData(postsData.filter(el => el.id !== postId));
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher pos="absolute" right={15} top={15} />
        <Container maxW={'5xl'}>
          <TodoForm getNewPost={addNewPost} />
          <SimpleGrid mt={5} mb={5} columns={[1, 2, 3]} gap={30}>
            {postsData.map(post => (
              <TodoCard key={post.id} data={post} removeFn={removePost} />
            ))}
          </SimpleGrid>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
