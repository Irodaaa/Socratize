import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import {FaFastForward} from 'react-icons/fa'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

import bgImg from '../assets/999.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between font-poppins'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Chet elda oqish yoki ishlashni istaysizmi?</h1>
                <p className='text-2xl'>Biz sizga yordam beramiz!</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 duration-300'>Toliq ma'lumot</button>
            </div>
            <div>
                <img className='flex ml-12 w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Platformamizning afzalliklari</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><FaFastForward className='h-6 text-indigo-600 pr-0' />Tez</p>
                    <p className='flex px-4 py-2 text-slate-500'><BsFillCalendarCheckFill className='h-6 text-indigo-600' /> Qulay</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Oson</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Individual</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero