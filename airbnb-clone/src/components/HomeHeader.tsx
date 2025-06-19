
import LodgeCard from "@/app/components/LodgeCard";
// import { useEffect, useState } from "react";
import { LodgeCardSkeleton } from "./ui/skeleton";
import { headers } from "next/headers";


// const DATA = [
//     {
//         author: 'BO',
//         id: 'kfakk',
//         // id: generateId(),
//         images: ['/11.avif', '/12.avif', '/13.avif', '/14.avif', '/15.avif', '/16.avif'],
//         isOutOfStock: true,
//         name: 'København, Denmark',
//         price: '118'
//     },
//     {
//         author: 'Betrand',
//         // id: generateId(),
//         id: 'jduaus',
//         images: ['/21.avif', '/22.avif', '/23.avif', '/24.avif', '/25.avif', '/26.avif','/27.avif', '/28.webp','/29.webp', '/211.avif', '/222.webp', '/223.webp', '/224.avif', '/225.avif', '/226.avif','/227.avif','/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
//         isOutOfStock: true,
//         name: 'London, UK',
//         price: '204'
//     },
//     {
//         author: 'Antonella',
//         // id: generateId(),
//         id: 'ueoowe',
//         images: ['/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif',],
//         isOutOfStock: true,
//         name: 'Florence, Italy',
//         price: '118'
//     },
//     {
//         author: 'Joerg',
//         // id: generateId(),
//         id: 'pwieie',
//         images: ['/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
//         isOutOfStock: true,
//         name: 'Hamburg, Germany',
//         price: '118'
//     },
//   ]



export const relativePath = async () => {
  const host = (await headers()).get('host');

  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  console.log(`${protocol}://${host}`)
  return `${protocol}://${host}`;
};

  
  export async  function HeaderCard() {

    const fetchData = async () => {
      const path = await relativePath();
      const api = await fetch(`${path}/api/getAllRooms`);
      const result = await api.json();
      return result;
    }

    const result = await fetchData();

    const skeleton = Array.from(['',''].map((_, id) => <LodgeCardSkeleton key={id}/>))
  
    return (
      <>
      {
        result ? (
          <> 
            <LodgeCard 
              data={result[0]}
            />
            <LodgeCard 
              data={result[1]}
            />   
          </>
        ) : (
          {skeleton}
        )
      }
      </>
    )
  }
  
