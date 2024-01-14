import { MdStarRate } from "react-icons/md";
// import { MdLeaderboard } from "react-icons/md";
import ItemRate from "./ItemRate";

const Rates = ({ anime, isMobile }) => {
   const style = {
      desktop: "gap-x-2 md:flex hidden ",
      mobile: "px-2 gap-x-3 flex md:hidden pt-2",
   }
   return (
      <div className={isMobile ? style.mobile : style.desktop}>
         <ItemRate title={`MAL Rating`}
         >
            <MdStarRate className={`text-yellow-500 text-lg md:text-xl`} />
            <h3 className=" text-md md:text-lg font-bold dark:text-color-secondary">
               {anime.data?.score ? anime.data.score : "N/a"}
               <span className="text-sm md:text-md font-medium dark:text-color-secondary">/10</span>
            </h3>
         </ItemRate>

         <ItemRate title={`Rank MAL`}
         >
            <h3 className="text-sm md:text-xl font-bold w-full dark:text-color-secondary text-center">
               {anime.data?.rank ? anime.data.rank : "N/a"}
            </h3>
         </ItemRate>
         <ItemRate title={`Episodes`}
         >
            {/* <MdStarRate className={`text-yellow-500 text-2xl`} /> */}
            <h3 className="text-sm md:text-xl dark:text-color-secondary w-full font-bold text-center">
               {anime.data?.episodes ? anime.data.episodes : "N/a"}
            </h3>
         </ItemRate>
      </div>
   )
}

export default Rates