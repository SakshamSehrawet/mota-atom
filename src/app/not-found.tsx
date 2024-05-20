/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[200px] font-thin mb-4">404</h1>
      <h2 className="text-4xl mb-4">Oops! lost much?</h2>
      <p className="text-xl mb-8 text-justify">This page doesn't exist . . . like your social life.</p>
      <Link href="/" className='underline underline-offset-8'>
          Beam me back home
      </Link>
      <div className="mt-12 text-center">
        <p className="text-lg">
          <span className="font-bold">Meanwhile, here's a joke for you:</span> <br /><br />
          Uhh . . . your social life.
        </p>
      </div>
    </div>
  );
}
