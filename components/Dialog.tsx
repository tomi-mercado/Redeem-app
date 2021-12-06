import AnimatedResponseIcon from './AnimatedResponseIcon';
import Modal, { ModalProps } from './Modal';

export interface DialogProps extends Omit<ModalProps, 'children'> {
  title?: string;
  description?: string;
  responseIcon?: boolean | undefined;
  buttons?: {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary';
  }[];
}

export default function Dialog({
  title,
  description,
  responseIcon,
  buttons,
  open,
  onClose,
}: DialogProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-6 text-center">
        <div>
          {responseIcon !== undefined && responseIcon ? (
            <AnimatedResponseIcon.AnimatedCheck />
          ) : (
            <AnimatedResponseIcon.AnimatedError />
          )}
        </div>

        <div className="mt-3">
          <h5 className="typography text-xl text-bold">{title}</h5>
          <p className="typography-gray mt-2 text-normal">{description}</p>
        </div>
        {buttons && (
          <div className="mt-3 flex items-center justify-end">
            {buttons.map(({ label, onClick, color }, index) => (
              <button
                className={`px-4 py-2 text-normal rounded-lg text-bold bg-${
                  color === 'primary' || color === undefined
                    ? 'blue-300 hover:bg-blue-400'
                    : 'white border hover:bg-gray-200'
                }`}
                key={index}
                onClick={onClick}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
