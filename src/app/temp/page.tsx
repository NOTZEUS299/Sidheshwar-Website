"use client"
import React, { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [prevX, setPrevX] = useState<number>(0);
  const [prevY, setPrevY] = useState<number>(0);
  const [tiltDirection, setTiltDirection] = useState<string>('');
  const [cursorSpeed, setCursorSpeed] = useState<number>(0); // Added cursorSpeed state
  const imageRef = useRef<HTMLDivElement>(null);

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

      if (imageRef.current) {
        imageRef.current.style.left = `${clientX}px`;
        imageRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prevX]);

  return (
    <div className='overflow-x-hidden' style={{ width: '100%', height: 'auto', backgroundColor: 'black' }}>

      <div id="second" className='w-full h-[100vh]'>
        <div className="elem">
          <img
            className={`absolute w-[500px] z-50`}
            ref={imageRef}
            src="/assets/gradientThree.jpg"
            alt=""
            style={{ transition: 'all 0.1s ease', transform: `translate(-50%, -50%) rotate(${tiltDirection === "tilt-left" ? -((Math.ceil(cursorSpeed) - 1) * 3.5) : ((Math.ceil(cursorSpeed) - 1) * 3.5)}deg)` }}
          />
          <h1>The Plug</h1>
          <h5>2022</h5>
        </div>
        <div className="elem">
          <img src="./assets/gradientOne.jpg" className='w-[100px] hidden' alt="" />
          <h1>ixperience</h1>
          <h5>2022</h5>
        </div>
        <div className="elem elemlast">
          <img src="./assets/gradientOne.jpg" className='w-[100px] hidden' alt="" />
          <h1>hudu</h1>
          <h5>2022</h5>
        </div>
      </div>
    </div>
  );
};

export default Index;
