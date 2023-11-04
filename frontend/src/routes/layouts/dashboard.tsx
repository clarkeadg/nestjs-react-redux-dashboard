import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux/actions/auth'
import { FaChevronRight, FaList } from 'react-icons/fa';
import Modal from '../../components/Modal';

interface IDashboard {
  title?: string
  children?: React.ReactNode
}

export default function Dashboard(props:IDashboard) {  
  const [menuOpen, setMenuOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const dispatch = useAppDispatch()

  return (
    <div className="flex w-full">
      {/* Menu */}
      <div className={`${menuOpen ? "hidden sm:flex" : "hidden"} flex-col w-1/5 min-h-screen bg-violet-100 p-2`}>
        <div className="mt-20 text-gray-500 px-2 mb-5">Menu</div>
        <nav aria-label="Sidebar">         
          <NavLink 
            to={"/invoices"}
            className={({ isActive }) =>
              isActive ? "flex w-full items-center py-2 px-4 text-white bg-purple-600 rounded-lg overflow-hidden mb-2" : "flex w-full items-center py-2 px-4 text-gray-700 mb-2 rounded-lg hover:bg-purple-500 hover:text-white"
            }
          >
            <FaChevronRight/>
            <span className="ml-2">Invoices</span>
          </NavLink>
          <NavLink
            to={"/bills"}
            className={({ isActive }) =>
              isActive ? "flex w-full items-center py-2 px-4 text-white bg-purple-600 rounded-lg overflow-hidden mb-2" : "flex w-full items-center py-2 px-4 text-gray-700 mb-2 rounded-lg hover:bg-purple-500 hover:text-white"
            }
          >
            <FaChevronRight/>
            <span className="ml-2">Bills</span>
          </NavLink>
        </nav>
      </div>
      
      {/* Main Section */}
      <div className="flex flex-col grow">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full px-10 py-4 border-b border-gray-200">
          
          {/* Left Side */}
          <div className="flex items-center">
          
            {/* Toggle Button */}
            <button onClick={toggleMenu}className="hidden sm:inline-flex ml-5 items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <FaList/>
            </button>

            <button onClick={toggleMobileMenu} className="inline-flex sm:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <FaList/>
            </button>

            {/* Breadcrumbs */}
            <nav className="flex ml-20" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <span className="inline-flex items-center text-sm text-gray-400">
                    Accounting
                  </span>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-1">/</span>
                    <span className="ml-1 text-sm font-medium text-black md:ml-2">
                      { props.title }
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            <a href="#" onClick={(e)=>{ e.preventDefault(); dispatch(logout()); }}className="py-2 px-4 text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-lg">Logout</a>
          </div>
        </div>

        {/*  Responsive Navigation Menu */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} sm:hidden bg-violet-100 p-2`}>        
          <div className="text-gray-500 text-center px-2 pt-2 mb-5">Menu</div>
          <nav aria-label="MobileMenu">         
            <NavLink 
              to={"/invoices"}
              className={({ isActive }) =>
                isActive ? "flex w-full items-center py-2 px-4 text-white bg-purple-600 rounded-lg overflow-hidden mb-2" : "flex w-full items-center py-2 px-4 text-gray-700 mb-2 rounded-lg hover:bg-purple-500 hover:text-white"
              }
            >
              <FaChevronRight/>
              <span className="ml-2">Invoices</span>
            </NavLink>
            <NavLink
              to={"/bills"}
              className={({ isActive }) =>
                isActive ? "flex w-full items-center py-2 px-4 text-white bg-purple-600 rounded-lg overflow-hidden mb-2" : "flex w-full items-center py-2 px-4 text-gray-700 mb-2 rounded-lg hover:bg-purple-500 hover:text-white"
              }
            >
              <FaChevronRight/>
              <span className="ml-2">Bills</span>
            </NavLink>
          </nav>        
        </div>
        
        {/* Route */}
        { props.children ? props.children : <Outlet /> }
      </div>

      {/* Modal */}
      <Modal/>      
    </div>
  );
}
