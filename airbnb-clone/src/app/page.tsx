import Header from "./components/Header";
import NavIcon from "./components/NavIcon";
import LodgeCard, { LodgeCardType } from "./components/LodgeCard";
import PastExoeriences from "./components/PastExoeriences";
import LodgeCardWrapper from "./components/LodgeCardWrapper";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { fetchData } from "@/lib/fetchData";

async function HeaderCard() {

  const [d1, d2] : LodgeCardType[] = await fetchData('http://localhost:3000/api/getAllRooms');

  return (
    <>
      <LodgeCard 
        data={d1}
      />
      <LodgeCard 
        data={d2}
      />
    </>
  )
}


export default function Home() {

  return (
    <div className="">
     <Header />
     <NavIcon />
     <LodgeCardWrapper>
      <Suspense fallback={<h1>Loading data for header card</h1>}>
        <HeaderCard />
      </Suspense>
     </LodgeCardWrapper>
      <PastExoeriences />
     <Footer />
    </div>
  );
}
