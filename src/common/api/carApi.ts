import axios from 'axios';

import type { Car } from '@/common/types/types';

import axiosInstance from './axiosInstance';

export const fetchCars = async (): Promise<Car[]> => {
  // console.log('Fetching cars...'); // Debug log

  try {
    const response = await axiosInstance.get('/car');
    //  console.log('Cars fetched successfully:', response.data); // Debug log
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        message: error.message,
        name: error.name,
        code: error.code,
        config: error.config,
        request: error.request,
        response: error.response,
      });
    } else {
      console.error('Error fetching cars:', error);
    }
    throw error;
  }
};
