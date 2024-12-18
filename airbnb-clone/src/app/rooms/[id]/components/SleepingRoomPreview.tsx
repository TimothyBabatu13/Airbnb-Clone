'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

const SleepingRoomPreview = () => {
    const data = [
        {
            img: '/first_1.jpeg',
            title: 'Bedroom 1',
            description: '1 queen bed'
        },
        {
            img: '/first_2.jpeg',
            title: 'Bedroom 2',
            description: '2 single beds'
        },
        {
            img: '/first_3.jpeg',
            title: 'Bedroom 3',
            description: '2 single beds'
        },
        {
            img: '/first_4.jpeg',
            title: 'Bedroom 4',
            description: '2 single beds'
        }
    ]
    const [num, setNumber] = useState(1);
    const divisionValue = (num : number) => num / 2;
  return (
    <div className="border-b py-12">
        <div className="flex justify-between">
            <h4>Where you'll sleep</h4>
            <div>
               <span> {num}/{divisionValue(data.length)}</span>
            </div>
        </div>
        <Carousel className="w-full">
      <CarouselContent className="">
        {data.map((_, index) => (
        <CarouselItem key={index} className={`basis-auto`}>
            <Image 
                width={267}
                height={178}
                src={_.img}
                alt=""
                className="!h-full !w-full rounded-[8px] flex-1"
                objectFit="cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      </Carousel>
    </div>
  )
}

export default SleepingRoomPreview