
import { Outlet } from 'react-router'
import './App.css'
import Header from './Layout/Component/Header'
import Footer from './Layout/Component/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
