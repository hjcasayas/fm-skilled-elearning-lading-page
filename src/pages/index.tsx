import Head from 'next/head';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { JumbotronComponent } from '@/components/jumbotron/jumbotron.component';
import { CourseListComponent } from '@/components/course-list/course-list.component';

export default function Home() {
  return (
    <>
      <main>
        <div className="mb-16">
          <JumbotronComponent />
        </div>
        <div className="mb-20">
          <CourseListComponent />
        </div>
      </main>
    </>
  );
}
