'use strict';

const vowels = new Set('aeıioöuüywh');
const weights = new Map();
weights.set('b', 1);
weights.set('f', 1);
weights.set('p', 1);
weights.set('v', 1);
weights.set('c', 2);
weights.set('g', 2);
weights.set('j', 2);
weights.set('k', 2);
weights.set('q', 2);
weights.set('s', 2);
weights.set('x', 2);
weights.set('z', 2);
weights.set('d', 3);
weights.set('t', 3);
weights.set('l', 4);
weights.set('m', 5);
weights.set('n', 5);
weights.set('r', 6);

const removeVowels = word => {
  let cleanWord = '';

  [...word.toLowerCase()].forEach(f => (cleanWord += !vowels.has(f) ? f : ''));

  return cleanWord;
};

const findSoundex = word => {
  let soundex = '';
  if (!word) return;
  let firstLetter = word[0].toUpperCase();

  [...removeVowels(word)].forEach(f => (soundex += weights.has(f) ? weights.get(f) : ''));

  const removedDublicatesString = [...new Set(soundex)].join('');
  const len = removedDublicatesString.length;

  soundex = `${firstLetter}${removedDublicatesString}${len < 3 ? '0'.repeat(3 - len, '0') : ''}`;

  return `Your soundex value is ${soundex}`;
};

alert(findSoundex(prompt('Enter a word to find soundex value')));
