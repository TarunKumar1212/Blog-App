import { Component, useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import {Header,Footer} from './components/index'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap conten-between bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>  
      </div> 
    </div>
  ) :<div>
    Data is Loading
  </div>
}

export default App
