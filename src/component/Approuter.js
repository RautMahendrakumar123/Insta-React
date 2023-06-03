import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import ViewPost from '../pages/ViewPost';
import Form from '../pages/Form';

const Approuter = () => {
    return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/post' element={<ViewPost/>}/>
      <Route path='/form' element = {<Form/>}/>
    </Routes>
    </BrowserRouter>
}

export default Approuter
