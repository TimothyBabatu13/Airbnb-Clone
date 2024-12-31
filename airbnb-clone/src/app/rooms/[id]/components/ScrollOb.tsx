'use client';
import UseScollObserver from '@/hooks/useScollObserver'
import { useEffect } from 'react';


const ScrollOb = () => {
  const { isOutOfView, recc }= UseScollObserver();
    useEffect(()=>{
        // UseScollObserver()
    }, [])
  return (
    null
    // <div className='h-[100vh] w-[100vw] text-white gird place-items-center fixed top-0 left-0 bg-black opacity-80'><h1>{JSON.stringify(isOutOfView)} {recc}</h1> </div>
  )
}

export default ScrollOb