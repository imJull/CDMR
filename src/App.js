import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/home/Home';
import { UserAdmin } from './components/userAdmin/UserAdmin';
import { ClientAdmin } from './components/clientAdmin/ClientAdmin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/clientespot' element={<ClientAdmin />}/>
        <Route path='/admin' element={<UserAdmin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
