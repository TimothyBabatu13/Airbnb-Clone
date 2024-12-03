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
            <ButtonWithIcon>
                {/* <ShareIcon /> */}
                <ShareButton className="relative top-0 mr-0" id="0"/>
                <span className="underline">Share</span>
            </ButtonWithIcon>
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