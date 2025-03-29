import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import ShareButton from "./ShareButton"
import { LeftIcon, RightIcon } from "./Icons"
import Link from "next/link"

export interface LodgeCardType {
    id: string,
    author: string,
    name: string,
    isOutOfStock: boolean
    price: string,
    images: string[]
}

const BackgroundImage = ({ background, name } : {
    background: string,
    name: string
}) => {
    return( 
            <Image 
                src={background}
                height={323.312}
                width={340.333}
                alt={`${name} image`}
                className="rounded-xl mb-3 h-full w-full max-w-full"
            />
    )
}

const LodgeCard = ({ data } : {
    data: LodgeCardType
}) => {
    
  return (
    <div>
        <Carousel className="w-full mb-3">
            <CarouselContent className="h-[298.22px]">
                {
                    data?.images.map((bg, index) => (
                        <CarouselItem className="h-full w-full" key={index}>
                            <BackgroundImage 
                                background={bg} 
                                name={bg.toString()}    
                            />
                        </CarouselItem>
                    ))
                }    
            </CarouselContent>
            <CarouselPrevious className="left-3"> 
                <LeftIcon />
            </CarouselPrevious>
            <CarouselNext className="right-3">
                <RightIcon /> 
            </CarouselNext>  
            <ShareButton id={data.id} /> 
        </Carousel>
        <Link href={`/rooms/${data.id}`}  className="text-[15px]">
            <h1 className="font-medium text-[#222222]">{data.name}</h1>
            <h2 className="text-[#6A6A6A]">Hosted by {data.author}</h2>
            <h3 className="font-medium">${data.price} per guest</h3>
        </Link>
    </div>

  )
}

export default LodgeCard