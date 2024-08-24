import React from "react";

import './App.css';
import Navigationbar from "./component/Navigationbar";
import Footer from "./component/Footer";
import Contactform from "./component/Contactform";
import Recomform from "./component/Recomform";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NotFound from "./component/NotFound";
import SingleProject from "./component/SingleProject";
import HomePage from "./component/HomePage";
import Addproject from "./component/Addproject";
import Addblog from "./component/Addblog";
import Singleblog from "./component/Singleblog";
import { Provider } from "./Context";
import Projectpage from "./component/Projectpage";
import Blogpage from "./component/Blogpage";
import Certification from "./component/Certification";


//  this is a functional component
function App() {
  return( 
    <Provider>
    <BrowserRouter>
    <Navigationbar/>

    <Switch>
     <Route exact path="/" >
       < HomePage/>
     </Route>

     <Route exact path="/contact" component={Contactform}/>
 

     <Route exact path="/recommend" component={Recomform}/>
     <Route exact path="/addproject" component={Addproject}/>
     <Route exact path="/addblog" component={Addblog}/>

     <Route exact path="/project/:id" component={SingleProject}/>
     <Route exact path="/blog/:id" component={Singleblog}/>
     <Route exact path="/projectpage" component={Projectpage}/>
     <Route exact path="/blogpage" component={Blogpage}/>
     <Route exact path="/certification" component={Certification}/>
    
      <Route component={NotFound}/>
    </Switch>
   
   
   <Footer/>
   </BrowserRouter>
 </Provider>
  );
}

export default App;

