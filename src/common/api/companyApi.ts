import axios from 'axios';

import type { Company } from '@/common/types/types';

import axiosInstance from './axiosInstance';

interface ApiResponse {
  id: string;
  name: string;
  url: string;
}

export const transformToCompany = (apiResponse: ApiResponse): Company => {
  const { id, name, url } = apiResponse;

  return {
    companyId: id,
    companyName: name,
    companyUrl: url,
  };
};

export const fetchCompanies = async (): Promise<Company[]> => {
  // console.log('Fetching companies...'); // Debug log

  try {
    const response = await axiosInstance.get('/company');
    //  console.log('COMPANIES API : Companies fetched successfully:', response.data); // Debug log
    const converted = response.data.map(transformToCompany);
    return converted;
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
      console.error('Error fetching companies:', error);
    }
    throw error;
  }
};
