import { ReactNode } from 'react';

import { plusJakartaSans } from '../fonts';

export interface BaseButtonComponentProps {
  children: ReactNode;
}

export interface ButtonComponentProps extends BaseButtonComponentProps {
  backgroundColor: string;
}

export function ButtonComponent({
  children,
  backgroundColor,
}: ButtonComponentProps) {
  return (
    <div className="inline-block rounded-full bg-white z-10">
      <button
        className={`inline-block px-8 py-[14px] text-white rounded-full font-bold text-base ${backgroundColor} ${plusJakartaSans.className} lg:text-lg hover:opacity-50`}
      >
        {children}
      </button>
    </div>
  );
}
