function AP(firstTerm, commonDiff, totalTerms) {
    if (typeof firstTerm !== 'number' || typeof commonDiff !== 'number' || typeof totalTerms !== "number") {
        console.log(`enter valid number.`);
        return;
    }

    let term = firstTerm;

    
    console.log("****************** ARITHMETIC PROGRESSION ******************")
    console.log(`first term :- ${firstTerm}`);
    console.log(`common difference :- ${commonDiff}`);
    console.log(`AP till ${totalTerms} terms :- `)
    for (let i = 0; i < totalTerms; i++){
        console.log(term);
        term = term + commonDiff;
    }
}

AP(5, 6, 7);
AP(15, "60", 3);
