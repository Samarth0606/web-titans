import React, { Suspense } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
// import Admin from './components/Admin'
// import Product from './components/Product'

let Admin = React.lazy(()=>import('./components/Admin'))
let Product = React.lazy(()=>import('./components/Product'))

export default function App() {

  let navigate = useNavigate()
  function handleClickAdmin(){
    navigate('/admin')
  }
  function handleClickProduct(){
    navigate('/products')
  }

  return (
    <div>
      <Routes>
        <Route path='/admin' element={ <Suspense fallback="loading...1"> <Admin/> </Suspense> }  />
        <Route path='/products' element={ <Suspense fallback="loading...2"> <Product/> </Suspense>  }  />
      </Routes>
      <div>
        <ul>
          <li> <Link to="/admin" >visit admin</Link> </li>
          <li> <Link to="/products" >visit products</Link> </li>
        </ul>
        <button onClick={handleClickAdmin}>admin</button>
        <button onClick={handleClickProduct}>product</button>
      </div>
    </div>
  )
}
