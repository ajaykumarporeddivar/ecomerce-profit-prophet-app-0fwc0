'use client';

import { AppSidebar, AppHeader } from '@/components/layout';
import { DemoBanner } from '@/components/layout';
import { FiHome, FiSettings, FiTrendingUp, FiShoppingCart, FiBarChart } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { icon: <FiHome />, label: 'Dashboard' },
  { icon: <FiSettings />, label: 'Settings' },
  { icon: <FiTrendingUp />, label: 'Profit Prediction' },
  { icon: <FiShoppingCart />, label: 'Inventory Optimization' },
  { icon: <FiBarChart />, label: 'Pricing Strategy' },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <AppSidebar navItems={navItems} />
      <div className="flex-1 overflow-y-auto">
        <AppHeader />
        <DemoBanner />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}