const Shimmer = ()=>{
    return (
        <div className="flex justify-center flex-wrap mt-10">
            {Array(20).fill("").map((e,index)=>
                <div className="w-72 h-72 border border-red-700 border-spacing-96 bg-white mx-5 my-3 p-2 animate-pulse flex justify-center flex-col" key={index}>
                    <div className="w-64+w-8 h-48 border bg-gray-400 animate-pulse "></div>
                    <div className="w-64+w-8 h-4 border bg-gray-400 mt-2 animate-pulse " ></div>
                    <div className="w-64+w-8 h-3 border bg-gray-400 mt-2 animate-pulse " ></div>
                </div>
            )}
        </div>
    )
}
export default Shimmer;