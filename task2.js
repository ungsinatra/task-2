
  const xMarksTheSpot = (input) => {  
	let QuatX = 0;
	let a;
	
	for (let i = 0; i < input.length; i++) {
	  let z = input[i];
	  for (let k = 0; k < z.length; k++) {
		if (z[k].includes("x")) {
		  QuatX += 1;
  
		  a = [+`${i}`, +`${k}`];
		  
		} else if (!z[k].includes("x")) {
		  continue;
		}
		
	  }
	}
	if(QuatX>1){
	  a =[]
	}
	if(a===undefined){
	  a=[]
	}
  
  
	return a;
	}