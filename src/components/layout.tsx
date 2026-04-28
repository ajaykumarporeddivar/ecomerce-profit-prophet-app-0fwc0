'use client';

import { AiOutlineMenu } from 'lucide-react';

export function AppHeader({
  logo,
  navLinks,
  demoBadge,
  mobileHamburger,
}: {
  logo: string;
  navLinks: { label: string; href: string }[];
  demoBadge: React.ReactNode;
  mobileHamburger: React.ReactNode;
}) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">{logo}</h1>
          {demoBadge}
        </div>
        <nav className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">{mobileHamburger}</div>
      </div>
    </header>
  );
}

export function AppSidebar({
  items,
  collapsible = false,
}: {
  items: { icon: React.ReactNode; label: string; href: string; active: boolean }[];
  collapsible?: boolean;
}) {
  return (
    <aside className="bg-gray-100 py-4">
      <div className="container flex flex-col">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              'flex items-center py-2 px-4 text-sm font-medium',
              {
                'text-gray-900 bg-gray-200': item.active,
                'text-gray-600 hover:text-gray-900': !item.active,
              }
            )}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export function DemoBanner() {
  const [dismissed, setDismissed] = React.useState(() => {
    const dismissed = localStorage.getItem('demo-banner-dismissed');
    return dismissed === 'true';
  });

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white text-center p-2">
      🔐 Demo Mode — all data is illustrative. Connect your database to go live.
      <button
        className="ml-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        onClick={() => {
          localStorage.setItem('demo-banner-dismissed', 'true');
          setDismissed(true);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}