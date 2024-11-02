import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import React from 'react';

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2 py-4'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-black'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sumedha's</span>Blog
      </Link>

      {/* Search bar with manually positioned search icon */}
      <div className="relative hidden lg:flex items-center">
        <TextInput
          type='text'
          placeholder='Search...'
          className='pr-10'
        />
        <AiOutlineSearch className="absolute right-2 text-gray-500" />
      </div>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={'div'}>
          <Link to='/contact'>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
