import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { SvgIcon } from '@mui/material';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import InventoryIcon from '@mui/icons-material/Inventory';

export const items = [
  {
    title: 'Genel',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Müşteriler',
    path: '/dashboard/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Fotoğraflar',
    path: '/dashboard/photos',
    icon: (
      <SvgIcon fontSize="small">
        <AddAPhotoIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Paketler',
    path: '/dashboard/packages',
    icon: (
      <SvgIcon fontSize="small">
        <InventoryIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Harcamalar',
    path: '/dashboard/expenses',
    icon: (
      <SvgIcon fontSize="small">
        <CurrencyLiraIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Müşteri Kaydet',
    path: '/dashboard/customers/form/new',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
];
