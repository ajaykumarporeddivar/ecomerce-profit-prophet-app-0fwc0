'use client';

import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { clsx } from 'clsx';
import { Lucide } from 'lucide-react';

interface CreateEntityFormProps {
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

const initialFormState: CreateEntityFormProps = {
  title: '',
  parties: '',
  value: '',
  type: '',
  deadline: '',
  notes: '',
};

const CreateEntityForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data
    if (!formState.title || !formState.parties || !formState.value || !formState.type || !formState.deadline) {
      return;
    }
    // Submit form data
    console.log(formState);
    setSuccess(true);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx('flex', 'flex-col', 'gap-4')}>
      <Input
        label="Title"
        type="text"
        value={formState.title}
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
      />
      <Input
        label="Parties"
        type="text"
        value={formState.parties}
        onChange={(e) => setFormState({ ...formState, parties: e.target.value })}
      />
      <Input
        label="Value"
        type="number"
        value={formState.value}
        onChange={(e) => setFormState({ ...formState, value: e.target.value })}
      />
      <Input
        label="Type"
        type="text"
        value={formState.type}
        onChange={(e) => setFormState({ ...formState, type: e.target.value })}
      />
      <Input
        label="Deadline"
        type="date"
        value={formState.deadline}
        onChange={(e) => setFormState({ ...formState, deadline: e.target.value })}
      />
      <Input
        label="Notes"
        type="text"
        value={formState.notes}
        onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
      />
      <Button type="submit">Create Entity</Button>
      {success && (
        <p className={clsx('text-green-500')}>Entity created successfully!</p>
      )}
    </form>
  );
};

interface FilterState {
  search: string;
  status: string;
  dateRange: string;
}

const initialFilterState: FilterState = {
  search: '',
  status: '',
  dateRange: '',
};

const FilterBar = () => {
  const [filterState, setFilterState] = useState(initialFilterState);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, search: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState({ ...filterState, status: e.target.value });
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, dateRange: e.target.value });
  };

  return (
    <div className={clsx('flex', 'flex-col', 'gap-4')}>
      <Input
        label="Search"
        type="text"
        value={filterState.search}
        onChange={handleSearch}
      />
      <select
        value={filterState.status}
        onChange={handleStatusChange}
        className={clsx('py-2', 'px-4', 'border', 'border-gray-200', 'rounded')}
      >
        <option value="">Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Input
        label="Date Range"
        type="date"
        value={filterState.dateRange}
        onChange={handleDateRangeChange}
      />
    </div>
  );
};

const ExportButton = () => {
  const handleExport = () => {
    // Generate CSV from mock data
    const csvData = [
      ['Title', 'Parties', 'Value', 'Type', 'Deadline', 'Notes'],
      ['Entity 1', 'Party 1', '100', 'Type 1', '2024-01-01', 'Note 1'],
      ['Entity 2', 'Party 2', '200', 'Type 2', '2024-01-02', 'Note 2'],
    ];
    const csv = csvData.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'entities.csv';
    a.click();
  };

  return (
    <Button onClick={handleExport} className={clsx('bg-blue-500', 'hover:bg-blue-700')}>
      Export to CSV
    </Button>
  );
};

export { CreateEntityForm, FilterBar, ExportButton };