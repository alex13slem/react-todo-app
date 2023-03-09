import {usePagination} from '../../../hooks/usePagination';
import MyBtn from '../buttons/MyBtn';
import cl from './myPagination.module.scss';

const MyPagination = ({totalPages, page, changePage, ...props}) => {
  // const [currentNumber, setCurrentNumber] = useState(1);
  // const getSelectPage = currentNumber => {
  //   setCurrentNumber(currentNumber);
  //   setSelectPage(currentNumber);
  // };
  const pagesNums = usePagination(totalPages);
  return (
    <div
      {...props}
      className={[cl['pagination-block'], props.className].join(' ')}
    >
      {pagesNums.map((pageNum) => (
        <MyBtn
          className={pageNum !== page ? '' : cl['current']}
          onClick={(e) => changePage(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </MyBtn>
      ))}
    </div>
  );
};

export default MyPagination;
