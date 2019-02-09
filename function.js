export function hero(obj) { 		
	if (obj.health > 50) {
		return `healthy`;
	}
	else if (obj.health > 15) {
		return `wounded`;
	}
	else {
		return `critical`;
  } 
};