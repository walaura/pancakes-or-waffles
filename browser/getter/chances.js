import abstractGetter from './abstract/abstract.js';
import {randomNumber} from '../lib/random.js';

export default class ChancesGetter extends abstractGetter {

	constructor(...props) {
		super(...props);
		this.remote = 'data/chances';
	}


	async fetchOnce() {
		return super.fetchOnce().then(chances => {
			Object.keys(chances).forEach(k => {
				const valueAsfloat = parseFloat(chances[k]);
				if(isNaN(valueAsfloat)) throw `Invalid value for chance ${k} on chances.yaml, should be convertable to a float (${this.chances[k]})`;
				chances[k] = valueAsfloat/100;
			});
			return chances;
		});
	}


	async should(chance) {
		const chances = await this.fetch();
		return randomNumber(chance,this._seed) <= chances[chance];
	}

}
