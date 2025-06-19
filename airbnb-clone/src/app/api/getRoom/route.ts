// import { wait } from "@/lib/utils";


export interface dataToSendType {
        name: string,
        images: string[],
        location: string,
        postedBy: { 
            image: string,
            name: string,
            nickname: string,
        },
        details: string
}

const DATA = [
    {
        author: 'BO',
        id: 'a',
        images: ['/11.avif', '/12.avif', '/13.avif', '/14.avif', '/15.avif', '/16.avif'],
        isOutOfStock: true,
        name: 'København, Denmark',
        price: '118',
        postedBy: {
            image: '/gladiator.jpeg',
            name: 'Lucius',
            nickname: 'Gladiator'
        },
        details: "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n ",
        location: 'Rome, Italy',
    },
    {
        author: 'Betrand',
        id: 'aa',
        images: ['/21.avif', '/22.avif', '/23.avif', '/24.avif', '/25.avif', '/26.avif','/27.avif', '/28.webp','/29.webp', '/211.avif', '/222.webp', '/223.webp', '/224.avif', '/225.avif', '/226.avif','/227.avif','/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'London, UK',
        price: '204',
        location: 'Rome, Italy',
        postedBy: {
            image: '/gladiator.jpeg',
            name: 'Lucius',
            nickname: 'Gladiator'
        },
        details: "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n ",
    },
    {
        author: 'Antonella',
        id: 'generateId()',
        images: ['/228.avif','/229.avif','/2221.avif','/2222.avif','/2223.avif','/2224.avif','/2225.avif','/2226.avif','/2227.avif',],
        isOutOfStock: true,
        name: 'Florence, Italy',
        price: '118',
        postedBy: {
            image: '/gladiator.jpeg',
            name: 'Lucius',
            nickname: 'Gladiator'
        },
        details: "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n ",
        location: 'Rome, Italy',
    },
    {
        author: 'Joerg',
        id: 'generateId().',
        images: ['/2226.avif','/2227.avif','/2228.avif','/2229.avif','/22221.avif', '/222222.avif'],
        isOutOfStock: true,
        name: 'Hamburg, Germany',
        price: '118',
        postedBy: {
            image: '/gladiator.jpeg',
            name: 'Lucius',
            nickname: 'Gladiator'
        },
        details: "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n ",
        location: 'Rome, Italy',
    },
]

// const dataToSend = {
//     name: "Train for Gladiator || glory",
//     images: ['/first_1.jpeg','/first_2.jpeg','/first_3.jpeg','/first_4.jpeg','/first_1.jpeg'],
//     location: 'Rome, Italy',
//     postedBy: {
//         image: '/gladiator.jpeg',
//         name: 'Lucius',
//         nickname: 'Gladiator'
//     },
//     details: "It is a new and luxurious property with an outdoor private pool and surrounding garden with breath taking views of the Atlantic, within walking distance of the spectacular waterfall Cascata dos Anjos. \n The energy around you allows you to let your mind walk away from the worries of daily life and welcomes you to simply enjoy the moment, sorrounded by Nature and with the ocean at your feet. \n The space \n The villa consists of: 4 bedrooms, 3 of which are located in the main house and 1 in the annex above , 4 bathrooms each serve their own bedroom and a  BBQ area ideal for outdoor dining . A fully equipped kitchen, an elegant and spacious living and dining room and a lovely terrace . The whole villa is fascinating, providing a wonderful setting for the most unforgettable vacation. \n Whether it is having an outdoor meal, enjoying a drink on the terrace contemplating the amazing sunset, relaxing by the pool or simply enjoying the living room area, Anjos Paradise Eden is the villa for you, and we are available to help you with all that you may need , to make this your best vacation ever. \n Other things to note \n Thursdays are garden maintenance days and the gardener will walk around the area and sometimes cut the grass \n "
// }

export const POST = async (body: Request) : Promise<Response> => {
    const id = await body.json();
    
    const dataToSend = DATA.filter(data => data.id === id)[0];
    // await wait(5000)
    return new Response(JSON.stringify(dataToSend))
}