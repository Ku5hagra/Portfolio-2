import React from 'react'
import {v4 as uniqueid} from "uuid";

function SkillComp(props) {
    const {name,imageurl,totalstar,activestar}=props.skill;
    const star=[];
    for(let i=0;i<totalstar;i++){
        if(i<activestar){
            star.push(<span key={uniqueid()} style={{color: "gold"}}>★</span>);
        }
        else{
            star.push(<span key={uniqueid()} style={{color: "black"}}>★</span>);
        }
       
    }
  return (

         <div  className="text-center">
            <img style={{maxHeight: "80px",maxWidth: "80px" ,overflow:"hidden"}} className="skillimg pt-2 "src={imageurl} alt={name}/>
            <div>{star}</div>
       </div>
  
  );
}
export default SkillComp;