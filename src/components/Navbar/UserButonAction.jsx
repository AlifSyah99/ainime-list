
import Link from "next/link"
import { getUserSession } from "@/libs/auth-libs";


const UserButonAction = async () => {
   const user = await getUserSession();

   const route = user ? "/api/auth/signout" : "/api/auth/signin";
   const label = user ? "Sign Out" : "Sign In";


   return (
      <div className=" flex items-center">
         {user ?
            <Link className="mx-2 text-md hover:text-color-accent dark:hover:text-slate-200  transition-all font-semibold dark:text-color-primary"
               href="/user/dashboard">
               Dashboard
            </Link>
            :
            null
         }
         <Link href={route} className="px-3 py-2 md:px-4 ms-auto sm:ms-0 inline-block text-[12px] md:text-md bg-color-accent dark:bg-color-darkSecondary dark:hover:bg-color-darkSecondary/70 text-color-primary rounded-lg hover:bg-color-accent/80  ">
            {label}
         </Link>
      </div>
   )
}

export default UserButonAction