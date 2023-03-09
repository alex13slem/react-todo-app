import {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {useModal} from '../../../store/useModal';
import {formatClassName} from '../../../utils/format';
import ReactPortal from '../../React/ReactPortal';
import cl from './style.module.scss';

export const Modal = ({
  children,
  classNames = {
    backdrop: '',
    window: '',
  },
  wrapperId,
}) => {
  const nodeRef = useRef(null);
  const {open: isOpen, setOpen} = useModal();

  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === 'Escape' ? setOpen(false) : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [setOpen]);

  return (
    <ReactPortal wrapperId={wrapperId}>
      <CSSTransition
        in={isOpen}
        timeout={{entry: 0, exit: 300}}
        unmountOnExit
        classNames={{
          enterDone: cl['modal-enter-done'],
          exit: cl['modal-exit'],
        }}
        nodeRef={nodeRef}
      >
        <div
          className={formatClassName([cl['backdrop'], classNames.backdrop])}
          onClick={(e) =>
            e.target === nodeRef.current ? setOpen(false) : null
          }
          ref={nodeRef}
        >
          <div className={formatClassName([cl['window'], classNames.window])}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
