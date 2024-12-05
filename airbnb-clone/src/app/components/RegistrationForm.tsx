'use client';
import { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


interface responseType {
    status: string,
    country: string,
    countryCode: string,
    region: string, 
    regionName: string,
    city: string,
    zip: string,
    lat:number,
    lon:number,
    timezone:string,
    isp:string,
    org:string,
    as:string,
    query:string
}
const RegistrationForm = () => {

    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountryCode = async () : Promise<string> => {
            const api = await fetch('http://ip-api.com/json');
            const res: responseType = await api.json()
            const response = res.countryCode
            return response as string
        }
        const res = fetchCountryCode();
        res.then(res => setLocation(res))
    } , [])

  return (
    <div>
        {
            location && (
            <PhoneInput
                defaultCountry={location.toLowerCase()}
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />)
        }
        
    </div>
  )
}

export default RegistrationForm