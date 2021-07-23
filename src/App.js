import './App.css';
import NavBar from './components/navBar/navBar';
import HomePage from './pages/homePage/homePage';
import ShopInventory from './pages/shopInventory/shopInventory';
import LoginPage from './pages/loginLogoutPages/loginPage';
import Footer from './components/footer/footer'
import {BrowserRouter as Router,Route, Switch} from'react-router-dom';

function App() {
  return (
    <div>
      
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
          <Route path = '/' exact component = {HomePage}/>
          <Route path="/store/:storeId" component = {ShopInventory}/>
          <Route path = '/login' exact component = {LoginPage}/>
          </Switch>  
          <Footer/>
        </div>
      </Router>
    </div>
   
  );
}

export default App;
