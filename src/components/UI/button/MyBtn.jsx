import style from './my-btn.module.scss';

const MyBtn = ({ children, ...props }) => {
  return (
    <button {...props} className={style['my-btn']}>
      {children}
    </button>
  );
};

export default MyBtn;
