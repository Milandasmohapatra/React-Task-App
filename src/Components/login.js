// import { useFormik } from "formik";
// import * as yup from"yup";
// // import { useState } from "react";
// // import { useEffect } from "react";
// // import axios from "axios";
// import { Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";






export default function LoginComponent(){
    const Navigate=useNavigate();
    function loginclick(){
        fetch('../user.json')                       //data fetch from here("user.json") -// (" username":"milan","password":"milan@12")
                .then(response=> response.json())
                .then(users=> {
                   
                   for(var user of users){
                       var username=document.getElementById("Myinput").value;
                       var password=document.getElementById("Mypassword").value;
                       if(user.username==username && user.password==password){
                              alert("login sucess")
                             
                              Navigate("/home");
                              
                              break;      
                       }
                      
                       if(!username && !password){
                           alert("provide your details")
                           return;
                       }
                       else {
                           alert("invalid user");
                           Navigate("/login")
                           return;
                            };
             }});


                    // app.get("/getusers", (req, res)=>{
                    //     console.log("milan")
                    //     mongoClient.connect(connectionString,(err, clientObj)=>{
                    //         if(!err){
                    //             var database = clientObj.db("users");
                    //             database.collection("allusers").find({}).toArray((err, documents)=>{
                    //                 if(!err) {                                                              // mam actually my mongodb not working properly
                    //                     res.send.end(documents);
                    //                 }
                    //             })
                    //         }
                    //     })
                    // });

    }
   
    function Tosignup(){
        Navigate("/signup")
    }
    
                
               
    
   
        return(
                <div className="bg-dark text-white mt-4" style={{"border":"7px solid gray","width":"600px","height":"350px","borderRadius":"10PX"}}>
                    
                            <div style={{"marginLeft":"130px","marginTop":"50px"}}>
                            <dl>
                                <h1><span className='bi bi-person-fill text-primary'>User Login</span></h1>
                                <dt className="text-danger">User Name</dt>
                                
                                <dd><input type="text" className='form-control w-75 ' placeholder='User Name' name="user"id="Myinput"/></dd>
                              
                                <dt className="text-danger">Password</dt>
                                <dd><input type="password" className='form-control w-75' placeholder='Password' name="password" id="Mypassword"/></dd>
                                
                                <span>
                                <button className="btn btn-primary"  onClick={loginclick}>Login</button>&nbsp;&nbsp; 
                                <button className="btn btn-danger "style={{"marginLeft":"175px"}} onClick={Tosignup} >New User</button>
                                
                                </span>
                            </dl>
                            </div>
                  
                    
                </div>
        );

}


                    