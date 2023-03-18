import { JumbotronComponent } from '@/components/jumbotron/jumbotron.component';
import { CourseListComponent } from '@/components/course-list/course-list.component';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen overflow-clip">
        <div className="md:container mx-auto my-0 p-4 md:pt-6 md:px-10 lg:pt-10 lg:px-40 mb-9 md:mb-24 lg:mb-44">
          <HeaderComponent />
        </div>
        <main>
          <div className="md:container mx-auto my-0 p-4 md:pt-6 md:px-10 lg:pt-10 lg:px-40 mb-16 md:mb-44 lg:mb-56">
            <JumbotronComponent />
          </div>
          <div className="bg-gradient-to-b from-white to-[#f2f2f2] pb-16">
            <div className="md:container mx-auto my-0 p-4 md:pt-6 md:px-10 lg:pt-10 lg:px-40">
              <CourseListComponent />
            </div>
          </div>
        </main>
        <FooterComponent />
      </div>
    </>
  );
}
