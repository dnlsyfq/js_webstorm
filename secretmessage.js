let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage);

console.log(secretMessage.length);

secretMessage.push('to','Program');

console.log(secretMessage);

secretMessage[secretMessage.indexOf('easily')] = 'right';

secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift('Programming');

secretMessage.splice(secretMessage.indexOf('get'),['get','right','the','first','time'].length,'know');


console.log(secretMessage);

console.log(secretMessage.join(' '));