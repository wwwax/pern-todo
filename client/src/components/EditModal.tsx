import { useEffect, useRef, useState } from 'react';
import { useEditTodo } from '../hooks/useEditTodo';
import { Todo } from '../types';

type Props = {
  setIsEdit: (flag: boolean) => void;
  description: string;
  id: number;
};

export const EditModal: React.FC<Props> = ({ setIsEdit, description, id }) => {
  const [text, setText] = useState<string>(description);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate: editTodo } = useEditTodo();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo: Todo = { todo_id: id, description: text };
    editTodo(todo);
    closeModal();
  };

  const closeModal = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    if (!inputRef.current) throw new Error('inputRef is null');

    inputRef.current.focus();
  }, []);

  return (
    <div className="edit-modal__container">
      <form onSubmit={handleSubmit} className="edit-modal__content">
        <div>edit todo</div>
        <input
          type="text"
          ref={inputRef}
          onChange={handleTextChange}
          value={text}
        />

        <div className="edit-modal__actions-container">
          <button type="submit">done</button>
          <button type="button" onClick={closeModal}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
