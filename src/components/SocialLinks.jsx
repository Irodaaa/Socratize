import React from 'react';
import {GrInstagram} from 'react-icons/gr'
import {BsTelegram} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'


const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                    Instagram<GrInstagram className='fill-hover outline-hidden' size={30}/>
                </>
            ),
            href: 'https://www.instagram.com/socratize.uz/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    Telegram<BsTelegram className='fill-hover outline-hidden' size={30}/>
                </>
            ),
            href: 'https://telegram.com',
        },
        {
            id:3,
            child: (
                <>
                    Mail<AiFillMail className='fill-hover outline-none' size={30}/>
                </>
            ),
            href: 'https://instagram.com',
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(({id,child, href, style}) => (
                        <li key={id} className={'flex justify-between items-center w-40 h-14 pl-3 pr-2 hover:rounded-md hover:ml-[-10px] ml-[-100px] duration-300 bg-black'
                            + '' + style}>
                            <a href={href} className='flex justify-between items-center w-full text-xl'>
                                {child}
                            </a></li>))
                }
            </ul>
        </div>
    );
};

export default SocialLinks;