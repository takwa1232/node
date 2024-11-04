import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
        <a  className="brand" href="index.html">formation</a>
    </div>
    <div>
        <a href="cart.html">cart</a>
        <a href="signin.html">signin</a>
    </div>
</header>
   <main>
   <Routes>
    <Route path='/product/:id' element={<ProductScreen/>}></Route>
    <Route path='/' element={<HomeScreen/>}></Route>
    
   </Routes>
   </main>
    <footer className="row center"> 
        all right reserved

    </footer>

    </div>
    </BrowserRouter>

   );
}


export default App;
