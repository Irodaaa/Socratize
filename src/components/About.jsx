import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32 font-poppinss'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-secondary'>Butun dunyo bo'ylab repetitorlar</h2>
                <p className='text-3xl py-6 text-gray-500'>Dunyo bo'ylab bizning xalqaro repetitorlar jamoasi siz bilan o'z tajribalarini bolinishadi va muvaffaqiyatga erishishingizga yordam beradi.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-hover'>100%</p>
                    <p className='text-gray-400 mt-2'>Garantiya</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-hover'>24/7</p>
                    <p className='text-gray-400 mt-2'>Aloqada</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-hover'>10+</p>
                    <p className='text-gray-400 mt-2'>Tutorlar</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About