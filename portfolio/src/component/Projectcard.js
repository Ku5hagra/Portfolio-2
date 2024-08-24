import React from 'react'
import {Link} from "react-router-dom";

function Projectcard(props) {
    const {id,title,description,imageurl}=props.project;
  return (
    
        <div className="card  h-100 pro">
                    
                    <img className="card-img-top" style={{height:"250px"}} src={imageurl} alt=""/>
                    <div className="card-body">
                      <h4 className="card-title text-center font-weight-light">{title}</h4>
                      <Link
                      onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                      to={`/project/${id}`} className="stretched-link"></Link>
                      <p className="card-text text-center">{description}</p>
                      </div>
                    
                </div>
    
  );
}
export default Projectcard;
