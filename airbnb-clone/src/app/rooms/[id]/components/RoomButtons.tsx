'use client';

import { LoveIcon, MoreIcon, ShareIcon } from "@/app/components/Icons"
import ShareButton from "@/app/components/ShareButton";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";

const ButtonWithIcon = ({ children, className} : {
    children: React.ReactNode,
    className?: string
}) => {
    return(
        <Button className={cn("bg-transparent text-black shadow-none hover:bg-[#F7F7F7] "+ className)}>
            {children}
        </Button>
    )
}
export const RoomHeaderButton = () => {
    {
        /*
            Fix the share button here
        */
    }
    return(
        <div className="flex items-center">
            <ShareButton className={cn("relative top-0 right-10 mr-0 flex items-center !bg-transparent text-black !shadow-none !hover:bg-[#F7F7F7] ")} id="0">
                <ShareIcon /> 
                <span className="underline ml-2"> Share</span> 
            </ShareButton>
            <ButtonWithIcon>
                <LoveIcon />
                <span className="underline">Save</span>
            </ButtonWithIcon>
        </div>
    )
}


export const AllPhotosButton = () => {
    return(
        <div className="absolute bottom-6 right-6">
            <ButtonWithIcon className=" border border-[#222222] bg-[#FFFFFF]">
                <MoreIcon />
                <span>Show all photos</span>
            </ButtonWithIcon>
        </div>
    )
}