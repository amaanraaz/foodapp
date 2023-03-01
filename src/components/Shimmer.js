const Shimmer = ()=>{
    return (
        <div className="flex justify-center flex-wrap mt-10">
            {Array(20).fill("").map((e,index)=>
                <div className="w-72 h-72 bg-gray-300 m-5 animate-pulse" key={index}></div>
            )}
        </div>
    )
}
export default Shimmer;