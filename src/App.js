import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddService from './components/AddService/AddService'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Bookings from './components/Bookings/Bookings';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Bookings />
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute exact path="/allBookings">
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddService />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
