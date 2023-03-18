import { plusJakartaSans } from '../fonts';
import Image from 'next/image';

export interface CourseCardComponentProps {
  icon: any;
  title: string;
  description: string;
}

export function CourseCardComponent({
  icon,
  title,
  description,
}: CourseCardComponentProps) {
  return (
    <div
      className={`${plusJakartaSans.className} pt-14 px-7 pb-8 bg-white relative rounded-2xl`}
    >
      <Image
        src={icon}
        alt={title}
        height={56}
        width={56}
        className="inline-block mb-6 absolute top-[-28px]"
      />
      <h4 className={`text-primary text-xl font-extrabold mb-4 lg:text-2xl`}>
        {title}
      </h4>
      <p className={`font-medium text-base text-se-gray mb-6 lg:text-lg`}>
        {description}
      </p>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-lg font-bold"
      >
        Get Started
      </a>
    </div>
  );
}
