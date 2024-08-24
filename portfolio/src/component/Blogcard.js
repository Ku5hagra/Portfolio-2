import React from 'react'
import {Link} from "react-router-dom"

function Blogcard(props) {
    const {id,title,description,imageurl}=props.blog;
  return (
    
    <div className="card  h-100">
        
        <img className="card-img-top" style={{height:"250px"}} src={imageurl} alt=""/>
        <div className="card-body">
        <h4 className="card-title text-center font-weight-light">{title}</h4>
        <Link to={`blog/${id}`} onClick={()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}} className="stretched-link"></Link>
        <p className="card-text text-center">{description}</p>
        </div>
        
    </div>

  );
}
export default Blogcard;