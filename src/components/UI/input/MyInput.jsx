import style from './my-input.module.scss';

const MyInput = props => {
  return <input {...props} className={style['my-input']} type="text" />;
};

export default MyInput;
