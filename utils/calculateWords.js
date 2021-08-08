import { regexpOnlyWordsAndSpaces } from '../constants/regexpOnlyWordsAndSpaces.js';

export const calculateWords = str => {
    const objCalcWords = str
        .replace(regexpOnlyWordsAndSpaces, ' ')
        .toLowerCase()
        .split(' ')
        .filter(elem => elem !== '')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .sort()
        .reduce((acc, current) => {
            acc[current] = acc[current] ? acc[current] + 1 : 1;
            return acc;
        }, {});

    const arrCalcWords = Object.entries(objCalcWords)
        .map(element => ({ [element[0]]: element[1] }));

    return [
        ...arrCalcWords,
        { Unique: arrCalcWords.length }
    ];
};
