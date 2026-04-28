'use client';

import { AiOutlineLoading3Quarters } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: string[]) {
  return twMerge(...inputs);
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
  href,
}: {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    'inline-flex justify-center',
    {
      'bg-primary-500 hover:bg-primary-600': variant === 'primary',
      'bg-secondary-500 hover:bg-secondary-600': variant === 'secondary',
      'border border-primary-500 hover:border-primary-600': variant === 'outline',
      'text-primary-500 hover:text-primary-600': variant === 'ghost',
    },
    {
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : children}
    </button>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('bg-white shadow-md rounded-md', className)}>{children}</div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 p-4">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 p-4">{children}</div>;
}

export function Badge({
  variant = 'default',
  children,
}: {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}) {
  const classes = cn(
    'inline-flex justify-center px-2 py-1 text-xs rounded',
    {
      'bg-green-500 text-white': variant === 'success',
      'bg-yellow-500 text-white': variant === 'warning',
      'bg-red-500 text-white': variant === 'error',
      'bg-blue-500 text-white': variant === 'info',
      'bg-gray-200 text-gray-600': variant === 'default',
    }
  );

  return <span className={classes}>{children}</span>;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <div className="relative mt-1">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'block w-full pl-10 text-sm text-gray-700',
            {
              'border-red-500': error,
            }
          )}
        />
        {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
      </div>
    </div>
  );
}

export function Spinner() {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function Avatar({ name, size = 'md', bg }: { name: string; size?: 'sm' | 'md' | 'lg'; bg?: string }) {
  const colors = [
    '#FF69B4',
    '#33CC33',
    '#6666FF',
    '#FF9966',
    '#66CCCC',
    '#CC33CC',
    '#6699CC',
    '#CCCC66',
  ];

  const hash = name.split('').reduce((a, b) => {
    a = (a + b.charCodeAt(0)) % colors.length;
    return a;
  }, 0);

  const color = colors[hash];

  const classes = cn(
    'inline-block rounded-full',
    {
      'w-8 h-8': size === 'sm',
      'w-12 h-12': size === 'md',
      'w-16 h-16': size === 'lg',
    }
  );

  return (
    <div
      className={classes}
      style={{
        backgroundColor: bg || color,
      }}
    >
      <span className="text-white text-center">{name.charAt(0).toUpperCase()}</span>
    </div>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}) {
  const classes = cn(
    'bg-white shadow-md rounded-md p-4',
    {
      'border-t-4 border-green-500': changeType === 'up',
      'border-t-4 border-red-500': changeType === 'down',
      'border-t-4 border-gray-200': changeType === 'neutral',
    }
  );

  return (
    <div className={classes}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">{value}</p>
        </div>
        <div>
          <p className="text-sm">
            {changeType === 'up' ? (
              <span className="text-green-500">+{change}</span>
            ) : changeType === 'down' ? (
              <span className="text-red-500">-{change}</span>
            ) : (
              <span className="text-gray-500">{change}</span>
            )}
          </p>
          {icon}
        </div>
      </div>
    </div>
  );
}