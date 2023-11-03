import React,{useState} from 'react'
import "./App.css";

import { Routes, Route } from 'react-router-dom';

import Context from './components/utils/Context';

import Header from './components/Header';
import Body from './components/Body';

const App = () => {


  const[activeSideNav, setActiveSideNav] = useState("Dashboard");

  return (
    <Context.Provider value={{activeSideNav, setActiveSideNav}}>
    <div className='main-container h-[100vh]'>
      <Header/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/dashboard" element={<Body/>}/>
          <Route path="/accounts" element={<Body/>}/>
          <Route path="/payroll" element={<Body/>}/>
          <Route path="/reports" element={<Body/>}/>
          <Route path="/advisor" element={<Body/>}/>
          <Route path="/contacts" element={<Body/>}/>
        </Routes>
    </div>
    </Context.Provider>
  )
}

export default App