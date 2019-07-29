const imports = {
  rand: Math.random,
}

const privates = {
  get messages() {
    return [
      'I love deadlines. I love the whooshing noise they make as they go by',
      'My other car is a cdr',
      'The face of a child can say it all, especially the mouth part of the face',
    ]
  }
}

module.exports = {
  inspireUs: function(
    { rand } = imports,
    { messages } = privates
  ) {
    return messages[Math.floor(rand() * messages.length)]
  }
}

if (process.env.TESTING) {
    module.exports = {
        ...module.exports,
        imports,
        privates,
    }
}
