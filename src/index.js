module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if ( bracketsConfig.some( el => el[0] === currentSymbol) ) {
      stack.push(currentSymbol);
      //console.log(stack);
    } else {
      if (stack.length === 0) {
        return false;
      } 
      let lastSymbol = stack[stack.length - 1];
      if ( bracketsConfig.some( el =>  (el[1] === currentSymbol && el[0] === lastSymbol) ) ) {
        stack.pop();
        //console.log(stack);
      } else {
        return false;
      }
      

    }
  }
  //console.log(stack.length);
  return stack.length === 0;
}




const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];