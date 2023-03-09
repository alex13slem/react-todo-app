import {Modal} from '../../../../common';
import {PostForm} from '..';

export const ModalCreatePost = () => {
  return (
    <Modal wrapperId={'modal-create-post'}>
      <PostForm />
    </Modal>
  );
};
