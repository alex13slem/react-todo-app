import {usePagination} from '../../../../hooks/usePagination';
import {formatClassName} from '../../../../utils/format';
import {MyBtn} from '../../buttons';
import cl from './myPagination.module.scss';

export const MyPagination = ({totalPages, page, changePage, ...props}) => {
  // const [currentNumber, setCurrentNumber] = useState(1);
  // const getSelectPage = currentNumber => {
  //   setCurrentNumber(currentNumber);
  //   setSelectPage(currentNumber);
  // };
  const pagesNums = usePagination(totalPages);
  return (
    <div
      {...props}
      className={formatClassName(cl['pagination-block'], props.className)}
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
