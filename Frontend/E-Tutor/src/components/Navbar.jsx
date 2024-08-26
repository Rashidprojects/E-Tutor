
import { useState } from 'react';
import logo from '../assets/logo.png'
import { FiSearch,FiShoppingCart } from "react-icons/fi";
import { GoBell,GoHeart, } from "react-icons/go";

const Navbar = () => {

    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    

  return (
    <div>
        <nav className="flex justify-between bg-[#1d2026] text-gray-400 p-3">
            <div className=" hidden md:flex list-none gap-4 cursor-pointer">
                <li className="px-2">Home</li>
                <li className="px-2">Courses</li>
                <li className="px-2">About</li>
                <li className="px-2">Contact</li>
                <li className="px-2">Become an Instructor</li>
            </div>
            <div className="flex list-none gap-4">
                <li className="relative px-2 group flex items-center gap-1">
                    <select id="currency" name="currency" className="bg-[#1d2026]">
                        <option value="INR" selected>INR</option>
                        <option value="USD">USD</option>
                        <option value="SR">SR</option>
                    </select>
                </li>
                <li>English</li>
            </div>
            <div className='flex md:hidden justify-center text-[#ff6636] z-20' onClick={handleSidebar}>
                <div className="relative top-3 right-7 ">
                    <span  className={` block absolute h-0.5 w-6 text-[#ff6636] bg-current transform transition duration-500 ease-in-out ${sidebar ? ' rotate-45 ' : '-translate-y-1.5' }`}></span>
                    <span  className={` block absolute  h-0.5 w-4 text-[#ff6636] bg-current   transform transition duration-500 ease-in-out ${ sidebar ? 'opacity-0': '' } `}></span>
                    <span  className={` block absolute  h-0.5 w-6 text-[#ff6636] bg-current transform  transition duration-500 ease-in-out ${ sidebar ? '-rotate-45 ' : 'translate-y-1.5'} `}></span> 
                </div>
            </div>
        </nav>
        <nav className='flex justify-between border border-gray-200 p-4 '>
            <div className='flex items-center gap-5 md:gap-10'>
                <img src={logo} alt="" className='w-[100px] md:w-[100%]' />
                <div className='relative '>
                    <input type="text" placeholder='What do you want learn...' onChange={handleChange} className={`border border-gray-200 p-1 ${search ? 'px-2' : 'px-8'} rounded-md w-[245px] md:w-[300px]`}/>
                    {
                        !search && (
                            <span className='absolute left-2 top-2 text-xl'> <FiSearch /> </span>
                        )
                    }
                </div>
            </div>
            <div className='hidden md:flex justify-center gap-3'>
                <div className='list-none flex gap-4 mt-3 mr-2 cursor-pointer'>
                    <li><GoBell /></li>
                    <li><GoHeart /></li>
                    <li><FiShoppingCart /></li>
                </div>
                <button className='bg-[#ffeee8] px-4 text-tutorPrimary rounded-sm'>Create Account</button>
                <button className='bg-tutorPrimary px-4 text-[#fff] rounded-sm'>Sign in</button>
            </div>
        </nav>

        {/* Sidebar */}
        
        
        <div className={`absolute bg-gray-800 text-white p-4 h-[100vh] z-10 right-0 top-0 pt-12 md:hidden transform transition-transform duration-500 ease-in ${sidebar ? 'translate-x-0' : 'translate-x-full' }  `}>
            <div className='flex flex-col justify-center items-center'>
                <div className='gap-2 flex'>
                    <button className='bg-[#ffeee8] px-2 text-[#FF6636] rounded-sm'>Create Account</button>
                    <button className='bg-[#FF6636] px-2 text-[#fff] rounded-sm'>Sign in</button>
                </div>
                <div className='list-none flex gap-4 mt-3 mr-2 cursor-pointer'>
                    <li><GoBell /></li>
                    <li><GoHeart /></li>
                    <li><FiShoppingCart /></li>
                </div>
            </div>
            <div className='list-none flex flex-col gap-5 mt-5'>
                <li className="px-2">Home</li>
                <li className="px-2">Courses</li>
                <li className="px-2">About</li>
                <li className="px-2">Contact</li>
                <li className="px-2">Become an Instructor</li>
            </div>
        </div>
    </div>
  )
}

export default Navbar
