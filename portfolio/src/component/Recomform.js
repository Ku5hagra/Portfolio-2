import React, { Component } from 'react'
import { Consumer } from '../Context';
import {v4 as uuid} from "uuid";
import axios from 'axios';
import { Zoom } from "react-awesome-reveal";
export default class Recomform extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            company:"",
            designation:"",
            recommendation:"",
            submitmessage:"",
            submitmsgcolor:"",
        }
    }

    onNameChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
}
    onSubmit= async (AddingElement,event)=>{
        event.preventDefault();
        const NewElement={
       
        id:uuid(),
        email:this.state.email,
        company:this.state.company,
        designation:this.state.designation,
        recommendation:this.state.recommendation,
    }

        const response= await axios.post("http://127.0.0.1:9000/api/recommendation", NewElement)
        const issuccess=response.data.issuccessful;
        const {name}=this.state;
        if(issuccess){
            this.setState({
                submitmessage:`Thank you! ${name} your review will help other visitors.`,
                submitmsgcolor:"lightgreen",
            })
        }
        else{
            this.setState({
                submitmessage:`Oops!! server is facing some issue :(  try again later! `,
                submitmsgcolor:"red",
        })
    }
    
    AddingElement("recom",NewElement);
    
    this.clear();}
    clear=()=>{
        document.getElementById("form").reset();

    }
  render() {
    return(<Consumer>
        {(value)=>{
          const{submitmessage,submitmsgcolor}=this.state;
          const{AddingElement}=value;
    return (
        <div className='container-fluid review py-5'>
            <Zoom>
        <h1 className='font-weight-light text-light text-center pt-5 mb-0'><span style={{color:"lightgreen"}}>Thank you! </span>for giving your time</h1><br /><br /><br />
        <div className='row justify-content-center'>
            <div className='col-11 col-md-4 mt-0'>
            <form className="form1" name='form1' id="form"  onSubmit={this.onSubmit.bind(this,AddingElement)}>
            <div className='form-group text-light '>
            <label htmlFor="a"><h4 className=' font-weight-light'>Name *</h4></label><br />
            <input
            required
            onChange={this.onNameChange}
            className='form-control'
            name="name"
            id='a' 
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="b"><h4 className=' font-weight-light'>Email-id *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            required
            className='form-control'
            name="email-id"
            id='b' 
            type="email" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="c"><h4 className=' font-weight-light'>Company/Organisation *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            required
            className='form-control'
            name="company"
            id='c'  
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="d"><h4 className=' font-weight-light'>Designation *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            required
            className='form-control'
            name="designation"
            id='d'  
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="e"><h4 className=' font-weight-light'>Review *</h4></label><br />
            <textarea
            onChange={this.onNameChange}
            className='form-control'
            name="recommendation"
            id='e'
            cols="40" rows="8" placeholder='You can tell others what you like about this portfolio'></textarea>
            </div>
            <div className='form-group text-center pt-3'>
                <button
                type='submit'
                id='submitbutton'
                className='btn btn-outline-light btn-secondary '
                name="submitbutton"> Submit </button>
            </div>
            </form>
            
            </div>
            <div className='col-12 text-center'>
                <h5 style={{color:submitmsgcolor}}>{submitmessage}</h5>
            </div>
           </div></Zoom>
      </div>
    )   
        }}
    </Consumer>);
    
   
  }
}