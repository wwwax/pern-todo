import { Fragment } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

export const App = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (error) return <h1>{error.message}</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Fragment>
      <h1>{`todo-list (pern)`}</h1>
      <CreateTodo />
      <TodoList todos={todos} />
    </Fragment>
  );
};
