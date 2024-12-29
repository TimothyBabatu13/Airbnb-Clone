'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MailIcon } from 'lucide-react';
import { /*(ChangeEvent,*/ useEffect, useRef, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { AppleIcon, FacebookIcon2, GoogleIcon } from './Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string
}

const ActionButton = ({children,className, ...props}: ButtonProps) => {
    return(
        <Button 
            className={cn('w-full text-[#222222] mb-5 text-sm py-[14px] px-[23px] border-[#222222] border bg-[#FFFFFF] font-medium hover:bg-[#F7F7F7] ' + className)} 
            {...props}
        >
            {children}
        </Button>
    )
}
const GoogleButton = () => {
    return(
        <ActionButton className='flex items-center justify-between'> 
            <GoogleIcon />
            <span>Continue with Google</span>
            <div />
        </ActionButton>
    )
}

const AppleButton = () => { 
    const [isDisabled, setDisabled] = useState<boolean>(false);
    useEffect(()=>{
        const fetchData = async () => {
            fetch('http://localhost:3000/api/checkos')
            .then(res => res.json())
            .then(() => setDisabled(true))
            .catch(err => console.log(err))
        }
        fetchData()
    }, [])
    
    const handleClick = () => {
        if(isDisabled) return;
    }

    return(
        <ActionButton 
            onClick={handleClick} 
            className={`flex items-center justify-between ${isDisabled && 'cursor-not-allowed border-[#DDDDDD] bg-[#FFFFFF] text-[#DDDDDD] hover:bg-[#FFFFFF]'}`}
        >
            <AppleIcon /> 
            <span>Continue with Apple</span>
            <div />
        </ActionButton>
    )
}

const EmailButton = () => {
    
    return(
        <ActionButton className='flex items-center justify-between'> 
            <MailIcon />
            <span>Continue with Email</span>
            <div />
        </ActionButton>
    )
}

const FacebookButton = () => {
    return(
        <ActionButton className='flex items-center justify-between'> 
            <FacebookIcon2 />
            <span>Continue with Facebook</span>
            <div />
        </ActionButton>
    )
}

const RegistrationButton = () => {
    return(
        <div>
            <GoogleButton />
            <AppleButton />
            <EmailButton />
            <FacebookButton />
        </div>
    )
}
const RegistrationForm = () => {

    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [location, setLocation] = useState<string | null>(null);
    const labelElemet = useRef<HTMLLabelElement | null>(null);
 
    // console.log(phoneNumber)
    // console.log(setPhoneNumber)
    // console.log(labelElemet)
    useEffect(() => {
        const fetchCountryCode = async () : Promise<string> => {
            const api = await fetch('http://ip-api.com/json');
            const res = await api.json()
            const response = res.countryCode
            return response as string
        }
        const res = fetchCountryCode();
        res
        .then(res => setLocation(res))
        .catch(err => console.log(err))
    } , [])

    // const handleFocus = () => {
    //     labelElemet.current?.classList.add('-top-4', 'text-sm', 'font-lighter')
    // }

    // const handleBlur = () => {
    //     labelElemet.current?.classList.remove('-top-4', 'text-sm', 'font-lighter')
    // }


    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;

    //     const checkLastWord = (): boolean => {
    //         const arr = value.split('');
    //         const lastWord = arr[arr.length -1];
    //         return Number.isNaN(Number(lastWord))
    //     }

    //     if (checkLastWord()) return;
    //     setPhoneNumber(value)
    // }

  return (
    <div>
        {
            location && (
            <PhoneInput
                className='w-full'
                defaultCountry={location.toLowerCase()}
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />)
        }
        <span className='text-xs font-normal'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</span>
        <div className='relative'>
            {/* {mt-9} */}
            <button 
                className='mt-4 mb-6 w-full py-[14px] px-6 rounded-[8px] text-white text-base'
                style={{backgroundImage: 'linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%)'}}
            >
                Continue
            </button>
            <div className='flex items-center my-4'>
                <span style={{background: 'rgb(221, 221, 221'}} className='w-full h-[1px] bg-black'/>
                <span className='px-4 text-xs font-normal'>or</span>
                <span style={{background: 'rgb(221, 221, 221'}} className='w-full h-[1px] bg-black'/>
            </div>
            {/* <label 
                ref={labelElemet} 
                className='text-base font-normal absolute z-20 top-2/4 left-2 -translate-y-2/4 transition-all'
            >
                Phone number
            </label>
            <span className='text-base absolute z-10 top-2/4 left-2 -translate-y-2/4'>{phone}</span>
            <input 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                className='h-full p-2 pl-12 w-full text-base' 
                type="tel"
                value={phoneNumber} 
                onChange={handleInputChange}
            /> */}
        </div>
        <RegistrationButton />
        
    </div>
  )
}

export default RegistrationForm