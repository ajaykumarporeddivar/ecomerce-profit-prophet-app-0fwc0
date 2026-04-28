'use client';

import { clsx } from 'clsx';
import { HiOutlineHome } from 'lucide-react';

export function Header() {
  return (
    <header className={clsx('flex justify-between items-center', 'py-4 md:py-6 lg:py-8')}>
      <h1 className={clsx('text-2xl font-bold', 'text-prophet-orange')}>Ecomerce Profit Prophet</h1>
      <nav>
        <ul className={clsx('flex space-x-4', 'text-sm font-medium')}>
          <li>
            <a href="#" className={clsx('text-gray-600 hover:text-gray-900')}>Home</a>
          </li>
          <li>
            <a href="#" className={clsx('text-gray-600 hover:text-gray-900')}>Features</a>
          </li>
          <li>
            <a href="#" className={clsx('text-gray-600 hover:text-gray-900')}>Pricing</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}