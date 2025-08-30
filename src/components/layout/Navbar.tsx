import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
const Navbar = () => {
    const navLinks = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Online Courses',
            href: '/online-courses',
        },
        {
            title: 'Offline Courses',
            href: '/offline-courses',
        },
        {
            title: 'About',
            href: '/about',
        },
    ];
    return (
        <div className=' h-[64px] bg-white border-b border-b-gray-500/20 shadow-xs'>
            <div className='flex items-center space-x-20 h-full justify-between max-w-[1140px] mx-auto'>
                {/* logo */}
                <div>
                    <Link href='/'>
                        <img src='/images/logo.svg' alt='logo' width={200} height={100} />
                    </Link>
                </div>
                <div className='flex-1'>
                    <ul className='flex items-center gap-4'>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
                    <div className=' space-x-1 flex items-center'>
                        <img src={'/images/phone.svg'} alt='avatar' width={24} height={24} />
                        <span>12345678911</span>
                    </div>

                    <Button variant='default' className=' px-8 py-6 rounded-xl text-lg font-bold'>Join Us</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
