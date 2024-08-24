import React from 'react'
import { Consumer } from '../Context';
import  ReactMarkdown  from 'react-markdown';

 function SingleProject(props) {
  return (
    <Consumer>
      {(value)=>{
        const{projects}=value;
        const id=props.match.params.id;
        
        const project = projects.find((project) => project.id == id);

        if (!project) {
          return <div>Loading...</div>; // or display an error message
        }
      //  console.log(projects);
        const{title,imageurl,body}=project;
        return( 
          
          <div className='py-5 markdown text-center'>
          <img className='pt-5' style={{ maxWidth: '100%' }} src={imageurl} alt={title} />
          <div className='container py-5 px-2 text-left'>
            <h1 className='py-2'>{title}</h1>
            <div id='text-left form px-2'>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </div>
        </div>
    );
      }}
    </Consumer>
   
  );
}
export default SingleProject;