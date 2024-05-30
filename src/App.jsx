// import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
// import Wishlist from "./pages/wishlist/Wishlist"


function App() {
  

  return (
    <>
    <div className="container">
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes> */}
    </div>
    </>
  )
}

export default App
