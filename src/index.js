import * as _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement('div');

  div.innerText = 'Hello from Webpack3';
  div.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  div.appendChild(myIcon);

  document.body.appendChild(div);
});