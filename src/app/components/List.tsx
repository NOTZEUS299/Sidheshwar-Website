"use client"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const List = ({ props }: { props: { imgUrl: string, index: number, title: string, des: string } }) => {
    const [tiltDirection, setTiltDirection] = useState<'left' | 'right' | 'none'>('none')
    const [cursorSpeed, setCursorSpeed] = useState<number>(0) // Add cursor speed state
    const listItemOneRef = useRef<HTMLLIElement>(null)
    const listImgOneRef = useRef<HTMLImageElement>(null)
    const [listImgOneOpacity, setListImgOneOpacity] = useState<number>(0)

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
        <li ref={listItemOneRef} className='w-full h-[250px] bg-[#f3f3f3] flex justify-evenly items-center relative' style={{ borderBottom: "1px solid #232323" }}>
            <motion.img ref={listImgOneRef} style={{
                width: '400px',
                position: 'absolute',
            }}
                initial={{ translateX: '-50%', translateY: '-200%', opacity: 0 }}
                animate={{ rotate: tiltDirection === 'left' ? -(Math.ceil(cursorSpeed) - 1) * 20 : tiltDirection === 'right' ? (Math.ceil(cursorSpeed) - 1) * 20 : 0, opacity: listImgOneOpacity }}
                transition={{ opacity: 1, duration: 0.2, type: 'keyframes' }}
                src={props.imgUrl} alt='' />
            <h2 className='text-[2.5vw] text-[#232323] opacity-50'>{props.index}</h2>
            <h2 className='text-[2.5vw] text-[#232323] opacity-50'>{props.title}</h2>
            <p className='w-[30%] text-[#232323] opacity-60'>{props.des}</p>
            <h2 className='text-[3vw] text-[#232323] opacity-50'>↗</h2>
        </li>
    )
}

export default List
