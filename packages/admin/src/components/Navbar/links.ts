import {
  TablerIcon,
  IconHome,
  IconUser,
  IconAssembly,
  IconMail,
  IconArticle,
  IconReceipt2,
  IconBucket,
  IconNews,
} from '@tabler/icons';

interface Category {
  name: string;
  icon?: TablerIcon;
  links: SiteLink[];
}

interface SiteLink {
  label: string;
  path?: string;
  icon?: TablerIcon,
}

const Links : Category[] = [
  {
    name: 'Admin',
    links: [
      {
        label: 'Dashboard',
        path: '/',
        icon: IconHome,
      },
    ],
  },
  {
    name: 'Shop',
    links: [
      {
        label: 'Users',
        path: '/users',
        icon: IconUser,
      },
      {
        label: 'Products',
        path: '/products',
        icon: IconAssembly,
      },
      {
        label: 'Collections',
        icon: IconBucket,
      },
      {
        label: 'Orders',
        icon: IconReceipt2,
      },
    ],
  },
  {
    name: 'CMS',
    links: [
      {
        label: 'Blogs',
        icon: IconArticle,
      },
      {
        label: 'News',
        icon: IconNews,
      },
    ],
  },
  {
    name: 'Others',
    links: [
      {
        label: 'Mail',
        icon: IconMail,
      },
    ],
  },
];

export default Links;
