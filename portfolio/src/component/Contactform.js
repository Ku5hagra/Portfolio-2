import React, { Component } from 'react'
import { Zoom } from "react-awesome-reveal";




export default class Contactform extends Component {

constructor(){
       super();
       this.state={
        name:"",
        email:"",
        description:"",
        submitmessage:"",
        submitmsgcolor:"",
       };
    }
    onNameChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const{name}=this.state;
        let issuccess = true;
        if(issuccess){
            this.setState({
                submitmessage:`Thank you ${name} for contacting, I will reach you soon. `,
                submitmsgcolor:"lightgreen"
            })
        }
        else{
            this.setState({
                submitmessage:`Oops!! server is facing some issue :(  try again later! `,
                submitmsgcolor:"red"
            })
        } this.clear();
        
    }
    clear(){
        document.getElementById("form").reset();
    }




    componentDidMount(){
        console.log("it did mount");
    }
    componentWillUnmount(){
        console.log("it will unmount");
    }
    // componentDidUpdate(){
    //     console.log("update");
    // }



  render() {
    console.log("rendered");

    
    const{submitmessage,submitmsgcolor}=this.state;
    return (
        
      <div className='container-fluid contact py-5'>
        <Zoom><h1 className='font-weight-light text-light text-center pt-5 mb-0 '><span style={{color:"lightgreen"}}>Thank you! </span>for showing interest</h1><br /><br /><br />
        <div className='row justify-content-center '>
            
            <div className='col-11 col-md-4 mt-0'>
            <form className='' id="form" onSubmit={this.onSubmit}>
            <div className='form-group text-light '>
            <label htmlFor="n"><h4 className=' font-weight-light'>Name *</h4></label><br />
            <input
            required
            onChange={this.onNameChange}
            className='form-control'
            name="name"
            id='n'
            type="text" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="e"><h4 className=' font-weight-light'>Email-id *</h4></label><br />
            <input 
            onChange={this.onNameChange}
            required
            className='form-control'
            name="email-id" 
            id='e'
            type="email" />
            </div>
            <div className='form-group text-light'>
            <label htmlFor="d"><h4 className=' font-weight-light'>What do you want to talk about:</h4></label><br />
            <textarea
            onChange={this.onNameChange}
            className='form-control'
            name="description"
            id='d' 
            cols="40" rows="5" placeholder='You can tell me about your project'></textarea>
            </div>
            <div className='form-group text-center pt-3'>
                <button 
                type='submit'
                id='submitbutton'
                className='btn btn-outline-light btn-secondary text-light'
                name="submitbutton"> let's talk</button>
            </div>
            </form>
            
            </div>
            <div  className='col-12 text-center'>
                <h5 style={{color:submitmsgcolor}}>{submitmessage}</h5>
            </div>
           </div></Zoom>
      </div>
    )
  }
}
