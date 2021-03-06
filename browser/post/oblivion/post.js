import Post from '../_abstract/post.js';

import OblivionDateGetter from '../../getter/less-common/oblivion.js';


class CustomPost extends Post {
	async getMoreProps(post) {
		return {
			extras: await this.buildGetter(OblivionDateGetter).get()
		};
	}
}

export default CustomPost;
