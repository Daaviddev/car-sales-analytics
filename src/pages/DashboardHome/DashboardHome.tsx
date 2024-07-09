import OverviewCards from '@/pages/DashboardHome/_components/OverviewCards';
import SelectCompany from '@/pages/DashboardHome/_components/SelectCompany';
import TableSection from '@/pages/DashboardHome/_components/TableSection';

const DashboardHome = () => {
  return (
    <div className="h-full">
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <main className="flex-1 items-start gap-4 sm:py-0 md:gap-8">
            <OverviewCards />
            <SelectCompany />
            <TableSection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
