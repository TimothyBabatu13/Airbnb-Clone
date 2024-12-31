'use client'

import { useEffect, useState } from "react";

const UseScollObserver = () => {
  const [isOutOfView, setIsOutOfView] = useState<boolean>(false);
  const [recc, setRecc] = useState<number>(0)
  
  
  useEffect(()=>{
    const ElementRef = document.querySelector('#imageExhibition')
  
    const handleScroll = () => {
      
      if(ElementRef){
        const rect = ElementRef.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) 
        setIsOutOfView(isVisible);   
        setRecc(document.documentElement.clientHeight)
      }
     

    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // useEffect(()=>{
  //   const observer = new IntersectionObserver((entries) => {
  //     if(entries[0].isIntersecting){
        
  //       setIsOutOfView(false)
  //     }
  //     else {
  //       setIsOutOfView(true)
  //     }
  //   }, {
  //     root: null,
  //     rootMargin: '100px',
  //     threshold: 1.0
  //   })


  //   if(ElementRef) observer.observe(ElementRef)
  //   return () => {
  //     if(ElementRef) observer.unobserve(ElementRef)
  //   }
  // }, [])
  return {isOutOfView, recc};
}

export default UseScollObserver