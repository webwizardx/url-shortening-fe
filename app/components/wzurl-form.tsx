export default function WZUrlForm() {
  return (
    <section className='-translate-y-1/2 lg:max-w-7xl'>
      <form className='flex flex-wrap justify-between gap-4 rounded-lg bg-wzurl-dark-violet bg-shorten-mobile bg-right-top bg-no-repeat px-8 py-6 lg:bg-shorten-desktop lg:px-12 lg:py-10'>
        <div className='w-full lg:w-3/4 xl:w-[80%]'>
          <label htmlFor='url' className='sr-only'>
            Enter a URL
          </label>
          <input
            type='url'
            name='url'
            id='url'
            className='block w-full rounded-md border-0 p-3 text-wzurl-very-dark-blue ring-1 ring-inset ring-wzurl-grayish-violet placeholder:text-wzurl-grayish-violet focus:ring-2 focus:ring-inset focus:ring-offset-wzurl-cyan'
            placeholder='Shorten a link here...'
          />
        </div>
        <button
          type='submit'
          className='w-full rounded-md bg-wzurl-cyan px-12 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wzurl-cyan lg:max-w-44 lg:px-6'
        >
          Shorten it!
        </button>
      </form>
    </section>
  );
}
