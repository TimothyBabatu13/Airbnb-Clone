import { LodgeCardType } from "@/app/components/LodgeCard"

type Data = LodgeCardType[]

const generateId = () => crypto.randomUUID()

const DATA = [
    {
        author: 'BO',
        id: generateId(),
        images: ['/11.avif', '/12.avif', '/13.avif', '/14.avif', '/15.avif', '/16.avif'],
        isOutOfStock: true,
        name: 'København, Denmark',
        price: '118'
    },
    {
        author: 'Betrand',
        id: generateId(),
        images: ['/21.avif', '/22.avif', '/23.avif', '/24.avif', '/25.avif', '/26.avif','/27.avif', '/28.webp','/29.webp', '/211.avif', '/222.webp', '/223.webp', '/224.avif', '/225.avif', '/226.avif','/227.avif','/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'London, UK',
        price: '204'
    },
    {
        author: 'Antonella',
        id: generateId(),
        images: ['/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif',],
        isOutOfStock: true,
        name: 'Florence, Italy',
        price: '118'
    },
    {
        author: 'Joerg',
        id: generateId(),
        images: ['/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'Hamburg, Germany',
        price: '118'
    },
]

export const wait = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
}
export const GET = async () : Promise<Response> => {
    const images : string[] = ["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]
    
    const dataToReturn : Data = []
    for (let i = 0; i < 9; i++){
        dataToReturn.push({
            author: 'Lucius',
            id: generateId(),
            images,
            isOutOfStock: true,
            name: 'Train for Gladiator || glory',
            price: '0'
        })
    }
    await wait(5000);
    console.log('coming from api')

    return new Response(JSON.stringify(DATA))
} 