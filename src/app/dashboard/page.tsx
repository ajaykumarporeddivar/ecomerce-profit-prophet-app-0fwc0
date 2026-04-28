'use client';

import { MOCK_PRODUCTS, RECENT_ACTIVITY, DEMO_USER, STATS } from '@/lib/data';
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Avatar,
} from '@/components/ui';
import { clsx } from 'clsx';
import { FiClock, FiCalendar } from 'lucide-react';

const date = new Date();
const greeting = `Good morning, ${DEMO_USER.name} - ${date.toDateString()}`;

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{greeting}</h1>
      <div className="flex gap-4 mb-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PRODUCTS.slice(0, 8).map((product) => (
                    <tr key={product.id} className={clsx(product.status === 'active' ? 'bg-white' : 'bg-gray-100', 'hover:bg-gray-50')}>
                      <td className="px-4 py-2">{product.id}</td>
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2">
                        <Badge variant={product.status === 'active' ? 'success' : 'error'}>{product.status}</Badge>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">View</button>
                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.slice(0, 5).map((activity) => (
                  <li key={activity.id} className="flex items-center gap-2 mb-2">
                    <Avatar variant="rounded" initials={activity.user.initials} />
                    <span>{activity.action}</span>
                    <span className="text-gray-500">{activity.timeAgo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Product</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Invoice</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Reports</button>
      </div>
    </div>
  );
}