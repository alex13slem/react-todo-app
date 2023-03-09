import cl from './my-input.module.scss';

export const MyInput = (props) => {
  return (
    <input
      {...props}
      className={[cl['my-input'], props.className].join(' ')}
      type="text"
    />
  );
};
