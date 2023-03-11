import {Link} from 'react-router-dom';
import {formatClassName} from '../../../../utils/format';
import cl from './style.module.scss';

export const MyBtn = ({children, isLink, ...props}) => {
  const Tag = isLink ? Link : 'button';
  return (
    <Tag {...props} className={formatClassName(cl['my-btn'], props.className)}>
      {children}
    </Tag>
  );
};
