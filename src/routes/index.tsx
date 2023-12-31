import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // const isLoggedIn = true;
  return useRoutes([
    isLoggedIn !== 'true'
      ? {
          path: '/',
          element: <Login />,
        }
      : {
          path: '/',
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to="/dashboard/leads/get" replace />, index: true },
            {
              path: '/dashboard',
              element: <Navigate to="/dashboard/leads/get" replace />,
              index: true,
            },
            { path: '/dashboard/one', element: <PageOne /> },
            { path: '/dashboard/two', element: <PageTwo /> },
            { path: '/dashboard/three', element: <PageThree /> },
            {
              path: '/dashboard/user',
              children: [
                { element: <Navigate to="/dashboard/user/four" replace />, index: true },
                { path: '/dashboard/user/four', element: <PageFour /> },
                { path: '/dashboard/user/five', element: <PageFive /> },
                { path: '/dashboard/user/six', element: <PageSix /> },
              ],
            },
            {
              path: '/dashboard/leads',
              children: [
                { element: <Navigate to="/dashboard/leads" replace />, index: true },
                { path: '/dashboard/leads/get', element: <AllLeads /> },
                { path: '/dashboard/leads/add', element: <RegisterLead /> },
                { path: '/dashboard/leads/update/:id', element: <UpdateLead /> },
              ],
            },
          ],
        },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')));

// Lead
const RegisterLead = Loadable(lazy(() => import('../pages/leads/RegisterLead')));
const AllLeads = Loadable(lazy(() => import('../pages/leads/AllLeads')));
const UpdateLead = Loadable(lazy(() => import('../pages/leads/UpdateLead')));
