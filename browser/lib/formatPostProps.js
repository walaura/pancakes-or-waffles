const extras = (unmangledExtras={}) => {
	let extras = [];
	Object.keys(unmangledExtras).map(extra => {
		let style = {};
		if(unmangledExtras[extra] instanceof Array) {
			unmangledExtras[extra].forEach((bit, index)=>{
				extras.push({
					style: {},
					value: bit,
					key: `${extra}-${index}`
				});
			});
		}
		else if(typeof unmangledExtras[extra] === 'object') {
			extras.push({
				style: unmangledExtras[extra].style,
				value: unmangledExtras[extra].value,
				key: extra
			});
		}
		else {
			extras.push({
				style: {},
				value: unmangledExtras[extra],
				key: extra
			});
		}
	});
	return extras;
};

const variant = (variants=[]) => {
	const rt = [];
	variants.map((variant,idx) => {
		rt.push(Math.ceil(Math.random()*variant));
	});
	return rt;
};

export { extras, variant };
