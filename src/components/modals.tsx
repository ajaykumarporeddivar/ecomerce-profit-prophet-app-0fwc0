'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { clsx } from 'clsx';
import { Lucide } from 'lucide-react';

interface Entity {
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

interface EntityDetailModalProps {
  item: Entity;
  open: boolean;
  onClose: () => void;
}

const EntityDetailModal = ({ item, open, onClose }: EntityDetailModalProps) => {
  const [status, setStatus] = useState('');

  const handleApprove = () => {
    setStatus('approved');
  };

  const handleReject = () => {
    setStatus('rejected');
  };

  const handleArchive = () => {
    setStatus('archived');
  };

  return (
    <Modal open={open} onClose={onClose} className={clsx('max-w-md', 'mx-auto')}>
      <h2 className={clsx('text-lg', 'font-bold', 'mb-2')}>{item.title}</h2>
      <div className={clsx('flex', 'flex-col', 'gap-2')}>
        <p>
          <strong>Parties:</strong> {item.parties}
        </p>
        <p>
          <strong>Value:</strong> {item.value}
        </p>
        <p>
          <strong>Type:</strong> {item.type}
        </p>
        <p>
          <strong>Deadline:</strong> {item.deadline}
        </p>
        <p>
          <strong>Notes:</strong> {item.notes}
        </p>
      </div>
      <div className={clsx('flex', 'flex-col', 'gap-2', 'mt-4')}>
        <Button onClick={handleApprove} className={clsx('bg-green-500', 'hover:bg-green-700')}>
          Approve
        </Button>
        <Button onClick={handleReject} className={clsx('bg-red-500', 'hover:bg-red-700')}>
          Reject
        </Button>
        <Button onClick={handleArchive} className={clsx('bg-gray-500', 'hover:bg-gray-700')}>
          Archive
        </Button>
      </div>
      {status && (
        <p className={clsx('text-green-500', 'mt-2')}>Status: {status}</p>
      )}
    </Modal>
  );
};

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  variant: 'danger' | 'info';
}

const ConfirmModal = ({ open, onClose, title, message, onConfirm, variant }: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={onClose} className={clsx('max-w-md', 'mx-auto')}>
      <h2 className={clsx('text-lg', 'font-bold', 'mb-2')}>{title}</h2>
      <p className={clsx('mb-4')}>{message}</p>
      <div className={clsx('flex', 'flex-col', 'gap-2')}>
        <Button
          onClick={onConfirm}
          className={clsx(
            variant === 'danger' ? 'bg-red-500' : 'bg-blue-500',
            'hover:bg-red-700'
          )}
        >
          Confirm
        </Button>
        <Button onClick={onClose} className={clsx('bg-gray-500', 'hover:bg-gray-700')}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export { EntityDetailModal, ConfirmModal };