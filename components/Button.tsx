import { HtmlHTMLAttributes } from 'react';

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function Button({
  onClick,
  disabled,
  children,
  className,
  variant = 'primary',
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-2xl mt-3 bg-${
        backgroundColor ||
        (disabled ? 'gray-300' : variant === 'primary' ? 'blue-200' : 'white')
      } typography-${
        disabled || variant === 'secondary' ? 'gray' : 'white'
      } text-lg w-56 p-2 ${disabled ? 'cursor-auto' : 'cursor-pointer'} ${
        className || ''
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
