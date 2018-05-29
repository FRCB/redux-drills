import { createStore } from 'redux';
import reducer from './ducks/guestList';

export default function createStore(reducer);