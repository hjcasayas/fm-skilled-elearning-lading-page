import Image from 'next/image';

import { OrangeGradientButtonComponent } from '../buttons/orange-gradient-button.component';
import { plusJakartaSans } from '../fonts';

import ImageHeroMobile from '../../../public/images/image-hero-mobile.png';

export function JumbotronComponent() {
  return (
    <>
      <div>
        <h2
          className={`${plusJakartaSans.className} text-[40px] leading-tight font-extrabold mb-[26px]`}
        >
          Maximize skill, minimize budget
        </h2>
        <p
          className={`${plusJakartaSans.className} text-base font-medium text-se-gray mb-6`}
        >
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className={`mb-11`}>
          <OrangeGradientButtonComponent>
            Get Started
          </OrangeGradientButtonComponent>
        </div>
        <Image
          src={ImageHeroMobile}
          alt="Image Hero"
          className="h-auto w-full"
        />
      </div>
    </>
  );
}
