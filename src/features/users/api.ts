import axios from 'axios';
import { User } from './types';

const usersApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await usersApi.get<{ users: User[] }>('/users');
  return response.data.users;
};
