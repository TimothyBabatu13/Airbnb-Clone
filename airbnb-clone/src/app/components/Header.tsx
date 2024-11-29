import Link from "next/link"
import { LogoWithText } from "./Icons"
import HeaderCenter from "./HeaderCenter"
import HeaderRight from "./HeaderRight"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
        <Link href={'/'}>
            <LogoWithText className=" bg-white text-[#FF385C]"/>
        </Link>
        <HeaderCenter />
        <HeaderRight />
    </header>
  )
}

export default Header