'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const RegistrationForm = () => {

    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [location, setLocation] = useState<string | null>(null);
    const labelElemet = useRef<HTMLLabelElement | null>(null);
    const phoneReg = /^\d{3}-\d{3}-\d{4}$/;

    useEffect(() => {
        const fetchCountryCode = async () : Promise<string> => {
            const api = await fetch('http://ip-api.com/json');
            const res = await api.json()
            const response = res.countryCode
            return response as string
        }
        const res = fetchCountryCode();
        res.then(res => setLocation(res))
    } , [])

    const handleFocus = () => {
        labelElemet.current?.classList.add('-top-4', 'text-sm', 'font-lighter')
    }

    const handleBlur = () => {
        labelElemet.current?.classList.remove('-top-4', 'text-sm', 'font-lighter')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // if(phoneReg.test(value)){
        //     setPhoneNumber(value);
        // }
        console.log(value)
        const checkLastWord = () => {
            const arr = value.split('');
            const lastWord = arr[arr.length -1];
            console.log(lastWord)
            console.log(Number('k') === Number.NaN)
        }
        checkLastWord()
        setPhoneNumber(value)
    }

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
        <div className='h-10 mt-9 relative tel_phone'>
            <label 
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
            />
        </div>
        
    </div>
  )
}

export default RegistrationForm