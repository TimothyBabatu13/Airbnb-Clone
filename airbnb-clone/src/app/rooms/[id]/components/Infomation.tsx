import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import RoomFeatures from "./RoomFeatures"
import RoomDescription from "./RoomDescription"
import SleepingRoomPreview from "./SleepingRoomPreview"
import PlaceOffer from "./PlaceOffer"
import CheckInDate from "./CheckInDate"
import { fetchData } from "@/lib/fetchData"
import { dataToSendType } from "@/app/api/getRoom/route"
import { Suspense } from "react"
import Skeleton from "@/components/ui/skeleton"

const NameOfCity = async ({ id } : {
    id: string
}) => {

    const data : dataToSendType = await fetchData('http://localhost:3000/api/getRoom',{
        method: 'POST',
        body: JSON.stringify(id)
    });

    const location = data.location

    return(
        <h3 className="text-[22px] font-medium">{location}</h3>
    )
}

const UserInfoSkeleton = () => {
    return(
        <div>
            <div className="py-6 border-y flex items-center">
                <Skeleton 
                    className="h-10 w-10 rounded-full mr-3 bg-black"
                />
            <div className="w-full">
                <Skeleton className="h-3 w-1/3 mb-1 bg-black rounded-none"/>
                <Skeleton className="h-3 w-1/3 bg-black rounded-none"/>
            </div>
        </div>    
        </div>
    )
}

const UserInfo = async ({ id } : {
    id: string
}) => {
    const data : dataToSendType = await fetchData('http://localhost:3000/api/getRoom',{
        method: 'POST',
        body: JSON.stringify(id)
    });


    const { postedBy : { image, name, nickname } } = data;
    return(
        <div className="py-6 border-y flex items-center">
            <Image 
                src={image}
                height={40}
                width={40}
                alt={`${name} image`}
                className="rounded-full h-10 w-10 mr-3"
                role="button"
            />
            <div>
                <h3>Hosted by {name}</h3>
                <h4 className="text-[#6A6A6A] text-sm">{nickname}</h4>
            </div>
        </div>
    )
}
const Infomation = ({ id }: {
    id: string
}) => {
    // console.log(CardDescription, CardHeader, CardTitle)
  return (
    <div>
        <div className="flex py-8 justify-between">
            <div className=" flex-1">
                <div className="">
                    <Suspense fallback={<Skeleton className="w-1/2 h-5 rounded-none bg-black"/>}>
                        <NameOfCity 
                            id={id} 
                        />
                    </Suspense>
                    <h4 className="mt-1 text-base font-normal">Evening Experience</h4>
                </div>
                <Suspense fallback={<UserInfoSkeleton />}>
                    <UserInfo 
                        id={id}
                    />
                </Suspense>
                <RoomFeatures />
                <Suspense fallback={<h1>Loading room description data</h1>}>
                    <RoomDescription 
                        id={id}
                    />
                </Suspense>
                <SleepingRoomPreview />
                <PlaceOffer />
                <CheckInDate />
            </div>
            <div className="flex-1 place-items-center">
                <Card className="w-[350px] shadow p-6">
                    <CardContent className="text-center">
                        <h4 className="pt-2.5 pb-1.5 text-[22px]"><b>$0</b> per guest</h4>
                        <h5 className="text-base font-normal text-[#222222]">Closes December 10, 7:59 AM</h5>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button style={{backgroundImage: 'linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%)'}} className="w-full">
                            Request
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Infomation

