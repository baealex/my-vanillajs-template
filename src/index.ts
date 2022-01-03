import { getGreetContent } from './modules/greet';

const root = document.getElementById('root');

const greet = document.createElement('p');
greet.textContent = getGreetContent();

root.appendChild(greet);