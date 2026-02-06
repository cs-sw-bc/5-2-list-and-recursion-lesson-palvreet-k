// Exponential(power)

function power(val, pow){
    console.log("Power:", pow);
    if(pow==0){
        return 1;
    }
    return val*power(val, pow-1); // 2x 2^5
}
console.log(power(2,5));

// Factorial

function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(6));

// Sum of digits

function sum(n){
    console.log("N at this point is", n);
    if(n==1){
        return 1;
    }
    return n+sum(n-1);
}
console.log(sum(6));
