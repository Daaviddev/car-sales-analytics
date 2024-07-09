// src/common/types/types.ts

export interface Company {
  companyId: string;
  companyName: string;
  companyUrl: string;
}

export interface Listing {
  listingId: string;
  listingTitle: string;
  listingLink: string;
  listingPrice: number;
  listingOldPrice: number;
  listingPriceChangedAt: Date;
  listingIsSold: boolean;
  listingIsSoldChangedAt: Date;
  listingIsPromoted: boolean;
  listingExcludedFromData: boolean;
  listingCar: Car;
  listingDetails: ListingDetails;
}

export interface ListingFromCompany {
  listingId: string;
  listingCompanyId: string;
  listingTitle: string;
  listingLink: string;
  listingPrice: number;
  listingOldPrice: number;
  listingPriceChangedAt: Date;
  listingIsSold: boolean;
  listingIsSoldChangedAt: Date;
  listingIsPromoted: boolean;
  listingExcludedFromData: boolean;
  listingCar: Car;
  listingDetails: ListingDetails;
}

export interface ListingDetails {
  listingDetailsId: string;
  listingImageUrl: string;
  listingMileage: number;
  listingDate: Date;
  listingIdNumber: number;
}

export interface Car {
  carId: string;
  carYear: number;
  carFuel: string;
  carGear: string;
  carEngine: string;
  carPower: number;
  carMake: string;
  carModel: string;
  carTip: string;
  carModelYear: number;
}

// Unified interface
export interface UnifiedListing extends Listing, ListingDetails, Car, Company {}

export interface AbsoluteListing {
  id: string;
  carMake: string;
  carModel: string;
  carYear: number;
  carMileage: string;
  link: string;
  price: string;
  imageUrl: string;
  listingDate: Date;
  isSold: boolean;
  soldDate: Date;
  companyName: string;
}
