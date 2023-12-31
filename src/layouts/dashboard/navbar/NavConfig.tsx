// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'general v3.0.0',
  //   items: [
  //     { title: 'One', path: '/dashboard/one', icon: ICONS.dashboard },
  //     { title: 'Two', path: '/dashboard/two', icon: ICONS.ecommerce },
  //     { title: 'Three', path: '/dashboard/three', icon: ICONS.analytics },
  //   ],
  // },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
      {
        title: 'Leads',
        path: '/dashboard/leads',
        icon: ICONS.user,
        children: [
          { title: 'All Leads', path: '/dashboard/leads/get' },
          { title: 'Add New Lead', path: '/dashboard/leads/add' },
        ],
      },
    ],
  },
];

export default navConfig;
