function factors(num) {
if (typeof num !== "number") {
  console.log(`enter valid number.`);
  return;
    }

    console.log(`factors of ${num} are :- `)
    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            console.log(i);
        }
    }
    return;
    
}

factors(9);
factors(90);
factors(87);
factors("44")
factors(31);