'use client'

import React, { useEffect } from 'react'

const ContactUs =() => {
    const url = 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f2aa1568fbmsh56961f62199545bp195d85jsnc7d5a4f90446',
            'x-rapidapi-host': 'car-api2.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    const apiurl = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        apiurl();
    }, []);

    return (
        <div className='main-div bg-white'>
            <div className='sub-div items-center'>
                <h1 className='text-[40px] text-center font-medium'>Contact Us</h1>
                <img src="./assets/underline.svg " className='max-w-[193px]' alt="underline" />
                <div className='relative'>
                    <img src="./assets/contact/contact.svg" alt="contact" />

                    <div className="absolute top-0">
                        <form>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactUs
