import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Header from './components/header';
import About from './components/about';

import Signin from './components/Signin';
import Sevas from './components/Sevas';
import Donations from './components/Donations';
import Online from './components/Online';
import MediaRoom from './components/Mediaroom';
import Support from './components/Support';
import Mainhome from './components/Mainhome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Header/>
       
      <Routes>
        <Route path='/' element={<Mainhome/>} />
        <Route path='signin'  element={<Signin/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='about' element={<About/>} />
        <Route path='sevas' element={<Sevas/>} />
        <Route path='Donations' element={<Donations/>} />
        <Route path='Online' element={<Online/>} />
        <Route path='Mediaroom' element={<MediaRoom/>} />
        <Route path='Support' element={<Support/>} />
        

        </Routes>
        
        

      
      </BrowserRouter>
      
      
       

      
    </div>
  );
}

export default App;
