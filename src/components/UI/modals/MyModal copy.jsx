import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import cl from './my-modal.module.scss';

const modalRootCopmonent = document.querySelector('#modal');

const MyModal = ({ children, open, onClose, ...props }) => {
  const element = useMemo(() => document.createElement('div'), []);
  element.className = [cl['modal'], props.className].join(' ');
  element.onclick = e => {
    if (e.target === element) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      modalRootCopmonent.appendChild(element);
      return () => modalRootCopmonent.removeChild(element);
    }
  }, [open]);

  return createPortal(
    <div className={[cl['window'], props.classList].join(' ')}>{children}</div>,
    element
  );
};

export default MyModal;
