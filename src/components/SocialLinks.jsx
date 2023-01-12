import React from 'react';
import {GrInstagram} from 'react-icons/gr'
import {BsTelegram} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'


const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                    Instagram<GrInstagram size={30}/>
                </>
            ),
            href: 'https://instagram.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    Telegram<BsTelegram size={30}/>
                </>
            ),
            href: 'https://telegram.com',
        },
        {
            id:3,
            child: (
                <>
                    Mail<HiOutlineMail size={30}/>
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
                        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 hover:rounded-md hover:ml-[-10px] ml-[-100px] duration-300 bg-black'
                            + '' + style}>
                            <a href={href} className='flex justify-between items-center w-full'>
                                {child}
                            </a></li>))
                }
            </ul>
        </div>
    );
};

export default SocialLinks;