import { CourseCardComponent } from '../course-card/course-card.component';
import { plusJakartaSans } from '../fonts';
import { courseList } from './course-list';

export function CourseListComponent() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] pt-6 pb-8 px-7 rounded-xl mb-4">
        <h3
          className={`${plusJakartaSans.className} text-white font-extrabold text-2xl mb-4`}
        >
          Checkout our most popular courses!
        </h3>
      </div>
      {courseList != null && courseList.length > 0
        ? courseList.map(({ title, description, icon }, index, array) => {
            return (
              <div
                key={title}
                className={`${array.length - 1 === index ? '' : 'mb-4'} `}
              >
                <CourseCardComponent
                  title={title}
                  description={description}
                  icon={icon}
                />
              </div>
            );
          })
        : null}
    </>
  );
}
