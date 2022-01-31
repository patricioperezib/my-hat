
const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(array2D){
      this.field=array2D;
  }
get fi() {
  return this.field;
}pw

static generateField(height,width){
  let array=[];
  for (let n=0; n<height; n++ ){
    array.push([]);
  };
  for (let i=0; i<height ;i++  ){
    for(let j =0 ; j<width ; j++){
      let options = [hole,fieldCharacter,fieldCharacter];
      let randomIndex= Math.floor(Math.random()*3);
      array[i].push(options[randomIndex]);
      }
    }
    array[0][0]='*';
    let randomR=0;
    let randomC=0;
    while (randomR === 0 && randomC === 0 ){randomR= Math.floor(Math.random()*height);
randomC= Math.floor(Math.random()*width);
    };
      array[randomR][randomC]=hat;
  return array;
}

  print(){
    for (let raw=0 ; raw < this.field.length; raw++){
    let r = this.field[raw].join(' ');
    console.log(r);
  }}
  
}

let array= Field.generateField(8,7);
const myField = new Field(array);

/*const myField = new Field([
  ['*', '░', '░'],
  ['░', 'O', 'O'],
  ['░', '^', '░'],
]);
*/

myField.print();
let move = prompt('What is your next move?(R, L, D or U)');

let rp=0;
let cp=0;
let w=0;
let wi=myField.fi[0].length-1;
let hei=myField.fi.length-1;

function examination(a){
    if(a === 'undefined'){
    console.log('You have moved outside the field!!! Sorry. GAME OVER');
    return w=1;
  }
  else if(
    myField.fi[rp][cp]==='O'){
    console.log('You have fallen in a hole!!! Sorry. GAME OVER');
    return w=1;
  }
  else if (myField.fi[rp][cp]==='░'){
     myField.fi[rp][cp]='*';
  myField.print();
  move = prompt('What is your next move?(R, L, D or U)');
  }
  else if (myField.fi[rp][cp]==='^'){
    console.log('CONGRATULATIONS!!!You have found the HAT');
    return w=1;
  }
  else if (myField.fi[rp][cp]==='*'){
    console.log('Not allowed');
    return w=1;
  }
    };




while (w===0){
if (move ==='R'){
  move='';
  cp=cp+1;
    if (cp < 0 || cp > wi ){
      console.log(wi);
    console.log('You are outside the field!');
    w=1;
    break;
  }
  examination(myField.fi[rp][cp]); 
  };
if (move ==='L'){
  move='';
  cp=cp-1;
  if (cp < 0 || cp > wi ){
    console.log('You are outside the field!');
    w=1;
    break;
  }
  examination(myField.fi[rp][cp]); 
  };

if (move ==='D'){
  move='';
  rp=rp+1;
  if (rp < 0 || rp > hei ){
    console.log('You are outside the field!');
    w=1;
    break;
  }
  examination(myField.fi[rp][cp]);
    };
if (move ==='U'){
  move='';
  rp=rp-1;
  if (rp < 0 || rp > hei ){
    console.log('You are outside the field!');
    w=1;
    break;
  }
  examination(myField.fi[rp][cp]);
  }
}

