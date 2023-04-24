import React from 'react';

const Contacts = () => {
    return (
        <div name='contact' className='w-full h-screen font-poppins pt-14'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-hover text-hover'>Kontakt</p>
                    <p className='py-6 text-hover'>Ariza qoldirish</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/532ff425-70e0-4740-a1af-8984672b14aa' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type='text' name='name' placeholder='Ismingizni kiriting'
                                            className='text-primary p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'/>
                        <input type='text' name='phone number' placeholder='Telefon raqamingizni kiriting'
                               className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'/>
                        <textarea placeholder="Sovolingizni qoldiring" name='message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'></textarea>
                        <button className='text-white bg-secondary px-6 py-3 my-8 mx-auto flex items-center border-secondary rounded-md hover:scale-110 duration-300'>Ariza yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;