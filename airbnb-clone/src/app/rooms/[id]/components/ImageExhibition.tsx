// 'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { AllPhotosButton } from "./RoomButtons"
import { fetchData } from "@/lib/fetchData"
import { dataToSendType } from "@/app/api/getRoom/route"

const SmallImage = ({ myId, src } : {
    myId: number,
    src: string
}) => {

    return(
            <div className="relative small_image">
                <Image 
                    src={src}
                    width={227.17}
                    height={230.17}
                    alt=""
                    className={"bg-cover h-full w-full " + `${myId === 1 && 'rounded-tr-2xl'} ${myId === 3 && ' rounded-br-2xl'}`}
                    role="button"
                />
                <div className={cn(`absolute pointer-events-none h-full w-full top-0 left-0`)}/>
            </div>
    )
}


const ImageExhibition = async ({ id } : {
    id: string
}) => {
    const data : dataToSendType = await fetchData('http://localhost:3000/api/getRoom', {
        method: 'POST',
        body: JSON.stringify(id)
    })

    const { images }= data;
    const [img1, ...imgs] = images
    
  return (
    <div id="imageExhibition" className="pt-6 flex gap-2 relative">
            <Image 
                src={img1}
                height={40}
                width={342.677}
                className="bg-cover rounded-l-2xl flex-1 w-full hover:bg-black"
                alt=""
                role="button"
            />
        <div className="grid grid-cols-2 gap-2 flex-1">
            {Array.from(imgs).map((_, id) => (
                <SmallImage src={_} myId={id} key={id}/>
            ))}
        </div>
        <AllPhotosButton />
    </div>
  )
}

export default ImageExhibition