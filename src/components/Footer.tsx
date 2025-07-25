import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
<div className='max-w-6xl mx-auto grid grid-cols-1 sx:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>

<div >
    <h2 className='text-white text-lg font-semibold mb-4'>About us</h2>
    <p className='mb-4'>Music World is a premier institution dedicated to teaching the art and science fo music. We nurture talent from the ground up, during a vibrant learning experience.</p>
</div>

<div className=''>
    <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
    <ul className='flex-space-x-4'>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Home</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Courses</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Instructors</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Contact</Link></li>
    </ul>
</div>

<div className=''>

    <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
    <ul className='flex flex-col space-x-4'>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Facebook</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Twitter</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>Instagram</Link></li>
        <li><Link href="#" className='hover:text-white transition-colors duration-300'>YouTube</Link></li>
    </ul>
</div>

<div className=''>
    <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
      <p className='mb-4'>Address: 123 Music Lane, Melody City, MC 12345</p>
    <p className='mb-4'>Email: <Link href="mailto:info@musicworld.com">info@musicworld.com</Link></p>
    <p className='mb-4'>Phone: <Link href="tel:+1234567890">+1 234 567 890</Link></p>


</div>

</div>

<p className='text-center text-gray-500 text-sm mt-8'>© 2023 Music World. All rights reserved.</p>
    </footer>
  )
}

export default Footer