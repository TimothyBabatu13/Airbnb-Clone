'use client';
import UseScollObserver from '@/hooks/useScollObserver'
import { useEffect } from 'react';


const ScrollOb = () => {
    useEffect(()=>{
        UseScollObserver()
    }, [])
  return (
    null
  )
}

export default ScrollOb