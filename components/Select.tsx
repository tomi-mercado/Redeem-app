import React, { useEffect, useRef, useState } from 'react';

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
  const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside: EventListener = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
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

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      <div onClick={toggleOpen}>
        <label>{label}</label>
      </div>
      <div className={`${fullWidth ? 'w-full' : 'w-40'}`}>
        <button
          ref={ref}
          onClick={toggleOpen}
          className={`w-full mt-1 py-2 flex justify-between items-center px-3 text-left ${
            isOpen ? '' : 'shadow-xl'
          } focus:border-blue-200 border rounded-lg h-12`}
        >
          {selectedOption}
          <div className="flex items-center justify-between w-2">
            <ArrowDown
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
            }`}
          >
            {options?.map(({ text, value }, i) => (
              <div
                key={i}
                className={`p-2`}
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
