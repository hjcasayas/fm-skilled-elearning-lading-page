import { ReactNode } from 'react';
import { BaseButtonComponentProps, ButtonComponent } from './button.component';

export interface PrimaryButtonComponentProps extends BaseButtonComponentProps {}

export function PrimaryButtonComponent({
  children,
}: PrimaryButtonComponentProps) {
  return (
    <ButtonComponent backgroundColor="bg-primary">{children}</ButtonComponent>
  );
}
