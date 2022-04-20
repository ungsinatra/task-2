Array.prototype.flat = function() {
	const arr = [];
	for (let i = 0; i < this.length; i++) {
	  if (Array.isArray(this[i])) {
		for(let g = 0; g < this[i].length; g++) {
		  arr.push(this[i][g])
		}
	  } else {
		arr.push(this[i])
	  }
	}
	
	return arr
  }
  
  const xMarksTheSpot = (input) => {  
	const str = input.flat().join('');
	const points = [];
	const len = input.length;
	let y = 0;
	
	for(let x = 0; x < str.length; x++) {
	  if (str[x] === 'x') {
		points.push([x - y, y])
	  }
	  
	  if (points.length > 1) {
		return []
	  }
	  
	  if (x === len) {
		y++
	  }
	}
	
	return points.flat();
  }
xMarksTheSpot(['o','x'],['x','o'])