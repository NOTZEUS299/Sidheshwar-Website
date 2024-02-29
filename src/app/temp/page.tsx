"use client"
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [prevX, setPrevX] = useState<number>(0);
  const [prevY, setPrevY] = useState<number>(0);
  const [tiltDirection, setTiltDirection] = useState<string>('');
  const [cursorSpeed, setCursorSpeed] = useState<number>(0); // Added cursorSpeed state
  const [hoverImageOne, setHoverImageOne] = useState<boolean>(false);
  const imageContainerOneRef = useRef<any>(null);
  const imageOneRef = useRef<any>(null);
  const [hoverImageTwo, setHoverImageTWo] = useState<boolean>(false);
  const imageContainerTwoRef = useRef<any>(null);
  const imageTwoRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const distance = Math.sqrt((clientX - prevX) ** 2 + (clientY - prevY) ** 2); // Calculate distance between previous and current cursor position
      const speed = distance / 10; // Adjust the speed factor as needed
      setCursorSpeed(speed); // Update cursor speed

      if (clientX < prevX) {
        setTiltDirection('tilt-left');
      } else if (clientX > prevX) {
        setTiltDirection('tilt-right');
      }
      setPrevX(clientX);
      setPrevY(clientY);

      if (imageOneRef.current) {
        imageOneRef.current.style.left = `${clientX}px`;
        imageOneRef.current.style.top = `${clientY}px`;
        imageOneRef.current.style.transform = `translate(-50%, -100%) rotate(${tiltDirection === "tilt-left" ? -((Math.ceil(cursorSpeed) - 1) * 3.5) : ((Math.ceil(cursorSpeed) - 1) * 3.5)}deg)`;
      }
      if (imageTwoRef.current) {
        imageTwoRef.current.style.left = `${clientX}px`;
        imageTwoRef.current.style.top = `${clientY}px`;
        imageTwoRef.current.style.transform = `translate(-50%, -200%) rotate(${tiltDirection === "tilt-left" ? -((Math.ceil(cursorSpeed) - 1) * 3.5) : ((Math.ceil(cursorSpeed) - 1) * 3.5)}deg)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prevX]);

  return (
    <ul className='w-full h-fit pt-32' >
      <li ref={imageContainerOneRef} className='w-full h-[250px] bg-[#f3f3f3] relative flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }} onMouseOver={() => console.log(true)} onMouseLeave={() => console.log(false)}>
        <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
        <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Graphic Design ~ Ui/Ux</h2>
        <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
        <Image width={400} height={350} ref={hoverImageOne ? imageOneRef : null} className={`absolute left-0 top-0 w-[400px] ${hoverImageOne ? 'opacity-100' : 'opacity-0'}`} src="/assets/gradientThree.jpg" objectFit="cover" style={{ transition: "all .1s ease" }} alt="" />
        <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
      </li>
      <li className='w-full h-[250px] bg-[#f3f3f3] relative flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
        <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
        <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Coding ~ Web & App</h2>
        <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
        {/* <Image className={`absolute w-[400px] ${hoverImageOne ? 'opacity-100' : 'opacity-0'}`} src="/assets/gradientThree.jpg" layout="fill" objectFit="cover" style={{ transition: "all .1s ease" }} alt="" /> */}
        <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
      </li>
    </ul>
  );
};

export default Index;
