import React from 'react'
import { Login } from './components/Login'

import socketIO from 'socket.io-client';
const socket = socketIO.connect("http://localhost:3000")

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatPage } from './components/ChatPage';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={ <Login socket={socket} /> }></Route>
          <Route path='/chat' element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
