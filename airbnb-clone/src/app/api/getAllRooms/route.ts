import { LodgeCardType } from "@/app/components/LodgeCard"

type Data = LodgeCardType[]

export const wait = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
}
export const GET = async () : Promise<Response> => {
    const images : string[] = ["/first_1.jpeg", "/first_2.jpeg", "/first_3.jpeg", "/first_4.jpeg"]
    const generateId = () => crypto.randomUUID()
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

    return new Response(JSON.stringify(dataToReturn))
} 