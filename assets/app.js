import Vinyl from './lib/vinyl.js'
import { camelCase} from 'lodash'

const mix = new Vinyl('Awesome Mix Vol. 1', 2014);

console.log(camelCase(mix.describe()));