import { useEffect, useMemo, useState } from 'react';

import { AbsoluteListing, Listing } from '@/common/types/types';
import DataTable from '@/components/shared/tables/DataTable';
import useModelStore from '@/store/modelStore';

const TableSection = () => {
  const { toggledCompanies, fetchListingsForToggledCompanies, order, setOrder } = useModelStore();
  const [data, setData] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchListingsForToggledCompanies().then((result) => {
      setLoading(false);
      //  console.log('****RESULT******:', result);
      setData(result);
    });
  }, [toggledCompanies]);

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'imageUrl' as keyof AbsoluteListing,
        elementType: 'image' as const,
        width: 'w-[100px] min-w-[100px]',
      },
      {
        Header: 'Marka',
        accessor: 'carMake' as keyof AbsoluteListing,
        elementType: 'link' as const,
        width: 'w-[120px]',
      },
      {
        Header: 'Godina',
        accessor: 'carYear' as keyof AbsoluteListing,
        elementType: 'text' as const,
        width: 'w-[50px]',
      },
      {
        Header: 'KM',
        accessor: 'carMileage' as keyof AbsoluteListing,
        elementType: 'text' as const,
        width: 'w-[120px]',
      },
      {
        Header: 'Cijena',
        accessor: 'price' as keyof AbsoluteListing,
        elementType: 'text' as const,
        width: 'w-[120px]',
      },
      {
        Header: 'DatumO',
        accessor: 'listingDate' as keyof AbsoluteListing,
        elementType: 'text' as const,
        width: 'w-[150px]',
      },
      {
        Header: 'Status',
        accessor: 'isSold' as keyof AbsoluteListing,
        elementType: 'badge' as const,
        width: 'w-[120px]',
      },
      {
        Header: 'Tvrtka',
        accessor: 'companyName' as keyof AbsoluteListing,
        elementType: 'text' as const,
        width: 'w-[100px]',
      },
      {
        Header: 'ID',
        accessor: 'id' as keyof AbsoluteListing,
        elementType: 'button' as const,
        width: 'w-[50px]',
      },
    ],
    [],
  );

  return (
    <div className="relative">
      <div className="panelCardProps relative">
        <DataTable
          data={data}
          headers={columns}
          order={order}
          setOrder={setOrder}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default TableSection;
