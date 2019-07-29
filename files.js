  // NOTE: this is a bit goofy; is there a better way for multiple and more complex/processed imports?
const imports = {
  ...({ existsSync, readdirSync} = require('fs')),
  join: require('path').join, // we consider this stateful because of OS dependent behavior
  ask: require('./clio').ask,
}

const privates = {
  findFileIn: function(
    dir,
    str,
    { readdirSync, join } = imports
  ) {
    const files = readdirSync(dir)
    for (let file of files) {
      if (file.includes(str)) {
        return join(dir, file)
      }
    }
    return null // TODO(tonyhoare): muahaha sorry, just hacking a fast example
  },
}

module.exports = {
  askAndWeShallFind: async function(
    { ask } = imports,
    { findFileIn } = privates
  ) {
    const dir = await ask('What directory would you like to search in?')
    const str = await ask('What string would you like to search filenames for?')
    return findFileIn(dir, str)
  },
}

if (process.env.TESTING) {
    module.exports = {
        ...module.exports,
        imports,
        privates,
    }
}
