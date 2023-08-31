const fibonacci = function(fibIndex) {
    if (fibIndex < 0) return 'OOPS';

    let fibSequence = [0, 1];

    for (let i = 2; i < fibIndex + 1; i++) {
        fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1]; 
    }

    return fibSequence[fibIndex];
};

// Do not edit below this line
module.exports = fibonacci;
