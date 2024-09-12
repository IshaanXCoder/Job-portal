import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import Job from './pages/job';
import MyJobs from './pages/my-jobs';
import PostJob from './pages/post-job';
import SaveJob from './pages/saved-job';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/onboarding', element: <Onboarding /> },
      { path: '/job-listing', element: <JobListing /> },
      { path: '/job/:id', element: <Job /> }, // Assuming Job page might take a dynamic ID
      { path: '/my-jobs', element: <MyJobs /> },
      { path: '/post-job', element: <PostJob /> },
      { path: '/saved-job', element: <SaveJob /> }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;