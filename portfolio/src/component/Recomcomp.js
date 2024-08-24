import React, { Component } from 'react'
import {Modal} from 'react-bootstrap';

export default class Recomcomp extends Component {
    state = {
        isOpen : false
      };
    
   OnOpen=(event)=>{
    event.preventDefault();
    this.setState({
        isOpen: true
    })
   }

   OnClose=(event)=>{
    this.setState({
        isOpen :false
    })
   }
   render(){
    const{recommendation,company,designation}=this.props.recprop;

    let newrec=recommendation;

    if(recommendation.length>25){
                      newrec=recommendation.slice(0,25)+"...."; 
                    }

    return(
    <div className='py-5'>
        
        <div style={{borderRadius:"50px"}} className="card swipe reco shadow  h-100">
            <div className="card-body">
                <h4 className="card-text font-italic">{newrec}</h4>
                <p className="card-text mb-0 pt-2">{designation} </p>
                <p className="card-text ">{company}</p>
                <a href="" onClick={this.OnOpen}  className='stretched-link'></a>
            </div>
        </div>

    <Modal transparent={true} show={this.state.isOpen} onHide={this.OnClose} >
             <div className="text-center reco pt-5 h-100 " style={{position:"relative"}}>
               <h4 className='pb-2 font-italic' >"{recommendation}"</h4> 
               <button className='btn' onClick={this.OnClose} style={{borderRadius:"20px", position:"absolute",top:"0",right:"0"}}>x</button>
                <p className='mb-0' >{designation} </p>
                <p >{company}</p>
            </div>
        </Modal>

    </div>
    );
}
    
    
}

