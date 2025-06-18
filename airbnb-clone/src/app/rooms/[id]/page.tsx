import Header from "@/app/components/Header";
import { AllPhotosButton, RoomHeaderButton } from "./components/RoomButtons";
import ImageExhibition from "./components/ImageExhibition";
import Infomation from "./components/Infomation";
import ScrollOb from "./components/ScrollOb";
import {  fetchDatas } from "@/lib/fetchData";
import { Suspense } from "react";
import Skeleton from "@/components/ui/skeleton";
import { relativePath } from "@/components/HomeHeader";


const Name = async ({ id } : {
    id: string
}) => {

    const fetchData = async () => {
        const path = await relativePath();
        const api = await fetch(`${path}/api/getRoom`, {
            method: 'POST',
            body: JSON.stringify(id)
        });
        const result = await api.json();
        return result;
    }
    
    const data = await fetchData();
    const name = data.name
    return (
        <h1 className="text-[26px]">{name}</h1>
    )
}

const ImageExhibitionLoader = () => {
    return(
        <div id="imageExhibition" className="pt-6 flex gap-2 relative">
            <Skeleton className="h-[468.34px] rounded-none bg-black w-[342.677px] flex-1 rounded-l-2xl" />
            <div className="grid grid-cols-2 gap-2 flex-1">
                {Array.from(['','','','']).map((_, id) => (
                    <Skeleton 
                        className={`w-[full] rounded-none bg-black h-[230.17px] ${id === 1 && 'rounded-tr-2xl'} ${id === 3 && ' rounded-br-2xl'}`}
                        key={id}
                    />
                ))}
        </div>
        <AllPhotosButton />
        </div>
    )
}

const page = async ({params}: {
    params: Promise<{
        id: string
    }>
}) => {
    const roomID = (await params).id;

  return (
    <div>
        <Header />
        <div className="flex items-center justify-between">
            <Suspense fallback={<Skeleton className="h-5 w-1/4 rounded-none bg-black"/>}>
                <Name id={roomID}/>
            </Suspense>
            <RoomHeaderButton id={roomID}/>
        </div>
       <Suspense fallback={<ImageExhibitionLoader />}>
        <ImageExhibition id={roomID}/>
       </Suspense>
        <Infomation id={roomID}/>
        <ScrollOb />
    </div>
  )
}

export default page