import { Alert, Button, Input, Stack } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const formValueDefault = {
  title: '',
  body: '',
};

const TodoForm = ({ getNewPost }) => {
  const titleField = useRef(null);
  const bodyField = useRef(null);
  const setFieldFocus = field => field?.current.focus();

  const [formValue, setFormValue] = useState(formValueDefault);
  const [formError, setFormError] = useState('');
  const [isInvalid, setIsInvalid] = useState({ title: false, body: false });

  const formAttentions = {
    titleFalse: () => {
      setIsInvalid({ ...isInvalid, title: true });
      setFormError(<Alert>Заполните поле "Заголовок"</Alert>);
    },
    bodyFalse: () => {
      setIsInvalid({ ...isInvalid, body: true });
      setFormError(<Alert>Заполните поле "Описание"</Alert>);
    },
    fieldsFalse: () => {
      setIsInvalid({ title: true, body: true });
      setFormError(<Alert>Все поля должны быть заполнены!</Alert>);
    },
    noAttention: () => {
      setFormError('');
      setIsInvalid({ title: false, body: false });
    },
  };

  const createNewPost = event => {
    const { title: titleValue, body: bodyValue } = formValue;
    event.preventDefault();

    if (titleValue && bodyValue) {
      formAttentions.noAttention();
      const newPost = { ...formValue, id: Date.now() };
      getNewPost(newPost);
      setFormValue(formValueDefault);
      // setFieldFocus(titleField); // Поставить курстор в поле "Заголовок" после создания нового поста
      return;
    } else if (!titleValue && !bodyValue) {
      formAttentions.fieldsFalse();
      setFieldFocus(titleField);
      return;
    }
    if (!titleValue) {
      formAttentions.titleFalse();
      setFieldFocus(titleField);
      return;
    }
    if (!bodyValue) {
      formAttentions.bodyFalse();
      setFieldFocus(bodyField);
      return;
    }
  };

  return (
    <Stack as={'form'} spacing={3} marginBlock={10}>
      {formError}
      <Input
        isInvalid={isInvalid.title}
        ref={titleField}
        variant="flushed"
        placeholder="Title"
        value={formValue.title}
        onChange={event => {
          setFormValue({ ...formValue, title: event.target.value });
          event.target.value && setIsInvalid({ ...isInvalid, title: true });
        }}
      />
      <Input
        isInvalid={isInvalid.body}
        ref={bodyField}
        variant="flushed"
        placeholder="Description"
        value={formValue.body}
        onChange={event => {
          setFormValue({ ...formValue, body: event.target.value });
          event.target.value && setIsInvalid({ ...isInvalid, body: true });
        }}
      />
      <Button type="submit" alignSelf={'end'} onClick={createNewPost}>
        Create Todo
      </Button>
    </Stack>
  );
};

export default TodoForm;
