import { useState } from 'react';
import { useCreateTodo } from '../hooks/useCreateTodo';

export const CreateTodo = () => {
  const [todoText, setTodoText] = useState('');

  const { mutate: createTodo } = useCreateTodo();

  const handleTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(todoText);
    setTodoText('');
  };

  return (
    <form className="create-todo-form" onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={handleTodoTextChange} />
      <button type="submit">add todo</button>
    </form>
  );
};
