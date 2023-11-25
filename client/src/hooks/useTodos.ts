import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const API_URL = 'http://localhost:5000';

export const QUERY_PREFIX_GET_ALL_TODOS = 'todos';

export const useTodos = () => {
  return useQuery({
    queryKey: [QUERY_PREFIX_GET_ALL_TODOS],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/todos`);
      return data;
    },
  });
};
