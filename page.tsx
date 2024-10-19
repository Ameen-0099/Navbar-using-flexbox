import Link from "next/link"
export default function Home() {
  return (
    <div>
         <div className="flex justify-evenly bg-black text-white h-10 items-center font-bold">
            <Link className="hover: border-solid hover:border-white hover:border-2" href="" >Home</Link>
            <Link className="hover: border-solid hover:border-white hover:border-2" href="">About</Link>
            <Link className="hover: border-solid hover:border-white hover:border-2" href="">contact us</Link>
            <Link className="hover: border-solid hover:border-white hover:border-2" href="">services</Link>
                 
         </div>

   </div>
  )
}