import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import ShareButton from "./ShareButton"
import { LeftIcon, RightIcon } from "./Icons"

interface LodgeCardType {
    id: string,
    author: string,
    name: string,
    isOutOfStock: boolean
    price: string,
    images: string[]
}

const BackgroundImage = ({ background } : {
    background: string,
}) => {
    return(
        
            <Image 
                src={background}
                height={323.312}
                width={340.333}
                alt=""
                className="rounded-xl mb-3 h-full w-full"
            />
    )
}

const LodgeCard = ({ background, id, data } : {
    background: string[],
    id: string,
    data?: LodgeCardType

}) => {
    console.log(data)
    
  return (
    <div>
        <Carousel className="w-full mb-3">
            <CarouselContent className="h-[298.22px]">
                {
                    background.map((bg, index) => (
                        <CarouselItem className="h-full w-full" key={index}>
                            <BackgroundImage background={bg} />
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
            <ShareButton id={id} /> 
        </Carousel>
        <div  className="text-[15px]">
            <h1 className="font-medium text-[#222222]">Train for Gladiator || glory</h1>
            <h2 className="text-[#6A6A6A]">Hosted by Lucius</h2>
            <h3 className="font-medium">$0 per guest</h3>
        </div>
    </div>

  )
}

export default LodgeCard