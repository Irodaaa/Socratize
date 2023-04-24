import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {BsPersonFill} from "react-icons/bs";
import {Router, useNavigate} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import logo from '../assets/socratize.png'





const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    const links = [
        {
            id:1,
            link: "Bog'lanish"
        },
        {
            id:2,
            link: "Anketa to'ldirish"
        },
        {
            id:3,
            link: "Ma'lumot"
        },
    ]

    // let navigate = useNavigate();
    // const routeChange = () =>{
    //     let path = `../Contacts`;
    //     navigate(`./Contacts.jsx`);
    // }


        const navigate = useNavigate();


        return (
            <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg font-poppinss'>
                <div className='px-1 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center font-poppinss'>
                        <div className='flex items-center font-bold pl-4'>
                        <img src={logo} className='h-14 w-16' alt='logotype'/>
                        </div>
                        <h1 className='pl-0 ml-0 font-bold mr-4 sm:text-3xl font-poppins tracking-widest uppercase px-12 text-secondary font-extrabold'>Socratize</h1>
                        <ul className='hidden md:flex text-secondary font-medium text-xl'>
                            <li className='tracking-widest px-10'><Link to="home" smooth={true} duration={500}>Bosh sahifa</Link></li>
                            <li className='tracking-widest px-10'><Link to="about" smooth={true} offset={-200} duration={500}>Ma'lumot</Link></li>
                            <li className='tracking-widest px-10'><Link to="support" smooth={true} offset={-50} duration={500}>Yordam</Link></li>
                            <li className='tracking-widest px-10'><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforma</Link></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex pr-4'>

                        <button onClick={()=>navigate("/contacts")} className='px-12 py-3 duration-300 hover:scale-110 bg-primary text-hover border-primary font-bold text-xl tracking-widest'>Bog'lanish</button>

                    </div>
                    <div className='md:hidden mr-4' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}

                    </div>
                </div>

                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                    <li className='border-b-2 border-zinc-300 w-full tracking-widest'><Link onClick={handleClose} to="home"
                                                                            smooth={true} duration={500}>Bosh sahiva</Link>
                    </li>
                    <li className='border-b-2 border-zinc-300 w-full tracking-widest'><Link onClick={handleClose} to="about"
                                                                            smooth={true} offset={-200}
                                                                            duration={500}>Ma'lumot</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full tracking-widest'><Link onClick={handleClose} to="support"
                                                                            smooth={true} offset={-50}
                                                                            duration={500}>Yordam</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full tracking-widest'><Link onClick={handleClose} to="platforms"
                                                                            smooth={true} offset={-100}
                                                                            duration={500}>Platforma</Link></li>
                    {/*<li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing"*/}
                    {/*                                                        smooth={true} offset={-50}*/}
                    {/*                                                        duration={500}>Pricing</Link></li>*/}

                    <div className='flex flex-col my-4'>
                        {/*<button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Akkauntga kirish</button>*/}
                        <button className='px-14 py-3 tracking-widest'>Bog'lanish</button>
                    </div>
                </ul>
            </div>
        );
};

export default Navbar;
