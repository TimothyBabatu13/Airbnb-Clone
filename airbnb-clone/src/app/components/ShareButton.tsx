'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CopyIcon, EmailIcon, FacebookIcon, MessageIcon, MessengerIcon, MoreOptionsIcon, ShareIcon, TwitterIcon, WhatsAppIcon } from "./Icons";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";


const ActionButton = ({ children, action } : {
    children: React.ReactNode,
    action: ()=>void
}) => {
    return(
        <Button 
            onClick={action} 
            className="w-full h-[50px] flex justify-start items-center bg-[#FFFFFF] text-[#222222] hover:bg-[#F7F7F7] border border-[#DDDDDD] rounded-xl"
        >
            {children}
        </Button>
    )
}

const ActionButtons = ({ id } : {
    id: string
}) => {

    const { toast } = useToast()

    const copyLink = () => {
        navigator.clipboard.writeText(id)
        toast({description: 'Link copied'})
    }

    return(
        <div className="grid grid-cols-2 gap-4">
            <ActionButton action={copyLink}>
                <CopyIcon /> 
                <span>Copy link</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}}>
                <EmailIcon />
                <span>Email</span> 
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <MessageIcon />
                <span>Messages</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <WhatsAppIcon />
                <span>WhatsApp</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <MessengerIcon />
                <span>Messenger</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <FacebookIcon />
                <span>Facebook</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <TwitterIcon />
                <span>Twitter</span>
            </ActionButton>
            <ActionButton action={()=>{console.log('')}} >
                <MoreOptionsIcon/>
                <span>More options</span>
            </ActionButton>
        </div>
    )
}

const ShareButton = ({ id, className } : {
    id: string,
    className?: string
}) => {
    const handleClick = async () => {
        console.log('Share button is clicked')
        // await navigator.share({text: 'hey'});
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
            onClick={handleClick}
            style={{"background":"linear-gradient(0deg,rgba(255,255,255,0.55),rgba(255,255,255,0.55)),linear-gradient(0deg,rgba(255,255,255,0.54) 0%,rgba(255,255,255,0.48) 60%,rgba(255,255,255,0.76) 100%)"}} 
            className={cn("absolute right-3 top-5 h-8 w-8 grid place-items-center rounded-full hover:!bg-[#FFFFFF] "+  className)}>
                <ShareIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[568px]">
        <DialogHeader className="mt-10 mb-6">
          <DialogTitle></DialogTitle>
          <DialogDescription className="text-[26px] font-medium">
            Share this experience
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center">
          <div className="">
            {/* Main content goes here */}
            <Image 
                src={'/first_1.jpeg'}
                alt=""
                height={64}
                width={64}
                objectFit="cover"
                className="h-16 w-16 rounded-[8px] mr-4"
            />
          </div>
          <h2 className="text-base">
            Stay in Prince’s Purple Rain house
          </h2>
        </div>
        <ActionButtons id={id}/>
      </DialogContent>
    </Dialog>
  )
}

export default ShareButton
