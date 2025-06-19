import LodgeCard from "@/app/components/LodgeCard";
import { LodgeCardSkeleton } from "./ui/skeleton";
import { headers } from "next/headers";

export const relativePath = async () => {
  const host = (await headers()).get('host') || 'localhost:3000';
  const isLocal = host.includes('localhost') || host.startsWith('127.');
  const protocol = isLocal ? 'http' : 'https';
  return `${protocol}://${host}`;
};

export async function HeaderCard() {
  const path = await relativePath();

  const fetchData = async () => {
    try {
      console.log(path)
      const api = await fetch(`${path}/api/getAllRooms`, { cache: 'no-store' });
      const result = await api.json();
      return result
    } 
    catch (err) {
      console.error("Fetch failed:", err);
    }
  }
  
  const result = await fetchData();
  console.log(result, 'lets see if it goes through')
  const skeleton = Array.from(['', ''].map((_, id) => <LodgeCardSkeleton key={id} />));
  console.log(result)

  return (
    <>
      {result ? (
        <>
          <LodgeCard data={result[0]} />
          <LodgeCard data={result[1]} />
        </>
      ) : (
        skeleton
      )}
    </>
  );
}
