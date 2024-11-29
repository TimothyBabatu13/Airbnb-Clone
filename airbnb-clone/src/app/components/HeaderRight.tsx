import Link from "next/link"
import { EarthIcon } from "./Icons"

const HeaderRight = () => {
  return (
    <div className="flex items-center">
        <Link href={'/home'}>
            <span>Airbnb your home</span>
        </Link>
        <button>
           <EarthIcon />
        </button>
    </div>
  )
}

export default HeaderRight