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
    <div className={`${plusJakartaSans.className} px-7 pb-8`}>
      <Image
        src={icon}
        alt={title}
        height={56}
        width={56}
        className="inline-block mb-6"
      />
      <h4 className={`text-primary text-xl font-extrabold mb-4`}>{title}</h4>
      <p className={`font-medium text-base text-se-gray mb-6`}>{description}</p>
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
