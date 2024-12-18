'use client'

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function CalendarDemo({ ...props }) {
  return (
    <Calendar
      mode="single"
      className=""
      {...props}
    />
  )
}


const CheckInDate = () => {
    const newDate = new Date()
    const [date, setDate] = useState<Date | undefined>(newDate)
   
    const PreviousMonth = (date: Date) => {
        let month = date.getMonth();
        let year = date.getFullYear();
        if(month === 0) {
            month = 11
            year -= 1
        }
        else {
            month -= month
        }
        return new Date(year, month, newDate.getDay())
    }
    const NextMonth = (date: Date) => {
        let month = date.getMonth();
        let year = date.getFullYear();
        if(month === 11) {
            month = 0
            year += 1
        }
        else {
            month += month
        }
        return new Date(year, month, newDate.getDay())
    }
    
    const [dateChanged, setDateChanged] = useState(NextMonth(newDate))

    const handleNextMonth = () => {
        setDateChanged(prev => NextMonth(prev))
        setDate(prev =>{
            if(prev) return  NextMonth(prev)
        })
    }
    console.log(date)
    const handlePreviousMonth = () => {
        setDateChanged(prev => PreviousMonth(prev))
    }
   
  return (
    <div className="py-12 border-b">
        <h5 className="text-[22px] font-medium">Select check-in date</h5>
        <h6 className="mt-2 font-normal text-[0.875rem]">Minimum stay: 5 nights</h6>
        <div className="flex">
            <CalendarDemo 
                onMonthChange={handlePreviousMonth}
                // fromDate={new Date('Sun Jun 01 2025 00:00:00 GMT+0100 (British Summer Time)')} 
                selected={date}
                onSelect={setDate}
                showOutsideDays={false}
                classNames={{
                    nav_button_next: 'hidden'
                  }}
            />
            <CalendarDemo 
                // selected={new Date('Sat Mar 01 2025 00:00:00 GMT+0000 (Greenwich Mean Time)')}
                showOutsideDays={false}
                onMonthChange={handleNextMonth}
                fromDate={new Date(dateChanged)}
                classNames={{
                    nav_button_previous: 'hidden'
                  }}
                  selected={new Date(dateChanged)}
            />
        </div>
    </div>
  )
}

export default CheckInDate