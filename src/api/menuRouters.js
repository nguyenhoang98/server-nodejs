import {
  HomeOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  CrownOutlined,
  SkinOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import MenClothes from '../page/Clothes/Menclothes';
import Home from '../page/Home/Home';
import WomenClothes from '../page/WomenClothes/WomenClothes';
import ChildrenWear from '../page/ChildrenWear/ChildrenWear';
import Introduce from '../page/Introduce/Introduce';
import CustomerCare from '../page/CustomerCare/CustomerCare';
import Login from '../page/Login/Login';
import NotFound from '../page/NotFound/NotFound';

export const menuRouters = [
  {
    label: 'Home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    label: 'Quần áo nam',
    icon: <ShopOutlined />,
    path: '/quan-ao-nam',
  },
  {
    label: 'Quần áo nữ',
    icon: <CrownOutlined />,
    path: '/quan-ao-nu',
  },
  {
    label: 'Quần áo trẻ em',
    icon: <SkinOutlined />,
    path: '/quan-ao-tre-em',
  },
  {
    label: 'Giới thiêu',
    icon: <IdcardOutlined />,
    path: '/gioi-thieu',
  },
  {
    label: 'Chăm sóc khách hàng',
    icon: <CustomerServiceOutlined />,
    path: '/cham-soc-khach-hang',
  },
];

export const menuPages = [
  {
    component: <Home />,
    path: '/',
    exact: true,
  },
  {
    component: <MenClothes />,
    path: '/quan-ao-nam',
    exact: false,
  },
  {
    component: <WomenClothes />,
    path: '/quan-ao-nu',
    exact: true,
  },
  {
    component: <ChildrenWear />,
    path: '/quan-ao-tre-em',
    exact: false,
  },
  {
    component: <Introduce />,
    path: '/gioi-thieu',
    exact: true,
  },
  {
    component: <CustomerCare />,
    path: '/cham-soc-khach-hang',
    exact: false,
  },
  {
    component: <Login />,
    path: 'dang-nhap',
    exact: false,
  },
  {
    component: <NotFound />,
    path: '*',
    exact: false,
  },
];
