import React from 'react'
import Blogcard from './Blogcard';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {v4 as uuid} from "uuid";

 function Blog() {
    return(<Consumer>
        {(value)=>{
            const{blogs}=value;
             return (
    <div className="p-5 container ">
    <h1 style={{color: "black"}} className=" text-center ">My <span style={{color:"navy"}}> blogs</span></h1>
    <p className="font-weight-light text-center text-light">Catch-up the latest blogs</p>
        <div className="row">
                {
                blogs.slice(0,3).map((blog)=>(
                 <div key={uuid()} className="col-12 col-md-4 pt-2">
                    <Blogcard
                    blog={blog}
                    />
                </div>     
                ))
                }
        </div>
        <div className="mt-5">
            <Link className="text-light text-decoration-none text-right" to="/blogpage" onClick={()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}><h5>See all blogs →</h5></Link>
        </div>
</div>

  )
        }

        }
    </Consumer>);
    
 
}
export default Blog;