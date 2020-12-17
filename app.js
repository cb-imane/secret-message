let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'program');
//Change the word easily to the word right 
let index = secretMessage.indexOf('easily')
secretMessage[index] = 'right';

//remove the first string of the array.
secretMessage.shift();
//add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');

// remove the strings get, right, the, first, time,, and replace them with the single string know
secretMessage.splice(6,5, 'know')
console.log(secretMessage.join(' '))

