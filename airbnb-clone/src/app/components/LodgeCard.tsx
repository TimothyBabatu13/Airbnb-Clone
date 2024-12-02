import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import ShareButton from "./ShareButton"
import { LeftIcon, RightIcon } from "./Icons"


const BackgroundImage = ({ background } : {
    background: string,
}) => {
    return(
        
            <Image 
                src={background}
                height={323.312}
                width={340.333}
                alt=""
                className="rounded-xl mb-3 h-full"
            />
    )
}

const LodgeCard = ({ background, id } : {
    background: string[],
    id: string

}) => {
  return (
    <div>
        <Carousel className="w-full max-w-xs">
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
            <h1>Train for Gladiator || glory</h1>
            <h2>Hosted by Lucius</h2>
            <h3 >$0 per guest</h3>
        </div>
    </div>

  )
}

export default LodgeCard