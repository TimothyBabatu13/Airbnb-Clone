'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { LeftIcon, RightIcon } from "./Icons"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";

/* 
npx shadcn@latest add carousel
*/
const IconWithText = ({ active, name, src, id } : {
    active: boolean,
    src: string,
    name: string,
    id: string
}) => {

    return (
        <Link href={`?type=${id}`}  className={`flex flex-col items-center w-fit  ${active && 'border-b-black border-b-2'} py-1 mt-3 mb-2.5 ${!active ? 'cursor-pointer hover:border-b-2' : 'cursor-auto'}`}>
            <Image 
                src={src}
                height={24}
                width={24}
                alt={name+ ' icon'}
                className="size-4 md:size-6"
            />
            <span 
                className="text-sm md:text-base"
            >
                {name}</span>
        </Link>
    )
}

const NavIcon = () => {
    const [urlParams, setUrlParams] = useState<string | null>(null);
    const params = useSearchParams();
    const param = params.get('type');
    
    useEffect(()=>{
       setUrlParams(param);
    }, [param])

    const navData = [
        {
            imgPath: '/icons.png',
            text: 'Icons'
        },
        {
            imgPath: '/beach-front.jpg',
            text: 'Beachfront'
        },
        {
            imgPath: '/design.jpg',
            text: 'Design'
        },
        {
            imgPath: '/amazing-pools.jpg',
            text: 'Amazing pools'
        },
        {
            imgPath: '/luxe.jpg',
            text: 'Luxe'
        },
        {
            imgPath: '/earth-homes.jpg',
            text: 'Earth homes'
        },
        {
            imgPath: '/rooms.jpg',
            text: 'Rooms'
        },
        {
            imgPath: '/new.jpg',
            text: 'New'
        },
        {
            imgPath: '/new.jpg',
            text: 'Top cities'
        },
        {
            imgPath: '/new.jpg',
            text: 'Mansions'
        },
        {
            imgPath: '/new.jpg',
            text: 'Trending'
        },
        {
            imgPath: '/new.jpg',
            text: 'Islands'
        },
        {
            imgPath: '/new.jpg',
            text: 'Countryside'
        },
        {
            imgPath: '/new.jpg',
            text: 'Play'
        },
        {
            imgPath: '/new.jpg',
            text: 'OMG!'
        },
        {
            imgPath: '/new.jpg',
            text: 'Trulli'
        },
        {
            imgPath: '/new.jpg',
            text: 'Boats'
        },
        {
            imgPath: '/new.jpg',
            text: 'Cabins'
        },
        {
            imgPath: '/new.jpg',
            text: 'Tropical'
        },
        {
            imgPath: '/new.jpg',
            text: 'Castles'
        },
        {
            imgPath: '/new.jpg',
            text: 'Cycladic homes'
        },
        {
            imgPath: '/new.jpg',
            text: 'Cycladic homes'
        },
        {
            imgPath: '/new.jpg',
            text: 'Off-the-grid'
        },
        {
            imgPath: '/new.jpg',
            text: 'Off-the-grid'
        },
        {
            imgPath: '/new.jpg',
            text: 'Adapted'
        },
        {
            imgPath: '/new.jpg',
            text: 'Bed & breakfasts'
        },
        {
            imgPath: '/new.jpg',
            text: 'Creative spaces'
        },
        {
            imgPath: '/new.jpg',
            text: 'Lake'
        },
        {
            imgPath: '/new.jpg',
            text: 'Tiny homes'
        },
        {
            imgPath: '/new.jpg',
            text: 'National parks'
        },
        {
            imgPath: '/new.jpg',
            text: 'Treehouses'
        },
        {
            imgPath: '/new.jpg',
            text: 'Lakefront'
        },
        {
            imgPath: '/new.jpg',
            text: 'Arctic'
        },
        {
            imgPath: '/new.jpg',
            text: 'Vineyards'
        },
        {
            imgPath: '/new.jpg',
            text: 'Farms'
        },
        {
            imgPath: '/new.jpg',
            text: 'Campers'
        },
        {
            imgPath: '/new.jpg',
            text: 'Surfing'
        },
        {
            imgPath: '/new.jpg',
            text: 'A-frames'
        },
        {
            imgPath: '/new.jpg',
            text: 'Off-the-grid'
        },
        {
            imgPath: '/new.jpg',
            text: 'Camping'
        },
        {
            imgPath: '/new.jpg',
            text: 'Historical homes'
        },
        {
            imgPath: '/new.jpg',
            text: 'Golfing'
        },
        {
            imgPath: '/new.jpg',
            text: 'Hanoks'
        },
        {
            imgPath: '/new.jpg',
            text: 'Top of the world'
        },
        {
            imgPath: '/new.jpg',
            text: 'Skiing'
        },
        {
            imgPath: '/new.jpg',
            text: 'Windmills'
        },
        {
            imgPath: '/new.jpg',
            text: "Chef's kitchens"
        },
        {
            imgPath: '/new.jpg',
            text: 'Minsus'
        },
        {
            imgPath: '/new.jpg',
            text: 'Casas particulares'
        },
        {
            imgPath: '/new.jpg',
            text: 'Towers'
        },
        {
            imgPath: '/new.jpg',
            text: "Shepherd's hut"
        },
        {
            imgPath: '/new.jpg',
            text: 'Barns'
        },
        {
            imgPath: '/new.jpg',
            text: 'Ryokans'
        },
        {
            imgPath: '/new.jpg',
            text: 'Desert'
        },
        {
            imgPath: '/new.jpg',
            text: 'Yurts'
        },
        {
            imgPath: '/new.jpg',
            text: 'Domes'
        },
        {
            imgPath: '/new.jpg',
            text: 'Ski-in/out'
        },
        {
            imgPath: '/new.jpg',
            text: 'Houseboats'
        },
        {
            imgPath: '/new.jpg',
            text: 'Containers'
        },
        {
            imgPath: '/new.jpg',
            text: 'Grand pianos'
        },
        {
            imgPath: '/new.jpg',
            text: 'Dammusi'
        },
        {
            imgPath: '/new.jpg',
            text: 'Riads'
        },
        {
            imgPath: '/new.jpg',
            text: 'Beach'
        },
    ]
  return (
    <div className="flex items-center">
        {/* <CarouselSpacing /> */}
        <Carousel className="w-full">
      <CarouselContent className="ml-10">
        {navData.map((_, index) => (
        <CarouselItem key={index} className={`basis-auto ${index !== navData.length -1 && 'mr-8'}`}>
            <IconWithText 
                active={index === Number(urlParams) ? true : false}
                src={_.imgPath}
                name={_.text}
                id={index.toString()}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0"> 
        <LeftIcon />
      </CarouselPrevious>
      <CarouselNext className="right-0"> 
        <RightIcon />
      </CarouselNext>
    </Carousel>
        {/* {
            navData.map((navDatum, id) => (
                <IconWithText 
                    key={id}
                    active
                    src={navDatum.imgPath}
                    name={navDatum.text}
                />
            ))
        } */}
    </div>
  )
}

export default NavIcon