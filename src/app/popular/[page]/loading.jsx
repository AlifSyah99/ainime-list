import Pagination from "@/components/Utilities/Pagination";

const Loading = () => {

  const size = 10;
  const skeleton = Array(size).fill(null);
  return (
    <>
      <Pagination page={"..."} lastPage={"..."} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {skeleton.map((s, i) => {
          return (
            <div key={i} className="bg-gray-500 relative shadow h-[250px] rounded-xl "></div>
          )
        })}
      </div >
    </>
  )
}

export default Loading