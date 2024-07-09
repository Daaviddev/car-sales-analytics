import type { Company } from '@/common/types/types';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

interface GroupSelectCompanyProps {
  company: Company[];
  onToggle: (companyId: string) => void;
  toggledCompanies: string[];
  clearToggled: () => void;
}

const GroupSelectCompany = ({
  company,
  onToggle,
  toggledCompanies,
  clearToggled,
}: GroupSelectCompanyProps) => {
  const handleToggle = (companyId: string) => {
    if (companyId === 'all') {
      // Toggle all items
      clearToggled();
      if (toggledCompanies.length === company.length) {
        return;
      }
      for (const item of company) {
        onToggle(item.companyId);
      }
    } else {
      onToggle(companyId);
    }
  };

  return (
    <ToggleGroup variant="outline" type="multiple" className="gap-3 justify-start">
      <>
        <Button
          onClick={() => handleToggle('all')}
          className={cn(
            'text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-[rgba(121,121,121,0.05)] hover:bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-4 shadow-sm  hover:shadow-green-600 duration-500 hover:bg-transparent',
            'truncate', // Add this class to handle text overflow
          )}
        >
          Sve
        </Button>
        {company.map((company) => (
          <Button
            key={company.companyId}
            onClick={() => handleToggle(company.companyId)}
            className={cn(
              'text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-[rgba(121,121,121,0.05)] hover:bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-4 shadow-sm  hover:shadow-green-600 duration-500 hover:bg-transparent',
              toggledCompanies.includes(company.companyId)
                ? 'text-green-600 shadow-green-600 shadow bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent'
                : '',
              '', // Add this class to handle text overflow
            )}
          >
            {company.companyName}
          </Button>
        ))}
      </>
    </ToggleGroup>
  );
};

export default GroupSelectCompany;
