import Image from 'next/image';
import { WZUrlForm } from '.';

export default function FeatureSection() {
  return (
    <section className='bg-wzurl-gray-100 px-8 pb-16'>
      <WZUrlForm />
      <h2 className='mb-6 text-center text-3xl font-bold text-wzurl-very-dark-violet'>
        Advanced Statistics
      </h2>
      <p className='mx-auto mb-20 max-w-[45ch] text-center text-wzurl-grayish-violet lg:mb-28'>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className='relative z-0 grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-8'>
        <article className='z-0 rounded-lg bg-white px-8 pb-8 lg:max-h-56'>
          <header>
            <picture className='mx-auto block size-20 -translate-y-1/2 rounded-full bg-wzurl-dark-violet lg:mx-0'>
              <Image
                alt='Brand Recognition Icon'
                className='p-5'
                height={80}
                src='/img/icon-brand-recognition.svg'
                width={80}
              />
            </picture>
            <h3 className='mb-5 text-center text-2xl font-bold text-wzurl-very-dark-violet lg:-mt-4 lg:text-left'>
              Brand Recognition
            </h3>
          </header>
          <p className='text-center text-sm text-wzurl-grayish-violet lg:pr-4 lg:text-left'>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article className='relative rounded-lg bg-white px-8 pb-8 lg:mt-10 lg:max-h-56'>
          <div className='absolute -top-20 left-1/2 -z-10 h-20 w-2 -translate-x-1/2 bg-wzurl-cyan lg:-left-5 lg:top-[40%] lg:-translate-y-1/2 lg:rotate-90'></div>
          <header>
            <picture className='mx-auto block size-20 -translate-y-1/2 rounded-full bg-wzurl-dark-violet lg:mx-0'>
              <Image
                alt='Detailed Records Icon'
                className='p-5'
                height={80}
                src='/img/icon-detailed-records.svg'
                width={80}
              />
            </picture>
            <h3 className='mb-5 text-center text-2xl font-bold text-wzurl-very-dark-violet lg:-mt-4 lg:text-left'>
              Detailed Records
            </h3>
          </header>
          <p className='text-center text-sm text-wzurl-grayish-violet lg:pr-4 lg:text-left'>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article className='relative rounded-lg bg-white px-8 pb-8 lg:mt-20 lg:max-h-56'>
          <div className='absolute -top-20 left-1/2 -z-10 h-20 w-2 -translate-x-1/2 bg-wzurl-cyan lg:-left-5 lg:top-[28%] lg:-translate-y-1/2 lg:rotate-90'></div>
          <header>
            <picture className='mx-auto block size-20 -translate-y-1/2 rounded-full bg-wzurl-dark-violet lg:mx-0'>
              <Image
                alt='Fully Customizable Icon'
                className='p-5'
                height={80}
                src='/img/icon-fully-customizable.svg'
                width={80}
              />
            </picture>
            <h3 className='mb-5 text-center text-2xl font-bold text-wzurl-very-dark-violet lg:-mt-4 lg:text-left'>
              Fully Customizable
            </h3>
          </header>
          <p className='text-center text-sm text-wzurl-grayish-violet lg:pr-4 lg:text-left'>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
}
