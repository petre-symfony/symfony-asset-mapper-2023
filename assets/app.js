import './bootstrap.js';
import Vinyl from './lib/vinyl'
import camelCase from 'lodash/camelCase'

const mix = new Vinyl('Awesome Mix Vol. 1', 2014);

console.log(camelCase(mix.describe()));