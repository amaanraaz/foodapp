import user from "../assets/About Us.png"
const About = ()=>{
    return(
    <div className="h-full flex justify-around mt-8">
        <div>
            <h1 className="text-gray-300 text-3xl mt-4 font-display">Hey there,<br></br> <span className="bg-pink text-gray-800 font-bold">Welcome to About section</span></h1>
            <p className="mt-8 text-gray-300 text-lg font-display">App inspired by frontend section of Swiggy and made as part of learning and 
                practicing the concept of ReactJs.
                <br></br>
                <span className="text-violet text-2xl">Project done by Aman Raj</span><br></br>
                <a href="https://www.linkedin.com/in/aman-razz/" className="text-blue-600 mt-8" target="__blank">Linkedin     </a>
                <a href="https://github.com/amaanraaz" className="text-blue-600 mt-10" target="__blank">GitHub</a>
            </p>
        </div>
        <div>
            <img src={user} className="w-4/6"></img>
        </div>
    </div>);
}

export default About;