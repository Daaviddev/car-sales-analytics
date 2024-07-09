import type { AbsoluteListing, Listing } from '@/common/types/types';

export const transformData = (data: Listing[]): AbsoluteListing[] => {
  return data
    .filter((item) => item.listingDetails?.listingMileage !== 0) // Skip entries with mileage of 0
    .map((item) => {
      const listingDetails = item.listingDetails || {};

      // Multiply the price by 1000
      const adjustedPrice = item.listingPrice * 1000;

      // Format the price for European standard with comma instead of dot, without decimals
      const formattedPrice = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(adjustedPrice);

      // Format the mileage
      const formattedMileage =
        new Intl.NumberFormat('de-DE').format(listingDetails.listingMileage) + ' km';

      const formatNoName = (make: string, model: string) => {
        if (!make && !model) {
          return '';
        }
        if (!make) {
          return model;
        }
        if (!model) {
          return make;
        }
        return make + ' ' + model;
      };

      return {
        id: item.listingId,
        carMake: formatNoName(item.listingCar.carMake, item.listingCar.carModel),
        carModel: item.listingCar.carModel,
        carYear: item.listingCar.carYear,
        carMileage: formattedMileage,
        link: item.listingLink,
        price: formattedPrice,
        imageUrl: listingDetails.listingImageUrl || '',
        listingDate: listingDetails.listingDate || new Date(),
        isSold: item.listingIsSold,
        soldDate: item.listingIsSoldChangedAt || new Date(),
        companyName: '-', // Replace 'abc' with the actual company name if available
      };
    });
};
