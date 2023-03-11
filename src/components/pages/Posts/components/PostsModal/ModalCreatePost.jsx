import {Modal} from '../../../../common';
import {PostsForm} from '..';

export const ModalCreatePost = () => {
  return (
    <Modal wrapperId={'modal-create-post'}>
      <PostsForm />
    </Modal>
  );
};
