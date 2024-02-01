import Image from 'next/image';

const navigation = {
  features: [
    { name: 'Link Shortening', href: '#' },
    { name: 'Branded links', href: '#' },
    { name: 'Analytics', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Support', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Our team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      className='bg-wzurl-very-dark-violet px-8 py-10'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='grid justify-center gap-8 lg:grid-cols-[2fr_repeat(4,1fr)]'>
        <h2 className='text-center text-2xl font-bold text-white'>Shortly</h2>
        <div className='text-center lg:text-left'>
          <h3 className='text-sm font-semibold leading-6 text-white'>
            Features
          </h3>
          <ul role='list' className='mt-6 space-y-2'>
            {navigation.features.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='text-sm leading-6 text-wzurl-gray hover:text-white'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center lg:text-left'>
          <h3 className='text-sm font-semibold leading-6 text-white'>
            Resources
          </h3>
          <ul role='list' className='mt-6 space-y-2'>
            {navigation.resources.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='text-sm leading-6 text-wzurl-gray hover:text-white'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center lg:text-left'>
          <h3 className='text-sm font-semibold leading-6 text-white'>
            Company
          </h3>
          <ul role='list' className='mt-6 space-y-2'>
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='text-sm leading-6 text-wzurl-gray hover:text-white'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex h-6 gap-4'>
          <Image
            alt='Facebook logo'
            height={24}
            src='/img/icon-facebook.svg'
            width={24}
          />
          <Image
            alt='Facebook logo'
            height={24}
            src='/img/icon-twitter.svg'
            width={24}
          />
          <Image
            alt='Facebook logo'
            height={24}
            src='/img/icon-pinterest.svg'
            width={24}
          />
          <Image
            alt='Facebook logo'
            height={24}
            src='/img/icon-instagram.svg'
            width={24}
          />
        </div>
      </div>
    </footer>
  );
}
