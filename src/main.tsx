/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import initMocks from '@/mocks';
import '@/settings/AxiosSetting';
import '@/settings/DayjsSetting';

if (import.meta.env.MODE === 'development') {
  const initPromise: Promise<void> = initMocks as Promise<void>;
  await initPromise();
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
