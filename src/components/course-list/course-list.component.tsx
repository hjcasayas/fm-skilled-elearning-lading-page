import { CourseCardComponent } from '../course-card/course-card.component';
import { plusJakartaSans } from '../fonts';
import { courseList } from './course-list';

export function CourseListComponent() {
  return (
    <div className="md:flex md:flex-row md:flex-wrap md:justify-between">
      <div className="bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] pt-6 pb-8 px-7 rounded-2xl mb-10 md:w-[49%] md:mb-14 lg:w-[32%]">
        <h3
          className={`${plusJakartaSans.className} text-white font-extrabold text-2xl mb-4 lg:text-4xl`}
        >
          Checkout our most popular courses!
        </h3>
      </div>
      {courseList != null && courseList.length > 0
        ? courseList.map(({ title, description, icon }, index, array) => {
            return (
              <div
                key={title}
                className="mb-10 md:w-[49%] md:mb-14 lg:w-[32%] bg-white rounded-2xl"
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
    </div>
  );
}
