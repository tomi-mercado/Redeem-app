import { useEffect, useState } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  const [localOpen, setLocalOpen] = useState(false);

  useEffect(() => {
    setLocalOpen(open || false);
  }, [open]);

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto transition-opacity ${
        localOpen ? 'opacity-100' : 'opacity-0 hidden'
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="items-end justify-center min-h-screen flex flex-column items-center justify-center p-0 sm:pt-4 sm:px-4 sm:pb-20 text-center block p-0">
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75`}
          aria-hidden="true"
        ></div>

        <span
          className="inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:max-w-lg sm:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
