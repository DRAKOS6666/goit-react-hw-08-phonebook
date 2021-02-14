import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import App from 'components/App/App';
import Loader from 'components/Loader/Loader';

import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <PersistGate loading={<Loader />} persistor={store.persistor}>
      <Provider store={store.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
