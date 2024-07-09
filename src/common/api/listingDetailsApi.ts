import axios from 'axios';

import type { ListingDetails } from '@/common/types/types';

import axiosInstance from './axiosInstance';

export const fetchListings = async (): Promise<ListingDetails[]> => {
  //  console.log('Fetching listings...'); // Debug log

  try {
    const response = await axiosInstance.get('/listing');
    //  console.log('Listings fetched successfully:', response.data); // Debug log
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
      console.error('Error fetching listings:', error);
    }
    throw error;
  }
};
