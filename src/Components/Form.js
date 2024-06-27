import { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Contextform";
function Form(){
 const [formData, setFormData] = useState({
      firstname: "",
      secondname: "",
      email: "",
      password: "",
      phone: "",
      cpassword: "",
      userid:""
    });
     const [errors, seterrors]= useState({});
     const { addUser,selectedUser,isModalOpen,updateUser,setModalOpen } = useContext(UserContext);
     const[data,newdata]=useState({
        firstname: "",
      secondname: "",
      email: "",
      password: "",
      phone: "",
      cpassword: "",
      userid:""
     });
    
//
     useEffect(() => {
        newdata(selectedUser);
      }, [selectedUser]);
//

     function handlechange(e){
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
          }));
     };
     const validate=()=>{
        const errors={};
        if (!formData.firstname ) errors.firstname = 'Firstname is required';
        if (!formData.secondname) errors.secondname = 'Lastname is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';

        if (!formData.phone) errors.phone = 'Phone number is required';
        else if (! /^\d{11}$/.test(formData.phone)) errors.phone = 'Phone number must be 11 digits';
         if (!formData.cpassword) errors.cpassword = 'confrim Password is required';
         if (formData.password !== formData.cpassword) errors.cpassword = 'Passwords must match';
     return errors;
     }
     function handlesubmit(e){
        e.preventDefault();
        const validationform=validate();
        if(Object.keys(validationform).length === 0){
               console.log("form submit");
               addUser(formData);
              
        }else{
            seterrors(validationform); 
        }
     
    }
    function changedata(e){
        const {id,  value } = e.target;
        console.log(value);
        newdata((prevData) => ({
            ...prevData,
            [id]: value
          }));
    } 
   const handleSaveUser = (e) => {
    e.preventDefault();
    updateUser(data);
    setModalOpen(false);
    
  };
 return(
        <div className="bg-gradient-to-r from-green-600 to-blue-900 h-screen flex justify-center items-center">
        <div className="grid grid-cols-2  w-[60rem]  shadow-2xl">
            <div className="p-16 mr-20 mt-40 border-black">
                <h1 className="text-4xl font-bold text-white ">Logo</h1>
                <p className="text-white text-sm text-justify pt-8 pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mt-7 ml-[10rem] px-4 mb-3 py-3"><Link to="/Data">User Data</Link></button>
            </div>
            <div className="bg-white">
                <h2 className="text-2xl font-bold ml-[12rem] pt-5">SIGN UP</h2>
                <form onSubmit={handlesubmit} >
                <div>
                {isModalOpen? (<input type="text" id="firstname" onChange={changedata}  value={data? data.firstname : ""}
                className="mt-5 w-[25rem] ml-7 p-2 border rounded-md" />)
                 :
                 (<><input type="text" id="firstname" onChange={handlechange} value={formData.firstname}
                placeholder="Firstname" className="mt-5 w-[25rem] ml-7 p-2 border rounded-md" />
                 {errors.firstname && ( <p className="text-red-500 ml-10">{errors.firstname}</p>)}
                 </>)
                 }
                </div>
                 <div>
                {isModalOpen ? (<input type="text" id="secondname" onChange={changedata}  value={data? data.secondname : ""}  className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />) 
                : (<><input type="text" id="secondname" onChange={handlechange} value={formData.secondname} placeholder="Lastname" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                {errors.secondname && ( <p className="text-red-500 ml-10">{errors.secondname}</p>)}
                </>)}
                </div>
                <div>{ isModalOpen ? <input type="email" id="email" onChange={changedata}  value={data? data.email : ""}  className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                :
                (<><input type="email" id="email" onChange={handlechange} value={formData.email} placeholder="Email" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                    {errors.email && ( <p className="text-red-500 ml-10">{errors.email}</p>)}</>)
                }
                </div>
                <div>{isModalOpen ?  <input type="number" id="phone" onChange={changedata}  value={data? data.phone : ""}  className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                :
                (<><input type="number" id="phone" onChange={handlechange} value={formData.phone} placeholder="Phone" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                    {errors.phone && ( <p className="text-red-500 ml-10">{errors.phone}</p>)} </>)
                }
                </div>
                <div>{isModalOpen ?  <input type="text" id="password" onChange={changedata}  value={data? data.password: ""}  className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                 :
                (<><input type="text" id="password" onChange={handlechange} value={formData.password} placeholder="password" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                    {errors.password && ( <p className="text-red-500 ml-10">{errors.password}</p>)} </>)
                    }
                </div>
                <div>{isModalOpen ?  <input type="text" id="cpassword" onChange={changedata}  value={data? data.password: ""} placeholder="Confirm password" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                : 
                (<><input type="text" id="cpassword" onChange={handlechange} value={formData.cpassword} placeholder="Confirm password" className="mt-7 w-[25rem] ml-7 p-2 border rounded-md" />
                    {errors.cpassword && ( <p className="text-red-500 ml-10">{errors.cpassword}</p>)}</>)
                }  
                </div>
                <button type="submit" className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg mt-8 ml-[11rem] px-8 mb-3"><Link  type="submit" > Register</Link></button>
                {isModalOpen && <button onClick={handleSaveUser} className="bg-green-700 ml-5 p-2 rounded-lg px-5"><Link  to="/Data">Save</Link></button>}
                </form>
            </div>
        </div>
        </div>
    )
    }
    export default Form;
