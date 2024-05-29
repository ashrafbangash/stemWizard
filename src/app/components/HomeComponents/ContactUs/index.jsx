"use client";

import { FiArrowRight } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <div className="main-div bg-white">
        <div className="md:sub-div items-center relative">
          <h1 className="text-[40px] text-center font-medium">Contact Us</h1>
          <div className="relative">
            <img
              src="./assets/contact/contact.svg"
              alt="contact"
              className="hidden lg:block scale-110 xl:scale-100"
            />
            <img
              src="./assets/contact/mconbg.svg"
              alt="contact"
              className="lg:hidden w-full block  object-cover"
            />

            <div className="absolute  grid left-0 top-20 px-10 lg:top-1/2 lg:-translate-y-1/2 grid-cols-1  lg:grid-cols-4 xl:px-32 gap-5">
              <form className="lg:col-span-3">
                <div className="input-div ">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    className="input"
                  />
                </div>

                <div className="input-div ">
                  <label htmlFor="address" className="input-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    id="address"
                    className="input"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="input-div ">
                    <label htmlFor="Email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      id="email"
                      className="input"
                    />
                  </div>
                  <div className="input-div ">
                    <label htmlFor="phone" className="input-label">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      required
                      id="phone"
                      className="input"
                    />
                  </div>
                </div>
                <div className="input-div ">
                  <label htmlFor="Message" className="input-label">
                    Message
                  </label>
                  <input
                    type="textarea"
                    name="message"
                    id="message"
                    className="input"
                  />
                </div>
                <button className="bg-green hover:bg-opacity-65 py-3 px-10 flex items-center gap-2 w-fit rounded-xl text-white mt-">
                  Submit <FiArrowRight />
                </button>
              </form>
              <div className=" lg:col-span1">
                <h1 className="text-2xl font-semibold mb-3 lg:mb-5">
                  Toronto:
                </h1>
                <p className="text-base font-medium mb-3 lg:mb-5">
                  Toronto: 41 Northumberland St Toronto, ON M6H 1R2, Canada
                </p>
                <h1 className="text-2xl font-semibold  mb-3 lg:mb-5">
                  Pakistan:
                </h1>
                <p className="text-base font-medium">
                  Paistan: I21/3, Kaghan House street near Alnoor Masjid, Iqbal
                  Road, Supply Abbottabad
                </p>
              </div>
            </div>
          </div>

          <img
            src="./assets/contact/contacticon.svg"
            alt="icon"
            className="absolute hidden lg:block bottom-0 right-20 z-20"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;

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
