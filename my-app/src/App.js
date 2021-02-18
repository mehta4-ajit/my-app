import react,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {Switch,Route } from 'react-router-dom'
import Listing from './pages/Listing'
import Add from './pages/Add'
// import Home from '../src/pages/Home'
function App() {
  
  return (

    <>
      <section className="container">
{/* <Header/>
     <ToastContainer/> */}
    <Switch>
      <Route exact path="/" component={Listing}></Route>
      <Route exact path="/add" component={Add}></Route>
    </Switch>
      </section>
    
    </>
  );
}

export default App;
