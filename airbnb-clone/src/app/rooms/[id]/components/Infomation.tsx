import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import RoomFeatures from "./RoomFeatures"
import RoomDescription from "./RoomDescription"
import SleepingRoomPreview from "./SleepingRoomPreview"
import PlaceOffer from "./PlaceOffer"
import CheckInDate from "./CheckInDate"

const Infomation = () => {
    // console.log(CardDescription, CardHeader, CardTitle)
  return (
    <div>
        <div className="flex py-8 justify-between">
            <div className=" flex-1">
                <div className="">
                    <h3 className="text-[22px] font-medium">Rome, Italy</h3>
                    <h4 className="mt-1 text-base font-normal">Evening Experience</h4>
                </div>
                <div className="py-6 border-y flex items-center">
                    <Image 
                        src={'/gladiator.jpeg'}
                        height={40}
                        width={40}
                        alt=""
                        className="rounded-full h-10 w-10 mr-3"
                        role="button"
                    />
                    <div>
                        <h3>Hosted by Lucius</h3>
                        <h4 className="text-[#6A6A6A] text-sm">Gladiator</h4>
                    </div>
                </div>
                <RoomFeatures />
                <RoomDescription />
                <SleepingRoomPreview />
                <PlaceOffer />
                <CheckInDate />
            </div>
            <div className="flex-1">
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

