import Header from "@/app/components/Header";
import { RoomHeaderButton } from "./components/RoomButtons";
import ImageExhibition from "./components/ImageExhibition";
import Infomation from "./components/Infomation";
import ScrollOb from "./components/ScrollOb";
import { fetchData } from "@/lib/fetchData";
import { Suspense } from "react";

const Name = async ({ id } : {
    id: string
}) => {

    const data = await fetchData('http://localhost:3000/api/getRoom', {
        method: 'POST',
        body: JSON.stringify(id)
    })
    const name = data.name
    return (
        <h1 className="text-[26px]">{name}</h1>
    )
}

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
            <Suspense fallback={<h1>Loading...</h1>}>
                <Name id={roomID}/>
            </Suspense>
            <RoomHeaderButton id={roomID}/>
        </div>
       <Suspense fallback={<h1>Image Exhibition Loading...</h1>}>
        <ImageExhibition id={roomID}/>
       </Suspense>
        <Infomation id={roomID}/>
        <ScrollOb />
    </div>
  )
}

export default page