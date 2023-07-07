import React from 'react'

const ShimmerMenu = () => {
  return (
    <div className='flex justify-between'>
        <div className='m-10'>
            <div className="w-52 h-10 border bg-gray-300 mt-2 animate-pulse " ></div>
            <div className="w-64 h-7 border bg-gray-300 mt-2 animate-pulse " ></div>
            <div className="w-96 h-80 border border-red-700 border-spacing-96 bg-white mx-5 my-3 p-2 animate-pulse flex justify-center flex-col">
            <div className="w-80+w-8 h-72 border bg-gray-400 animate-pulse "></div>
        </div>
        </div>
        <div className="flex flex-col justify-center flex-wrap mt-20 mr-12">
            {Array(5).fill("").map((e,index)=>
                <div className="w-96 h-56 border border-red-700 border-spacing-96 bg-white mx-5 my-3 p-2 animate-pulse flex justify-center flex-col" key={index}>
                    <div className="w-64+w-8 h-48 border bg-gray-400 animate-pulse "></div>
                    <div className="w-64+w-8 h-4 border bg-gray-400 mt-2 animate-pulse " ></div>
                    <div className="w-64+w-8 h-3 border bg-gray-400 mt-2 animate-pulse " ></div>
                </div>
            )}
        </div>
        
    </div>

  )
}

export default ShimmerMenu;