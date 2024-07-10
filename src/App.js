import './App.css';
import { Home } from './Modulus/Home';
import { Routes,Route } from 'react-router-dom';
import './Styles/colors.css'
import './Styles/fonts.css'

function App() {
  return (
    <div>
      <Routes>
   <Route path="/" element={<Home />} />
 </Routes>
    </div>
  );
}

export default App;
