import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Dentists from './Pages/Dentists/Dentists';
import Dentist from './Dentist/Dentist';
import AuthProvider from './Firebase/Context/AuthProvider';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/destists'>
              <Dentists></Dentists>
            </Route>

            <Route path='/dentist/:dentistId'>
              <Dentist></Dentist>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/service/:serviceId'>
              <Service></Service>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
