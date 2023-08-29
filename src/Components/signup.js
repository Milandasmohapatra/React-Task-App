import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect } from "react";
export default function SignupComponent() {
  

  const Navigate=useNavigate()
  useEffect(()=>{
    Navigate("/login")
  },[])
 
 

  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: 
    yup. object({
      username:yup.string()
              .min(4,"name to short")
              .max(10,"name too long")
              .required("user name required"),

      password: yup.number()
              .required("password required")
              .min(4,"name to short"),
       email: yup.string().email("Invalid email").required("Email is required"),

    mobile: yup
      .string()
      .matches(/^\d{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),        
    
   })
    ,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      // Navigate("/login")
     
      
      
      
      //   axios({
      //     method:"post",
      //     url:"http://localhost/9000/registeruser",
      //     data:values                                       // mam actually my mongodb not working properly
      // })
      // alert("register sucessfully");
      // Navigate("/login");
      // // axios.post("http://localhost:9000/registeruser",values,alert("register sucessfully"),Navigate("/login"));
      
      

    
    
    
}
  });

  return (
    <div className="bg-dark text-white " style={{ border: "7px solid gray", width: "650px", height: "550px", borderRadius: "10px" }}>
      <form onSubmit={formik.handleSubmit}>
        <dl style={{ marginLeft: "140px" }}>
          <h1>
            <span className="bi bi-person-fill bi bi-person-fill text-primary">User Signup</span>
          </h1>
          <dt className="text-info">User Name</dt>
          <dd>
            <input type="text" className="form-control w-75"  placeholder="Name" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
          </dd>  
          <dd className="text-danger">{formik.errors.username}</dd>
           
          <dt className="text-info">Email</dt>
          <dd> 
          <input type="text" className="form-control w-75" placeholder="Email"  name="email"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />
          </dd> 
          <dd className="text-danger">{formik.errors.email}</dd>   
          <dt className="text-info">Mob</dt>   
          <dd>
            <input type="text" className="form-control w-75" placeholder="Mob" name="mobile" onChange={formik.handleChange }  onBlur={formik.handleBlur} value={formik.values.mobile} />
          </dd>
          <dd className="text-danger">{formik.errors.mobile}</dd>   
            
          <dt className="text-info">Password</dt>
          <dd>
            <input  type="password" className="form-control w-75"  placeholder="Password"  name="password" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.password}/>
          </dd> 
          <dd className="text-danger">{formik.errors.password}</dd> 
          <div>
            <Link to="/login" className="btn btn-primary mt-4"> Have Account</Link>
            <button className="btn btn-warning me-2 mt-4 w-25" style={{ marginLeft: "125px" }} type="submit">Signup <span className="bi bi-arrow-right-circle-fill"></span></button>
          </div>
        </dl>
      </form>
    </div>
  );
}