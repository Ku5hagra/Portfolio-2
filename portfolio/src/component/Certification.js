import React from 'react'
import { Zoom } from "react-awesome-reveal";

export default function Certification() {
  return (
    <div className='container-fluid py-5 text-center certification'>    
    {/* <h1 className='pt-5' style={{color:"gold"}}>Certification</h1> */}
        <h4 className='pt-5 pb-4 font-weight-light text-light'>This are some of my certifications</h4>
        <Zoom>
        <div className='row d-flex justify-content-center '>
                <div className='col-8 col-md-4  card shadow-lg bg-dark pt-2 b'>
                        <img style={{maxHeight:"250px"}} className='card-img-top g' src="https://connect-assets.prosple.com/cdn/ff/eRy1G3DfhizeHexRqhoJxmctxkE9prm0dNzRFfsszEI/1643692295/public/2022-02/banner-unschool-893x321-2022.png" alt="" />
                        <div className='card-body text-light'>
                            <h3 className='card-title'>Certification of full-Stack Development</h3>
                            <p className='card-text'>By Unschool</p> 
                        </div>
                    <a className='text-decoration-none stretched-link' href="https://drive.google.com/file/d/1RLQ7iHaE_8Zr1knJJB7FGnSTs-8iUWQ9/view?usp=sharing"></a>
                </div>
        </div>
        </Zoom>
        <Zoom>
        <div className='row d-flex justify-content-center pt-5'>
            
                <div className='col-8 col-md-4 card shadow-lg bg-dark pt-2 b'>
                        <img style={{maxHeight:"250px"}} className='card-img-top bg-light g' src="https://connect-assets.prosple.com/cdn/ff/eRy1G3DfhizeHexRqhoJxmctxkE9prm0dNzRFfsszEI/1643692295/public/2022-02/banner-unschool-893x321-2022.png" alt="" />
                        <div className=' card-body text-light  '>
                            <h3 className='card-title '>Certification of java and python</h3>
                        <p className='card-text'>By Unschool</p> 
                        </div>                      
                    <a className='text-decoration-none stretched-link' href="https://drive.google.com/file/d/1QOzf2YS3jMBmXdcQpccYps_Vwydi3IsM/view?usp=sharing"></a>
                </div>
        </div>
        </Zoom>
        <Zoom>
        <div className='row d-flex justify-content-center pt-5'>
                <div className='col-8 col-md-4  card shadow-lg bg-dark pt-2 b'>
                        <img style={{maxHeight:"250px"}} className='card-img-top g' src="https://cdn.dribbble.com/users/70628/screenshots/1743345/codechef.png" alt="" />
                        <div className='card-body text-light'>
                            <h3 className='card-title'>Certification of python</h3>
                            <p className='card-text'>By CodeChef</p> 
                        </div>
                    <a className='text-decoration-none stretched-link' href="https://www.codechef.com/certificates/public/141a075"></a>
                </div>
        </div>
        </Zoom>
        <Zoom>
        <div className='row d-flex justify-content-center pt-5'>
                <div className='col-8 col-md-4 card shadow-lg bg-dark pt-2 b'>
                        <img style={{maxHeight:"250px"}} className='card-img-top g' src="https://cdn.dribbble.com/users/70628/screenshots/1743345/codechef.png" alt="" />
                        <div className='card-body text-light '>
                            <h3 className='card-title'>Certification of java</h3>
                            <p className='card-text'>By CodeChef</p> 
                        </div>
                    <a className='text-decoration-none stretched-link' href="https://www.codechef.com/certificates/public/d58f11d"></a>
                
        </div> 
        
        </div></Zoom>
    </div>
  );
}
