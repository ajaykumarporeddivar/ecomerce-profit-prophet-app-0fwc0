'use client';

import { useEffect, useState } from 'react';
import { classNames } from 'clsx';
import { Button } from '@/components/Button';
import { features } from '@/lib/data';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const FeaturePage = () => {
  const params = useParams();
  const [slug, setSlug] = useState<string | undefined>();
  const [feature, setFeature] = useState<any | undefined>();

  useEffect(() => {
    const slugFromUrl = window.location.pathname.split('/').pop();
    setSlug(slugFromUrl);
  }, []);

  useEffect(() => {
    if (slug) {
      const featureData = features.find((f) => f.slug === slug);
      setFeature(featureData);
    }
  }, [slug]);

  const featureViews = {
    'profit-prediction-engine': <ProfitPredictionEngine />,
    'inventory-optimization': <InventoryOptimization />,
    'pricing-strategy-tool': <PricingStrategyTool />,
  };

  if (!feature) {
    return (
      <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center', 'h-screen')}>
        <h1 className={classNames('text-3xl', 'font-bold', 'mb-4')}>Features</h1>
        <div className={classNames('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4')}>
          {features.map((feature) => (
            <div key={feature.slug} className={classNames('bg-white', 'p-4', 'rounded-lg', 'shadow-md')}>
              <h2 className={classNames('text-xl', 'font-bold', 'mb-2')}>{feature.name}</h2>
              <p className={classNames('text-gray-600', 'mb-4')}>{feature.description}</p>
              <Button href={`/dashboard/${feature.slug}`}>View Feature</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center', 'h-screen', 'p-4')}>
      <h1 className={classNames('text-3xl', 'font-bold', 'mb-4')}>{feature.name}</h1>
      {featureViews[slug as string]}
      <Button className={classNames('mt-4')} href="/dashboard">
        <ArrowLeft size={20} className={classNames('mr-2')} />
        Back to Features
      </Button>
    </div>
  );
};

const ProfitPredictionEngine = () => {
  const [data, setData] = useState([
    { id: 1, date: '2022-01-01', revenue: 1000, expenses: 500 },
    { id: 2, date: '2022-01-02', revenue: 1200, expenses: 600 },
    { id: 3, date: '2022-01-03', revenue: 1500, expenses: 700 },
  ]);

  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.date.includes(filter));

  return (
    <div>
      <h2 className={classNames('text-2xl', 'font-bold', 'mb-2')}>Profit Prediction Engine</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by date"
        className={classNames('p-2', 'border', 'rounded-lg', 'w-full', 'mb-4')}
      />
      <table className={classNames('w-full', 'border', 'border-collapse', 'collapse')}>
        <thead>
          <tr>
            <th className={classNames('border', 'p-2')}>Date</th>
            <th className={classNames('border', 'p-2')}>Revenue</th>
            <th className={classNames('border', 'p-2')}>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className={classNames('border', 'p-2')}>{item.date}</td>
              <td className={classNames('border', 'p-2')}>{item.revenue}</td>
              <td className={classNames('border', 'p-2')}>{item.expenses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InventoryOptimization = () => {
  const [data, setData] = useState([
    { id: 1, product: 'Product A', quantity: 10, leadTime: 5 },
    { id: 2, product: 'Product B', quantity: 20, leadTime: 10 },
    { id: 3, product: 'Product C', quantity: 15, leadTime: 7 },
  ]);

  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.product.includes(filter));

  return (
    <div>
      <h2 className={classNames('text-2xl', 'font-bold', 'mb-2')}>Inventory Optimization</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by product"
        className={classNames('p-2', 'border', 'rounded-lg', 'w-full', 'mb-4')}
      />
      <table className={classNames('w-full', 'border', 'border-collapse', 'collapse')}>
        <thead>
          <tr>
            <th className={classNames('border', 'p-2')}>Product</th>
            <th className={classNames('border', 'p-2')}>Quantity</th>
            <th className={classNames('border', 'p-2')}>Lead Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className={classNames('border', 'p-2')}>{item.product}</td>
              <td className={classNames('border', 'p-2')}>{item.quantity}</td>
              <td className={classNames('border', 'p-2')}>{item.leadTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PricingStrategyTool = () => {
  const [data, setData] = useState([
    { id: 1, product: 'Product A', price: 10.99, demand: 100 },
    { id: 2, product: 'Product B', price: 9.99, demand: 50 },
    { id: 3, product: 'Product C', price: 12.99, demand: 200 },
  ]);

  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.product.includes(filter));

  return (
    <div>
      <h2 className={classNames('text-2xl', 'font-bold', 'mb-2')}>Pricing Strategy Tool</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by product"
        className={classNames('p-2', 'border', 'rounded-lg', 'w-full', 'mb-4')}
      />
      <table className={classNames('w-full', 'border', 'border-collapse', 'collapse')}>
        <thead>
          <tr>
            <th className={classNames('border', 'p-2')}>Product</th>
            <th className={classNames('border', 'p-2')}>Price</th>
            <th className={classNames('border', 'p-2')}>Demand</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className={classNames('border', 'p-2')}>{item.product}</td>
              <td className={classNames('border', 'p-2')}>{item.price}</td>
              <td className={classNames('border', 'p-2')}>{item.demand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturePage;