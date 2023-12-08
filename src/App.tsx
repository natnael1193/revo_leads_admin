// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import ThemeColorPresets from './components/ThemeColorPresets';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
// ----------------------------------------------------------------------
import toast, { Toaster } from 'react-hot-toast';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemeColorPresets>
          <RtlLayout>
            <MotionLazyContainer>
              <ProgressBarStyle />
              <Settings />
              <ScrollToTop />
              <Router />
              <Toaster />
            </MotionLazyContainer>
          </RtlLayout>
        </ThemeColorPresets>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
