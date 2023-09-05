
import { useNavigate } from "react-router-dom";






export default function LoginComponent(){
    // function Tosignup(){
    //     Navigate("/signup")
    // }
    const Navigate=useNavigate();
    function loginclick(){
                fetch('../user.json')  
                                   
                .then(response=>response.json())
                .then(users=> {
                    
                   alert("sipu")
                   for(var user of users){
                       var username=document.getElementById("Myinput").value;
                       var password=document.getElementById("Mypassword").value;
                       if(user.username==username && user.password==password){
                              alert("login sucess")
                             
                              Navigate("/home");
                              
                              break;      
                       }
                       alert("sipuuuuuuuuuuuuuu")
                      
                       if(!username && !password){
                           alert("provide your details")
                           return;
                       }
                       else {
                           alert("invalid user");
                           Navigate("/login")
                           return;
                            };
                    }
                });
                  

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
   
   
    
                
               
    
   
        return(
                <div className="bg-dark text-white mt-4" style={{"border":"7px solid gray","width":"600px","height":"350px","borderRadius":"10PX"}}>
                    
                            <div style={{"marginLeft":"130px","marginTop":"50px"}}>
                            <dl>
                                <h1><span className='bi bi-person-fill text-primary'>User Login</span></h1>
                                <dt className="text-danger">User Name</dt>
                                
                                <dd><input type="text" className='form-control w-75' placeholder='User Name' name="user"id="Myinput"/></dd>
                              
                                <dt className="text-danger">Password</dt>
                                <dd><input type="password" className='form-control w-75' placeholder='Password' name="password" id="Mypassword"/></dd>
                                
                                <span>
                                <button className="btn btn-primary w-75"   onClick={loginclick}>Login</button>&nbsp;&nbsp; 
                               
                                
                                </span>
                            </dl>
                            </div>
                  
                    
                </div>
        );

}


                    