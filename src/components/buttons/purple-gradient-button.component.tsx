import { BaseButtonComponentProps, ButtonComponent } from './button.component';

export interface PurpleGradientButtonComponentProps
  extends BaseButtonComponentProps {}

export function PurpleGradientButtonComponent({
  children,
}: PurpleGradientButtonComponentProps) {
  return (
    <ButtonComponent backgroundColor="bg-gradient-to-b from-[#4851FF] to-[#F02AA6]">
      {children}
    </ButtonComponent>
  );
}
