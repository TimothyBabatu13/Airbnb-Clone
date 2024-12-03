import Header from "@/app/components/Header";
import { RoomHeaderButton } from "./components/RoomButtons";
import ImageExhibition from "./components/ImageExhibition";

const page = async ({params}: {
    params: {
        id: string
    }
}) => {
    const roomID = (await params).id;

  return (
    <div>
        <Header />
        <div className="flex items-center justify-between">
            <h1 className="text-[26px]">Train for Gladiator || glory</h1>
            <RoomHeaderButton />
        </div>
        <ImageExhibition />
    </div>
  )
}

export default page