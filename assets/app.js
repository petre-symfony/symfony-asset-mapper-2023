import Vinyl from './lib/vinyl.js'
import _ from 'lodash'

const mix = new Vinyl('Awesome Mix Vol. 1', 2014);

console.log(_.camelCase(mix.describe()));