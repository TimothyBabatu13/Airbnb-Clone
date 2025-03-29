'use client';

import LodgeCard, { LodgeCardType } from "@/app/components/LodgeCard";
import { useEffect, useState } from "react";
import { LodgeCardSkeleton } from "./ui/skeleton";

const DATA = [
    {
        author: 'BO',
        id: 'kfakk',
        // id: generateId(),
        images: ['/11.avif', '/12.avif', '/13.avif', '/14.avif', '/15.avif', '/16.avif'],
        isOutOfStock: true,
        name: 'København, Denmark',
        price: '118'
    },
    {
        author: 'Betrand',
        // id: generateId(),
        id: 'jduaus',
        images: ['/21.avif', '/22.avif', '/23.avif', '/24.avif', '/25.avif', '/26.avif','/27.avif', '/28.webp','/29.webp', '/211.avif', '/222.webp', '/223.webp', '/224.avif', '/225.avif', '/226.avif','/227.avif','/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'London, UK',
        price: '204'
    },
    {
        author: 'Antonella',
        // id: generateId(),
        id: 'ueoowe',
        images: ['/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif',],
        isOutOfStock: true,
        name: 'Florence, Italy',
        price: '118'
    },
    {
        author: 'Joerg',
        // id: generateId(),
        id: 'pwieie',
        images: ['/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'Hamburg, Germany',
        price: '118'
    },
  ]
  
  export function HeaderCard() {
    const [data, setData] = useState<LodgeCardType[] | null>(null)
    useEffect(()=> {
      const fetchDataa = async () => {
        const api = await fetch('/api/getAllRooms');
        const res = await api.json();
        setData(res);
      }
      fetchDataa();
    }, [])
  
    const skeleton = Array.from(['',''].map((item, id) => <LodgeCardSkeleton key={id}/>))
    return (
      <>
        {
            data ? 
            (
            <>
                <LodgeCard 
                    data={DATA[0]}
                />
                <LodgeCard 
                    data={DATA[1]}
                />
            </>
            ) : 
            (
                <> 
                    {skeleton}
                </>
            )
        }
        
        
      </>
    )
  }
  
