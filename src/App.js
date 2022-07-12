import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/home/Home';
import { UserAdmin } from './components/userAdmin/UserAdmin';
import { ClientAdmin } from './components/clientAdmin/ClientAdmin';
import { ErrorPage } from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/clientespot' element={<ClientAdmin />}/>
        <Route path='/admin' element={<UserAdmin />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
