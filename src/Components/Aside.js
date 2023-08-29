


export default function AsideComponent(){
    return(
        <div>
                
                <h4 className='bg-dark text-white'>Our Achivements</h4>
                <marquee scrollamount="7" direction="up"  >
                    <div className="card">
                        <div className="card-img-top">
                            <span className='bi bi-award-fill ms-4  '><img src="./mainlogo.jpg" alt="reward" width="100px"></img><span className='bi bi-award-fill  '></span></span>
                        </div>
                    </div>
                    <div className='card-body mt-4'>
                        <div className='card-title'>
                        We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.
                        +919154904675

                       </div>
                       <div className='card-footer' style={{"marginLeft":"35px"}}>
                        <button className='btn btn-danger mt-4 '>achivements</button>
                       </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-img-top">
                            <span className='bi bi-award-fill ms-4'><img src="./mainlogo.jpg"  alt="reward" width="100px"></img><span className='bi bi-award-fill  '></span></span>
                        </div>
                    </div>
                    <div className='card-body mt-4'>
                        <div className='card-title'>
                        We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.
                        +919154904675

                       </div>
                       <div className='card-footer' style={{"marginLeft":"35px"}}>
                        <button className='btn btn-danger mt-4'>achivements</button>
                       </div>
                    </div>
                
                </marquee>


            
        </div>
    )
}