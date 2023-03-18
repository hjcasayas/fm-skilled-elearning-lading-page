import { BaseButtonComponentProps, ButtonComponent } from './button.component';

export interface OrangeGradientButtonComponentProps
  extends BaseButtonComponentProps {}

export function OrangeGradientButtonComponent({
  children,
}: OrangeGradientButtonComponentProps) {
  return (
    <ButtonComponent backgroundColor="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6]">
      {children}
    </ButtonComponent>
  );
}
