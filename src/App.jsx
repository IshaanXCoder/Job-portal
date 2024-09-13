import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'; // Import Material UI theme provider
import { CustomThemeProvider } from './components/theme-provider';
import AppLayout from './layouts/app-layout';
import './app.css';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import Job from './pages/job';
import MyJobs from './pages/my-jobs';
import PostJob from './pages/post-job';

import SaveJob from './pages/saved-job';
import Header from './components/header';

// Create a theme using MUI
const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode
  },
});

// Define the routes for the application
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/onboarding', element: <Onboarding /> },
      { path: '/job-listing', element: <JobListing /> },
      { path: '/job/:id', element: <Job /> }, // Dynamic route for Job page
      { path: '/my-jobs', element: <MyJobs /> },
      { path: '/post-job', element: <PostJob /> },
      { path: '/saved-job', element: <SaveJob /> }
    ]
  }
]);

function App() {
  return (
    <MUIThemeProvider theme={theme}>
      <CustomThemeProvider>
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;