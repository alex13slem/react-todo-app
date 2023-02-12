import cl from './my-btn.module.scss';

const MyBtn = ({ children, ...props }) => {
  return (
    <button {...props} className={[cl['my-btn'], props.className].join(' ')}>
      {children}
    </button>
  );
};

export default MyBtn;
