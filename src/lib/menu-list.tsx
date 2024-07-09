import type { LucideIcon } from 'lucide-react';
import { Bookmark, LayoutGrid, Settings, SquarePen, Tag, Users } from 'lucide-react';

interface Submenu {
  href: string;
  label: string;
  active: boolean;
}

interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
}

interface Group {
  groupLabel: string;
  menus: Menu[];
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard/home',
          label: 'Dashboard',
          active: pathname.includes('/dashboard/home'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Posts',
          active: pathname.includes('/posts'),
          icon: SquarePen,
          submenus: [
            {
              href: '/dashboard/home',
              label: 'All Posts',
              active: pathname === '/posts',
            },
            {
              href: '/dashboard/home',
              label: 'New Post',
              active: pathname === '/posts/new',
            },
          ],
        },
        {
          href: '/dashboard/home',
          label: 'Categories',
          active: pathname.includes('/categories'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/dashboard/home',
          label: 'Tags',
          active: pathname.includes('/tags'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/dashboard/home',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/dashboard/home',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
