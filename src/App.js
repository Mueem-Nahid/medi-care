import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import GetTheService from './Pages/GetTheService/GetTheService';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import ShowDetails from './Pages/Services/ShowDetails/ShowDetails';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/service/:serviceId">
          <ShowDetails></ShowDetails>
        </PrivateRoute>
        <PrivateRoute path="/get-the-service">
          <GetTheService></GetTheService>
        </PrivateRoute>
        <Route exact path="/about-us">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
