import { useState } from "react";

const Section = ({title,description,isVisible,setVisible,hide})=>{
    console.log(setVisible)
    // const [isVisible,setIsVisible] = useState();
    return(        
        <div className="mt-2 border border-white">
            <h3 className="text-white">{title}</h3>
            {isVisible?<button className="text-white bg-pink rounded-lg px-2 py-1" onClick={()=>{
                hide("");
            }}>hide</button>:
            <button className="text-white bg-pink rounded-lg px-2 py-1" onClick={()=>{
                setVisible(true);
            }}>show</button>}          
            {isVisible && <p className="text-white">{description}</p> }
        </div>
    )
};

const Accordian = ()=>{
    const [visible,setVisible] = useState("");
    return(
    <div className="h-full">
    <Section 
    title={"Test1"}
    description={
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    }
    isVisible = {visible==="test1"}
    setVisible = {()=>{
        setVisible("test1")
    }}
    hide = {()=>{
        setVisible("");
    }}
    />
    <Section 
    title={"Test2"}
    description={
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    }
    isVisible = {visible==="test2"}
    setVisible = {()=>{
        setVisible("test2")
    }}
    hide = {()=>{
        setVisible("");
    }}
    />
    <Section 
    title={"Test3"}
    description={
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    }
    isVisible = {visible==="test3"}
    setVisible = {()=>{
        setVisible("test3")
    }}
    hide = {()=>{
        setVisible("");
    }}
    />
    </div>
    )
};
export default Accordian;