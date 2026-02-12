import axios from 'axios';
import { Product } from './types';

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await productsApi.get<{ products: Product[] }>('/products');
  return response.data.products;
};
