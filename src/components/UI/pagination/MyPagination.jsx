import { useState } from 'react';
import MyBtn from '../button/MyBtn';
import cl from './myPagination.module.scss';

const MyPagination = ({ pagesNums, setSelectPage, ...props }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const getSelectPage = currentNumber => {
    setCurrentNumber(currentNumber);
    setSelectPage(currentNumber);
  };
  return (
    <div
      {...props}
      className={[cl['pagination-block'], props.className].join(' ')}
    >
      {pagesNums.map(pageNum => (
        <MyBtn
          className={pageNum !== currentNumber ? '' : cl['current']}
          onClick={e => getSelectPage(Number(e.target.innerText))}
          key={pageNum}
        >
          {pageNum}
        </MyBtn>
      ))}
    </div>
  );
};

export default MyPagination;
