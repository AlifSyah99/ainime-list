import Header from "@/components/AnimeList/Header"
import Pagination from "@/components/Utilities/Pagination"

const PopularLayout = async ({ children, params }) => {
   const { page } = params;
   return (
      <main className="py-4 min-h-screen">
         <section className="max-w-6xl mx-auto p-5 lg:p-4 ">
            <Header text={`Paling  Popular`} />
            {children}
         </section>
      </main>
   )
}

export default PopularLayout