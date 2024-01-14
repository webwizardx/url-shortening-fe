import { Header, Hero } from './components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <Hero />
      </main>
    </>
  );
}
