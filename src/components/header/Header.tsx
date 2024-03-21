"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOnScroll = () => {
      setPageScrolled(true)
    }
    window.addEventListener("scroll", handleOnScroll)
    return () => {
      window.removeEventListener("scroll", handleOnScroll)
    }
  }, [])

  return (
    <header
      className="flex justify-between items-center w-full bg-[#f3f3f3] h-[48px] min-[751px]:h-[56px] min-[1001px]:h-[82px] px-[20px] min-[1001px]:px-[36px] fixed top-0 z-50"
      style={{ borderBottom: "1px solid #232323" }}
    >
      <style jsx>
        {`
        @-webkit-keyframes ani-mouse {
          0% {
          opacity: 1;
          top: 29%;
          }
          15% {
          opacity: 1;
          top: 50%;
          }
          50% {
          opacity: 0;
          top: 50%;
          }
          100% {
          opacity: 0;
          top: 29%;
          }
        }
        @-moz-keyframes ani-mouse {
          0% {
          opacity: 1;
          top: 29%;
          }
          15% {
          opacity: 1;
          top: 50%;
          }
          50% {
          opacity: 0;
          top: 50%;
          }
          100% {
          opacity: 0;
          top: 29%;
          }
        }
        @keyframes ani-mouse {
          0% {
          opacity: 1;
          top: 29%;
          }
          15% {
          opacity: 1;
          top: 50%;
          }
          50% {
          opacity: 0;
          top: 50%;
          }
          100% {
          opacity: 0;
          top: 29%;
          }
        }
         .scroll-btn {
          display: block;
          position: absolute;
          top:85vh;
          left: 0;
          right: 0;
          text-align: center;
        }
        .scroll-btn > * {
          display: inline-block;
          line-height: 18px;
          font-size: 13px;
          font-weight: normal;
          color: #7f8c8d;
          color: #232323;
          font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
          letter-spacing: 2px;
        }
        .scroll-btn > *:hover,
        .scroll-btn > *:focus,
        .scroll-btn > *.active {
          color: #232323;
        }
        .scroll-btn > *:hover,
        .scroll-btn > *:focus,
        .scroll-btn > *:active,
        .scroll-btn > *.active {
          opacity: 0.8;
          filter: alpha(opacity=80);
        }
        .scroll-btn .mouse {
          position: relative;
          display: block;
          width: 35px;
          height: 55px;
          margin: 0 auto 20px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border: 3px solid #232323;
          border-radius: 23px;
        }
        .scroll-btn .mouse > * {
          position: absolute;
          display: block;
          top: 29%;
          left: 50%;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          background: #232323;
          border-radius: 50%;
          -webkit-animation: ani-mouse 2.5s linear infinite;
          -moz-animation: ani-mouse 2.5s linear infinite;
          animation: ani-mouse 2.5s linear infinite;
        }
        #header-navigation-menu{
          background: #329b8920;
          backdrop-filter: blur(8px);
          right:10px;
          border: 1px solid rgba(255, 255, 255, 0.274);
          border-top: none;
          box-shadow: 0 15px 20px rgba(0, 0, 0, 0.082);
          transform-origin:top right;
          transform: rotate(-90deg);
          animation: menu-entry-ani .5s linear 1 forwards;
        }
        @keyframes menu-entry-ani{
          0%{
            opacity:0
          }
          1%{
            opacity:1
          }
          100%{
            transform:rotate(0);
          }
        }
        `}
      </style>
      <div
        className="text-black h-auto"
        data-sidheshwar-logo
      >
        <Link href="/" className="flex flex-col justify-center items-center">
          <Image src="/assets/mainLogo2.png" alt="Sidheshwar" width={100} height={100} className="w-[100px] min-[751px]:w-[120px] min-[1001px]:w-[40px]" />
          {/* <Image src="/assets/sidheshwarlogo.png" alt="Sidheshwar" width={100} height={100} className="w-[100px] min-[751px]:w-[120px] min-[1001px]:w-[150px]" /> */}
        </Link>
      </div>
      <div></div>
      <div
        className="text-black h-auto pl-[22.6%]"
        data-sidheshwar-logo
      >
        <Link href="/" className="flex flex-col justify-center items-center">
          <Image src="/assets/sidheshwarlogo3.png" alt="Sidheshwar" width={100} height={100} className="w-[100px] min-[751px]:w-[120px] min-[1001px]:w-[150px]" />
          {/* <Image src="/assets/sidheshwarlogo.png" alt="Sidheshwar" width={100} height={100} className="w-[100px] min-[751px]:w-[120px] min-[1001px]:w-[150px]" /> */}
        </Link>
      </div>
      <div id="scroll-down-animation">
        <span className={`scroll-btn z-40`} style={pageScrolled ? { display: "none" } : {}}>
          <a href="#">
            <span className="mouse">
              <span></span>
            </span>
          </a>
          <p className="-ml-[50px]">scroll me</p>
        </span>
      </div>
      <div className="text-[#329b89] w-[40%] min-[751px]:w-[20%] h-auto text-right text-[1.5em] min-[751px]:text-[1.8em] min-[1001px]:text-[2em] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>

      {isOpen && <div id="header-navigation-menu" className="w-full min-[751px]:w-[55vw] h-[40vh] fixed top-[48px] min-[751px]:top-[56px] min-[1001px]:top-[82px]">
      </div>}

    </header>
  );
};

export default Header;
