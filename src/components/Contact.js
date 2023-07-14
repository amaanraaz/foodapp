import { useFormik } from "formik";
import emailjs from '@emailjs/browser';

const Contact = ()=>{
    const initialValues = {
        name: "",
        email: "",
        desc: "",
    };

    const{values,handleChange,handleSubmit} = useFormik({
        initialValues,
        onSubmit:(values)=>{
            emailjs.send('service_qip6ul8','template_t0ckazb',values,'0BMdAhJYaMTI7uU6V').then(()=>{
            alert("email sent")
           });
        },
    });
    return(
        <div className="h-full flex content-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-pink mt-10 mb-10 p-3" >
                <div className="mt-20 flex justify-around">
                <label htmlFor="name" className="text-white font-display">Name : </label>
                <input id="name" name="name" type="text"  value={values.name} onChange={handleChange} className="outline-pink text-black font-display"  />
                </div>
                <div className="mt-10 flex justify-between">
                <label htmlFor="email" className="text-white font-display" >Email : </label>
                <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className="outline-pink text-black font-display"/>
                </div>
                <div className="mt-10 flex  flex-col justify-between">
                <label htmlFor="desc" className="text-white font-display" >Message :</label>
                <textarea id="desc" name="desc" type="textarea" value={values.desc} onChange={handleChange} className="h-30 outline-pink text-black font-display" />
                </div>
                <div className="mt-10 flex justify-between content-center bg-gray-700 rounded-md">
                <button type="submit" className="text-white font-display text-sm p-2">Click here to send details</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;