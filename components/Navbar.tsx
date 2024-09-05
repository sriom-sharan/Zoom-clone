import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={'/'} className='flex items-center gap-1'>
      <Image src={'/icons/logo.svg'} alt='Voom logo' width={32} height={32} className='max-sm:size-10' />
      <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Voom</p>
      </Link>
      <div className='flex justify-between gap-5 text-white'>
        {/* Clerk user management */}
        {/* <SignedOut>
              <SignInButton />
            </SignedOut> */}
        <SignedIn>
              <UserButton />
            </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar