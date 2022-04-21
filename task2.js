function xMarksTheSpot(input) {
  let quantityOfX = 0;
  let result;

  for (let i = 0; i < input.length; i++) {
    let resOfcycle = input[i];
    for (let k = 0; k < resOfcycle.length; k++) {
      if (resOfcycle[k].includes("x")) {
        quantityOfX += 1;

        result = [+`${i}`, +`${k}`];
      } else if (!resOfcycle[k].includes("x")) {
        continue;
      }
    }
  }
  if (quantityOfX > 1) {
    result = [];
  } else {
  }
  if (result === undefined) {
    result = [];
  }

  return result;
}
