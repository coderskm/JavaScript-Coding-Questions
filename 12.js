function leapYearOrNot(year) {
    if (typeof year !== "number") {
      console.log(`enter valid number.`);
      return;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(`${year} is leap year.`);
        return;
    } else if (year % 400 === 0) {
        console.log(`${year} is leap year.`);
        return;
    } else {
        console.log(`${year} is not a leap year.`);
        return;
    }
}

leapYearOrNot(2025);
leapYearOrNot("2026");
leapYearOrNot("2026");
leapYearOrNot(800);
leapYearOrNot(2020);
