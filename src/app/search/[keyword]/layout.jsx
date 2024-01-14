import Header from "@/components/AnimeList/Header"

const SearchLayout = async ({ children, params }) => {
   const keyword = params.keyword;
   const decodedKeyword = decodeURI(keyword);

   return (
      <main className="max-w-6xl mx-auto min-h-screen">
         <section className="max-w-6xl mx-auto p-5 lg:p-4 ">
            <Header text={`Search Anime ${decodedKeyword}...`} />
            {children}
         </section>
      </main>
   )
}

export default SearchLayout