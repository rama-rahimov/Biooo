import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Contekst from './components/Contekst/Contekst';
import Basis from './components/Basis/Basis';
import DataChange from './components/Admin/DataChange/DataChange';
import Product from './components/Product/Product';
import Registration from './components/Registration/Registration';
import Basket from './components/Basket/Basket';

function App() {
  return (
  <div style={{display:"flex", width: "100%",justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
  <Router> 
  <Routes>
  <Route path="/" element={<Header />}/>
  <Route path="/contekst" element={<Contekst />}/>
  <Route path="/admin" element={<Basis />}/>
  <Route path="/datachange/:id" element={<DataChange />}/>
  <Route path='/product' element={<Product />} />
  <Route path='/basket' element={<Basket />} />
  <Route path='/registration' element={<Registration />} />
  </Routes>
  </Router>
  </div>
  );
}

export default App;
