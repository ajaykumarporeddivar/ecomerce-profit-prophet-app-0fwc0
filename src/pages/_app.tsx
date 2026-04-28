'use client';

import { clsx } from 'clsx';
import { Header } from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx('max-w-full mx-auto', 'p-4 md:p-6 lg:p-8')}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}