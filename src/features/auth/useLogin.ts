import { useState } from 'react';
import { loginUser } from './api';
import { LoginFormValues } from './validation';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginUser(data);
      localStorage.setItem('token', result.token);
      return result;
    } catch (err) {
      setError('Invalid username or password');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
