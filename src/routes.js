import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdDesignServices,
  MdCompareArrows
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import ShadcnDashboard from 'views/admin/default/shadcn';
import NFTMarketplace from 'views/admin/marketplace';
import MarketplaceShadcn from 'views/admin/marketplace/shadcn';
import Profile from 'views/admin/profile';
import ShadcnProfile from 'views/admin/profile/shadcn';
import DataTables from 'views/admin/dataTables';
import MigrationTest from 'views/admin/profile/migration-test';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Shadcn Dashboard',
    layout: '/admin',
    path: '/shadcn-dashboard',
    icon: <Icon as={MdDesignServices} width="20px" height="20px" color="inherit" />,
    component: <ShadcnDashboard />,
  },
  {
    name: 'Migration Test',
    layout: '/admin',
    path: '/migration-test',
    icon: <Icon as={MdCompareArrows} width="20px" height="20px" color="inherit" />,
    component: <MigrationTest />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Shadcn Marketplace',
    layout: '/admin',
    path: '/shadcn-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <MarketplaceShadcn />,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Shadcn Profile',
    layout: '/admin',
    path: '/shadcn-profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <ShadcnProfile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;