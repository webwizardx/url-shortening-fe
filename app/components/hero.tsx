import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative mx-auto flex flex-wrap items-center justify-center gap-8 pb-60 lg:mt-8 lg:max-w-7xl lg:flex-row-reverse lg:flex-nowrap lg:px-8 lg:pt-8'>
      <picture className='relative block aspect-video min-h-80 w-full lg:absolute lg:right-[-15%] lg:mt-16 lg:h-[600px] lg:w-[700px]'>
        <Image
          alt='Hero image'
          className='ml-16 lg:ml-0 lg:w-full lg:object-contain lg:object-center'
          fill={true}
          src='/img/illustration-working.svg'
        />
      </picture>
      <div className='text-center lg:mr-auto lg:pt-16 lg:text-left'>
        <h1 className='mx-auto mb-4 max-w-[16ch] text-4xl font-bold text-wzurl-dark-violet lg:text-7xl'>
          More than just shorter links
        </h1>
        <p className='mx-auto mb-6 max-w-72 text-wzurl-grayish-violet lg:mx-0 lg:max-w-96'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          type='button'
          className='rounded-full bg-wzurl-cyan px-12 py-3 text-sm font-semibold text-wzurl-dark-violet shadow-sm transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wzurl-cyan'
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
