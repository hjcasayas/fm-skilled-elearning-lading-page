import Image from 'next/image';

import { OrangeGradientButtonComponent } from '../buttons/orange-gradient-button.component';
import { plusJakartaSans } from '../fonts';

import ImageHeroMobile from '../../../public/images/image-hero-mobile@2x.webp';
import ImageHeroTablet from '../../../public/images/image-hero-tablet@2x.webp';
import ImageHeroDesktop from '../../../public/images/image-hero-desktop@2x.webp';

export function JumbotronComponent() {
  return (
    <div className="relative">
      <div className="md:w-[58%] lg:w-[43%]">
        <h2
          className={`${plusJakartaSans.className} text-[40px] leading-tight font-extrabold mb-[26px] lg:text-[56px] lg:mb-7`}
        >
          Maximize skill, minimize budget
        </h2>
        <p
          className={`${plusJakartaSans.className} text-base font-medium text-se-gray mb-6 lg:text-lg lg:mb-10`}
        >
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className={`mb-11 md:mb-0`}>
          <OrangeGradientButtonComponent>
            Get Started
          </OrangeGradientButtonComponent>
        </div>
      </div>
      <div className="md:hidden w-full">
        <Image
          src={ImageHeroMobile}
          alt="Image Hero"
          className="h-auto w-full"
        />
      </div>
      <Image
        src={ImageHeroTablet}
        alt="Image Hero"
        className="h-auto absolute top-[-263px] right-[-340px] hidden md:inline-block lg:hidden"
      />
      <Image
        src={ImageHeroDesktop}
        alt="Image Hero"
        className="h-auto absolute top-[-398px] right-[-560px] hidden lg:inline-block"
      />
    </div>
  );
}
