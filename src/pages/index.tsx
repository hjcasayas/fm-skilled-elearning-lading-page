import Head from 'next/head';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { JumbotronComponent } from '@/components/jumbotron/jumbotron.component';

export default function Home() {
  return (
    <>
      <main>
        <JumbotronComponent />
      </main>
    </>
  );
}
