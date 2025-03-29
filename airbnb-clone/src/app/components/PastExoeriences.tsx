'use client';
import LodgeCard, { LodgeCardType } from "./LodgeCard"
import LodgeCardWrapper from "./LodgeCardWrapper"
import { useEffect, useState } from "react";
import { LodgeCardSkeleton } from "@/components/ui/skeleton";

const LodgeCardData = () => {
  const [data, setData] = useState<null | LodgeCardType[]>(null)
  const fetchData = async () => {
    const api = await fetch('/api/getAllRooms');
    const res = await api.json();
    setData(res);
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  const skeleton = Array.from(['','','','','','','',''].map((item, id) => <LodgeCardSkeleton key={id}/>))
  return (
    <LodgeCardWrapper>
       <>
        {
            data ? 
            (
            <>
              {data?.map(lodgeCardData => 
              (
                <LodgeCard key={lodgeCardData.id} data={lodgeCardData} />  
              ))}
            </>
            ) : 
            (
                <> 
                    {skeleton}
                </>
            )
        }
        
      </>
          {
            
          }
        </LodgeCardWrapper>
  )
}

const PastExoeriences = () => {
  return (
    <div>
        <h2 className="mt-[52px] mb-6 text-[32px]">Past experiences</h2>
        <LodgeCardData />
    </div>
  )
}

export default PastExoeriences