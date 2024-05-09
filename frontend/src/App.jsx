import Bundle from "./Components/Bundle"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Maharaja from "./Components/Maharaja";
import Navbar from "./Components/Navbar/navbar"
import Footer from "./Components/footer" 
import SEWA from "./Components/Sewa"
function App() {
  return (
    <div >
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/sewa" element={<SEWA/>}/>
    
  
    <Route path="/" element={<Bundle/>}/>
    <Route path="/maharaji" element={<Maharaja/>}/>
    
    </Routes>
    </BrowserRouter>
    <Footer/>
   
      
    </div>
  )
}

export default App
