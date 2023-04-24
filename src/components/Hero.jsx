import React from 'react'
import Contacts from "./Contacts";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import {IoIosCreate} from 'react-icons/io'
import {FaFastForward} from 'react-icons/fa'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {MdOutlineNavigateNext} from 'react-icons/md'

import bgImg from '../assets/teenagers-distance-learning-online-education-3d-character-illustration-png.webp'
import {Link} from "react-scroll";

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between font-poppinss text-hover'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto pr-0'>
            <div className='flex flex-col justify-center md:items-start w-full pl-2 pr-0 py-8 leading-loose'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold tracking-wide'>Chet elda oqish yoki ishlashni istaysizmi?</h1>
                <p className='text-3xl pt-2 text-secondary'>Biz sizga yordam beramiz!</p>
                <button className='py-3 px-2 sm:w-[60%] my-4 duration-300 hover:scale-110 bg-primary text-hover border-primary font-bold text-xl'>Tutorlar</button>
            </div>
            <div>
                <img className='flex pl-0 ml-0 max-w-screen-md duration-300 pl-0' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Platformamizning afzalliklari</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><FaFastForward className='h-6 text-indigo-600 mr-2 fill-hover' />Tez</p>
                    <p className='flex px-4 py-2 text-slate-500'><BsFillCalendarCheckFill className='h-6 text-indigo-600 mr-2 fill-hover' /> Qulay</p>
                    <p className='flex px-4 py-2 text-slate-500'><IoIosCreate size={26} className='h-6 text-indigo-600 mr-2 fill-hover' /> Oson</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600 fill-hover' /> Individual</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero