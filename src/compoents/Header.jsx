import React from 'react';

const Header = () => {
    return (
        
<nav className="container mx-auto w-11/12 lg:w-10/12">
    <div className="navbar py-5 lg:py-7">

       
        <div className="navbar-start flex justify-between">
            <div className="dropdown ">
                <div className="flex items-center justify-around">   
                    <div className="flex gap-2">
                      <i className="fa-solid fa-bars text-2xl lg:hidden"></i>
                    <a href=""><h2 className="text-common_heading_color text-2xl lg:text-4xl font-extrabold">Peddy</h2></a>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="navbar-center hidden lg:flex">
            <ul className="gap-11 menu-horizontal px-1 text-nav_link_color text-base font-normal">
                <li><a href="#" className="text-common_button_color text-base font-bold">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        
        <div className="navbar-end gap-6">
        <div className="join">
        <input className="input input-bordered join-item rounded-3xl " placeholder="Search" />
        </div>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ">
                    <i className="fa-regular fa-user"></i></button>        
        </div>
    </div>
</nav>
    );
};

export default Header;