import { create } from 'zustand';

import { fetchCompanies as fetchCompaniesApi } from '@/common/api/companyApi';
import { fetchAllListingsFromCompany } from '@/common/api/listingsApi';
import type { AbsoluteListing, Company, Listing } from '@/common/types/types';

interface ModelState {
  companies: Company[];
  fetchCompanies: () => Promise<void>;
  error: string | null;
  toggledCompanies: string[];
  toggleCompany: (companyId: string) => void;
  clearToggled: () => void;
  fetchListingsForToggledCompanies: () => Promise<Listing[]>;
  order: { accessor: keyof AbsoluteListing; direction: 'asc' | 'desc' } | null;
  setOrder: (accessor: keyof AbsoluteListing) => void;
}

const useModelStore = create<ModelState>((set, get) => ({
  companies: [],
  error: null,
  toggledCompanies: [],
  order: null,
  fetchCompanies: async () => {
    try {
      const companies = await fetchCompaniesApi();
      set({ companies, error: null });
    } catch (error) {
      console.error('Error fetching companies:', error);
      set({ error: 'Failed to fetch companies. Please try again later.' });
    }
  },
  toggleCompany: (companyId: string) => {
    set((state) => ({
      toggledCompanies: state.toggledCompanies.includes(companyId)
        ? state.toggledCompanies.filter((id) => id !== companyId)
        : [...state.toggledCompanies, companyId],
    }));
  },

  clearToggled: () => {
    set(() => ({
      toggledCompanies: [],
    }));
  },
  fetchListingsForToggledCompanies: async () => {
    const { toggledCompanies } = get();

    const listings: Listing[] = [];

    try {
      for (const companyId of toggledCompanies) {
        const companyListings = await fetchAllListingsFromCompany(companyId);
        //   console.log('STORE , COMPANY LSITINGS:', companyListings);
        listings.push(...companyListings);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      set({ error: 'Failed to fetch listings. Please try again later.' });
    }

    return listings;
  },
  setOrder: (accessor: keyof AbsoluteListing) => {
    set((state) => {
      const currentOrder = state.order;
      if (currentOrder && currentOrder.accessor === accessor) {
        return {
          order: {
            accessor,
            direction: currentOrder.direction === 'asc' ? 'desc' : 'asc',
          },
        };
      }
      return {
        order: {
          accessor,
          direction: 'asc',
        },
      };
    });
  },
}));

export default useModelStore;
