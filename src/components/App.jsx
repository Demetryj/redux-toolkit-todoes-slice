import { Layout } from './Layout';
import { AppBar } from './AppBar';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
