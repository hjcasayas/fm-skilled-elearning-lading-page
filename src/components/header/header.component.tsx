import { PrimaryButtonComponent } from '../buttons/primary-button.component';
import { plusJakartaSans } from '../fonts';

export function HeaderComponent() {
  return (
    <header className="flex flex-row justify-between w-full">
      <h1
        className={`self-center font-extrabold text-[28px] ${plusJakartaSans.className}`}
      >
        skilled
      </h1>
      <PrimaryButtonComponent>Get Started</PrimaryButtonComponent>
    </header>
  );
}
