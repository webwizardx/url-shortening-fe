'use client';

import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/16/solid';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='relative mx-auto flex items-center justify-between px-8 pb-4 pt-8 text-lg md:max-w-7xl'>
      <div>
        <Image
          alt='wzulr logo'
          className='mr-8 inline-block'
          height={100}
          src='/img/logo.svg'
          width={125}
        />
        <span className='mr-8 hidden font-semibold text-wzurl-grayish-violet transition hover:text-wzurl-dark-violet md:inline'>
          Features
        </span>
        <span className='mr-8 hidden font-semibold text-wzurl-grayish-violet transition hover:text-wzurl-dark-violet md:inline'>
          Pricing
        </span>
        <span className='hidden font-semibold text-wzurl-grayish-violet transition hover:text-wzurl-dark-violet md:inline'>
          Resources
        </span>
      </div>
      <div className='hidden md:block'>
        <span className='mr-8 font-semibold text-wzurl-grayish-violet transition hover:text-wzurl-dark-violet'>
          Login
        </span>
        <button
          type='button'
          className='rounded-full bg-wzurl-cyan px-8 py-3 text-sm font-semibold text-wzurl-dark-violet shadow-sm transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wzurl-cyan'
        >
          Sign Up
        </button>
      </div>
      <Menu as='nav' className='z-10 md:hidden'>
        <Menu.Button>
          <Bars3Icon className='size-8 text-wzurl-grayish-violet' />
        </Menu.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Menu.Items className='absolute left-8 right-8 top-full rounded-lg bg-wzurl-dark-violet p-8 text-center'>
            <Menu.Item
              as={'span'}
              className='du mx-auto mb-8 block font-semibold text-white'
            >
              Features
            </Menu.Item>
            <Menu.Item
              as={'span'}
              className='mx-auto mb-8 block font-semibold text-white'
            >
              Pricing
            </Menu.Item>
            <Menu.Item
              as={'span'}
              className='mx-auto mb-8 block font-semibold text-white'
            >
              Resources
            </Menu.Item>
            <Menu.Item
              as={'span'}
              className='mx-auto mb-8 block border-t border-wzurl-gray pt-8 font-semibold text-white'
            >
              Login
            </Menu.Item>
            <Menu.Item
              as={'button'}
              type='button'
              className='w-full rounded-full bg-wzurl-cyan px-4 py-3 text-sm font-semibold text-wzurl-dark-violet shadow-sm transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wzurl-cyan'
            >
              Sign Up
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
