import Image from "next/legacy/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)


  return (
    <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image onClick={()=> router.push('/')} src="https://links.papareact.com/f90" 
                width={150}
                height={40} 
                objectFit="contain"
                className="cursor-pointer"/>
            </div>
            <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow rounded-md flex-shrink focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>
            <div  className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="link">
                    <p>
                        {session ? `Hello ${session.user.name}` : 'Sign in' }
                    </p>
                    <p className="font-extrabold md:text-sm">Account lists</p>
                </div>
                <div onClick={() => router.push("/orders")} className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm"> & Orders</p>
                </div>
                <div onClick={()=> router.push('/checkout')} className="relative flex items-center link">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold">{items.length}</span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                </div>
            </div>
        </div>

        <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-m p-2">
            <p className="link flex items-center">
                <MenuIcon className="h-8 mr-1"/>
               All 
            </p>
            <p onClick={() => router.push("http://google.com")} className="link">Google.com  | </p>
            <p onClick={() => router.push("https://netflix-adam.web.app")} className="link"> Netflix Version  | </p>
            <p className="link">Amazon Business  |</p>
            <p className="link hidden lg:inline-flex"> Electronics  |</p>
            <p className="link hidden lg:inline-flex"> Food & Groceries  |</p>
            <p className="link hidden lg:inline-flex"> Prime  | </p>
            <p className="link hidden lg:inline-flex"> Buy again  | </p>
            <p className="link hidden lg:inline-flex"> Shopper Toolkit  | </p>
            <p className="link hidden lg:inline-flex"> Health & Personal Care  |</p>
        </div>
        
    </header>
  )
}

export default Header