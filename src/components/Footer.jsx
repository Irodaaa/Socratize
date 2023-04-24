import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-200 text-hover py-y px-2 font-poppinss justify-between items-center'>
        <div className='flex flex-col justify-between max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Tutorlar</h6>
                <ul>
                    <li className='py-1'><a>SAT</a></li>
                    <li className='py-1'><a>IT</a></li>
                    <li className='py-1'><a>Matematika</a></li>
                    <li className='py-1'><a>Kimyo</a></li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Kontaktlar</h6>
                <ul>
                    <li className='py-1'><a href='https://www.instagram.com/socratize.uz/'>Instagram</a></li>
                    <li className='py-1'><a>Telegram</a></li>
                    <li className='py-1'><a>Email</a></li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Platforma</h6>
                <ul>
                    <li className='py-1'><a>Ma'lumot</a></li>
                    <li className='py-1'><a>Tutorlarimiz</a></li>
                </ul>
            </div>
            {/*<div>*/}
            {/*    <h6 className='font-bold uppercase pt-2'>Legal</h6>*/}
            {/*    <ul>*/}
            {/*        <li className='py-1'>Claims</li>*/}
            {/*        <li className='py-1'>Privacy</li>*/}
            {/*        <li className='py-1'>Terms</li>*/}
            {/*        <li className='py-1'>Policies</li>*/}
            {/*        <li className='py-1'>Conditions</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className='col-span-2 pt-8 md:pt-2'>*/}
            {/*    <p className='font-bold uppercase'>Subscribe to our newsletter</p>*/}
            {/*    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>*/}
            {/*    <form className='flex flex-col sm:flex-row'>*/}
            {/*        <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>*/}
            {/*        <button className='p-2 mb-4'>Subscribe</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Socratize, O'zbekiston, Barcha huquqlar himoyalangan</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className='fill-secondary' />
            <FaInstagram className='fill-secondary' />
            <FaTwitter className='fill-secondary' />
            <FaTwitch className='fill-secondary'/>
            <FaGithub className='fill-secondary'/>
        </div>
        </div>
    </div>
  )
}

export default Footer