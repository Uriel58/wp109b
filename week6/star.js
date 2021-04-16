function star(n) {
    for (var i=0; i<n; i++)
      console.log('*')
}
  
star(5)

function between(a,b)
{
    for(var i=a;i<=b;i++)
       console.log(i)
}

between(3,8)

function isPrime(n) {
  if (n===1) return false
  for (var i=2; i<n; i++)
    if (n%i===0) return false
  return true
}

function primeBetween(a,b){
  for (var i = a; i <=b ; i++) {
    if (isPrime(i))
      console.log(i)
  }
}

primeBetween(3, 15)
