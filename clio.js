const imports = {
  promisify: require('util').promisify,
  createInterface: require('readline').createInterface,
  terminal: false,
}

module.exports = {
  ask: async function(
    query,
    { promisify, createInterface } = imports
  ) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    return new Promise(resolve => {
      rl.question(query + '\n> ', ans => {
        rl.close()
        resolve(ans)
      })
    })
  },
}

if (process.env.TESTING) {
    module.exports = {
        ...module.exports,
        imports,
        privates,
    }
}
