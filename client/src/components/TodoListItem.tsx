import { useState } from 'react';
import { useDeleteTodo } from '../hooks/useDeleteTodo';
import { EditModal } from './EditModal';

type Props = {
  description: string;
  id: number;
};

export const TodoListItem: React.FC<Props> = ({ description, id }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const handleEditClick = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      <div className="todo-list__item">
        <span>{description}</span>

        <div className="todo-list__actions-container">
          <button onClick={handleEditClick}>edit</button>
          <button onClick={() => deleteTodo(id)}>delete</button>
        </div>
      </div>

      {isEdit && (
        <EditModal setIsEdit={setIsEdit} description={description} id={id} />
      )}
    </>
  );
};
