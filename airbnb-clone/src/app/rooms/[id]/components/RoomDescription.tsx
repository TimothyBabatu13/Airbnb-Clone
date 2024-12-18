'use client';
import { RightIcon } from "@/app/components/Icons";

const RoomDescription = () => {
    const MAX_LENGTH = 323;
    const TEXT = "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n "
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