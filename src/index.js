module.exports = function toReadable (number) {
  number = number.toString().split('');
  let val = number.map(Number);

  let result = '';
  var arrayE = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var arrayD = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var arrayT = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayH = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred',
                'seven hundred', 'eight hundred', 'nine hundred'];

  if(val.length === 1){
    for(let i = 0; i < arrayE.length; i++){
      if(val[0] === i){
        result = result + arrayE[i];
      }
    }
  }

  if(val.length === 2 && val[0] === 1){
    for(let i = 0; i < arrayT.length; i++){
      if(val[1] === i){
        result = result + arrayT[i];
      }
    }
  }

  if(val.length === 2 && val[0] != 1){
    for(let i = 0; i < arrayD.length; i++){
      if(val[0] === i){
        result = result + arrayD[i];
      }
    }
    for(let i = 0; i < arrayE.length; i++){
      if(val[1] === i && val[1] != 0){
        result = result + ' ' + arrayE[i];
      }
    }
  }

  if(val.length === 3 && val[1] === 0 && val[2] === 0){
    for(let i = 0; i < arrayH.length; i++){
      if(val[0] === i){
        result = result + arrayH[i];
      }
    }
  }

  if(val.length === 3 && val[1] === 0 && val[2] != 0){
    for(let i = 0; i < arrayH.length; i++){
      if(val[0] === i){
        result = result + arrayH[i] + ' ';
      }
    }

    for(let i = 0; i < arrayE.length; i++){
      if(val[2] === i){
        result = result + arrayE[i];
      }
    }
  }

  if(val.length === 3 && val[1] === 1){
    for(let i = 0; i < arrayH.length; i++){
      if(val[0] === i){
        result = result + arrayH[i] + ' ';
      }
    }

    for(let i = 0; i < arrayT.length; i++){
      if(val[2] === i){
        result = result + arrayT[i];
      }
    }
  }

  if(val.length === 3 && val[1] != 1 && val[1] != 0){
    for(let i = 0; i < arrayH.length; i++){
      if(val[0] === i){
        result = result + arrayH[i] + ' ';
      }
    }

    for(let i = 0; i < arrayD.length; i++){
      if(val[1] === i){
        result = result + arrayD[i];
      }
    }

    for(let i = 0; i < arrayE.length; i++){
      if(val[2] === i && val[2] != 0){
        result = result + ' ' + arrayE[i];
      }
    }
  }

  return result;
}