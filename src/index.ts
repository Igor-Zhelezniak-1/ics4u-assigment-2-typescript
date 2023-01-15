/**
 * The programm
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-10-06
 */
import promptSync from 'prompt-sync'

const prompt = promptSync()

function vowelCount(string: string): number {
  const vowelList = 'aeiouyAEIOUY'
  let count = 0
  const length = string.length

  for (let loop = 0; loop < length; loop++) {
    if (vowelList.includes(string[loop])) {
      count += 1
    }
  }
  return count
}
const string = prompt('Enter a string: ')
try {
  const count = vowelCount(string)
  console.log(`The max run of ${string} is ${count}`)
} catch (e) {
  const result = (e as Error).message
  console.log('ERROR:' + result)
}

console.log('Done.')

