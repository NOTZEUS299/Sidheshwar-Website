"use client"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Page = () => {
  const [tiltDirection, setTiltDirection] = useState<'left' | 'right' | 'none'>('none')
  const [cursorSpeed, setCursorSpeed] = useState<number>(0) // Add cursor speed state
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
    <li ref={listItemOneRef} className='w-full h-[250px] bg-[#f3f3f3] flex justify-evenly items-center' style={{ borderBottom: "1px solid #232323" }}>
      <motion.img ref={listImgOneRef} style={{
        width: '400px',
        position: 'absolute',
      }}
        initial={{ translateX: '-50%', translateY: '-50%', opacity: 0 }}
        animate={{ rotate: tiltDirection === 'left' ? -(Math.ceil(cursorSpeed) - 1) * 20 : tiltDirection === 'right' ? (Math.ceil(cursorSpeed) - 1) * 20 : 0, opacity: listImgOneOpacity }}
        transition={{ opacity: 1, duration: 0.2, type: 'keyframes' }}
        src={'/assets/gradientThree.jpg'} alt='' />
      <h2 className='text-[2.5vw] text-[#232323] opacity-50'>1</h2>
      <h2 className='text-[2.5vw] text-[#232323] opacity-50'>Graphic Design ~ Ui/Ux</h2>
      <p className='w-[30%] text-[#232323] opacity-60'>Maxime aut odit reprehenderit atque accusantium corporis dolorem qui eius voluptatibus fuga, earum tempora corrupti et? Eveniet, molestiae quaerat!</p>
      <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
    </li>
  )
}

export default Page
