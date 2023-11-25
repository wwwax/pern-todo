import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL, QUERY_PREFIX_GET_ALL_TODOS } from './useTodos';
import { queryClient } from '../main';

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`${API_URL}/todos/${id}`);
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
