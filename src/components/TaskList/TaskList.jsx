import { useSelector } from 'react-redux';
import { Task } from 'components/Task';
import { statusFilters } from 'redux/constants';
import { getTasks, getFilter } from 'redux/selectors';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
