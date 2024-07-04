import './App.css';
import DashBoard from './Components/DashBoard';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react'
function App() {
  return (
    <div >
      <Navbar/>
     <DashBoard />
    </div>
  );
}

export default App;
