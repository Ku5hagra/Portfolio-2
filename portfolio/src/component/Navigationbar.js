import React from "react";
import {Link} from "react-router-dom";
function Navigationbar(){
//     const customizestyle={
// textDecoration:none,
//     }
    return(  <nav className="navbar fixed-top navbar-expand-md">
    <div className="container">
        <Link  className="nav-brand text-decoration-none font-weight-light nohover" onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'});}} to="/"><h3>Kushagra Agrawal</h3></Link> 
        <div className="ml-auto"><Link to="/contact"><button onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="btn btn-outline-light btn-md">
           Contact
        </button></Link> </div>
         
        <button className="navbar-toggler btn btn-outline-light btn-md ml-1"
                data-toggle="collapse"
                data-target="#collapseNav" >
            <span className="bi-list "></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav" >
              <a href="https://drive.google.com/file/d/1Pp4P_fe1qKvqANDKtQd1qDudLg51nf-g/view?usp=sharing" className="nav-item nav-link  text-light pl-3">
                CV download
               </a> 
               <Link onClick={()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}} to="/certification" className="nav-item nav-link  text-light pl-3">
                Certifications
               </Link> 
               <Link onClick={()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}} to="/projectpage" className="nav-item nav-link  text-light pl-3">
                Projects
               </Link>
               <Link onClick={()=>{window.scrollTo({top: 0, left: 0, behavior:'smooth'})}} to="/recommend" className="nav-item nav-link  text-light pl-3">
                Review
              </Link> 
           </div>
        </div>
    </div>
</nav>);
}

export default Navigationbar;