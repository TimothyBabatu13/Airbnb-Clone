'use client';
import clsx from "clsx";
import { Heart, Search, UserCircleIcon } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";
interface ActionButton {
    href: string,
    className?: string,
    children: React.ReactNode,
    isActive: boolean
}
const ActionButton = ({ href, className, children, isActive } : ActionButton) => {
    return(
        <Link 
            href={href}
            className={clsx(`flex flex-col justify-center items-center max-w-[99px] w-[99px] text-[0.67rem] ${isActive && 'text-[#DA1429]'} ${className}`)}
        >
            {children}
        </Link>
    )
}
const MobileNav = () => {
    const [active, setIsActive] = useState<number>(0);

    useEffect(()=>{
        setIsActive(0)
        //check for the location of the window to know the active element
    }, [])
  return (
    <nav
        className="fixed bottom-0 left-0 bg-white w-[100vw] z-20 h-[64px] flex md:hidden items-center justify-center"
    >
        <ActionButton 
            href=""
            isActive={0 === active}
        >
            <Search 
                size={24}
            />
            <span>Explore</span>
        </ActionButton>
        <ActionButton 
            href=""
            isActive={1 === active}
        >
            <Heart 
                size={24}
            />
            <span>Wishlists</span>
        </ActionButton>
        <ActionButton 
            href="/sign-in"
            isActive={2 === active}
        >
            <UserCircleIcon 
                size={24}
            />
            <span>Log in</span>
        </ActionButton>
    </nav>
  )
}

export default MobileNav