const { promisify } = require('util')
const readline = require('readline')

// Set a custom promisified version of `question` at the proper symbol

async function ask(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question[promisify.custom] = (prompt) => {
    return new Promise(resolve => {
      rl.question(prompt, ans => {
        resolve(ans)
      })
    })
  }
  const response = await promisify(rl.question)(prompt + '\n')
  rl.close()
  return response
}

module.exports = {
  ask,
}
