import { useMutation } from '@tanstack/react-query';
import { API_URL, QUERY_PREFIX_GET_ALL_TODOS } from './useTodos';
import axios from 'axios';
import { queryClient } from '../main';

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: async (description: string) => {
      await axios.post(`${API_URL}/todos`, { description });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_PREFIX_GET_ALL_TODOS] });
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
