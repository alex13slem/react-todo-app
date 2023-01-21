import { Card, CardBody, CardHeader, CloseButton } from '@chakra-ui/react';
import React from 'react';

const TodoCard = ({ data: { id, title, body }, removeFn }) => {
  return (
    <Card datatype="card">
      <CardHeader
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        color={'gray.900'}
        bg={'whitesmoke'}
        _dark={{ bg: '#3c4a60', color: 'gray.50' }}
      >
        {
          <h3
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </h3>
        }
        <CloseButton onClick={() => removeFn(id)} />
      </CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  );
};

export default TodoCard;
