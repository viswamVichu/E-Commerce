import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../Hooks/UseOnline";

const Headers = () => {
  const [show, setShow] = useState(false);
  const datas = useOnline();
  console.log(datas);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className='2xl:container bg-gray-300  mx-auto'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center '>
        {/* logo and toggle icon container */}
        <div className=' flex justify-between items-center'>
          {/* Logo */}
          <img
            className='h-24 w-24 rounded-full'
            src='https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!sw800'
            alt=''
          />
          {/* Menu Toggle Icon */}
          <div>
            {show ? (
              <svg
                onClick={toggle}
                className='block md:hidden'
                viewBox='0 0 21 21'
                fill='currentColor'
                height='1em'
                width='1em'
                aria-label='Close menu'
              >
                <g fill='none' fillRule='evenodd' stroke='currentColor'>
                  <path d='M15.5 15.5l-10-10zM15.5 5.5l-10 10' />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className='block md:hidden'
                viewBox='0 0 1024 1024'
                fill='currentColor'
                height='1em'
                width='1em'
                aria-label='Open menu'
              >
                <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z' />
              </svg>
            )}
          </div>
        </div>
        {/* Navigation Menu */}
        <div className={show ? "block" : "hidden md:block"}>
          <ul className=' flex flex-col justify-center items-center md:flex-row md:justify-end gap-20 h-[100px]'>
            <li>
              <p>
                {datas ? (
                  <p className='text-2xl'>✅</p>
                ) : (
                  <p className='text-2xl'>❌</p>
                )}
              </p>
            </li>
            <li
              className='text-2xl font-[poppins] font-medium bg-white px-3 py-1 rounded-lg'
              id='home'
            >
              <Link to='/' onClick={toggle}>
                Home
              </Link>
            </li>
            <li
              className='text-2xl font-medium font-[poppins]  bg-white px-3 py-1 rounded-lg'
              onClick={toggle}
              id='help'
            >
              Help
            </li>
            <li
              className='text-2xl font-medium font-[poppins]  bg-white px-3 py-1 rounded-lg'
              id='offer'
            >
              Offer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
