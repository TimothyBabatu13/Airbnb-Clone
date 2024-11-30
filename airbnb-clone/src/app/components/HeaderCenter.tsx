'use client';

import { useState } from "react";

type activeNameType = 'Experiences' | 'Stays'
const HeaderCenter = () => {
    const [activeName, setIsActiveName] = useState<activeNameType>('Stays')
    
    const handleChangeActiveName = (e: activeNameType) => {
        setIsActiveName(e)
    }
  return (
    <div className="py-2.5">
        <div className="text-base font-medium text-[#6A6A6A]">
            <button onClick={()=>handleChangeActiveName('Stays')} className={`mx-4 py-2.5 px-3 rounded-[8px] ${!(activeName === 'Stays') && "hover:text-[#222222]"} ${activeName === 'Stays' && "text-[#222222]"}`}>
                <span>Stays</span>
            </button>
            <button onClick={()=>handleChangeActiveName('Experiences')} className={`mx-4 py-2.5 px-3 rounded-[8px] ${!(activeName === 'Experiences') && "hover:text-[#222222]"} ${activeName === 'Experiences' && "text-[#222222]"}`}>
                <span>Experiences</span>
            </button>
        </div>
        
    </div>
  )
}

export default HeaderCenter