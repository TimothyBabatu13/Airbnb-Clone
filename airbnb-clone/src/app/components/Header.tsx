import Link from "next/link"
import { LogoWithText } from "./Icons"
import HeaderCenter from "./HeaderCenter"
import HeaderRight from "./HeaderRight"

const Header = () => {
  return (
    <header className="hidden md:flex py-5 items-center justify-between">
        <Link href={'/'}>
            <LogoWithText className=" bg-white text-[#FF385C]"/>
        </Link>
        <HeaderCenter />
        <HeaderRight />
    </header>
  )
}

export default Header