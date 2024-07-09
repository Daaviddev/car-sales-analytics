import { useEffect } from 'react';

import GroupSelectCompany from '@/components/shared/selects/group-select-company';
import useModelStore from '@/store/modelStore';

const SelectCompany = () => {
  const { companies, fetchCompanies, error, toggledCompanies, toggleCompany, clearToggled } =
    useModelStore();

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <div className="relative mb-5">
      <div className="panelCardProps relative p-5">
        <h3 className="mb-10 mt-2 tracking-tight text-sm font-medium">Odaberi Kompanije</h3>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <GroupSelectCompany
            company={companies}
            onToggle={toggleCompany}
            toggledCompanies={toggledCompanies}
            clearToggled={clearToggled}
          />
        )}
        <div className="mt-5 p-2 text-sm text-zinc-500">
          Odabrano: {toggledCompanies.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
