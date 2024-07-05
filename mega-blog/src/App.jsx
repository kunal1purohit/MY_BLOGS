import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authservice from './appwrite/auth';
import { login,logout } from './store/authslice';
import { Header,Footer } from './comp';


function App() {
  const [loading,setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authservice.getcurrentuser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login(userdata))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setloading(false)
    })
  },[])

  return !loading ? (
 <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full block'>
   <Header/>
   <main>
    Todo : {/* <Outlet/> */}
   </main>
   <Footer/>
  </div>
 </div>
  ) : null
 
}

export default App
