let n = +prompt('vvedite n', 0);

function factorial(n) {
    return ( n == 1) ? 1 : n *= factorial(n-1);
} 
      
alert( factorial(n) );