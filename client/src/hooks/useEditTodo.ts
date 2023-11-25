import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL, QUERY_PREFIX_GET_ALL_TODOS } from './useTodos';
import { queryClient } from '../main';
import { Todo } from '../types';

export const useEditTodo = () => {
  return useMutation({
    mutationFn: async ({ todo_id, description }: Todo) => {
      await axios.put(`${API_URL}/todos/${todo_id}`, {
        description: description,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_PREFIX_GET_ALL_TODOS],
      });
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
