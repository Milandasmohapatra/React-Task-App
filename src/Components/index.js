import './index.css';
import Indexfooter from './indexfooter';
import'./indexfooter.css';


import { BrowserRouter as Switch,Routes,Route,Link, BrowserRouter } from "react-router-dom";
import HomeComponent from './Home';
import LoginComponent from './login';

import SignupComponent from './signup';
import Welcomecomponenet from './welcome';
import AsideComponent from './Aside';
import HeadComponent from './head';
import ContactComponent from './contact';


export default function IndexComponent(){
   return(
   <>
    <div className="indexcomponent container-fluid">
        <HeadComponent/>
        <section className='mt-3 row'>
        <BrowserRouter>
            <nav className='col-3 nav-item'>
            <div>
            <Link  to="/login" ><button className='btn btn-primary mt-3 w-75'>Login</button></Link>
            </div>
            <div>
            <Link  to="/signup"><button className='btn btn-primary mt-3 w-75'>Signup</button></Link>
            </div>
            <div>
            <Link  to="/home" className='bg-white mt-3 w-75'>HOME</Link>
            </div>
            <div>
            <Link  to="/history" className='bg-white mt-3 w-75'><button className='btn btn-primary mt-3 w-75'>History</button></Link>
            </div>
            <div>
            
            <a href="https://mirakitech.com/"> <img src="../mainlogo.jpg" alt=" main logo" style={{"width":"400px","marginLeft":"-75px"}} className='mt-4 ' /> <div><button className='btn btn-primary  w-75'>Click img visit site</button></div></a>
            </div>
            </nav>   
            
               
              
            <main className='col-7'>
            
                    <Routes>
                            <Route path="/" element={<Welcomecomponenet/>}/>   
                            <Route path="login" element={<LoginComponent/>}/>
                            <Route path="signup" element={<SignupComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="history" element={<ContactComponent/>}/>          
                    </Routes>
            </main>
            <aside style={{"border":"2px solid white"}} className='col-2'>
            <AsideComponent/>
            </aside>  
        </BrowserRouter>
        </section>
        <Indexfooter/>
          
    </div>
   </>
   )
   
    
                        }