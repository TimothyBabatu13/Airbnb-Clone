'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface RouteContextType {
    path: string | null
}

const RouteContext = createContext<null | RouteContextType>(null);

const RouteObserver = ({ children } : {
    children: React.ReactNode
}) => {

    const [route, setRoute] = useState<null | string>(null);
    const path = usePathname();
    const params = useSearchParams();
    const param = params.get('type');
    
    const computeRoute = () : string => {
        if(!param) return path;
        return `/type${param}`
    }

    useEffect(()=>{
        setRoute(computeRoute());
    }, [path, param])

  return (
    <RouteContext.Provider
        value={{path: route}}
    >
        {children}
    </RouteContext.Provider>
  )
}

export const useRouteObserver = () => {
    const context = useContext(RouteContext);
    if(!context) return;
    return context;
}

export default RouteObserver;