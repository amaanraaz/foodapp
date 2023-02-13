import { useRouteError } from "react-router-dom";
import errImg from "../assets/404.png"

const Error = ()=>{
    const err = useRouteError();
    // console.log(err);
    return(
        <>
        <h1>Some Error Occured</h1>
        <h2>{err.status + " : " + err.statusText} </h2>
        <img src={errImg} alt="errimg" />
        </>
    )
}

export default Error;