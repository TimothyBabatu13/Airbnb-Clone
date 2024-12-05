'use client';

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import {  useSearchParams, useRouter } from "next/navigation";
import RegistrationForm from "./RegistrationForm";

const UserRegistration = () => {

  const router = useRouter();
  const searchParams = useSearchParams()
  
  const result = searchParams.get('signup') === 'true' ? true : false

  return (
   <div onClick={()=> console.log('')} className= {cn("fixed  inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ", result ? 'block' : 'hidden')}>
      <div onClick={(e)=>{
        e.stopPropagation()
      }} className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <div className="flex items-center justify-between h-16 border-b">
          <Link href={'/'}>
            <X className="h-4 w-4" />
          </Link>
          <h2 className="text-base font-bold">Log in or sign up</h2>
          <div />
        </div>
        <div className="py-6">
          <h3 className="mt-[25px] mb-6 text-[22px] font-medium">Welcome to Airbnb</h3>
          <RegistrationForm />
          
        </div>
      </div>
    </div>
  )
}

export default UserRegistration


