'use client'

import { FiArrowRight } from "react-icons/fi"



const ContactUs = () => {


    return (
        <>
            <div className='main-div bg-white'>
                <div className='sub-div items-center relative'>
                    <h1 className='text-[40px] text-center font-medium'>Contact Us</h1>
                    <img src="./assets/underline.svg " className='max-w-[193px]' alt="underline" />
                    <div className='relative'>
                        <img src="./assets/contact/contact.svg" alt="contact" />

                        <div className="absolute top-1/2 -translate-y-1/2 grid grid-cols-4 px-32 gap-10">
                            <form className="col-span-3">
                                <div className="input-div ">
                                    <label htmlFor="name" className="input-label">Name</label>
                                    <input type="text" name="name" id="name" className="input" />
                                </div>

                                <div className="input-div ">
                                    <label htmlFor="address" className="input-label">Address</label>
                                    <input type="text" name="address" id="address" className="input" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="input-div ">
                                        <label htmlFor="Email" className="input-label">Email</label>
                                        <input type="email" name="email" id="email" className="input" />
                                    </div>
                                    <div className="input-div ">
                                        <label htmlFor="phone" className="input-label">Phone</label>
                                        <input type="number" name="phone" id="phone" className="input" />
                                    </div>
                                </div>
                                <div className="input-div ">
                                    <label htmlFor="Message" className="input-label">Message</label>
                                    <input type="textarea" name="message" id="message" className="input" />
                                </div>
                                <button className='bg-green py-3 px-10 flex items-center gap-2 w-fit rounded-xl text-white mt-'>Submit <FiArrowRight /></button>


                            </form>
                            <div className="col-span-1">
                                <h1 className="text-2xl font-semibold mb-10">Toronto:</h1>
                                <p className="text-base font-medium mb-10">Toronto: 41 Northumberland St Toronto, ON M6H 1R2, Canada</p>
                                <h1 className="text-2xl font-semibold mb-10">Pakistan:</h1>
                                <p className="text-base font-medium">Paistan: I21/3, Kaghan House street near Alnoor Masjid, Iqbal Road, Supply Abbottabad</p>
                            </div>
                        </div>
                    </div>

                    <img src="./assets/contact/contacticon.svg" alt="icon" className="absolute bottom-0 right-20 z-20" />
                </div>


            </div>

            
        </>
    )
}

export default ContactUs



// const url = 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'f2aa1568fbmsh56961f62199545bp195d85jsnc7d5a4f90446',
//         'x-rapidapi-host': 'car-api2.p.rapidapi.com',
//         'Content-Type': 'application/json'
//     }
// };

// const apiurl = async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// };

// useEffect(() => {
//     apiurl();
// }, []);