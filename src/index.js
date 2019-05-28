import _ from 'lodash';
import Print from './print.js';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = [
    'Hello', 'webpack'
  ].join(' ');

  element.appendChild(br);
  element.appendChild(button);

  button.onclick = Print(null, 'Hello webpack!');
  
  return element;
}

document.body.appendChild(component());

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      }).catch(err => {
        debugger
      })
  });
}
