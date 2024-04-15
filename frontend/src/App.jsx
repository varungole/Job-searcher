import './App.css'
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Feed from './components/Feed';
import Navbar from './components/Navbar';
function App() {

  return (
     <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/feed' element={<Feed />}></Route>
      </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
