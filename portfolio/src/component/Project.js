import React from 'react'
import Projectcard from './Projectcard';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {v4 as uuid} from "uuid"

 function Project() {
    return(<Consumer>
        {(value)=>{
            const{projects}=value;
             return (
    <div className="p-5 container reveal">
    <h1 style={{color: "black"}} className=" text-center">My <span style={{color:"purple"}}>projects</span></h1>
    <p style={{color: "white"}} className="font-weight-light text-center ">This are some of my works</p>
        <div className="row">
           
            
                {
                projects.slice(0,3).map((project)=>(
                <div key={uuid()} className="col-12 col-md-4 pt-2">
                   
                   <Projectcard 
                   project={project}
                   />
                </div>
                    
                ))
                }
              
                    
                
            
        </div>
     <div className=" mt-5">
            <Link className="text-light text-decoration-none  text-right" to="/projectpage" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} ><h5>See all projects →</h5></Link>
    </div>
</div>
  )
            }

        }

 </Consumer>);
    

    
    
}
export default Project;