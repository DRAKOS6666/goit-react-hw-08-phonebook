import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Loader from 'components/Loader/Loader';

import 'views/Home/Home.scss';
import './App.scss';

const Home = lazy(() =>
  import('views/Home/Home' /* webpackChunkName: "Home" */),
);
const Login = lazy(() =>
  import('views/Login/Login' /* webpackChunkName: "Login" */),
);
const Contacts = lazy(() =>
  import('components/Contacts/Contacts' /* webpackChunkName: "Contacts" */),
);
const Register = lazy(() =>
  import('views/Register' /* webpackChunkName: "Register" */),
);

function App() {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);

  return (
    <div className="wrapper">
      <nav className="navBar">{isAuth ? <UserMenu /> : <AuthNav />}</nav>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PublicRoute
            path="/login"
            component={Login}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/register"
            component={Register}
            redirectTo="/"
            restricted
          />
          <PrivateRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/login"
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
