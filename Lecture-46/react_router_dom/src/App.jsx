
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
export default  function App() {
  let navigate = useNavigate()
  function handleLanding(){
    // window.location.href = "/";
    navigate('/')
  }
  function handleDashboard(){
    // window.location.href = "/dashboard";
    navigate('/dashboard');
  }
  return (
    <div>
      <navbar>
        {/* <a href="/">landing</a>
        <a href="/dashboard">dashboard</a> */}
      <button onClick={handleLanding}>Landing</button> 
      <button onClick={handleDashboard}>Dashboard</button>
      </navbar>
      
      <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


    </div>
    
  )
}

