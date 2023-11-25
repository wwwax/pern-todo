import { Fragment } from 'react';
import { Todo } from '../types';
import { TodoListItem } from './TodoListItem';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <Fragment>
      <ul className="todo-list">
        {todos.map(({ todo_id, description }) => (
          <li key={todo_id}>
            <TodoListItem description={description} id={todo_id} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
