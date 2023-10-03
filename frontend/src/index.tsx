/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';

import type { Backend } from '../../backend/main';
import { edenTreaty } from '@elysiajs/eden';
const api = edenTreaty<Backend>('http://localhost:3000');

const root = document.getElementById('root');

render(() => <App />, root!);
