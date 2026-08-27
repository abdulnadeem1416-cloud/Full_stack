function isprime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isprime(7)); // true
console.log(isprime(10)); // false
