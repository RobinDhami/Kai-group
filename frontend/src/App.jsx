import Bundle from "./Components/Bundle"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Maharaja from "./Components/Maharaja";
import Navbar from "./Components/Navbar/navbar"
import Footer from "./Components/footer" 
import SEWA from "./Components/Sewa"
import Volunteer from "./Components/volunteer"
import Events from "./Components/Events"
function App() {
  return (
    <div >
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/sewa" element={<SEWA/>}/>
    
  
    <Route path="/" element={<Bundle/>}/>
    <Route path="/maharaji" element={<Maharaja/>}/>
    <Route path="/volunteer" element={<Volunteer/>}/>
    <Route path="/events" element={<Events/>}/>

    </Routes>
    </BrowserRouter>
    <Footer/>
   
      
    </div>
  )
}

export default App
