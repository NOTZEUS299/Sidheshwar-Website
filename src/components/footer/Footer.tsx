import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='w-full h-min grid grid-cols-1 grid-rows-[auto auto auto auto auto auto] min-[751px]:grid-cols-2 min-[751px]:grid-rows-[auto auto auto auto]'>
            <div className='w-full h-[140px] bg-teal-900 flex gap-2 flex-col justify-center items-center row-start-1  min-[751px]:col-span-2'>
                <h2 className='text-center text-[#fefcf5] text-[6vw] leading-[1.2em] min-[751px]:text-[4.5vw] min-[1001px]:text-[51px]'>
                    WHAT&apos;S NEXT STARTS HERE.
                </h2>
                <h3 className='text-center text-[#fefcf5] text-[5.2vw] leading-[1.2em] min-[751px]:text-[2.5vw] min-[1001px]:text-[26px]'>
                    Get in touch at <span className='underline'>info@mysite.com</span>
                </h3>
            </div>
            <div className='w-full h-max bg-slate-600 p-[30px] min-[751px]:py-[60px] min-[751px]:row-start-2 min-[751px]:col-start-1'>
                <h3 className='text-left text-white text-[7vw] mb-6 min-[751px]:mb-10 min-[751px]:text-[3vw] min-[751px]:text-center min-[1001px]:text-[26px]'>Say Hii, Don&apos;t Be Shy👋</h3>
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label htmlFor="fName" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Full Name*</span>
                        <input type="text" id="fName" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    <label htmlFor="email" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Email Address*</span>
                        <input type="text" id="email" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    <label htmlFor="mobile" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Mobile Number*</span>
                        <input type="text" id="mobile" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    {/* <label htmlFor="website" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Website</span>
                        <input type="text" id="website" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label> 
                    <label htmlFor="designation" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Your Designation/Profile*</span>
                        <input type="text" id="designation" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    <label htmlFor="budget" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>What&apos;s Your Budget?*</span>
                        <input type="text" id="budget" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    <label htmlFor="service" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Service Interested In?*</span>
                        <input type="text" id="service" className="w-full bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>*/}
                    <label htmlFor="vision" className='w-full h-fit'>
                        <span className='text-[4vw] text-white tracking-widest leading-5 font-light min-[751px]:text-[2vw] min-[1001px]:text-[16px]'>Your Message?*</span>
                        <textarea id="vision" className="w-full h-[100px] bg-transparent border-b-[1px] border-white text-[5vw] text-white outline-none pb-2 mb-4 min-[751px]:text-[3vw] min-[1001px]:text-[22px] font-thin" />
                    </label>
                    <button type='submit' className='w-full h-fit bg-transparent text-[5vw] text-white py-3 px-6 border-[1px] border-white mt-2 min-[751px]:text-[3vw] min-[1001px]:text-[22px]'>SEND MESSAGE</button>
                </form>
            </div>
            <div className='w-full h-full pt-[20vw] bg-slate-800 flex justify-center items-end min-[751px]:row-start-2 min-[751px]:col-start-2 min-[751px]:items-center min-[751px]:pt-0'>
                <img src="/assets/office.jpg" alt="" className='w-[56%]' />
            </div>
            <div className='w-full h-[35px] min-[751px]:h-[60px] bg-slate-800 min-[751px]:row-start-3 min-[751px]:col-start-2'>
                <p className='w-full h-full flex justify-evenly items-center gap-2 px-6'>
                    <a href="#" target='_blank' className='text-[#fefcf5] text-center text-[3vw] min-[500px]:text-[2vw] min-[751px]:text-[1.5vw] uppercase font-light tracking-widest leading-5'>Instagram</a>
                    <a href="#" target='_blank' className='text-[#fefcf5] text-center text-[3vw] min-[500px]:text-[2vw] min-[751px]:text-[1.5vw] uppercase font-light tracking-widest leading-5'>X</a>
                    <a href="#" target='_blank' className='text-[#fefcf5] text-center text-[3vw] min-[500px]:text-[2vw] min-[751px]:text-[1.5vw] uppercase font-light tracking-widest leading-5'>Facebook</a>
                </p>
            </div>
            <div className='w-full h-[218px] min-[751px]:h-[60px] bg-[#fefcf5] flex justify-center items-center min-[751px]:row-start-3 min-[751px]:col-start-1'>
                <ul className='w-full h-full flex flex-col justify-evenly items-center min-[751px]:flex-row'>
                    <li className='text-[14px] min-[751px]:text-[11px] min-[751px]:font-normal text-center text-[#232323]'>WORK</li>
                    <li className='text-[14px] min-[751px]:text-[11px] min-[751px]:font-normal text-center text-[#232323]'>SERVICES</li>
                    <li className='text-[14px] min-[751px]:text-[11px] min-[751px]:font-normal text-center text-[#232323]'>ABOUT US</li>
                    <li className='text-[14px] min-[751px]:text-[11px] min-[751px]:font-normal text-center text-[#232323]'>JOBS</li>
                    <li className='text-[14px] min-[751px]:text-[11px] min-[751px]:font-normal text-center text-[#232323]'>CONTACT</li>
                </ul>
            </div>
            <div className='w-full h-[28px] bg-[#fefcf5] text-[12px] text-black border-t-[1px] border-black flex justify-center items-center min-[751px]:col-span-2'>
                <p>©2024 by Sidheshwar Infotech</p>
            </div>
        </footer>
    );
};

export default Footer;