import {formatClassName} from '../../../../utils/format';
import cl from './my-input.module.scss';

export const MyInput = (props) => {
  // console.log(props.className);
  return (
    <input
      {...props}
      className={formatClassName(cl['my-input'], props.className)}
      type="text"
    />
  );
};
