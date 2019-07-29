const { existsSync, readdirSync } = require('fs')
const { join } = require('path')
const { ask } = require('./clio')

function findFileThatContains(dir, str) {
  {
    const files = readdirSync(dir)
    for (let file of files) {
      if (file.includes(str)) {
        return join(dir, file)
      }
    }
  }
  return null; // TODO(tonyhoare): muahaha sorry, just hacking a fast example
}

async function askAndWeShallFind() {
  const dir = await ask('What directory would you like to search in?')
  const str = await ask('What string would you like to search filenames for?')
  return findFileThatContains(dir, str)
}

module.exports = {
  askAndWeShallFind
}
