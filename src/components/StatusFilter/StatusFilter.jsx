import { Button } from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleFilterChange = statusFilter => dispatch(setFilter(statusFilter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
