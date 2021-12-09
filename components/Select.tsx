import React, { useEffect, useRef, useState } from 'react';

import CrossIcon from './CrossIcon';
import arrows from './arrows';

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  label?: string;
  options?: {
    text: string;
    value?: unknown;
  }[];
  value?: unknown;
  defaultValue?: string;
  notSelectedMessage?: string;
  fullWidth?: boolean;
  onChange?: (entry: { name: string | undefined; value: unknown }) => void;
}

const defaultNotSelectedMessage = 'Not selected';

const { ArrowDown } = arrows;

export default function Select({
  label,
  options,
  name,
  value,
  defaultValue,
  notSelectedMessage,
  fullWidth,
  className,
  onChange,
}: SelectProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside: EventListener = (e) => {
      if (
        isOpen &&
        (buttonRef.current || optionsRef.current) &&
        !buttonRef.current?.contains(e.target as Node) &&
        !optionsRef.current?.contains(e.target as Node)
      ) {
        toggleOpen();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  const [localValue, setLocalValue] = useState(
    options?.find(({ value: optionValue }) => optionValue === defaultValue)
      ?.value || undefined
  );

  const selectedOption =
    options?.find(
      ({ value: optionValue, text }) =>
        // optionValue could be undefined, try to match with text
        // compare with local value if is not a controlled component
        (optionValue || text) === (value ? value : localValue)
    )?.text ||
    notSelectedMessage ||
    defaultNotSelectedMessage;

  const handleChange = (text: string, value: unknown) => {
    setLocalValue(value || text);
    onChange?.({ name, value: value || text });
    toggleOpen();
  };

  const handleCleanValue = () => {
    setLocalValue(undefined);
    onChange?.({ name, value: undefined });
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className || ''}`}>
      <div onClick={toggleOpen}>
        <label className="typography-gray text-base">{label}</label>
      </div>
      <div className={`${fullWidth ? 'w-full' : 'w-40'}`}>
        <button
          ref={buttonRef}
          onClick={toggleOpen}
          className={`w-full mt-1 py-2 flex justify-between items-center px-3 text-left ${
            isOpen ? '' : 'shadow-xl'
          } focus:border-blue-200 border rounded-lg h-12 typography-gray text-base`}
        >
          <p className="noWrap">{selectedOption}</p>
          <div className="flex items-center justify-between w-7">
            {localValue && (
              <CrossIcon
                onClick={handleCleanValue}
                style={{ height: 10, width: 10 }}
                className="mr-1"
              />
            )}
            <ArrowDown
              style={{ height: 14, width: 14 }}
              className={`transform transition-all duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
        {isOpen && (
          <div
            className={`rounded-lg absolute shadow-xl z-30 bg-white divide-y ${
              fullWidth ? 'w-full' : 'w-40'
            } max-h-44 overflow-y-auto`}
            ref={optionsRef}
          >
            {options?.map(({ text, value }, i) => (
              <div
                key={i}
                className={`p-2 cursor-pointer hover:bg-gray-100`}
                onClick={() => handleChange(text, value)}
              >
                {text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
