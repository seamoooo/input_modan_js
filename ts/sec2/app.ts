// alias型 union型などの型定義として利用することができる
type conibable = number | string;
type conibableDescription = 'test' | 'test';

// union型
function combine(input1: conibable, input2: conibable) {
  let result
  if (typeof input1 === 'number' && input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}


const ages = combine(30,26) 
console.log(ages)

const names = combine("max",'anna') 
