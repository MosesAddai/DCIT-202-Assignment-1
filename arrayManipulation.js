// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // square even numbers
        } else {
            return num * 3;   // triple odd numbers
        }
    });
}

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();  // capitalize if even
        } else {
            return str.toLowerCase();  // convert to lowercase if odd
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};

// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

module.exports = {
    createUserProfiles
};