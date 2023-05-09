import Question from './Question';
import Login from './Login';
import React from 'react';
import './App.css';
import Particles from 'react-particles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   
import Form from './Form';
import Admin from './Admin';
function App() {
  return (
    <Router>
      <div className='badadiv'>
    <Routes>

     <Route path='/' element={<Form/>}></Route>
     <Route path='/Question' element={<Question/>}></Route>
     <Route path='/admin' element={<Admin/>}></Route>
</Routes>
      </div>
</Router>
  );
}
   
export default App;
