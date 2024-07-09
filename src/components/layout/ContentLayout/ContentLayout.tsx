import { Outlet, useLocation } from 'react-router-dom';

import Breadcrumbs from '@layout/ContentLayout/Breadcrumbs/Breadcrumbs';
import Navbar from '@layout/ContentLayout/Navbar/Navbar';

export function ContentLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const sidebar = true;

  if (!sidebar) return null;

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <div className="container px-4 pt-8 pb-8 sm:px-8">
          <Breadcrumbs pathname={pathname} />
          <div className=" min-h-[calc(100vh-200px)] mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLayout;
