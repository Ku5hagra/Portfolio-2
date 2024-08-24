import React from "react";
import {Link} from "react-router-dom";
function Footer(){
    return(
        
<footer>
     <div className="container-fluid" style={{backgroundColor: "black"}}>
       
        
             <h4 className="text-light text-center pt-5">Do you want to work with me?</h4>
             <div className="text-center">
                <Link 
                    onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                    to="/contact">
                    <button className="btn btn-outline-light btn-md " >let's talk</button>
                </Link></div>
             

     
        <div className="row " >
            
            <div className="col-12 col-md-4  text-center pt-3">
                <h5 className="text-light">More Links</h5>
              <Link onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="d-block text-decoration-none" to="/blogpage">Blogs</Link>
              <Link onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="d-block text-decoration-none" to="/">Home</Link>
              <Link onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="d-block text-decoration-none" to="/contact"  >Contact me</Link>
              <Link onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="d-block text-decoration-none" to="/recommend"  >Write a review</Link>              
            </div>
            
            <div className="col-12 col-md-4 pt-3 ">
                <p className="text-light text-justify">
                    Thank you visitor ! for taking a look at my portfolio,
                    I hope you liked it .  
                    it would be so nice of you if you take a part of your time and
                    give your review in the 'write a review' section and
                    contact me via the contact button to stay in touch. 


                </p>
            </div>
            
            <div className="col-12 col-md-4  text-center pt-3 ">
                <h5 className="text-light">Socials</h5>
                <a href=""><i className="bi-linkedin text-light h6 d-block"></i></a>
                <a href=""><i  className="bi-github text-light h6 d-block"></i></a>
                <a href=""><i  className="bi-envelope text-light h6 d-block"></i></a>
            </div>
        </div>

      
        <div className="row text-muted " >
            
            <div className="col-12 text-center ">
             <p>Kushagra Agrawal copyright © 2023</p>
            </div>
        </div>
    </div>
</footer>
    );
}
export default Footer;