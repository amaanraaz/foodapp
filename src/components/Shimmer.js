const Shimmer = ()=>{
    return (
        <div className="shimmer-container">
            {Array(20).fill("").map((e,index)=>
                <div className="shimmer-box"></div>
            )}
        </div>
    )
}
export default Shimmer;