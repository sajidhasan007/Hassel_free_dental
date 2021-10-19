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
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Technology from './Pages/Technology/Technology';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="">
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

            <PrivateRoute path='/destists'>
              <Dentists></Dentists>
            </PrivateRoute>

            <PrivateRoute path='/dentist/:dentistId'>
              <Dentist></Dentist>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/service/:serviceId'>
              <Service></Service>
            </PrivateRoute>

            <Route path='/about'>
              <About></About>
            </Route>

            <PrivateRoute path='/technology'>
              <Technology></Technology>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
