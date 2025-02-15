var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }
    let result = functions[functions.length - 1](x);
    for (let i = functions.length - 2; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

// compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1);

var argumentsLength = function (...args) {
  return args.length;
};

var once = function (fn) {
  let calledOnce = false;
  return function (...args) {
    if (calledOnce) {
      return undefined;
    } else {
      if (args.length > 0) {
        calledOnce = true;
        return fn(...args);
      }
    }
  };
};

var sum = function (a, b, c) {
  return a + b + c;
};

var multiply = function (a, b, c) {
  return a * b * c;
};

let mul = once(multiply);
console.log(once(sum)(2, 3, 4));
console.log(mul(2, 3, 4));
console.log(mul(2, 3, 4));

// Memoize
