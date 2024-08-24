import React, { Component } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import {v4 as uuid} from "uuid";
import { Consumer } from '../Context';
import axios from 'axios';

export default class Addblog extends Component {
  state={
        imageurl:"",
        title:"",
        description:"",
        body:"",
        submitmessage:"",
        submitmsgcolor:"",
    }
    onNameChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit= async (AddingElement,event)=>{
        event.preventDefault();
       
        
       const NewElement={
         
          imageurl:this.state.imageurl,
          title:this.state.title,
          description:this.state.description,
          body:this.state.body,
          id:uuid(),
        } 
        
        const response= await axios.post("http://127.0.0.1:9000/api/blog", NewElement)

        const issuccess=response.data.issuccessful;

            if(issuccess){
                this.setState({
                    submitmessage:"Blog published successfully!",
                    submitmsgcolor:"green"})
            }
            else{
                this.setState({
                    submitmessage:"server issue",
                    submitmsgcolor:"red"})
            }
        

        
        AddingElement("blogs",NewElement);
    }
    onBodyChange=(value)=>{
      // const{body}=this.state;
      this.setState({body:value,})
        
    }
   
  render() {
    return(<Consumer>
      {(value)=>{
         const{submitmessage,submitmsgcolor,body,imageurl,title}=this.state;
    const{AddingElement}=value;
    return (
      <div className='container-fluid bg-dark py-5 '>
        <div className="row pl-auto ">
        
           <div className="col-12 col-lg-5">
               <h1 className='font-weight-light text-light text-center pt-5 mb-0 '><span style={{color:"lightgreen"}}>Add </span>Blog</h1><br /><br /><br />
               <div className='justify-content-center '>
           
                  <form className='' id="form" onSubmit={this.onSubmit.bind(this,AddingElement)}>
                    <div className='form-group text-light '>
                       <label htmlFor=""><h4 className=' font-weight-light'>Img-url *</h4></label><br />
                       <input
            
            onChange={this.onNameChange}
            className='form-control'
            name="imageurl"
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor=""><h4 className=' font-weight-light'>Title *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            
            className='form-control'
            name="title" 
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor=""><h4 className=' font-weight-light'>Summary *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            
            className='form-control'
            name="description" 
            type="text" />
            </div>
            <SimpleMDE
            onChange={this.onBodyChange}/>
            <div className='form-group text-center pt-3'>
                <button 
                type='submit'
                
                className='btn btn-outline-light btn-secondary text-light'
                name="submitbutton">Publish</button>
            </div>
            </form>
            </div>
           
                <div className='text-center'>
                   <h5 style={{color:submitmsgcolor}}>{submitmessage}</h5>
                </div> 
           </div>
           <div className="col-0 col-lg-1 p-3 "></div>
               <div className="col-12 bg-dark border border-primary pr-2 mt-3 text-light  col-lg-5 markdown text-center py-5">
                  <img style={{maxWidth:"100%"}} src={imageurl}  />
                  <h1 className='py-2'>{title}</h1>
                  <div id=' form '><ReactMarkdown>{body}</ReactMarkdown></div>
                  
               </div>
        
            </div>
      </div>
    );
      }
      }
    </Consumer>);
    
   
  }
}