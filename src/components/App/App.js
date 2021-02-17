import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authOperations } from 'redux/auth';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader/Loader';

import 'views/Home/Home.scss';
import './App.scss';
import NavTabs from 'components/NavTabs/NavTabs';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <NavTabs />
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
