
import Link from "next/link";
import InputSearch from "./InputSearch";
import UserButonAction from "./UserButonAction";
import ThemeButton from "./ThemeButton";


const Navbar = () => {
   const style = {
      default: "shadow-lg w-full bg-color-primary dark:bg-color-dark dark:border-b-2 dark:border-color-borderColor py-3 sticky top-0 z-20 ",
      active: "shadow w-full bg-color-accent py-3 sticky top-0 z-20 "
   };

   return (
      <header className={style.default} >
         <nav className="max-w-6xl px-5 lg:px-3 mx-auto flex flex-col gap-y-2 sm:justify-between sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
               <div className="flex justify-between items-center">
                  <Link href={"/"} className="text-xl md:text-2xl font-bold w-fit  text-color-accent dark:text-color-primary">
                     AinimeList
                  </Link>
                  <ThemeButton isMobile={true} />
               </div>
               <InputSearch />
               <ThemeButton />
            </div>
            <UserButonAction />
         </nav>
      </header>
   )
}

export default Navbar