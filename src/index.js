module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketsDict = Object.fromEntries(bracketsConfig);
  
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
  
      if (bracketsDict[currentSymbol] === currentSymbol) {
        if (stack.length !== 0) {
          let lastSymbol = stack[stack.length - 1];
          if (bracketsDict[lastSymbol] === currentSymbol) {
            stack.pop();
          } else {
            stack.push(currentSymbol);
          }
        } else {
          stack.push(currentSymbol);
        }
        continue;
      }
  
      if (Object.keys(bracketsDict).includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let lastSymbol = stack[stack.length - 1];
        if (bracketsDict[lastSymbol] === currentSymbol) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

