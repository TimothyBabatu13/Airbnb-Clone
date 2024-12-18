
'use client'

import { Button } from "@/components/ui/button";

const PlaceOffer = () => {
    const MAX_NUM = 8;
    const offersData = [
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
        {
            text: 'Kitchen',
            icon: '',
        },
    ]
  return (
    <div className="py-12 border-b">
        <h5 className="text-[22px] font-medium mb-6 ">What this place offers</h5>
        <div className="grid grid-cols-2">
            {offersData.map((item, id) =>(
                <div className={`${id+1 > MAX_NUM ? 'hidden' : 'pb-4'}`} key={id}>
                    {item.text}
                </div>
            ))}
        </div>
        <Button 
            className="border-[#222222] h-[48px] border py-[13px] px-[23px] bg-[#FFFFFF] font-medium text-[1rem] rounded-[8px] text-[#222222] hover:border-[#000000] hover:bg-[#F7F7F7] transition-all"
        >
            Show all {offersData.length} amenities
        </Button>
    </div>
  )
}

export default PlaceOffer