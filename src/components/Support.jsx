import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/boy.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24 font-poppinss'>
      {/*<div className='w-full h-[700px] bg-gray-900/90 absolute'>*/}
      {/*  <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />*/}
      {/*</div>*/}
      
      <div className='text-hover max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-0'>
              <h2 className='text-5xl pt-8 text-hover font-bold uppercase text-center'>Tutor</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Ozinga mos individual tutor!</h3>
              <p className='text-hover py-4 text-3xl'>Biz sizga barcha tegishli manbalar va mavjud dasturlar va universitetlar haqida ma'lumot beramiz. Siz o'zingiz hech narsa izlashingiz shart emas!</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-primary text-white fill-hover rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Yordam</h3>
                      <p className='text-gray-600 text-xl'>Biz sizga barcha mavjud dasturlar va universitetlarni taqdim etamiz va to'liq ariza topshirishingizga yordam beramiz.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-secondary'>Biz bilan bog'laning<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-primary text-white fill-hover rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Qo'llab-quvvatlash</h3>
                      <p className='text-gray-600 text-xl'>Butun ariza berish muddati davomida biz sizni qo'llab-quvvatlaymiz va nomzodingiz uchun eng yaxshi variantlarni tanlaymiz.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-secondary'>Biz bilan bog'lan <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-primary fill-hover rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Har doim aloqada</h3>
                      <p className='text-gray-600 text-xl'>Agar sizda biron bir savol bo'lsa, darsdan tashqari istalgan vaqtda ijtimoiy tarmoqlar orqali tutoringiz bilan bog'lanishingiz mumkin.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-secondary'>Biz bilan bog'lan <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
