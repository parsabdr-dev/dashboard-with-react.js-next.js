import axios from 'axios';
import { LoginRequest, LoginResponse } from './types';

const authApi = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await authApi.post<LoginResponse>('/auth/login', data);
  return response.data;
};
