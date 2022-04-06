import React from 'react';
import { Homepage } from './pages/Homepage.jsx';

export function RootCmp() {
  return (
    <main className='main-app-layout flex'>
      <Homepage />
    </main>
  );
}
