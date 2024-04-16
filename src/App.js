import Header from './components/header/Header.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DataProvider from './components/Context/DataContext.js';
import CartContent from './components/CartContent/CartContent.js';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/cart' element={<CartContent/>} /> 
        </Routes> 
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
