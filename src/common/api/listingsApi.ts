import axios from 'axios';

import type { Listing } from '@/common/types/types';

import axiosInstance from './axiosInstance';

interface ApiResponse {
  listing: {
    id: string;
    title: string;
    link: string;
    price: number;
    oldPrice: number;
    priceChangedAt: string;
    isSold: boolean;
    isSoldChangedAt?: string;
    isPromoted: boolean;
    excludeFromData: boolean;
    car: {
      id: string;
      year: number;
      fuel: string;
      gear: string;
      engine: string;
      power: number;
      make: string;
      model: string;
      tip: string;
      modelYear: number;
    };
    listingDetails: {
      id: string;
      imageUrl: string;
      mileage: number;
      addDate: string;
      listingIdNumber: string;
    };
  };
}

const transformToListing = (apiResponse: ApiResponse): Listing => {
  const { listing } = apiResponse;

  if (!listing || !listing.car || !listing.listingDetails) {
    throw new Error('Invalid API response structure');
  }

  return {
    listingId: listing.id,
    listingTitle: listing.title,
    listingLink: listing.link,
    listingPrice: listing.price,
    listingOldPrice: listing.oldPrice,
    listingPriceChangedAt: new Date(listing.priceChangedAt),
    listingIsSold: listing.isSold,
    listingIsSoldChangedAt: listing.isSoldChangedAt
      ? new Date(listing.isSoldChangedAt)
      : new Date(),
    listingIsPromoted: listing.isPromoted,
    listingExcludedFromData: listing.excludeFromData,
    listingCar: {
      carId: listing.car.id,
      carYear: listing.car.year,
      carFuel: listing.car.fuel,
      carGear: listing.car.gear,
      carEngine: listing.car.engine,
      carPower: listing.car.power,
      carMake: listing.car.make,
      carModel: listing.car.model,
      carTip: listing.car.tip,
      carModelYear: listing.car.modelYear,
    },
    listingDetails: {
      listingDetailsId: listing.listingDetails.id,
      listingImageUrl: listing.listingDetails.imageUrl,
      listingMileage: listing.listingDetails.mileage,
      listingDate: new Date(listing.listingDetails.addDate),
      listingIdNumber: Number(listing.listingDetails.listingIdNumber),
    },
  };
};

export const fetchCars = async (): Promise<Listing[]> => {
  // console.log('Fetching cars...'); // Debug log

  try {
    const response = await axiosInstance.get('/car');
    // console.log('Cars fetched successfully:', response.data); // Debug log

    const converted = response.data.map(transformToListing);

    // console.log('Converted cars:', converted); // Debug log
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
      console.error('Error fetching cars:', error);
    }
    throw error;
  }
};

export const fetchAllListingsFromCompany = async (companyId: string): Promise<Listing[]> => {
  // console.log('Fetching listings for company', companyId, '...'); // Debug log

  try {
    const response = await axiosInstance.get(`/listing/company/${companyId}`);
    //  console.log('Listings fetched successfully:', response.data); // Debug log

    return response.data.map((item: ApiResponse) => transformToListing(item));
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
