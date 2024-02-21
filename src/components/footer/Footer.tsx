import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='w-full h-min flex flex-col items-center justify-start'>
            <div className='w-full h-[140px] bg-teal-900 flex gap-2 flex-col justify-center items-center'>
                <h2 className='text-center text-[#fefcf5] text-[6vw] leading-[1.2em]'>
                    WHAT’S NEXT STARTS HERE.
                </h2>
                <h3 className='text-center text-[#fefcf5] text-[5.2vw] leading-[1.2em]'>
                    Get in touch at <span className='underline'>info@mysite.com</span>
                </h3>
            </div>
            <div className='w-full h-[312px] bg-slate-600'></div>
            <div className='w-full h-fit flex flex-col items-center justify-start'>
                <div className='w-full h-[270px] bg-slate-800'></div>
                <div className='w-full h-[35px] bg-pink-400'></div>
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-start'>
                <div className='w-full h-[218px] bg-red-900'></div>
                <div className='w-full h-[28px] bg-amber-600'></div>
            </div>
            <h2 className="text-center sm:text-left">WHAT’S NEXT STARTS HERE.</h2>
        </footer>
    );
};

export default Footer;