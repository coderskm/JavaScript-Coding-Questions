function SOE(n) {
  if (typeof n !== "number") {
    console.log(`enter valid number.`);
    return;
  }

  let primeNumberArr = new Array(n + 1).fill(1);
  for (let i = 2; i * i <= n; i++) {
    if (primeNumberArr[i] === 1) {
      for (let j = 2 * i; j <= n; j += i) {
        primeNumberArr[j] = 0;
      }
    }
  }

  console.log(`all prime numbers till ${n} :- `);
  for (let i = 2; i < n; i++) {
    if (primeNumberArr[i] === 1) {
      console.log(i);
    }
  }
}

SOE(90);
SOE("700");
SOE(20);
