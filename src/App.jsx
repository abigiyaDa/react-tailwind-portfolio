import { BrowserRouter, Routes,Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          {/* we will have 2 routes 1, for main page  
          2,for anyother page which will result into a component called the not found page
          */}
          <Route index element={<Home />}/>
          <Route path ="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
