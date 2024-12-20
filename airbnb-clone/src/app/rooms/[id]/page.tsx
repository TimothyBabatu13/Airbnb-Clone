import Header from "@/app/components/Header";
import { RoomHeaderButton } from "./components/RoomButtons";
import ImageExhibition from "./components/ImageExhibition";
import Infomation from "./components/Infomation";
import ScrollOb from "./components/ScrollOb";

const page = async ({params}: {
    params: Promise<{
        id: string
    }>
}) => {
    const roomID = (await params).id;
    // console.log(roomID)
  return (
    <div>
        <Header />
        <div className="flex items-center justify-between">
            <h1 className="text-[26px]">Train for Gladiator || glory</h1>
            <RoomHeaderButton />
        </div>
        <ImageExhibition />
        <Infomation />
        <ScrollOb />
    </div>
  )
}

export default page