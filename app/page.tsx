import {
  BoostYourLinks,
  FeaturedSection,
  Footer,
  Header,
  Hero,
} from './components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <Hero />
        <FeaturedSection />
        <BoostYourLinks />
      </main>
      <Footer />
    </>
  );
}
