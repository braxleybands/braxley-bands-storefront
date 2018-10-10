import 'core-js/es6/string'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/app.css'
import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'bfa04f5ccdc958673fb8c44cc7a8e2a1',
  domain: 'braxley.myshopify.com'
})

ReactDOM.render(
  <App client={client}/>, document.getElementById('root')
);

if (module.hot) {
	module.hot.accept()
}