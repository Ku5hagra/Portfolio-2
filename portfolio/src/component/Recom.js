import React from 'react'
import Recomcomp from './Recomcomp'
import { Consumer } from '../Context'


export default function Recom() {
    return(<Consumer>{
    (value)=>{
        const{recom}=value;
        console.log(recom)
        return (
<div className="container-fluid pb-5 ">
    <div className="d-flex text-center  v">
        {
            recom.map((rec)=>(
                <div key={rec.id} className="col-12 col-md-4 px-3">
                <Recomcomp
                recprop={rec}/>
                 </div>
            ))
        }
    </div>
</div>   
  );
    }
    }</Consumer>);
   
  
}
