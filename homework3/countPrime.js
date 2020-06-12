a=3,b=7,c=0;

function isPrime(n) {
    for (var i=2; i<n; i++) {
      if (n%i === 0)
        return false;
    }
    return true;
  }

  for (var p=a; p<=b; p++) {
    if (isPrime(p))
     c=c+1;
  }
  console.log("countPrime(%d,%d)=>%d",a,b,c);
  //先參考老師範例，後自己寫出來，已100%理解原理//