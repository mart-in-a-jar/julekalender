function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
    }
    return num > 1;
  }
  
  let primeCnt = 0;
  for(let t = 0; t < 100000000; t++) {
     let sum = 0;
     for(c of ('' + t)) {
       sum += parseInt(c);
     }
     if((t % sum) === 0 && isPrime(t/sum)) {
        primeCnt++;
     }
  }
  
  console.log("Primes: " + primeCnt);