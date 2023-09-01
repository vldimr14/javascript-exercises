const findTheOldest = function(people) {
    return people.reduce((prev, curr) => {
        const date = new Date(Date.now());
        if (prev.yearOfDeath === undefined) {
            prev.yearOfDeath = date.getFullYear();
        } else if (curr.yearOfDeath === undefined) {
            curr.yearOfDeath = date.getFullYear();
        }

        return (prev.yearOfDeath - prev.yearOfBirth) > (curr.yearOfDeath - curr.yearOfBirth) ? prev : curr
    });
};

// Do not edit below this line
module.exports = findTheOldest;
