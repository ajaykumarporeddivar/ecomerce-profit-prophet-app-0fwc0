'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

interface LocalStorage<T> {
  value: T;
  setValue: (value: T) => void;
}

const useLocalStorage = <T>(key: string, initial: T): LocalStorage<T> => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initial;
  });

  const setValueAndStore = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { value, setValue: setValueAndStore };
};

interface FilterState<T> {
  filtered: T[];
  search: string;
  setSearch: (search: string) => void;
  status: string;
  setStatus: (status: string) => void;
}

const useFilter = <T>(items: T[], fields: string[]): FilterState<T> => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = items.filter((item) => {
    const searchMatch = fields.some((field) => {
      const value = (item as any)[field];
      return value.toString().toLowerCase().includes(search.toLowerCase());
    });
    const statusMatch = (item as any).status === status;
    return searchMatch && statusMatch;
  });

  return { filtered, search, setSearch, status, setStatus };
};

interface ModalState {
  open: boolean;
  close: () => void;
  isOpen: boolean;
  activeItem: any;
  setActiveItem: (item: any) => void;
}

const useModal = (): ModalState => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const close = () => {
    setOpen(false);
    setActiveItem(null);
  };

  return { open, close, isOpen: open, activeItem, setActiveItem };
};

interface ToastState {
  toast: boolean;
  showToast: (message: string, type: string) => void;
}

const useDemoToast = (): ToastState => {
  const [toast, setToast] = useState(false);

  const showToast = (message: string, type: string) => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return { toast, showToast };
};

export { useLocalStorage, useFilter, useModal, useDemoToast };