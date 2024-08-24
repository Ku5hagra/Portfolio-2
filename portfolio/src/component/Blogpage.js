import React from 'react'
import { Consumer } from '../Context'
import Blogcard from './Blogcard';
import Blog from './Blog';
import { v4 as uuid } from 'uuid';
import { JackInTheBox } from "react-awesome-reveal";


export default function Blogpage() {
    return(<Consumer>
        {(value)=>{
            const{blogs}=value;
            return (
    <div className="p-5 container ">
    <h1 style={{color: "black"}} className=" text-center pt-5 ">My <span style={{color:"navy"}}> blogs</span></h1>
    <p className="font-weight-light text-center pb-5 ">Catch-up the latest blogs</p>
        <div className="row">
                {
                blogs.map((blog)=>(
                 <div key={uuid()} className="col-12 col-md-6 pt-2">
                   <JackInTheBox><Blogcard
                    blog={blog}
                    /></JackInTheBox> 
                </div>     
                ))
                }
        </div>
</div>
  )
        }}
    </Consumer>);
    

  
}
