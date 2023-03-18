import { PurpleGradientButtonComponent } from '../buttons/purple-gradient-button.component';
import { plusJakartaSans } from '../fonts';

export function FooterComponent() {
  return (
    <footer className="flex flex-row justify-between py-9 px-4 bg-primary w-screen">
      <h3
        className={`${plusJakartaSans.className} text-[28px] text-white self-center font-extrabold`}
      >
        skilled
      </h3>
      <PurpleGradientButtonComponent>Get Started</PurpleGradientButtonComponent>
    </footer>
  );
}
