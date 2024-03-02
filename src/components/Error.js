import { Link, useRouteError } from "react-router-dom";
import errImg from "../assets/404.png"

const Error = ()=>{
    const err = useRouteError();
    // console.log(err);
    return(
        <>
        <h1>Some Error Occured</h1>
        <Link to="/">
              <h1 className="mx-10 font-display text-lg font-semibold">Home</h1>
        </Link>
        </>
    )
}

export default Error;