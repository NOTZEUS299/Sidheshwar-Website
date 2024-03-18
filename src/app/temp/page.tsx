"use client"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Page = () => {
  const [tiltDirection, setTiltDirection] = useState<'left' | 'right' | 'none'>('none')
  const [cursorSpeed, setCursorSpeed] = useState<number>(0) // Add cursor speed state
  const imgContainerOneRef = useRef<HTMLDivElement>(null)
  const imageOneRef = useRef<HTMLImageElement>(null)
  const [imgOneOpacity, setimgOneOpacity] = useState<number>(0)

  const listItemOneRef = useRef<HTMLLIElement>(null)
  const listImgOneRef = useRef<HTMLImageElement>(null)
  const [listImgOneOpacity, setListImgOneOpacity] = useState<number>(0)
  const listItemTwoRef = useRef<HTMLLIElement>(null)
  const listImgTwoRef = useRef<HTMLImageElement>(null)
  const [listImgTwoOpacity, setListImgTwoOpacity] = useState<number>(0)
  const listItemThreeRef = useRef<HTMLLIElement>(null)
  const listImgThreeRef = useRef<HTMLImageElement>(null)
  const [listImgThreeOpacity, setListImgThreeOpacity] = useState<number>(0)
  const listItemFourRef = useRef<HTMLLIElement>(null)
  const listImgFourRef = useRef<HTMLImageElement>(null)
  const [listImgFourOpacity, setListImgFourOpacity] = useState<number>(0)
  const llistItemFiveRef = useRef<HTMLLIElement>(null)
  const listImgFiveRef = useRef<HTMLImageElement>(null)
  const [listImgFiveOpacity, setListImgFiveOpacity] = useState<number>(0)

  useEffect(() => {
    let prevX = 0;
    let prevY = 0;
    let prevTime = Date.now();
    const handleMouseMove = (e: MouseEvent) => {

      const listItemOneRect = listItemOneRef.current && listItemOneRef.current.getBoundingClientRect();
      const listImgOneHover = listItemOneRect && listItemOneRect.x < e.clientX && listItemOneRect.x + listItemOneRect.width > e.clientX && listItemOneRect.y < e.clientY && listItemOneRect.y + listItemOneRect.height > e.clientY;
      setListImgOneOpacity(listImgOneHover ? 1 : 0)
      if (listImgOneRef.current) {
        listImgOneRef.current.style.top = listImgOneHover ? `${e.clientY}px` : `50%`;
        listImgOneRef.current.style.left = listImgOneHover ? `${e.clientX}px` : `0`;
      }

      
      const listItemTwoRect = listItemTwoRef.current && listItemTwoRef.current.getBoundingClientRect();
      const listImgTwoHover = listItemTwoRect && listItemTwoRect.x < e.clientX && listItemTwoRect.x + listItemTwoRect.width > e.clientX && listItemTwoRect.y < e.clientY && listItemTwoRect.y + listItemTwoRect.height > e.clientY;
      setListImgTwoOpacity(listImgTwoHover ? 1 : 0)
      if (listImgTwoRef.current) {
        listImgTwoRef.current.style.top = listImgTwoHover ? `${listItemTwoRect.y}px` : `50%`;
        listImgTwoRef.current.style.left = listImgTwoHover ? `${listItemTwoRect.x}px` : `-150px`;
      }

      const listItemThreeRect = listItemThreeRef.current && listItemThreeRef.current.getBoundingClientRect();
      const listImgThreeHover = listItemThreeRect && listItemThreeRect.x < e.clientX && listItemThreeRect.x + listItemThreeRect.width > e.clientX && listItemThreeRect.y < e.clientY && listItemThreeRect.y + listItemThreeRect.height > e.clientY;
      setListImgThreeOpacity(listImgThreeHover ? 1 : 0)
      if (listImgThreeRef.current) {
        listImgThreeRef.current.style.top = listImgThreeHover ? `${listItemThreeRect.y}px` : `50%`;
        listImgThreeRef.current.style.left = listImgThreeHover ? `${listItemThreeRect.x}px` : `-150px`;
      }

      const listItemFourRect = listItemFourRef.current && listItemFourRef.current.getBoundingClientRect();
      const listImgFourHover = listItemFourRect && listItemFourRect.x < e.clientX && listItemFourRect.x + listItemFourRect.width > e.clientX && listItemFourRect.y < e.clientY && listItemFourRect.y + listItemFourRect.height > e.clientY;
      setListImgFourOpacity(listImgFourHover ? 1 : 0)
      if (listImgFourRef.current) {
        listImgFourRef.current.style.top = listImgFourHover ? `${listItemFourRect.y}px` : `50%`;
        listImgFourRef.current.style.left = listImgFourHover ? `${listItemFourRect.x}px` : `-150px`;
      }

      const listItemFiveRect = llistItemFiveRef.current && llistItemFiveRef.current.getBoundingClientRect();
      const listImgFiveHover = listItemFiveRect && listItemFiveRect.x < e.clientX && listItemFiveRect.x + listItemFiveRect.width > e.clientX && listItemFiveRect.y < e.clientY && listItemFiveRect.y + listItemFiveRect.height > e.clientY;
      setListImgFiveOpacity(listImgFiveHover ? 1 : 0)
      if (listImgFiveRef.current) {
        listImgFiveRef.current.style.top = listImgFiveHover ? `${listItemFiveRect.y}px` : `50%`;
        listImgFiveRef.current.style.left = listImgFiveHover ? `${listItemFiveRect.x}px` : `-150px`;
      }

      const currentTime = Date.now();
      const deltaTime = currentTime - prevTime;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;

      setCursorSpeed(speed);

      if (deltaX > 0) {
        setTiltDirection('right')
      } else if (deltaX < 0) {
        setTiltDirection('left')
      }

      prevX = e.clientX;
      prevY = e.clientY;
      prevTime = currentTime;
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <ul className='w-full h-fit pt-32' >
        <li ref={listItemOneRef} className='w-full h-[250px] bg-[#f3f3f3] flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
          <motion.img ref={listImgOneRef} style={{
          width: '400px',
          position: 'absolute',
        }}
          initial={{ translateX: '-50%', translateY: '-50%', opacity: 1}}
          animate={{ rotate: tiltDirection === 'left' ? -(Math.ceil(cursorSpeed) - 1) * 20 : tiltDirection === 'right' ? (Math.ceil(cursorSpeed) - 1) * 20 : 0, opacity: listImgOneOpacity }}
          transition={{ opacity: 1, duration: 0.2, type: 'keyframes' }}
          src={'/assets/gradientThree.jpg'} alt='' />
          <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
          <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Graphic Design ~ Ui/Ux</h2>
          <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
          <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
        </li>
        <li className='w-full h-[250px] bg-[#f3f3f3] relative flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
          <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
          <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Coding ~ Web & App</h2>
          <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
          <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
        </li>
      </ul>
      {/* <div ref={imgContainerOneRef} className='w-[70%] h-[200px] bg-black'>

        <motion.img ref={imageOneRef} style={{
          width: '300px',
          position: 'absolute',
        }}
          initial={{ translateX: '-50%', translateY: '-50%', opacity: 0}}
          animate={{ rotate: tiltDirection === 'left' ? -(Math.ceil(cursorSpeed) - 1) * 20 : tiltDirection === 'right' ? (Math.ceil(cursorSpeed) - 1) * 20 : 0, opacity: imgOneOpacity }}
          transition={{ opacity: 1, duration: 0.2, type: 'keyframes' }}
          src={'/assets/gradientOne.jpg'} alt='' />
      </div> */}
    </div>
  )
}

export default Page

// "use client"
// import Image from 'next/image';
// import React, { useEffect, useState, useRef } from 'react';

// const Index = () => {
//   const [prevX, setPrevX] = useState<number>(0);
//   const [prevY, setPrevY] = useState<number>(0);
//   const [tiltDirection, setTiltDirection] = useState<string>('');
//   const [cursorSpeed, setCursorSpeed] = useState<number>(0); // Added cursorSpeed state
//   const [hoverImageOne, setHoverImageOne] = useState<boolean>(false);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const distance = Math.sqrt((clientX - prevX) ** 2 + (clientY - prevY) ** 2); // Calculate distance between previous and current cursor position
//       const speed = distance / 10; // Adjust the speed factor as needed
//       setCursorSpeed(speed); // Update cursor speed

//       if (clientX < prevX) {
//         setTiltDirection('tilt-left');
//       } else if (clientX > prevX) {
//         setTiltDirection('tilt-right');
//       }
//       setPrevX(clientX);
//       setPrevY(clientY);
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [prevX, prevY, cursorSpeed, tiltDirection]);

//   console.log(cursorSpeed, tiltDirection, prevX, prevY);
  

//   return (
//     <ul className='w-full h-fit pt-32' >
//       <li className='w-full h-[250px] bg-[#f3f3f3] relative flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
//         <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
//         <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Graphic Design ~ Ui/Ux</h2>
//         <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
//         <img className={`absolute top-0 left-0 w-[400px] opacity-100 -translate-x-[50%] -translate-y-[100%] rotate-[${tiltDirection === "tilt-left" ? -(Math.ceil(cursorSpeed) - 1) * 3.5 : (Math.ceil(cursorSpeed) - 1) * 3.5}deg]`} src="/assets/gradientThree.jpg" style={{ transition: "all 0.1s ease" }} alt="" />
//         <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
//       </li>
//       <li className='w-full h-[250px] bg-[#f3f3f3] relative flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
//         <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
//         <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Coding ~ Web & App</h2>
//         <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
//         {/* <Image className={`absolute w-[400px] ${hoverImageOne ? 'opacity-100' : 'opacity-0'}`} src="/assets/gradientThree.jpg" layout="fill" objectFit="cover" style={{ transition: "all .1s ease" }} alt="" /> */}
//         <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
//       </li>
//     </ul>
//   );
// };

// export default Index;
