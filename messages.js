const messages = [
  'I love deadlines. I love the whooshing noise they make as they go by.',
  'My other car is a cdr',
  'The face of a child can say it all, especially the mouth part of the face.',
]

function inspireUs() {
  return messages[Math.floor(Math.random() * messages.length)]
}

module.exports = {
  inspireUs
}
