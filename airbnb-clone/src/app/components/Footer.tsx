'use client';

import { Globe } from "lucide-react";
import { useState } from "react";
import { FacebookIcon, TwitterIcon } from "./Icons";

const heading = ['Popular', 'Arts & culture', 'Outdoors', 'Mountains', 'Beach', 'Unique stays', 'Categories', 'Things to do', 'Travel tips & inspiration', 'Airbnb-friendly apartments'];
const lists = [
  {
    type: 'Popular',
    elements: [
      {heading: 'Canmore', other: 'Pet-friendly rentals'},
      {heading: 'Banalmadena', other: 'Beach house rentals'},
      {heading: 'Marbella', other: 'Apartment rentals'},
      {heading: 'Mijas', other: 'House rentals'},
      {heading: 'Prescott', other: 'Cabin rentals'},
      {heading: 'Scottsdale', other: 'House rentals'},
      {heading: 'Banalmadena', other: 'Beach house rentals'},
      {heading: 'Tucson', other: 'Apartment rentals'},
      {heading: 'Jaspar', other: 'Cabin rentals'},
      {heading: 'Mountain View', other: 'Family-friendly rentals'},
      {heading: 'Devonport', other: 'Cottage rentals'},
      {heading: 'Mallacoota', other: 'Beach house rentals'},
      {heading: 'Ibiza', other: 'Vacation rentals'},
      {heading: 'Anaheim', other: 'House rentals'},
      {heading: 'Monterey', other: 'Cottage rentals'},
      {heading: 'Paso Robles', other: 'Cottage rentals'},
      {heading: 'Banalmadena', other: 'Beach house rentals'},
      {heading: 'Santa Barbara', other: 'Condo rentals'},
      {heading: 'Sonoma', other: 'House rentals'},
      {heading: 'Le Serena', other: 'Beachfront rentals'},
    ]
  },
  {
    type: 'Arts & culture',
    elements: [
      // {heading: 'Canmore', other: 'Pet-friendly rentals'},
      // {heading: 'Banalmadena', other: 'Beach house rentals'},
      // {heading: 'Marbella', other: 'Apartment rentals'},
      // {heading: 'Mijas', other: 'House rentals'},
      // {heading: 'Prescott', other: 'Cabin rentals'},
      // {heading: 'Scottsdale', other: 'House rentals'},
      // {heading: 'Banalmadena', other: 'Beach house rentals'},
      // {heading: 'Tucson', other: 'Apartment rentals'},
      // {heading: 'Jaspar', other: 'Cabin rentals'},
      // {heading: 'Mountain View', other: 'Family-friendly rentals'},
      // {heading: 'Devonport', other: 'Cottage rentals'},
      // {heading: 'Mallacoota', other: 'Beach house rentals'},
      // {heading: 'Ibiza', other: 'Vacation rentals'},
      // {heading: 'Anaheim', other: 'House rentals'},
      // {heading: 'Monterey', other: 'Cottage rentals'},
      // {heading: 'Paso Robles', other: 'Cottage rentals'},
      // {heading: 'Banalmadena', other: 'Beach house rentals'},
      // {heading: 'Santa Barbara', other: 'Condo rentals'},
      // {heading: 'Sonoma', other: 'House rentals'},
      // {heading: 'Le Serena', other: 'Beachfront rentals'},
    ]
  }
]

const FooterLinks = [
  {
    heading: 'Support',
    items: [
      'Help Center', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighbourhood concern'
    ]
  },
  {
    heading: 'Hosting',
    items: [
      'Airbnb your home', 'AirCover for Hosts', 'Hositng resources', 'Community forum', 'Hosting responsibly', 'Airbnb-friendly apartments', 'Join a free Hosting class', 'Find a co-host'
    ]
  },
  {
    heading: 'Airbnb',
    items: [
      'Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards', 'Airbnb.org emergency stays'
    ]
  }
]
const Footer = () => {
  const [active, setActive] = useState<string>('Popular')
  const listsOfData = lists.filter(list => list.type === active).map(list => list.elements); 
  // console.log(listsOfData)

  return (
    <footer >
        <div style={{background:'rgba(0,0,0,0)'}} className="py-12 border-b">
          <h4 className="mb-2 text-[22px]">Inspiration for future getaways</h4>
          <div 
            className="flex gap-0 border-b"
            style={{borderBottomColor: 'rgb(34, 34, 34)'}}
          >
            {
              heading.map(((headingText, id) => (
                <div 
                  key={id}
                  className={`p-2.5 cursor-pointer ${active === headingText && 'border-b-2'}`}
                  style={{borderBottomColor: 'rgb(34, 34, 34)'}}
                  onClick={()=>setActive(headingText)}
                >
                  {headingText}
                </div>
              )))
            }
          </div>
          <div className="grid grid-cols-6 mt-8 gap-6">
            {listsOfData.map((item) => (
              item.map((i) => (
                <div key={crypto.randomUUID()}>
                  <div className="text-sm">{i.heading}</div>
                  <div className="text-sm text-[#6A6A6A] font-normal">{i.other}</div>
                </div>
              ))
            ))}
          </div>
        </div>
        <div className="py-12 grid grid-cols-3 border-b">
          {
            FooterLinks.map((link) => (
              <div key={crypto.randomUUID()}>
                <h6 
                  className="mb-3 font-semibold"
                >{link.heading}</h6>
                <ul className="grid gap-3 font-normal">
                  {
                    link.items.map(item =>(
                      <li 
                        key={crypto.randomUUID()}
                        className=" list-none cursor-pointer hover:underline"
                      >{item}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="py-12 grid place-items-center">
          <div>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex items-center ">
                <div className="mr-6 flex items-center">
                  <Globe className="mr-2"/>
                  <h6>English (US)</h6>
                </div>
                <h4>NGN</h4>
              </div>
              <div className="flex items-center gap-4">
                <FacebookIcon />
                <TwitterIcon />
                
              </div>
            </div>
            <div className="text-center mb-[2px]">&copy; {new Date().getFullYear()} Airbnb, inc.</div>
            <div className="text-center">
              <ul className=" list-none flex items-center">
                <li className="cursor-pointer hover:underline">Terms</li> <span className="p-[5px]">·</span>
                <li className="cursor-pointer hover:underline">Sitemap</li> <span className="p-[5px]">·</span>
                <li className="cursor-pointer hover:underline">Privacy</li> <span className="p-[5px]">·</span>
                <li className="cursor-pointer hover:underline">Your privacy choices</li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer