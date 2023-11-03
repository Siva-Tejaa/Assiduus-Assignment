import React from 'react'
import "./App.css"

import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='main-container h-[100vh]'>
      <Header/>
    </div>
  )
}

export default App