import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/service/:serviceId'>
            <Service></Service>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
