import React from 'react';
 
import { BrowserRouter as Router } from 'react-router-dom';
 import { Provider } from 'react-redux';

 import { createRoot } from "react-dom/client";

import App from './App'
import store from './app/store';
 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
          <Provider store={store}>
              <App />
           </Provider>  
      </Router>
)