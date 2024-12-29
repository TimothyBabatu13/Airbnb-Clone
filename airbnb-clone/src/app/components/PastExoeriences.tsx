import { fetchData } from "@/lib/fetchData"
import LodgeCard, { LodgeCardType } from "./LodgeCard"
import LodgeCardWrapper from "./LodgeCardWrapper"
import { Suspense } from "react";
import { LodgeCardSkeleton } from "@/components/ui/skeleton";

const LodgeCardData = async () => {
  const data : LodgeCardType[] = await fetchData('http://localhost:3000/api/getAllRooms'); 
  console.log('running heyyy')
  return (
    <LodgeCardWrapper>
          {
            data?.map(lodgeCardData => (
              <LodgeCard key={lodgeCardData.id} data={lodgeCardData} />  
            ))
          }
        </LodgeCardWrapper>
  )
}

const PastExoeriences = async () => {
  return (
    <div>
        <h2 className="mt-[52px] mb-6 text-[32px]">Past experiences</h2>
        <Suspense fallback={<LodgeCardWrapper>{Array.from(['','','','','','','',''].map((item, id) => <LodgeCardSkeleton key={id} />))}</LodgeCardWrapper>}>
          <LodgeCardData />
        </Suspense>
    </div>
  )
}

export default PastExoeriences