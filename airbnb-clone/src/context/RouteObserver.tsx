'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  Suspense,
  useCallback,
} from 'react'

interface RouteContextType {
  path: string | null
}

const RouteContext = createContext<null | RouteContextType>(null)

const InnerObserver = () => {
  const [route, setRoute] = useState<null | string>(null)
  const path = usePathname()
  const params = useSearchParams()
  const param = params.get('type')

  const computeRoute = useCallback((): string => {
    if (!param) return path
    return `/?type=${param}`
  }, [])

  useEffect(() => {
    setRoute(computeRoute())
  }, [path, param, computeRoute])

  return (
    <RouteContext.Provider value={{ path: route }} />
  )
}

const RouteObserver = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={null}>
      <InnerObserver />
      {children}
    </Suspense>
  )
}

export const useRouteObserver = () => {
  const context = useContext(RouteContext)
  if (!context) return
  return context
}

export default RouteObserver
