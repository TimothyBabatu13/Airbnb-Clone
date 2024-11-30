import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { NavIcon, UserIcon } from "./Icons"
import Link from "next/link"
  
  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="flex items-center border border-[#DDDDDD] bg-[#FFFFFF] rounded-[30px] py-2 px-[14px] hover:shadow">
          <span className="mr-[14px]">
            <NavIcon />
          </span>
          <span>
            <UserIcon className="h-8 w-8" />
          </span>
        </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            
            <DropdownMenuItem asChild>
             <Link href={'/sign-up'}>Sign up</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
             <Link href={'/sign-in'}>Log in</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
             <Link href={'/sign-in'}>Gift cards</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
             <Link href={'/sign-in'}>Airbnb your home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
             <Link href={'/sign-in'}>Host an experience</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
             <Link href={'/sign-in'}>Help Center</Link>
            </DropdownMenuItem>

          </DropdownMenuGroup>

          
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  