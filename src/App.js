import {BrowserRouter as Router, Route}from 'react-router-dom';
import { PaginaHome, NavBar,IniciarS,Rutas,Reservas, AcercaC} from './pages';
import './App.css';


function App() {
 
  return(
    <div className="App"> 
      <Router>
        <Route path="/">
          <NavBar/>
        </Route>
        <Route path="/iniciar_sesion" exact>
          <IniciarS/>
        </Route>              
        <Route path="/" exact>
          <PaginaHome/>
        </Route>   
        <Route path="/rutas" exact>
          <Rutas/>
        </Route> 
        <Route path="/reservas" exact>
          <Reservas/>
        </Route> 
        <Route path="/acerca" exact>
          <AcercaC/>
        </Route>           
      </Router>
    </div>
  );

}
export default App;
