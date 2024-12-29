
import { dataToSendType } from "@/app/api/getRoom/route";
import { RightIcon } from "@/app/components/Icons";
import { fetchData } from "@/lib/fetchData";

const RoomDescription = async ({ id } : {
  id: string
}) => {
    const data : dataToSendType = await fetchData('http://localhost:3000/api/getRoom',{
      method: 'POST',
      body: JSON.stringify(id)
    });
    const TEXT = data.details
    const MAX_LENGTH = 323;
    
    const TruncrateText = ({num, text}: {
      num: number,
      text: string
    }): string => {
      if (text.length >= num) text = text.substring(0, num-1) + "...";
      return text;
    }

  return (
    <div className="pt-8 pb-12 border-b">
        <h6 
          className="text-base font-normal"
        >
          {TruncrateText({num: MAX_LENGTH, text: TEXT})}
        </h6>
        <button 
          className="mt-4 flex items-center"
        >
          <span 
            className="underline mr-1"
          >
            Show more
          </span> 
          <RightIcon/>
        </button>
    </div>
  )
}

export default RoomDescription