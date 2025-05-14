import { useState } from 'react'
import './App.css'
import Login from './components/LoginSignUp/Login';
import Signup from './components/LoginSignUp/Signup';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from './components/LoginSignUp/chat';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
