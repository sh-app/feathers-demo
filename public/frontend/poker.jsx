import React from 'react';
import ReactDOM from 'react-dom';
const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const authentication = require('feathers-authentication/client');
const io = require('socket.io-client');

const socket = io();
export const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({
    storage: window.localStorage
  }));
app.authenticate().then(() => {
    ReactDOM.render(<h1>App goes here</h1>, document.getElementById('app'));
}).catch(error => {
  if(error.code === 401) {
    window.location.href = '/index.html';
  }
  console.error(error);
});
