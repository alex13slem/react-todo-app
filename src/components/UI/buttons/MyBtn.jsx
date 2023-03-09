import { Link } from 'react-router-dom';
import cl from './my-btn.module.scss';

const MyBtn = ({ children, isLink, ...props }) => {
  const Tag = isLink ? Link : 'button';
  return (
    <Tag {...props} className={[cl['my-btn'], props.className].join(' ')}>
      {children}
    </Tag>
  );
};

export default MyBtn;
