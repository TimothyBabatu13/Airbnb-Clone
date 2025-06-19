'use client';
import LodgeCard from "@/app/components/LodgeCard";
import { LodgeCardSkeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";
// import { headers } from "next/headers";

// export const relativePath = async () => {
//   const host = (await headers()).get('host') || 'localhost:3000';
//   const isLocal = host.includes('localhost') || host.startsWith('127.');
//   const protocol = isLocal ? 'http' : 'https';
//   return process.env.NODE_ENV === 'development' ? 'https://airbnb-clone-bcjzqyql0-timothybabatu13s-projects.vercel.app/': `${protocol}://${host}`;
// };

export  function HeaderCard() {
  // const path = await relativePath();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // console.log(path)
      const api = await fetch(`/api/getAllRooms`, { cache: 'no-store' });
      const result = await api.json();
      setData(result);
      return result
    } 
    catch (err) {
      console.error("Fetch failed:", err);
    }
  }
  
  useEffect(() =>{
    const fet = async () => {
      fetchData();
    }
    fet()
  }, [])
  // const result = await fetchData();
  // console.log(result, 'lets see if it goes through')
  const skeleton = Array.from(['', ''].map((_, id) => <LodgeCardSkeleton key={id} />));
  // console.log(result)

  return (
    <>
      {data.length ? (
        <>
          <LodgeCard data={data[0]} />
          <LodgeCard data={data[1]} />
        </>
      ) : (
        skeleton
      )}
    </>
  );
}
