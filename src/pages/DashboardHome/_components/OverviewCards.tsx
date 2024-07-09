import HorizontalCard from '@/components/shared/cards/horizontal-card';

const OverviewCards = () => {
  return (
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6 mb-5">
      <div className="relative lg:col-span-2">
        <HorizontalCard title="Ukupna Vrijednost" value="-" description="This month" />
      </div>
      <div className="relative lg:col-span-2">
        <HorizontalCard title="Ukupno Vozila" value="-" description="This month" />
      </div>
      <div className="relative lg:col-span-2">
        <HorizontalCard title="Ukupno Prodano" value="-" description="This month" />
      </div>
    </div>
  );
};

export default OverviewCards;
