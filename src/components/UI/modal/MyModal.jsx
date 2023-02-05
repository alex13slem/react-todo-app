import cl from './my-modal.module.scss';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClassArray = [cl['modal']];
  if (visible) {
    rootClassArray.push(cl['active']);
  }
  const rootClass = rootClassArray.join(' ');

  return (
    <div
      className={rootClass}
      onClick={e => {
        if (e.target.className === rootClass) {
          setVisible(false);
        }
      }}
    >
      <div className={cl['window']}>{children}</div>
    </div>
  );
};

export default MyModal;
