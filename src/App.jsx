import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[dispatch])


  return !loading ? (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <span className="text-green-500 text-lg font-semibold animate-pulse">Loading…</span>
    </div>
  )
  
}

export default App;
