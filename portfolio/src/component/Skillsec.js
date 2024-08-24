import React from 'react'
import SkillComp from './SkillComp';
import {v4 as uniqueid} from "uuid";
import { Consumer } from '../Context';

export default function Skillsec() {
    return( <Consumer>
        {(value)=>{
            const{Skills}=value;
          
     let finalrow=[];
    for(let i=0;i<Skills.length/4;i++){
        let rowskill=Skills.slice(i*4,(i+1)*4);
        finalrow.push(<div key={uniqueid()} className="d-flex justify-content-around">
          {rowskill.map((skill)=>(
            <div key={uniqueid()}>
            
               <SkillComp
               skill={skill}/>
            </div>
           ))} </div>
        )
    }
  return (
    
    <div  className="container-fluid p-5 skill reveal">
    <h1 style={{color: "black"}} className="text-center ">Technology <span style={{color:"gold"}}>stack</span></h1>
    <div tabIndex={0} style={{backgroundColor:"white"}} className="rounded techsec mt-5 py-5">
        <div>{finalrow}</div>
    
    </div>
</div>
  )  
        }}
    </Consumer>);
   
   
}
