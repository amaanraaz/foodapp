const Shimmer = ()=>{
    return (
        <div className="shimmer-container">
            {Array(20).fill("").map((e)=>
                <div className="shimmer-box"></div>
            )}
        </div>
    )
}
export default Shimmer;