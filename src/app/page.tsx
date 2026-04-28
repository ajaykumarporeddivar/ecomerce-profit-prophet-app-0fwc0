import { useEffect } from 'react';
import { AiOutlineWarning } from 'lucide-react';
import { clsx } from 'clsx';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

export const metadata = {
  title: 'Ecomerce Profit Prophet - Predict and Optimize Your Profits',
  description: 'Unlock the full potential of your e-commerce store with our profit prediction and optimization platform',
};

export default function Page() {
  return (
    <div>
      {/* DEMO MODE BANNER */}
      <div className="bg-orange-100 border-orange-500 text-orange-700 p-4 mb-4">
        <AiOutlineWarning className="h-6 w-6 inline-block mr-2" />
        Demo Mode
      </div>

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Unlock the Secrets to Predicting and Optimizing Your E-commerce Profits
          </h1>
          <p className="text-2xl text-gray-600 mt-4">
            Our platform uses machine learning and real-time data to help you make informed decisions and maximize your profits
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started Free →
            </a>
            <a
              href="/dashboard"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4"
            >
              See Demo →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="bg-white p-4 shadow-md rounded">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4 rounded">
                  <h2 className="text-lg font-bold text-gray-600">Sales</h2>
                  <p className="text-lg text-gray-600 mt-2">$10,000</p>
                </div>
                <div className="bg-gray-200 p-4 rounded">
                  <h2 className="text-lg font-bold text-gray-600">Profits</h2>
                  <p className="text-lg text-gray-600 mt-2">$2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 shadow-md rounded">
              <AiOutlineWarning className="h-6 w-6 inline-block text-orange-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-600">
                Profit Prediction Engine
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Our machine learning-based engine analyzes historical sales data, pricing, and inventory levels to predict future profits
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <AiOutlineWarning className="h-6 w-6 inline-block text-orange-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-600">
                Inventory Optimization
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Our platform provides recommendations for optimal inventory levels based on sales forecasts, lead times, and supplier constraints
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <AiOutlineWarning className="h-6 w-6 inline-block text-orange-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-600">
                Pricing Strategy Tool
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Our tool analyzes market trends, competition, and customer behavior to suggest optimal pricing strategies
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <AiOutlineWarning className="h-6 w-6 inline-block text-orange-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-600">
                Real-time Dashboard
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Our clean, modern dashboard provides e-commerce store owners with real-time insights into their profits, inventory levels, and sales performance
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <AiOutlineWarning className="h-6 w-6 inline-block text-orange-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-600">
                Automated Alerts
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Our platform sends automated alerts to store owners when profits are predicted to decline or when inventory levels reach critical levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-12">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            How it Works
          </h2>
          <ol className="list-decimal mt-8">
            <li className="mb-4">
              <h3 className="text-lg font-bold text-gray-600">
                Connect Your E-commerce Store
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Easily connect your e-commerce store to our platform using our simple integration process
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold text-gray-600">
                Configure Your Settings
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Configure your settings to customize your profit prediction and optimization experience
              </p>
            </li>
            <li className="mb-4">
              <h3 className="text-lg font-bold text-gray-600">
                View Your Real-time Dashboard
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                View your real-time dashboard to get insights into your profits, inventory levels, and sales performance
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF BAR SECTION */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Trusted by Thousands of E-commerce Store Owners
          </h2>
          <div className="flex justify-center mt-8">
            <div className="bg-white p-4 shadow-md rounded w-1/3 mx-4">
              <h3 className="text-lg font-bold text-gray-600">
                10,000+
              </h3>
              <p className="text-lg text-gray-600 mt-2">E-commerce store owners</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded w-1/3 mx-4">
              <h3 className="text-lg font-bold text-gray-600">
                99.9%
              </h3>
              <p className="text-lg text-gray-600 mt-2">Uptime guarantee</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded w-1/3 mx-4">
              <h3 className="text-lg font-bold text-gray-600">
                $1M+
              </h3>
              <p className="text-lg text-gray-600 mt-2">In revenue generated for our customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-12">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-lg font-bold text-gray-600">
                Free
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                $0/month
              </p>
              <ul className="list-disc mt-4">
                <li>Profit prediction engine</li>
                <li>Inventory optimization</li>
                <li>Real-time dashboard</li>
              </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-lg font-bold text-gray-600">
                Pro
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                $49/month
              </p>
              <ul className="list-disc mt-4">
                <li>Profit prediction engine</li>
                <li>Inventory optimization</li>
                <li>Real-time dashboard</li>
                <li>Pricing strategy tool</li>
                <li>Automated alerts</li>
              </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-lg font-bold text-gray-600">
                Enterprise
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Custom pricing
              </p>
              <ul className="list-disc mt-4">
                <li>Profit prediction engine</li>
                <li>Inventory optimization</li>
                <li>Real-time dashboard</li>
                <li>Pricing strategy tool</li>
                <li>Automated alerts</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Unlock the Secrets to Predicting and Optimizing Your E-commerce Profits
          </h2>
          <p className="text-2xl text-gray-600 mt-4">
            Sign up for a free trial today and start maximizing your profits
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/dashboard"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Launch Your Dashboard →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-600">
                Ecomerce Profit Prophet
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Built with NEXUS OS
              </p>
            </div>
            <div>
              <ul className="list-disc mt-4">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-600 hover:text-orange-500"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-600 hover:text-orange-500"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="text-lg text-gray-600 hover:text-orange-500"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}