import Link from "next/link"
import { EarthIcon, NavIcon, UserIcon } from "./Icons"
import { DropdownMenuDemo } from "./User"


const HeaderRight = () => {
  return (
    <div className="flex items-center">
        <div className="flex items-center mr-2">
          <Link className="p-3" href={'/home'}>
              <span>Airbnb your home</span>
          </Link>
          <button>
            <EarthIcon />
          </button>
        </div>
        <DropdownMenuDemo />
    </div>
  )
}

export default HeaderRight