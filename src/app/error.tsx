"use client"

import Link from "next/link"

export default function Error(){
	<div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[200px] font-thin mb-4">500</h1>
      <h2 className="text-4xl mb-4">Oops! my bad!</h2>
      <p className="text-xl mb-8 text-justify">That was on us . . . working on it.</p>
      <Link href="/" className='underline underline-offset-8'>
          Beam me back home
      </Link>
      <div className="mt-12 text-center">
        <p className="text-lg">
          <span className="font-bold">Meanwhile, here is a joke for you:</span> <br /><br />
          Uhh . . . my social life.
        </p>
      </div>
    </div>
}