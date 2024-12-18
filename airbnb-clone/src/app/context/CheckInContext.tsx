'use client';

import { createContext, use } from "react";

const Context = createContext(null);

const CheckInContext = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <Context.Provider value={null}>
        {children}
    </Context.Provider>
  )
}

export const useCheckInProvider = () => {
    const context = use(Context);
    if(context === null) return
    return context
}
export default CheckInContext