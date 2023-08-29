


 export default  function HeadComponent(){
    return(
        <>
         <div className='header d-flex justify-content-between'>
            <div>
                <img src="./logo-dark.png" alt="mirapaki logo"/>
            </div>
            
                
                <div>
                <select class="form-select w-100 mt-3 btn btn-outline-dark me-4" >
                    <option  className="me-4">Our Clients</option>
                    <option value="">HDFC</option>
                    <option value="">NPWD</option>
                    <option value="">ADHAR</option>
                </select>
                </div>
                <div className='mt-4 na'><a href="#platform">PLATFORM</a></div>
                <div className='mt-4'><a href="#carrier">CARRIER</a></div>
                <div className='mt-4 text-white '><a href="#aboutus">ABOUT US</a></div>
          <div>
                <button className='btn btn-primary mt-3'><span class=" bi bi-search"></span>Search</button>&nbsp;&nbsp; 
                <button className='btn btn-primary mt-3'><span className='bi bi-headset'>Contact</span></button>
          </div>
            
               

        </div>
        <div className='bg-warning text-black mt-4 aim'  >
                <marquee scrollamount="10" behavior="alternate">
                    <h3><span className='bi bi-lightning-charge-fill text-white '></span>The future of AI-Our motive bring india to global<span className='bi bi-lightning-charge-fill text-white'></span> </h3>
                </marquee>
        </div>
        </>
    )
 }